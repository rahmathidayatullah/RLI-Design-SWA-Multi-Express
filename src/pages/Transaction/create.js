import * as React from "react";
import Close from "assets/icon/Close";
import Check from "assets/icon/Check";
import Modal from "components/Modal";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectCourier from "./courier";
import { fetchCourier } from "features/Courier/actions";
import { fetchSetting } from "features/Setting/actions";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "utils/fetchData";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import PinInput from "react-pin-input";
import { CgSpinnerAlt } from "react-icons/cg";

const schema = yup.object().shape({
  noResi: yup.string().required("no resi tidak boleh kosong."),
  destinationAddress: yup
    .string()
    .required("alamat pengirimaan tidak boleh kosong."),
  receiverName: yup.string().required("nama penerima tidak boleh kosong."),
  senderName: yup.string().required("nama pengirin tidak boleh kosong."),
  senderAddress: yup.string().required("alamat pengirim tidak boleh kosong."),
  cost: yup.string().required("biaya tidak boleh kosong."),
});

export default function TambahTransaksi() {
  const dispatch = useDispatch();
  const history = useHistory();
  const courier = useSelector((state) => state.courier);
  const setting = useSelector((state) => state.setting);
  const [loading, setLoading] = React.useState(false);
  const [isClose, setIsClose] = React.useState(false);
  const [isShowPin, setIsShowPin] = React.useState(false);
  const [field, setField] = React.useState({
    courier: "Pilih jasa kurir",
    deliveryDate: new Date(),
  });
  const [isShowCourier, setIsShowCourier] = React.useState(false);
  const [idCourier, setIdCourier] = React.useState(null);
  const [formPin, setFormPin] = React.useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    dispatch(fetchSetting());
    dispatch(fetchCourier());
  }, []);

  const onSubmit = async (data) => {
    let payload = {
      courId: idCourier,
      noResi: data.noResi,
      deliveryDate: field.deliveryDate,
      receiverName: data.receiverName,
      destinationAddress: data.destinationAddress,
      senderName: data.senderName,
      senderAddress: data.senderAddress,
      cost: data.cost,
      additionalInfo: data.additionalInfo,
    };

    setFormPin(payload);
    if (setting.data.shouldPinAdd) {
      setIsShowPin(true);
    } else {
      const res = await postData("transactions", payload);
      if (res.data.success) {
        setLoading(false);
        history.push(
          `/success?id=${res.data.data.id}&noResi=${res.data.data.noResi}`
        );
      }
    }
  };

  const onComplete = async (value) => {
    try {
      const payload = {
        courId: formPin.courId,
        noResi: formPin.noResi,
        deliveryDate: formPin.deliveryDate,
        receiverName: formPin.receiverName,
        destinationAddress: formPin.destinationAddress,
        senderName: formPin.senderName,
        senderAddress: formPin.senderAddress,
        cost: formPin.cost,
        additionalInfo: formPin.additionalInfo,
        pin: value,
      };

      setFormPin(payload);

      const res = await postData(`transactions`, payload);
      if (res.data.success) {
        setLoading(false);
        history.push(
          `/success?id=${res.data.data.id}&noResi=${res.data.data.noResi}`
        );
      }
    } catch (err) {
      if (err.response.data.code === "PIN_INCORRECT") {
        notifyError("pin yang anda masukan tidak salah.");
      }
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

  const handleSelectCourier = (data) => {
    setField({ ...field, courier: data.name });
    setIdCourier(data.id);
    dispatch(fetchCourier());
  };

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 flex flex-col">
        <p className="text-2-bold text-neutral-400 mb-2"> Jasa kurir</p>
        <div
          className="rounded-lg pr-6 py-2 pl-4 border text-blue-300 border-neutral-200 cursor-pointer"
          onClick={() => setIsShowCourier(true)}
        >
          {field.courier}
        </div>
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">Nomor resi</p>
        <input
          {...register("noResi")}
          name="noResi"
          type="text"
          className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Masukkan nomor resi"
        />
        {errors.noResi && (
          <p className="text-sm text-red-300">{errors.noResi.message}</p>
        )}
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">
          Tanggal pengiriman
        </p>
        <DatePicker
          onChange={(date) => setField({ ...field, deliveryDate: date })}
          selected={field?.deliveryDate}
          className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 cursor-pointer"
        />
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">Nama penerima</p>
        <input
          {...register("receiverName")}
          name="receiverName"
          type="text"
          defaultValue={field.receiverName}
          className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Masukkan nama penerima"
        />
        {errors.receiverName && (
          <p className="text-sm text-red-300">{errors.receiverName.message}</p>
        )}
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">Alamat tujuan</p>
        <textarea
          {...register("destinationAddress")}
          name="destinationAddress"
          type="text"
          defaultValue={field.destinationAddress}
          rows="4"
          className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Isi alamat"
        />
        {errors.destinationAddress && (
          <p className="text-sm text-red-300">
            {errors.destinationAddress.message}
          </p>
        )}
        <hr className="my-10" />
        <p className="text-2-bold text-neutral-400 mb-2">Nama pengirim</p>
        <input
          {...register("senderName")}
          name="senderName"
          type="text"
          defaultValue={field.senderName}
          className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Isi nama pengirim"
        />
        {errors.senderName && (
          <p className="text-sm text-red-300">{errors.senderName.message}</p>
        )}
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">
          Alamat pengirim
        </p>
        <textarea
          {...register("senderAddress")}
          name="senderAddress"
          type="text"
          defaultValue={field.senderAddress}
          rows="4"
          className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Isi alamat"
        />
        {errors.senderAddress && (
          <p className="text-sm text-red-300">{errors.senderAddress.message}</p>
        )}
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">Biaya</p>
        <input
          {...register("cost")}
          name="cost"
          defaultValue={field.cost}
          type="number"
          className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Rp."
        />
        {errors.cost && (
          <p className="text-sm text-red-300">{errors.cost.message}</p>
        )}
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">
          Informasi tambahan
        </p>
        <textarea
          {...register("additionalInfo")}
          name="additionalInfo"
          defaultValue={field.additionalInfo}
          rows="4"
          type="text"
          className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Isi informasi tambahan"
        />
      </div>
      <div className="col-span-1 relative h-screen -top-6">
        <div className="fixed bottom-20 right-28">
          <div
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={() => setIsClose(!isClose)}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center border bg-white">
              <Close width={"30"} height={"30"} fill={"#858585"} />
            </div>
            <p className="text-2-bold text-neutral-300 mt-1">Batal</p>
          </div>
          <div
            onClick={!loading ? handleSubmit(onSubmit) : null}
            className="flex flex-col items-center justify-center cursor-pointer mt-6"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center border bg-blue-300">
              <Check width={"30"} height={"30"} fill={"#FFFFFF"} />
            </div>
            <button className="text-2-bold text-blue-300 mt-1">Selesai</button>
          </div>
        </div>
      </div>

      {isShowCourier && (
        <SelectCourier
          data={courier.data}
          close={() => setIsShowCourier(false)}
          idCourier={idCourier}
          handleSelectCourier={(data) => handleSelectCourier(data)}
        />
      )}
      {isClose === true && (
        <Modal
          onClick={() => setIsClose(false)}
          content={
            <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Batal tambah transaksi?
              </p>
              <div className="p-6">
                <p className="text-center text-2 text-neutral-500">
                  Apakah Anda yakin ingin membatalkan penambahan transaksi?
                  Semua data yang telah dimasukkan akan hilang dan tidak bisa
                  dikembalikan lagi jika Anda lanjut untuk batal.
                </p>
                <Link to="/transaction">
                  <button className="mt-9 text-center bg-red-300 rounded-lg text-white w-full py-4 focus:outline-none">
                    Batal
                  </button>
                </Link>
                <button className="mt-2 text-center bg-white text-blue-300 border border-blue-300 rounded-lg  w-full py-4 focus:outline-none">
                  Kembali tambah transaksi
                </button>
              </div>
            </div>
          }
        />
      )}

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
                  <button className="justify-center items-center flex text-center bg-blue-300 rounded-lg text-white w-full py-4 focus:outline-none">
                    {loading && (
                      <div className={`animate-spin`}>
                        <CgSpinnerAlt />
                      </div>
                    )}{" "}
                    Selesai tambah transaksi
                  </button>
                </div>
              </div>
            </div>
          }
        />
      )}

      <ToastContainer />
      {/* {modalCalender === true ? (
        <Modal
          onClick={() => setModalCalender(false)}
          content={
            // tgl nya masih blm gua masukin agak tricky
            // module tgl nya udah gua install
            // kalo kurang lebar di atur aja ukuran width or heightnya
            <div className="rounded-lg w-460px h-96  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              disini tempat naro calender
            </div>
          }
        />
      ) : (
        ""
      )} */}
    </div>
  );
}
