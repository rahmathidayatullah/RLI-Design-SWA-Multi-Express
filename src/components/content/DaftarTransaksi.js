import React, { useState } from "react";
import Search from "../../assets/icon/Search";
import Edit from "../../assets/icon/Edit";
import Print from "../../assets/icon/Print";
import Trash from "../../assets/icon/Trash";
import Minus from "../../assets/icon/Minus";
import Radio from "../Radio";
import Modal from "../Modal";
import Checkbox from "../Checkbox";

export default function DaftarTransaksi() {
  const [modalFilterJasaKurir, setModalFilterjasakurir] = useState(false);
  const [modalFilterHarga, setModalFilterHarga] = useState(false);
  const [modalEditTransaksi, setModalEditTransaksi] = useState(false);
  // DT = Daftar Transaksi
  const [modalCalenderDT, setModalCalenderDT] = useState(false);
  const [modalHapusTransaksi, setModalHapusTransaksi] = useState(false);
  const [modalKonfirmasiPIN, setModalKonfirmasiPIN] = useState(false);

  // modal dalam modal
  const [modalJasaKurir, setModalJasaKurir] = useState(false);
  const [modalCalender, setModalCalender] = useState(false);

  return (
    <div>
      {/* content top */}
      <div className="flex items-center bg-white p-4 shadow-card rounded-lg">
        <div className="grid grid-cols-11 gap-2 w-full">
          <div className="col-span-5  border rounded-lg border-neutral-200 flex items-center pl-5 py-4">
            <Search fill={"#858585"} />
            <input
              type="text"
              className="bg-transparent focus:outline-none pl-3 text-neutral-300 w-full"
              placeholder="Cari nama, no. resi, atau alamat"
            />
          </div>
          <div
            className="col-span-2 border rounded-lg border-neutral-200 flex items-center py-4 flex items-center justify-center text-neutral-300 cursor-pointer"
            onClick={() =>
              modalFilterJasaKurir === false
                ? setModalFilterjasakurir(true)
                : setModalFilterjasakurir(false)
            }
          >
            Filter jasa kurir
          </div>
          <div
            className="col-span-2 border rounded-lg border-neutral-200 flex items-center py-4 flex items-center justify-center text-neutral-300 cursor-pointer"
            onClick={() =>
              modalFilterHarga === false
                ? setModalFilterHarga(true)
                : setModalFilterHarga(false)
            }
          >
            Filter harga
          </div>
          <div
            className="col-span-2 border rounded-lg border-neutral-200 flex items-center py-4 flex items-center justify-center text-neutral-300 cursor-pointer"
            onClick={() =>
              modalCalenderDT === false
                ? setModalCalenderDT(true)
                : setModalCalenderDT(false)
            }
          >
            Filter tanggal
          </div>
        </div>
      </div>
      <div className="grid grid-cols-11 gap-7 mt-5">
        {/* content left */}
        <div className="col-span-6">
          <div className="rounded-lg p-6 shadow-card bg-neutral-100 hover:bg-blue-300 duration-200 flex items-center justify-between text-neutral-400 hover:text-neutral-100 cursor-pointer">
            <div>
              <p className="text-2-bold">Lestari Vera Pranoto</p>
              <p className="text-3 py-1">16/03/2021 &sdot; NINJA XPRESS</p>
              <p className="text-3">MIDNV600100430-1</p>
            </div>
            <p className="text-2-bold">Rp. 50.0000</p>
          </div>
          <div className="rounded-lg p-6 shadow-card bg-neutral-100 hover:bg-blue-300 duration-200 flex items-center justify-between text-neutral-400 hover:text-neutral-100 cursor-pointer mt-2">
            <div>
              <p className="text-2-bold">Lestari Vera Pranoto</p>
              <p className="text-3 py-1">16/03/2021 &sdot; NINJA XPRESS</p>
              <p className="text-3">MIDNV600100430-1</p>
            </div>
            <p className="text-2-bold">Rp. 50.0000</p>
          </div>
        </div>
        <div className="col-span-5 shadow-card">
          {/* content right */}
          <div className="bg-white pb-9 border-b-2">
            <div className="px-12 pt-12">
              <p className="text-3-bold">Nomor resi</p>
              <p className="text-2">MIDNV600100430-1</p>
              <p className="text-3-bold mt-8">Jasa kurir</p>
              <p className="text-2">NINJA XPRESS</p>
              <p className="text-3-bold mt-8">Tanggal pengiriman</p>
              <p className="text-2">16/03/2021</p>
              <p className="text-3-bold mt-8">Alamat tujuan</p>
              <p className="text-2">
                Jl Jend Sudirman Kav 7-8 Wisma Nugra Santana Lt 15, Karet
                Tengsin
              </p>
              <p className="text-3-bold mt-8">Biaya</p>
              <p className="text-2">Rp. 50,000</p>
              <p className="text-3-bold mt-8">Nomor telepon</p>
              <p className="text-2">+62 021 5700 456</p>
              <p className="text-3-bold mt-8">Nama pengirim</p>
              <p className="text-2">Lestari Vera Pranoto</p>
            </div>
          </div>
          <div className="shadow-card p-4">
            <div className="grid grid-cols-12 gap-2">
              <div
                className="col-span-4"
                onClick={() =>
                  modalEditTransaksi === false
                    ? setModalEditTransaksi(true)
                    : setModalEditTransaksi(false)
                }
              >
                <button className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer focus:outline-none">
                  <Edit fill={"#3C60CD"} />
                </button>
              </div>
              <div className="col-span-4">
                <button className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer focus:outline-none">
                  <Print fill={"#3C60CD"} />
                </button>
              </div>
              <div
                className="col-span-4"
                onClick={() =>
                  modalHapusTransaksi === false
                    ? setModalHapusTransaksi(true)
                    : setModalHapusTransaksi(false)
                }
              >
                <button className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer focus:outline-none">
                  <Trash fill={"#3C60CD"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalFilterJasaKurir === true ? (
        <Modal
          onClick={() => setModalFilterjasakurir(false)}
          content={
            <div className="rounded-lg w-460px h-5/6 bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Pilih jasa kurir
              </p>
              <div className="overflow-scroll pt-4 h-3/4">
                <ul>
                  <li className="py-4 pl-6 flex items-center justify-between relative">
                    <p className="text-neutral-300">JNE EXPRESS</p>
                    <Checkbox className={"right-7"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between relative">
                    <p className="text-neutral-300">POS INDONESIA</p>
                    <Checkbox className={"right-7"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between relative">
                    <p className="text-neutral-300">J&T EXPRESS</p>
                    <Checkbox className={"right-7"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between relative">
                    <p className="text-neutral-300">NINJA XPRESS</p>
                    <Checkbox className={"right-7"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between relative">
                    <p className="text-neutral-300">TIKI</p>
                    <Checkbox className={"right-7"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between relative">
                    <p className="text-neutral-300">SICEPAT</p>
                    <Checkbox className={"right-7"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between relative">
                    <p className="text-neutral-300">WAHANA</p>
                    <Checkbox className={"right-7"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between relative">
                    <p className="text-neutral-300">GO-SEND</p>
                    <Checkbox className={"right-7"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between relative">
                    <p className="text-neutral-300">GRAB EXPRESS</p>
                    <Checkbox className={"right-7"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between relative">
                    <p className="text-neutral-300">DHL</p>
                    <Checkbox className={"right-7"} />
                  </li>
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 grid grid-cols-2 gap-2 flex items-center w-full px-4 pb-2">
                <div className="col-span-1">
                  <button className="bg-white border rounded-lg border-neutral-300 text-neutral-300 w-full py-3 text-2-bold">
                    Reset filter
                  </button>
                </div>
                <div className="col-span-1">
                  <button className="bg-white  rounded-lg  w-full py-3 text-2-bold text-white bg-blue-300">
                    Terapkan filter
                  </button>
                </div>
              </div>
            </div>
          }
        />
      ) : (
        ""
      )}
      {modalFilterHarga === true ? (
        <Modal
          onClick={() => setModalFilterHarga(false)}
          content={
            <div className="rounded-lg bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Filter harga
              </p>
              <div className="flex items-center px-11 py-9 border-b-2">
                <div>
                  <p className="text-2-bold text-neutral-400 mb-2">
                    Dari harga
                  </p>
                  <input
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
                    type="number"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Rp."
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 px-5 py-3">
                <div className="col-span-1">
                  <button className="bg-white border rounded-lg border-neutral-300 text-neutral-300 w-full py-3 text-2-bold">
                    Reset filter
                  </button>
                </div>
                <div className="col-span-1">
                  <button className="bg-white  rounded-lg  w-full py-3 text-2-bold text-white bg-blue-300">
                    Terapkan filter
                  </button>
                </div>
              </div>
            </div>
          }
        />
      ) : (
        ""
      )}
      {modalEditTransaksi === true ? (
        <Modal
          onClick={() => setModalEditTransaksi(false)}
          content={
            <div className="rounded-lg w-55vw h-5/6 bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Edit transaksi
              </p>
              <div className="overflow-scroll pt-4 h-3/4">
                <div className="flex flex-col px-8">
                  <p className="text-2-bold text-neutral-400 mb-2">
                    Jasa kurir
                  </p>
                  <div
                    className="rounded-lg pr-6 py-2 pl-4 border text-blue-300 border-neutral-200 cursor-pointer"
                    onClick={() =>
                      modalJasaKurir === false
                        ? setModalJasaKurir(true)
                        : setModalJasaKurir(false)
                    }
                  >
                    Pilih jasa kurir
                  </div>
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">
                    Nomor resi
                  </p>
                  <input
                    type="text"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
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
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 cursor-pointer"
                  />
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">
                    Nama penerima
                  </p>
                  <input
                    type="text"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Masukkan nomor resi"
                  />
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">
                    Alamat tujuan
                  </p>
                  <textarea
                    rows="4"
                    type="text"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Isi alamat"
                  />
                  <hr className="my-10" />
                  <p className="text-2-bold text-neutral-400 mb-2">
                    Nama pengirim
                  </p>
                  <input
                    type="text"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Isi nama pengirim"
                  />
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">
                    Alamat pengirim
                  </p>
                  <textarea
                    rows="4"
                    type="text"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Isi alamat"
                  />
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">
                    Biaya
                  </p>
                  <input
                    type="number"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Rp."
                  />
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">
                    Informasi tambahan
                  </p>
                  <textarea
                    rows="4"
                    type="text"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Isi informasi tambahan"
                  />
                </div>
                <div className="absolute bottom-0 left-0 grid grid-cols-2 gap-2 flex items-center w-full px-4 pb-2">
                  <div className="col-span-1">
                    <button className="bg-white border rounded-lg border-neutral-300 text-neutral-300 w-full py-2 text-2-bold">
                      Batal edit
                    </button>
                  </div>
                  <div className="col-span-1">
                    <button className="bg-white  rounded-lg  w-full py-2 text-2-bold text-white bg-blue-300">
                      Selesai edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      ) : (
        ""
      )}

      {modalCalenderDT === true ? (
        <Modal
          onClick={() => setModalCalenderDT(false)}
          content={
            // tgl nya masih blm gua masukin agak tricky
            // module tgl nya udah gua install
            // kalo kurang lebar di atur aja ukuran width or heightnya
            <div className="rounded-lg w-460px h-96  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              disini tempat naro calender daftar transaksi <br />
              DT
            </div>
          }
        />
      ) : (
        ""
      )}

      {modalHapusTransaksi === true ? (
        <Modal
          onClick={() => setModalHapusTransaksi(false)}
          content={
            <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Batal tambah transaksi?
              </p>
              <div className="p-6">
                <p className="text-center text-2 text-neutral-500">
                  Apakah Anda yakin ingin hapus transaksi? Semua data yang telah
                  dicatat akan hilang dan tidak bisa dikembalikan lagi jika Anda
                  lanjut untuk hapus.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1 px-3 pb-3 border-t-2 pt-3">
                <div className="col-span-1">
                  <button className="text-center bg-white text-blue-300 border border-blue-300 rounded-lg text-white w-full py-4 focus:outline-none">
                    Kembali
                  </button>
                </div>
                <div
                  className="col-span-1"
                  onClick={() =>
                    modalKonfirmasiPIN === false
                      ? setModalKonfirmasiPIN(true)
                      : setModalKonfirmasiPIN(false)
                  }
                >
                  <button className="text-center bg-red-300 rounded-lg text-white w-full py-4 focus:outline-none">
                    Hapus transaksi
                  </button>
                </div>
              </div>
            </div>
          }
        />
      ) : (
        ""
      )}
      {modalKonfirmasiPIN === true ? (
        <Modal
          onClick={() => setModalKonfirmasiPIN(false)}
          content={
            <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Konfirmasi PIN
              </p>
              <div className="p-6">
                <p className="text-center text-2 text-neutral-500">
                  Masukkan PIN untuk konfirmasi hapus transaksi
                </p>
                <div className="grid grid-cols-6 gap-2 mt-5">
                  <div className="col-span-1 border rounded-lg">
                    <input
                      type="number"
                      placeholder="0"
                      className="w-14 h-14 flex items-center justify-center focus:outline-none text-center text-neutral-300 pl-5"
                    />
                  </div>
                  <div className="col-span-1 border rounded-lg">
                    <input
                      type="number"
                      placeholder="0"
                      className="w-14 h-14 flex items-center justify-center focus:outline-none text-center text-neutral-300 pl-5"
                    />
                  </div>
                  <div className="col-span-1 border rounded-lg">
                    <input
                      type="number"
                      placeholder="0"
                      className="w-14 h-14 flex items-center justify-center focus:outline-none text-center text-neutral-300 pl-5"
                    />
                  </div>
                  <div className="col-span-1 border rounded-lg">
                    <input
                      type="number"
                      placeholder="0"
                      className="w-14 h-14 flex items-center justify-center focus:outline-none text-center text-neutral-300 pl-5"
                    />
                  </div>
                  <div className="col-span-1 border rounded-lg">
                    <input
                      type="number"
                      placeholder="0"
                      className="w-14 h-14 flex items-center justify-center focus:outline-none text-center text-neutral-300 pl-5"
                    />
                  </div>
                  <div className="col-span-1 border rounded-lg">
                    <input
                      type="number"
                      placeholder="0"
                      className="w-14 h-14 flex items-center justify-center focus:outline-none text-center text-neutral-300 pl-5"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1 px-3 pb-3 border-t-2 pt-3">
                <div className="col-span-1">
                  <button className="text-center bg-white text-blue-300 border border-blue-300 rounded-lg text-white w-full py-4 focus:outline-none">
                    Kembali
                  </button>
                </div>
                <div className="col-span-1">
                  <button className="text-center bg-red-300 rounded-lg text-white w-full py-4 focus:outline-none">
                    Hapus transaksi
                  </button>
                </div>
              </div>
            </div>
          }
        />
      ) : (
        ""
      )}

      {/* modal dalam modal  */}

      {modalJasaKurir === true ? (
        <Modal
          onClick={() => setModalJasaKurir(false)}
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
                  <li className="py-4 pl-6 flex items-center justify-between">
                    <p>JNE EXPRESS</p>
                    <Radio name={"name"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between">
                    <p>JNE EXPRESS</p>
                    <Radio name={"name"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between">
                    <p>JNE EXPRESS</p>
                    <Radio name={"name"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between">
                    <p>JNE EXPRESS</p>
                    <Radio name={"name"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between">
                    <p>JNE EXPRESS</p>
                    <Radio name={"name"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between">
                    <p>JNE EXPRESS</p>
                    <Radio name={"name"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between">
                    <p>JNE EXPRESS</p>
                    <Radio name={"name"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between">
                    <p>JNE EXPRESS</p>
                    <Radio name={"name"} />
                  </li>
                  <li className="py-4 pl-6 flex items-center justify-between">
                    <p>JNE EXPRESS</p>
                    <Radio name={"name"} />
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      ) : (
        ""
      )}
      {modalCalender === true ? (
        <Modal
          onClick={() => setModalCalender(false)}
          content={
            // tgl nya masih blm gua masukin agak tricky
            // module tgl nya udah gua install
            // kalo kurang lebar di atur aja ukuran width or heightnya
            <div className="rounded-lg w-460px h-96  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              disini tempat naro calender edit transaksi
            </div>
          }
        />
      ) : (
        ""
      )}
    </div>
  );
}
