import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTransaction,
  setKeyword,
  setCourier,
  setPrice,
  setDate,
} from "features/Transaction/actions";
import { fetchSetting } from "features/Setting/actions";
import FadeLoader from "react-spinners/FadeLoader";
import Search from "assets/icon/Search";
import Edit from "assets/icon/Edit";
import Print from "assets/icon/Print";
import Trash from "assets/icon/Trash";
import { formatRupiah } from "utils/formatRupiah";
import moment from "moment";
import Modal from "components/Modal";
import { getData, postData } from "utils/fetchData";
import { CgSpinnerAlt } from "react-icons/cg";
import PinInput from "react-pin-input";
import { ToastContainer, toast } from "react-toastify";
import ModalEdit from "./edit";
import Checkbox from "components/Checkbox";
import Minus from "assets/icon/Minus";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./print";

export default function TrasactionPage() {
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.transaction);
  const setting = useSelector((state) => state.setting);
  const [isShowEdit, setIsShowEdit] = React.useState({
    status: false,
    id: "",
    loading: false,
  });
  const [dataEdit, setDataEdit] = React.useState({});
  const [isShowAlert, setIsShowAlert] = React.useState(false);
  const [isShowPin, setIsShowPin] = React.useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = React.useState(false);
  const [isShowFilterCourier, setIsShowFilterCourier] = React.useState(false);
  const [isShowFilterPrice, setIsShowFilterPrice] = React.useState(false);
  const [courier, setFilterCourier] = React.useState([]);
  const [loading, setLoading] = React.useState({
    isRemove: false,
    filterPrice: false,
  });
  let [isShowed, setIsShowed] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const { register, handleSubmit, setValue } = useForm({
    mode: "onBlur",
  });

  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const checkCourier = async () => {
    const res = await getData("couriers");
    let check = [];
    res.data.data.forEach((data) => {
      check.push({
        id: data.id,
        name: data.name,
        isChecked: false,
      });
    });
    setFilterCourier(check);
  };

  const handleFilterCourier = (data) => {
    let cour = [];
    for (let i = 0; i < courier.length; i++) {
      if (courier[i].id === data.id) {
        cour.push({
          ...courier[i],
          isChecked: data.isChecked
            ? (data.isChecked = false)
            : (data.isChecked = true),
        });
      } else {
        cour.push(courier[i]);
      }
    }
    setFilterCourier(cour);
  };

  const handleFinishFilter = () => {
    let filter = [];
    courier.forEach((data) => {
      if (data.isChecked) filter.push(data.id);
    });

    dispatch(setCourier(filter.join(",")));
    setIsShowFilterCourier(false);
  };

  React.useEffect(() => {
    dispatch(fetchTransaction());
  }, [
    dispatch,
    transaction.date,
    transaction.keyword,
    transaction.couriers,
    transaction.priceMin,
    transaction.priceMax,
  ]);

  React.useEffect(() => {
    checkCourier();
    dispatch(fetchSetting());
  }, []);

  if (transaction.status === "idle")
    return (
      <div className="flex items-center justify-center pt-10">
        <FadeLoader color={"#123abc"} />
      </div>
    );

  const handleShowFieldEdit = async (data) => {
    setIsShowEdit({ ...isShowEdit, status: true, id: data.id, loading: true });
    const res = await getData(`transactions/${data.id}`);
    if (res.data.success) {
      setIsShowEdit({ status: true, loading: false, id: data.id });
      setDataEdit(res.data.data);
    }
  };

  const handleShowRemoveTransaction = async () => {
    setIsShowAlert(true);
  };

  const handleRemoveTransaction = async () => {
    if (setting.data.shouldPinDelete) {
      setIsShowPin(true);
    } else {
      const res = await postData(`transactions/${dataEdit.id}/delete`, {});
      if (res.data.success) {
        setIsShowEdit({
          ...isShowEdit,
          status: false,
          id: null,
          loading: false,
        });
        dispatch(fetchTransaction());
        setLoading({ ...loading, isRemove: false });
        notify(`berhasil hapus data transaksi.`);
        setIsShowAlert(false);
      }
    }
  };
  const onComplete = async (value) => {
    try {
      const payload = { pin: value };
      const res = await postData(`transactions/${dataEdit.id}/delete`, payload);
      if (res.data.success) {
        setIsShowEdit({
          ...isShowEdit,
          status: false,
          id: null,
          loading: false,
        });
        dispatch(fetchTransaction());
        setLoading({ ...loading, isRemove: false });
        notify(`berhasil hapus data transaksi.`);
        setIsShowAlert(false);
        setIsShowPin(false);
      }
    } catch (err) {
      if (err.response.data.code === "PIN_INCORRECT") {
        setIsShowAlert(false);
        notifyError("pin yang anda masukan tidak salah.");
      }
    }
  };
  const notify = (data) =>
    toast.success(data, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = (data) =>
    toast.error(data, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onSubmit = async (data) => {
    setIsShowFilterPrice(false);
    setIsShowFilterPrice(false);
    dispatch(setPrice(data.priceMin, data.priceMax));
  };

  return (
    <React.Fragment>
      <ToastContainer />
      {/* START: HEADER */}
      <div className="flex items-center bg-white p-4 shadow-card rounded-lg">
        <div className="grid grid-cols-11 gap-2 w-full">
          <div className="col-span-5  border rounded-lg border-neutral-200 flex items-center pl-5 py-4">
            <Search fill={"#858585"} />
            <input
              type="text"
              name={transaction.keyword}
              onChange={(e) => dispatch(setKeyword(e.target.value))}
              className="bg-transparent focus:outline-none pl-3 text-neutral-300 w-full"
              placeholder="Cari nama, no. resi, atau alamat"
            />
          </div>
          <div
            onClick={() => setIsShowFilterCourier(true)}
            className="col-span-2 border rounded-lg border-neutral-200 py-4 flex items-center justify-center text-neutral-300 cursor-pointer"
          >
            Filter jasa kurir
          </div>
          <div
            className="col-span-2 border rounded-lg border-neutral-200 py-4 flex items-center justify-center text-neutral-300 cursor-pointer"
            onClick={() => setIsShowFilterPrice(true)}
          >
            Filter harga
          </div>
          <div
            className="col-span-2 border rounded-lg border-neutral-200 py-4 flex items-center justify-center text-neutral-300 cursor-pointer"
            onClick={() => setIsShowed(true)}
          >
            Filter tanggal
          </div>
        </div>
      </div>
      {/* END: HEADER */}

      {/* START: LIST TRANSACTION */}
      {/* END: LIST TRANSACTION */}

      <div className="grid grid-cols-11 gap-7 mt-5">
        <div className="col-span-6">
          {transaction.status === "process" ? (
            <div className="flex items-center justify-center pt-10">
              <FadeLoader color={"#123abc"} />
            </div>
          ) : (
            transaction.data.map((data, i) => {
              return (
                <div
                  key={i}
                  onClick={() => handleShowFieldEdit(data)}
                  className={`mb-2 rounded-lg p-6 shadow-card ${
                    data.id === isShowEdit.id
                      ? "bg-blue-300 text-neutral-100"
                      : "bg-neutral-100 text-neutral-400"
                  }  hover:bg-blue-300 duration-200 flex items-center justify-between  hover:text-neutral-100 cursor-pointer`}
                >
                  <div>
                    <p className="text-2-bold">{data.senderName}</p>
                    <p className="text-3 py-1">
                      {moment(data.deliveryDate).format("DD/MM/YYYY")} &sdot;{" "}
                      {data.courier?.name}
                    </p>
                    <p className="text-3">{data.noResi}</p>
                  </div>
                  <p className="text-2-bold">{formatRupiah(data.cost)}</p>
                </div>
              );
            })
          )}
        </div>
        {isShowEdit.status && (
          <div className="col-span-5 shadow-card">
            {/* content right */}
            <div className="bg-white pb-9 border-b-2">
              {isShowEdit.loading ? (
                <div className="flex items-center justify-center pt-10">
                  <FadeLoader color={"#123abc"} />
                </div>
              ) : (
                <ComponentToPrint dataEdit={dataEdit} ref={componentRef} />
              )}
            </div>
            <div className="shadow-card p-4">
              <div className="grid grid-cols-12 gap-2">
                <div
                  className="col-span-4"
                  onClick={() => setIsShowModalEdit(true)}
                >
                  <button className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer focus:outline-none">
                    <Edit fill={"#3C60CD"} />
                  </button>
                </div>
                <div className="col-span-4" onClick={handlePrint}>
                  <button className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer focus:outline-none">
                    <Print fill={"#3C60CD"} />
                  </button>
                </div>
                <div className="col-span-4">
                  <button
                    onClick={handleShowRemoveTransaction}
                    className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer focus:outline-none"
                  >
                    <Trash fill={"#3C60CD"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isShowAlert && (
          <Modal
            onClick={() => setIsShowAlert(false)}
            content={
              <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="border b-2 text-center text-1-bold py-4">
                  Batal tambah transaksi?
                </p>
                <div className="p-6">
                  <p className="text-center text-2 text-neutral-500">
                    Apakah Anda yakin ingin hapus transaksi? Semua data yang
                    telah dicatat akan hilang dan tidak bisa dikembalikan lagi
                    jika Anda lanjut untuk hapus.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-1 px-3 pb-3 border-t-2 pt-3">
                  <div className="col-span-1">
                    <button
                      onClick={() => setIsShowAlert(false)}
                      className="text-center bg-white text-blue-300 border border-blue-300 rounded-lg  w-full py-4 focus:outline-none"
                    >
                      Kembali
                    </button>
                  </div>
                  <div
                    className="flex"
                    onClick={() => handleRemoveTransaction()}
                  >
                    <button className="justify-center items-center flex text-center bg-red-300 rounded-lg text-white w-full py-4 focus:outline-none">
                      {loading.isRemove && (
                        <div className={`animate-spin`}>
                          <CgSpinnerAlt />
                        </div>
                      )}{" "}
                      Hapus transaksi
                    </button>
                  </div>
                </div>
              </div>
            }
          />
        )}
      </div>

      {isShowPin && (
        <Modal
          onClick={() => setIsShowPin(false)}
          content={
            <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Konfirmasi PIN
              </p>
              <div className="p-6">
                <p className="text-center text-2 text-neutral-500">
                  Masukkan PIN untuk konfirmasi hapus transaksi
                </p>
                <div className="flex items-center justify-center">
                  <PinInput
                    focus
                    length={6}
                    secret
                    type="numeric"
                    inputMode="number"
                    style={{ padding: "10px" }}
                    inputStyle={{ borderColor: "gray" }}
                    inputFocusStyle={{ borderColor: "blue" }}
                    onComplete={onComplete}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-1 px-3 pb-3 border-t-2 pt-3">
                <div className="col-span-1">
                  <button
                    onClick={() => setIsShowPin(false)}
                    className="text-center bg-white text-blue-300 border border-blue-300 rounded-lg w-full py-4 focus:outline-none"
                  >
                    Kembali
                  </button>
                </div>
                <div className="col-span-1">
                  <button className="justify-center items-center flex text-center bg-red-300 rounded-lg text-white w-full py-4 focus:outline-none">
                    {loading.isRemove && (
                      <div className={`animate-spin`}>
                        <CgSpinnerAlt />
                      </div>
                    )}{" "}
                    Hapus transaksi
                  </button>
                </div>
              </div>
            </div>
          }
        />
      )}

      {isShowModalEdit && (
        <ModalEdit
          setting={setting}
          transaction={isShowEdit.id}
          close={() => {
            setIsShowModalEdit(false);
            setIsShowEdit({
              ...isShowEdit,
              status: false,
              id: null,
              loading: false,
            });
          }}
        />
      )}

      {isShowFilterCourier && (
        <Modal
          onClick={() => setIsShowFilterCourier(false)}
          content={
            <div className="rounded-lg w-460px h-5/6 bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Pilih jasa kurir
              </p>
              <div className="overflow-scroll pt-4 h-3/4">
                <ul>
                  {courier.map((courier, i) => {
                    return (
                      <li
                        key={i}
                        className="py-4 pl-6 flex items-center justify-between relative"
                        onClick={() => handleFilterCourier(courier)}
                      >
                        <p className="text-neutral-300">{courier.name}</p>
                        <Checkbox
                          className={"right-7"}
                          checked={courier.isChecked}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 grid grid-cols-2 gap-2 items-center w-full px-4 pb-2">
                <div className="col-span-1">
                  <button
                    onClick={() => {
                      setIsShowFilterCourier(false);
                      dispatch(setCourier(""));
                    }}
                    className="bg-white border rounded-lg border-neutral-300 text-neutral-300 w-full py-3 text-2-bold"
                  >
                    Reset filter
                  </button>
                </div>
                <div className="col-span-1">
                  <button
                    onClick={() => handleFinishFilter()}
                    className="rounded-lg  w-full py-3 text-2-bold text-white bg-blue-300"
                  >
                    Terapkan filter
                  </button>
                </div>
              </div>
            </div>
          }
        />
      )}

      {isShowFilterPrice && (
        <Modal
          onClick={() => {
            setIsShowFilterPrice(false);
            setValue("priceMin", "");
            setValue("priceMax", "");
          }}
          content={
            <div className="rounded-lg bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <form
                onSubmit={!loading.filterPrice ? handleSubmit(onSubmit) : null}
              >
                <p className="border b-2 text-center text-1-bold py-4">
                  Filter harga
                </p>
                <div className="flex items-center px-11 py-9 border-b-2">
                  <div>
                    <p className="text-2-bold text-neutral-400 mb-2">
                      Dari harga
                    </p>
                    <input
                      {...register("priceMin")}
                      name="priceMin"
                      type="number"
                      className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                      placeholder="Rp."
                    />
                  </div>
                  <Minus className="relative top-3 mx-5" fill={"#858585"} />
                  <div>
                    <p className="text-2-bold text-neutral-400 mb-2">
                      Dari harga
                    </p>
                    <input
                      {...register("priceMax")}
                      name="priceMax"
                      type="number"
                      className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                      placeholder="Rp."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 px-5 py-3">
                  <div className="col-span-1">
                    <button
                      onClick={() => {
                        setIsShowFilterPrice(false);
                        setValue("priceMin", "");
                        setValue("priceMax", "");
                        dispatch(setPrice("", ""));
                      }}
                      className="bg-white border rounded-lg border-neutral-300 text-neutral-300 w-full py-3 text-2-bold"
                    >
                      Reset filter
                    </button>
                  </div>
                  <div className="col-span-1">
                    <button
                      type="submit"
                      className="rounded-lg  w-full py-3 text-2-bold text-white bg-blue-300"
                    >
                      Terapkan filter
                    </button>
                  </div>
                </div>
              </form>
            </div>
          }
        />
      )}

      {isShowed && (
        <Modal
          className={"relative"}
          onClick={() => setIsShowed(false)}
          content={
            <div className="rounded-lg  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4 mb-2">
                Filter tanggal
              </p>
              {/* <DateRange
                date={transaction.date}
                setIsShowed={() => setIsShowed(!isShowed)}
                Top={"59px"}
                onChangeDate={(ranges) => dispatch(setDate(ranges))}
              /> */}
              <div className="flex items-center p-3">
                <div>
                  <p className="text-2-bold mb-2 pl-2">Dari tanggal</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    inline
                  />
                </div>
                <Minus className="px-5" />
                <div>
                  <p className="text-2-bold mb-2 pl-2">Sampai tanggal</p>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    inline
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 px-5 py-3">
                <div className="col-span-1">
                  <button
                    onClick={() => {
                      dispatch(setDate("", ""));
                      dispatch(fetchTransaction());
                      setIsShowed(false);
                    }}
                    className="bg-white border rounded-lg border-neutral-300 text-neutral-300 w-full py-3 text-2-bold"
                  >
                    Reset filter
                  </button>
                </div>
                <div className="col-span-1">
                  <button
                    onClick={() => {
                      dispatch(setDate(startDate, endDate));
                      setIsShowed(false);
                    }}
                    type="submit"
                    className="rounded-lg  w-full py-3 text-2-bold text-white bg-blue-300"
                  >
                    Terapkan filter
                  </button>
                </div>
              </div>
            </div>
          }
        />
      )}
    </React.Fragment>
  );
}
