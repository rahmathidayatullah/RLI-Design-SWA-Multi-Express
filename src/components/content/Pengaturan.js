import React, { useState } from "react";
import Check from "../../assets/icon/Check";
import Image from "../../assets/icon/Image";
import Camera from "../../assets/icon/Camera";
import Trash from "../../assets/icon/Trash";
import Edit from "../../assets/icon/Edit";
import Add from "../../assets/icon/Add";
import Modal from "../Modal";
import Toggle from "../Toggle";

export default function Pengaturan() {
  const [modalTambahJasaKurir, setModalTambahJasaKurir] = useState(false);
  const [modalEditJasaKurir, setModalEditJasaKurir] = useState(false);
  const [modalUbahPIN, setModalUbahPIN] = useState(false);
  const [modalMatikanPIN, setModalMatikanPIN] = useState(false);
  // D = DARI TANGGAL
  // S = SAMPAI TANGGAL
  const [modalCalenderD, setModalCalenderD] = useState(false);
  const [modalCalenderS, setModalCalenderS] = useState(false);
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 flex-col">
        <div className="grid grid-cols-2 gap-12 flex items-center">
          <div className="col-span-1">
            <p className="text-1-bold">Foto logo</p>
            <div className="relative mt-4">
              <div className="w-72 h-72 border rounded-lg flex justify-center p-4">
                {/* image */}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <button className="flex items-center text-white py-4 w-full flex justify-center bg-blue-300 rounded-lg">
              <Image fill={"#FFFFFF"} />
              <p className="text-2-bold ml-3">Pilih dari galeri</p>
            </button>
            <button className="flex items-center text-white py-4 w-full flex justify-center bg-blue-300 rounded-lg mt-4">
              <Camera fill={"#FFFFFF"} />
              <p className="text-2-bold ml-3">Foto kamera</p>
            </button>
            <button className="flex items-center border py-4 w-full flex justify-center bg-white text-neutral-300 rounded-lg mt-4">
              <Trash fill={"#858585"} />
              <p className="text-2-bold ml-3">Hapus foto</p>
            </button>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-1-bold text-neutral-400">
            Jasa kurir yang tersedia
          </p>
          <ul className="mt-4 w-full">
            <li className="flex items-center">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">JNE EXPRESS</p>
                <Toggle className={"right-7 -top-1"} />
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit
                onClick={() =>
                  modalEditJasaKurir === false
                    ? setModalEditJasaKurir(true)
                    : setModalEditJasaKurir(false)
                }
                fill={"#858585"}
                className={"cursor-pointer"}
              />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">NINJA XPRESS</p>
                <Toggle className={"right-7 -top-1"} />
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">POS INDONESIA</p>
                <Toggle className={"right-7 -top-1"} />
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">J&T EXPRESS</p>
                <Toggle className={"right-7 -top-1"} />
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">TIKI</p>
                <Toggle className={"right-7 -top-1"} />
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">SICEPAT</p>
                <Toggle className={"right-7 -top-1"} />
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">WAHANA</p>
                <Toggle className={"right-7 -top-1"} />
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">GO-SEND</p>
                <Toggle className={"right-7 -top-1"} />
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">GRAB EXPRESS</p>
                <Toggle className={"right-7 -top-1"} />
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">DHL</p>
                <Toggle className={"right-7 -top-1"} />
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
          </ul>
          <button
            className="mt-6 bg-blue-300 py-4 w-full flex items-center cursor-pointer justify-center text-white text-2-bold rounded-lg focus:outline-none"
            onClick={() =>
              modalTambahJasaKurir === false
                ? setModalTambahJasaKurir(true)
                : setModalTambahJasaKurir(false)
            }
          >
            <Add fill={"#FFFFFF"} />
            <p className="ml-3">Tambah jasa kurir baru</p>
          </button>
          <p className="mt-20 text-1-bold text-neutral-400">PIN akses</p>
          <p className="mt-4 text-neutral-500 text-2">
            PIN akan ditanyakan kepada pengguna ketika ingin melakukan sesuatu
            kepada sebuah transaksi. Pastikan PIN dibuat untuk tidak mudah
            ditebak dan hanya diberikan kepada orang yang mempunyai tanggung
            jawab untuk menjaga integritas data.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div
              className="col-span-1"
              onClick={() =>
                modalUbahPIN === false
                  ? setModalUbahPIN(true)
                  : setModalUbahPIN(false)
              }
            >
              <button className="mt-6 bg-blue-300 py-4 cursor-pointer justify-center text-white text-2-bold rounded-lg w-full focus:outline-none">
                Ubah PIN
              </button>
            </div>
            <div
              className="col-span-1"
              onClick={() =>
                modalUbahPIN === false
                  ? setModalMatikanPIN(true)
                  : setModalMatikanPIN(false)
              }
            >
              <button className="mt-6 bg-white py-4 cursor-pointer justify-center text-blue-300 text-2-bold border border-blue-300 rounded-lg w-full focus:outline-none">
                Matikan pin
              </button>
            </div>
          </div>
          <p className="mt-8 text-neutral-500 text-2-bold">
            Wajib masukkan PIN ketika:
          </p>
          <ul className="mt-4 w-full">
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
              <p className="text-2 text-neutral-500">Tambah transaksi baru</p>
            </li>
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between mt-1">
              <p className="text-2 text-neutral-500">Edit transaksi</p>
              <Toggle className={"right-7 -top-1"} />
            </li>
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between mt-1">
              <p className="text-2 text-neutral-500">Hapus transaksi</p>
              <Toggle className={"right-7 -top-1"} />
            </li>
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between mt-1">
              <p className="text-2 text-neutral-500">Cetak transaksi</p>
              <Toggle className={"right-7 -top-1"} />
            </li>
          </ul>
          <p className="text-1-bold text-neutral-400 mt-20">
            Ekspor daftar transaksi
          </p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="col-span-1">
              <p className="text-2-bold text-neutral-400">Dari tanggal</p>
              <div
                className="py-4 px-6 text-neutral-500 text-2 border rounded-lg mt-2 cursor-pointer"
                onClick={() =>
                  modalCalenderD === false
                    ? setModalCalenderD(true)
                    : setModalCalenderD(false)
                }
              >
                16/03/2021
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-2-bold text-neutral-400">Sampai tanggal</p>
              <div
                className="py-4 px-6 text-neutral-500 text-2 border rounded-lg mt-2 cursor-pointer"
                onClick={() =>
                  modalCalenderS === false
                    ? setModalCalenderS(true)
                    : setModalCalenderS(false)
                }
              >
                16/03/2021
              </div>
            </div>
          </div>
          <button className="mt-6 bg-blue-300 py-4 cursor-pointer justify-center text-white text-2-bold w-full rounded-lg w-full">
            Ekspor daftar transaksi
          </button>
        </div>
      </div>
      <div className="col-span-1 flex-col">
        <div className="fixed bottom-20 right-28">
          <div className="flex flex-col items-center justify-center cursor-pointer mt-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center border bg-blue-300">
              <Check width={"30"} height={"30"} fill={"#FFFFFF"} />
            </div>
            <p className="text-2-bold text-blue-300 mt-1">Simpan</p>
          </div>
        </div>
      </div>
      {modalTambahJasaKurir === true ? (
        <Modal
          onClick={() => setModalTambahJasaKurir(false)}
          content={
            <div className="rounded-lg w-55vw bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Tambah jasa kurir
              </p>
              <div className="px-8">
                <p className="text-2-bold text-neutral-400 mb-2 mt-8">
                  Nama jasa kurir
                </p>
                <input
                  type="text"
                  className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 w-full"
                  placeholder="Masukkan nama jasa kurir"
                />
                <p className="text-2-bold text-neutral-400 mb-2 mt-8">
                  Website / URL jasa kurir
                </p>
                <input
                  type="text"
                  className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 w-full"
                  placeholder="Masukkan link website"
                />
              </div>
              <div className="px-5 py-3 border-t-2 mt-5">
                <button className="bg-white  rounded-lg  w-full py-3 text-2-bold text-white bg-blue-300 focus:outline-none">
                  Selesai tambah jasa kurir
                </button>
              </div>
            </div>
          }
        />
      ) : (
        ""
      )}
      {modalEditJasaKurir === true ? (
        <Modal
          onClick={() => setModalEditJasaKurir(false)}
          content={
            <div className="rounded-lg w-55vw bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Edit jasa kurir
              </p>
              <div className="px-8">
                <p className="text-2-bold text-neutral-400 mb-2 mt-8">
                  Nama jasa kurir
                </p>
                <input
                  type="text"
                  className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 w-full"
                  placeholder="Masukkan nama jasa kurir"
                />
                <p className="text-2-bold text-neutral-400 mb-2 mt-8">
                  Website / URL jasa kurir
                </p>
                <input
                  type="text"
                  className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 w-full"
                  placeholder="Masukkan link website"
                />
              </div>
              <div className="px-5 py-3 grid grid-cols-2 gap-2 border-t-2 mt-5">
                <div className="col-span-1">
                  <button className="bg-white  rounded-lg  w-full py-3 text-2-bold text-neutral-300 border border-neutral-300 focus:outline-none">
                    Batal edit
                  </button>
                </div>
                <div className="col-span-1">
                  <button className="bg-white  rounded-lg  w-full py-3 text-2-bold text-white bg-blue-300 focus:outline-none">
                    Selesai edit
                  </button>
                </div>
              </div>
            </div>
          }
        />
      ) : (
        ""
      )}

      {modalUbahPIN === true ? (
        <Modal
          onClick={() => setModalUbahPIN(false)}
          content={
            <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Ubah PIN
              </p>
              <div className="p-6">
                <p className="text-center text-2 text-neutral-500">
                  Masukkan PIN sekarang untuk ubah PIN
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
                  <button className="text-center bg-blue-300 rounded-lg text-white w-full py-4 focus:outline-none">
                    Lanjut
                  </button>
                </div>
              </div>
            </div>
          }
        />
      ) : (
        ""
      )}
      {modalMatikanPIN === true ? (
        <Modal
          onClick={() => setModalMatikanPIN(false)}
          content={
            <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Matikan PIN
              </p>
              <div className="p-6">
                <p className="text-center text-2 text-neutral-500">
                  Masukkan PIN sekarang untuk matikan PIN
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
                  <button className="text-center bg-blue-300 rounded-lg text-white w-full py-4 focus:outline-none">
                    Matikan PIN
                  </button>
                </div>
              </div>
            </div>
          }
        />
      ) : (
        ""
      )}

      {modalCalenderD === true ? (
        <Modal
          onClick={() => setModalCalenderD(false)}
          content={
            // tgl nya masih blm gua masukin agak tricky
            // module tgl nya udah gua install
            // kalo kurang lebar di atur aja ukuran width or heightnya
            <div className="rounded-lg w-460px h-96  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              dari tanggallllllllllllllllll
            </div>
          }
        />
      ) : (
        ""
      )}

      {modalCalenderS === true ? (
        <Modal
          onClick={() => setModalCalenderS(false)}
          content={
            // tgl nya masih blm gua masukin agak tricky
            // module tgl nya udah gua install
            // kalo kurang lebar di atur aja ukuran width or heightnya
            <div className="rounded-lg w-460px h-96  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              sampai tanggal
            </div>
          }
        />
      ) : (
        ""
      )}
    </div>
  );
}
