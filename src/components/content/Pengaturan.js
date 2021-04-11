import React from "react";
import Check from "../../assets/icon/Check";
import Image from "../../assets/icon/Image";
import Camera from "../../assets/icon/Camera";
import Trash from "../../assets/icon/Trash";
import Edit from "../../assets/icon/Edit";
import Add from "../../assets/icon/Add";

export default function Pengaturan() {
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
                {/* ICON TOGGLE */}
                <div className="w-5 h-5 bg-blue-300"></div>
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">NINJA XPRESS</p>
                {/* ICON TOGGLE */}
                <div className="w-5 h-5 bg-blue-300"></div>
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">POS INDONESIA</p>
                {/* ICON TOGGLE */}
                <div className="w-5 h-5 bg-blue-300"></div>
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">J&T EXPRESS</p>
                {/* ICON TOGGLE */}
                <div className="w-5 h-5 bg-blue-300"></div>
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">TIKI</p>
                {/* ICON TOGGLE */}
                <div className="w-5 h-5 bg-blue-300"></div>
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">SICEPAT</p>
                {/* ICON TOGGLE */}
                <div className="w-5 h-5 bg-blue-300"></div>
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">WAHANA</p>
                {/* ICON TOGGLE */}
                <div className="w-5 h-5 bg-blue-300"></div>
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">GO-SEND</p>
                {/* ICON TOGGLE */}
                <div className="w-5 h-5 bg-blue-300"></div>
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">GRAB EXPRESS</p>
                {/* ICON TOGGLE */}
                <div className="w-5 h-5 bg-blue-300"></div>
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
            <li className="flex items-center mt-1">
              <div className="w-full rounded-lg px-6 py-3 flex items-center border justify-between">
                <p className="text-2 text-blue-300">DHL</p>
                {/* ICON TOGGLE */}
                <div className="w-5 h-5 bg-blue-300"></div>
              </div>
              <Trash fill={"#858585"} className={"mx-5 cursor-pointer"} />
              <Edit fill={"#858585"} className={"cursor-pointer"} />
            </li>
          </ul>
          <button className="mt-6 bg-blue-300 py-4 w-full flex items-center cursor-pointer justify-center text-white text-2-bold rounded-lg">
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
            <div className="col-span-1">
              <button className="mt-6 bg-blue-300 py-4 cursor-pointer justify-center text-white text-2-bold rounded-lg w-full">
                Ubah PIN
              </button>
            </div>
            <div className="col-span-1">
              <button className="mt-6 bg-white py-4 cursor-pointer justify-center text-blue-300 text-2-bold border border-blue-300 rounded-lg w-full">
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
              {/* ICON TOGGLE */}
              <div className="w-5 h-5 bg-blue-300"></div>
            </li>
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between mt-1">
              <p className="text-2 text-neutral-500">Edit transaksi</p>
              {/* ICON TOGGLE */}
              <div className="w-5 h-5 bg-blue-300"></div>
            </li>
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between mt-1">
              <p className="text-2 text-neutral-500">Hapus transaksi</p>
              {/* ICON TOGGLE */}
              <div className="w-5 h-5 bg-blue-300"></div>
            </li>
            <li className="w-full rounded-lg px-6 py-3 flex items-center border justify-between mt-1">
              <p className="text-2 text-neutral-500">Cetak transaksi</p>
              {/* ICON TOGGLE */}
              <div className="w-5 h-5 bg-blue-300"></div>
            </li>
          </ul>
          <p className="text-1-bold text-neutral-400 mt-20">
            Ekspor daftar transaksi
          </p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="col-span-1">
              <p className="text-2-bold text-neutral-400">Dari tanggal</p>
              <div className="py-4 px-6 text-neutral-500 text-2 border rounded-lg mt-2">
                16/03/2021
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-2-bold text-neutral-400">Sampai tanggal</p>
              <div className="py-4 px-6 text-neutral-500 text-2 border rounded-lg mt-2">
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
    </div>
  );
}
