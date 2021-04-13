import * as React from "react";
import Close from "assets/icon/Close";
import Check from "assets/icon/Check";
import Modal from "components/Modal";
import Radio from "components/Radio";
import { DateRange } from "react-date-range";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  courierName: yup.string().required("jasa kurir tidak boleh kosong."),
  noResi: yup.string().required("nomor resi tidak boleh kosong."),
  receiverNam: yup.string().required("nomor resi tidak boleh kosong."),
  // noResi: yup.string().required('nomor resi tidak boleh kosong.'),
  // noResi: yup.string().required('nomor resi tidak boleh kosong.'),
  // noResi: yup.string().required('nomor resi tidak boleh kosong.'),
});

export default function TambahTransaksi() {
  const [isShowCourier, setIsShowCourier] = React.useState(false);
  const [isClose, setIsClose] = React.useState(false);
  const [modalCalender, setModalCalender] = React.useState(false);
  const [field, setField] = React.useState({
    courId: "",
    courierName: "Pilih jasa kurir",
    noResi: "",
    deliveryDate: new Date(),
    receiverNam: "",
    destinationAddress: "",
    senderName: "",
    senderAddress: "",
    cost: 0,
    additionalInfo: "",
    pin: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // try {
    //   setLoading(true);
    //   const res = await postData("users/login", data);
    //   const token = res.data.data.token
    //   dispatch(userLogin(token));
    //   setLoading(false);
    //   history.push("/transaction/create");
    // } catch (err) {
    //   if (err.response.data.status === 403 || err.response.data.status === 404) {
    //     alert(err.response.data.message)
    //   }
    //   setLoading(false);
    // }
  };

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 flex flex-col">
        <p className="text-2-bold text-neutral-400 mb-2">Jasa kurir</p>
        <div
          className="rounded-lg pr-6 py-4 pl-6 border text-blue-300 border-neutral-200 cursor-pointer"
          onClick={() => setIsShowCourier(!isShowCourier)}
        >
          {field.courierName}
        </div>
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">Nomor resi</p>
        <input
          {...register("name")}
          type="text"
          name="name"
          className="rounded-lg pr-6 py-4 pl-6 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Masukkan nomor resi"
        />
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">
          Tanggal pengiriman
        </p>
        <input
          onClick={() =>
            modalCalender === false
              ? setModalCalender(true)
              : setModalCalender(false)
          }
          type="date"
          className="rounded-lg pr-6 py-4 pl-6 border text-neutral-300 focus:outline-none border-neutral-200 cursor-pointer"
        />
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">Nama penerima</p>
        <input
          type="text"
          className="rounded-lg pr-6 py-4 pl-6 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Masukkan nomor resi"
        />
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">Alamat tujuan</p>
        <textarea
          rows="4"
          type="text"
          className="rounded-lg pr-6 py-4 pl-6 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Isi alamat"
        />
        <hr className="my-10" />
        <p className="text-2-bold text-neutral-400 mb-2">Nama pengirim</p>
        <input
          type="text"
          className="rounded-lg pr-6 py-4 pl-6 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Isi nama pengirim"
        />
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">
          Alamat pengirim
        </p>
        <textarea
          rows="4"
          type="text"
          className="rounded-lg pr-6 py-4 pl-6 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Isi alamat"
        />
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">Biaya</p>
        <input
          type="number"
          className="rounded-lg pr-6 py-4 pl-6 border text-neutral-300 focus:outline-none border-neutral-200"
          placeholder="Rp."
        />
        <p className="text-2-bold text-neutral-400 mb-2 mt-8">
          Informasi tambahan
        </p>
        <textarea
          rows="4"
          type="text"
          className="rounded-lg pr-6 py-4 pl-6 border text-neutral-300 focus:outline-none border-neutral-200"
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
          <div className="flex flex-col items-center justify-center cursor-pointer mt-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center border bg-blue-300">
              <Check width={"30"} height={"30"} fill={"#FFFFFF"} />
            </div>
            <p className="text-2-bold text-blue-300 mt-1">Selesai</p>
          </div>
        </div>
      </div>

      {isShowCourier === true && (
        <Modal
          onClick={() => setIsShowCourier(false)}
          content={
            <div className="rounded-lg w-460px h-5/6 bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Pilih jasa kurir
              </p>
              <div className="overflow-scroll pt-4 h-87%">
                <ul>
                  <li className="py-4 pl-6 flex items-center justify-between">
                    <p>JNE EXPRESS</p>
                    <Radio name={"name"} />
                  </li>
                </ul>
              </div>
            </div>
          }
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
