import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourier } from "features/Courier/actions";
import { fetchSetting } from "features/Setting/actions";
import FadeLoader from "react-spinners/FadeLoader";
import { CgSpinnerAlt } from "react-icons/cg";
import { putData, postData, deleteData, getData } from "utils/fetchData";
import Image from "assets/icon/Image";
import Trash from "assets/icon/Trash";
import Edit from "assets/icon/Edit";
import Add from "assets/icon/Add";
import { config } from "../../config";
import { ToastContainer, toast } from "react-toastify";
import CreateCourier from "./createCourier";
import EditCourier from "./editCourier";
import Modal from "components/Modal";
import TogglePin from "./togglePin";
import EditPin from "./editPin";
import DatePicker from "react-datepicker";
import ButtonExport from "./export";

export default function SettingPage() {
  const dispatch = useDispatch();
  const courier = useSelector((state) => state.courier);
  const setting = useSelector((state) => state.setting);
  const [loading, setLoading] = React.useState({
    resetImage: false,
    removeCourier: false,
    switchStatusPin: false,
  });
  const [isShowCreateCourier, setIsShowCreateCourier] = React.useState(false);
  const [isShowEditCourier, setIsShowEditCourier] = React.useState(false);
  const [isShowAlert, setIsShowAlert] = React.useState(false);

  const [idCourier, setIdCourier] = React.useState(null);
  const [fieldCourier, setFieldCourier] = React.useState({});
  const [isShowPin, setIsShowPin] = React.useState(false);
  const [isNewPin, setIsNewPin] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [report, setReport] = React.useState([]);

  const handleExportCsv = async (start, end) => {
    const res = await getData(
      `reports?startDate=${start || ""}&endDate=${end || ""}`
    );
    setReport(res.data.data);
  };

  React.useEffect(() => {
    dispatch(fetchCourier());
    dispatch(fetchSetting());
    handleExportCsv(startDate, endDate);
  }, [dispatch]);

  if (setting.status === "idle") return <FadeLoader color={"#123abc"} />;

  const handleUploadImage = async (e) => {
    if (
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpeg"
    ) {
      let payload = new FormData();
      payload.append("image", e.target.files[0]);

      const res = await postData("images", payload);

      if (res.data.success) {
        const update = await putData("settings", { photo: res.data.data });
        if (update.data.success) {
          dispatch(fetchSetting());
          notify(`berhasil edit gambar`);
        }
      }
    } else {
      notifyError(
        "format gambar tidak sesuai silahkan masukan dengan format beriku ini : (.jpg, .png, png)"
      );
    }
  };

  const handleResetImage = async () => {
    setLoading({ ...loading, resetImage: true });
    const res = await putData(`images`, {});
    if (res.data.success) {
      setLoading({ ...loading, resetImage: false });
      dispatch(fetchSetting());
      notify("berhasil reset gambar");
    }
  };

  const handleShowCreateCourier = () => {
    setIsShowCreateCourier(true);
  };

  const handleShowEditCourier = (data) => {
    setIsShowEditCourier(true);
    setFieldCourier(data);
  };

  const handleToggleCourier = async (data) => {
    data.status ? (data.status = false) : (data.status = true);
    const res = await putData(`couriers/${data.id}`, {
      name: data.name,
      status: data.status,
      website: data.website,
    });
    if (res.data.success) {
      dispatch(fetchCourier());
      notify(`berhasil edit status kurir ${data.status}`);
    }
  };

  const handleShowRemoveCourier = async (data) => {
    setIsShowAlert(true);
    setIdCourier(data.id);
  };

  const handleRemoveCourier = async (id) => {
    setLoading({ ...loading, removeCourier: true });
    const res = await deleteData(`couriers/${id}`);
    if (res.data.success) {
      setLoading({ ...loading, removeCourier: false });
      dispatch(fetchCourier());
      notify(`berhasil hapus kurir ${res.data.data.name}`);
      setIsShowAlert(false);
    }
  };

  const handleToggleSetting = async (name, value) => {
    value ? (value = false) : (value = true);
    let palyload = {};

    if (name === "shouldPinAdd") palyload = { shouldPinAdd: value };
    if (name === "shouldPinEdit") palyload = { shouldPinEdit: value };
    if (name === "shouldPinDelete") palyload = { shouldPinDelete: value };
    if (name === "shouldPinPrintTransaction")
      palyload = { shouldPinPrintTransaction: value };
    if (name === "pinStatus") palyload = { pinStatus: value };

    const res = await putData("settings", palyload);
    if (res.data.success) {
      dispatch(fetchSetting());
      notify(`berhasil edit setting`);
    }
  };

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

  const handleTogglePin = async (status) => {
    setIsShowPin(true);
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

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 flex-col">
        <ToastContainer />
        {/* START: HANDLE IMAGE OR LOGO */}
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="col-span-1">
            <p className="text-1-bold">Foto logo</p>
            <div className="relative mt-4">
              <div className="w-72 h-72 border rounded-lg flex items-center justify-center p-4">
                <img
                  className="w-full h-full"
                  src={`${config.api_host}/images/${setting.data?.photo}`}
                  alt="Photo"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <button className="items-center text-white py-4 w-full flex justify-center bg-blue-300 rounded-lg focus:outline-none relative overflow-hidden">
              <Image fill={"#FFFFFF"} />
              <p className="text-2-bold ml-3">Pilih dari galeri</p>
              <input
                type="file"
                className="inset-0 absolute cursor-pointer w-full opacity-0"
                onChange={handleUploadImage}
              />
            </button>
            <button
              onClick={handleResetImage}
              disabled={loading.resetImage ? true : false}
              className="items-center border py-4 w-full flex justify-center bg-white text-neutral-300 rounded-lg mt-4 focus:outline-none"
            >
              {loading.resetImage ? (
                <div className={`animate-spin`}>
                  <CgSpinnerAlt />
                </div>
              ) : (
                <Trash fill={"#858585"} />
              )}
              <p className="text-2-bold ml-3">Hapus foto</p>
            </button>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-1-bold text-neutral-400">
            Jasa kurir yang tersedia
          </p>
          <ul className="mt-4 w-full">
            {courier.data.map((courier, i) => {
              return (
                <li className="flex items-center mb-1" key={i}>
                  <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                    <p className="text-2 text-blue-300">{courier.name}</p>
                    <label className={`wrap-toggle-primary right-7 -top-1`}>
                      <input
                        type="checkbox"
                        defaultChecked={courier.status}
                        onClick={() => handleToggleCourier(courier)}
                      />
                      <span className="toggle-primary"></span>
                      <span className="toggle-default-primary"></span>
                    </label>
                  </div>
                  <Trash
                    fill={"#858585"}
                    className={"mx-5 cursor-pointer"}
                    onClick={() => handleShowRemoveCourier(courier)}
                  />
                  <Edit
                    onClick={() => handleShowEditCourier(courier)}
                    fill={"#858585"}
                    className={"cursor-pointer"}
                  />

                  {/* START: MODAL EDIT COURIER */}
                  {isShowEditCourier && (
                    <EditCourier
                      field={fieldCourier}
                      close={() => setIsShowEditCourier(false)}
                    />
                  )}
                  {/* END: MODAL EDIT COURIER */}
                </li>
              );
            })}
          </ul>
          <button
            className="mt-6 bg-blue-300 py-4 w-full flex items-center cursor-pointer justify-center text-white text-2-bold rounded-lg focus:outline-none"
            onClick={handleShowCreateCourier}
          >
            <Add fill={"#FFFFFF"} />
            <p className="ml-3">Tambah jasa kurir baru</p>
          </button>
          {isShowCreateCourier && (
            <CreateCourier close={() => setIsShowCreateCourier(false)} />
          )}
          <p className="mt-20 text-1-bold text-neutral-400">PIN akses</p>
          <p className="mt-4 text-neutral-500 text-2">
            PIN akan ditanyakan kepada pengguna ketika ingin melakukan sesuatu
            kepada sebuah transaksi. Pastikan PIN dibuat untuk tidak mudah
            ditebak dan hanya diberikan kepada orang yang mempunyai tanggung
            jawab untuk menjaga integritas data.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1" onClick={() => setIsNewPin(true)}>
              <button className="mt-6 bg-blue-300 py-4 cursor-pointer justify-center text-white text-2-bold rounded-lg w-full focus:outline-none">
                Ubah PIN
              </button>
            </div>
            <div className="col-span-1">
              <button
                onClick={() => handleTogglePin(setting.data.pinStatus)}
                className="mt-6 bg-white py-4 cursor-pointer justify-center text-blue-300 text-2-bold border border-blue-300 rounded-lg w-full focus:outline-none"
              >
                {setting.data.pinStatus ? "Matikan pin" : "Hidupkan pin"}
              </button>
            </div>
          </div>
          <p className="mt-8 text-neutral-500 text-2-bold">
            Wajib masukkan PIN ketika:
          </p>
          <ul className="mt-4 w-full">
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
              <p className="text-2 text-neutral-500">Tambah transaksi baru</p>
              <label className={`wrap-toggle-primary right-7 -top-1`}>
                <input
                  type="checkbox"
                  defaultChecked={setting.data?.shouldPinAdd}
                  onClick={() =>
                    handleToggleSetting(
                      "shouldPinAdd",
                      setting.data.shouldPinAdd
                    )
                  }
                  value={setting.data.shouldPinAdd}
                />
                <span className="toggle-primary"></span>
                <span className="toggle-default-primary"></span>
              </label>
            </li>
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between mt-1">
              <p className="text-2 text-neutral-500">Edit transaksi</p>
              <label className={`wrap-toggle-primary right-7 -top-1`}>
                <input
                  type="checkbox"
                  defaultChecked={setting.data?.shouldPinEdit}
                  onClick={() =>
                    handleToggleSetting(
                      "shouldPinEdit",
                      setting.data.shouldPinEdit
                    )
                  }
                  value={setting.data.shouldPinDelete}
                />
                <span className="toggle-primary"></span>
                <span className="toggle-default-primary"></span>
              </label>
            </li>
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between mt-1">
              <p className="text-2 text-neutral-500">Hapus transaksi</p>
              <label className={`wrap-toggle-primary right-7 -top-1`}>
                <input
                  type="checkbox"
                  defaultChecked={setting.data?.shouldPinDelete}
                  onClick={() =>
                    handleToggleSetting(
                      "shouldPinDelete",
                      setting.data.shouldPinDelete
                    )
                  }
                  value={setting.data.shouldPinDelete}
                />
                <span className="toggle-primary"></span>
                <span className="toggle-default-primary"></span>
              </label>
            </li>
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between mt-1">
              <p className="text-2 text-neutral-500">Cetak transaksi</p>
              <label className={`wrap-toggle-primary right-7 -top-1`}>
                <input
                  type="checkbox"
                  defaultChecked={setting.data?.shouldPinPrintTransaction}
                  onClick={() =>
                    handleToggleSetting(
                      "shouldPinPrintTransaction",
                      setting.data.shouldPinPrintTransaction
                    )
                  }
                  value={setting.data.shouldPinPrintTransaction}
                />
                <span className="toggle-primary"></span>
                <span className="toggle-default-primary"></span>
              </label>
            </li>
          </ul>
          <p className="text-1-bold text-neutral-400 mt-20">
            Ekspor daftar transaksi
          </p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="col-span-1">
              <p className="text-2-bold text-neutral-400">Dari tanggal</p>
              <div className="py-4 px-6 text-neutral-500 text-2 border rounded-lg mt-2 cursor-pointer">
                <DatePicker
                  onChange={(date) => {
                    setStartDate(date);
                    handleExportCsv(date, endDate);
                  }}
                  selected={startDate}
                  className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 cursor-pointer"
                />
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-2-bold text-neutral-400">Sampai tanggal</p>
              <div className="py-4 px-6 text-neutral-500 text-2 border rounded-lg mt-2 cursor-pointer">
                <DatePicker
                  onChange={(date) => {
                    setEndDate(date);
                    handleExportCsv(startDate, date);
                  }}
                  selected={endDate}
                  className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <ButtonExport data={report} />

          {/* <button onClick={() => handleExportCsv()} className="mt-6 bg-blue-300 py-4 cursor-pointer justify-center text-white text-2-bold w-full rounded-lg w-full focus:outline-none">
            Ekspor daftar transaksi
          </button> */}
        </div>
      </div>

      {/* START: MODAL ALERT  */}
      {isShowAlert === true && (
        <Modal
          onClick={() => setIsShowAlert(false)}
          content={
            <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                yakin untuk menghapus data?
              </p>
              <div className="p-6">
                <p className="text-center text-2 text-neutral-500">
                  Apakah Anda yakin ingin menghapus data kurir? data yang terlah
                  di hapus tidak dapat dikembalikan.
                </p>
                <button
                  onClick={() => setIsShowAlert(false)}
                  className="mt-9 text-center bg-red-300 rounded-lg text-white w-full py-4 focus:outline-none"
                >
                  Batal
                </button>
                <button
                  onClick={() => handleRemoveCourier(idCourier)}
                  className=" flex justify-center mt-2 text-center bg-white text-blue-300 border border-blue-300 rounded-lg  w-full py-4 focus:outline-none"
                >
                  {loading.removeCourier ? (
                    <div className={`animate-spin`}>
                      <CgSpinnerAlt />
                    </div>
                  ) : (
                    ""
                  )}
                  Hapus
                </button>
              </div>
            </div>
          }
        />
      )}
      {/* END: MODAL ALERT  */}

      {/* START: TOGGLE MODAL PIN */}
      {isShowPin && (
        <TogglePin
          status={setting.data.pinStatus}
          close={() => setIsShowPin(false)}
        />
      )}
      {/* END: TOGGLE MODAL PIN */}

      {/* START: MODAL PIN */}
      {isNewPin && (
        <EditPin
          status={setting.data.pinStatus}
          close={() => setIsNewPin(false)}
        />
      )}
      {/* END: MODAL PIN */}
    </div>
  );
}
