import React from "react";
import Search from "../../assets/icon/Search";
import Edit from "../../assets/icon/Edit";
import Print from "../../assets/icon/Print";
import Trash from "../../assets/icon/Trash";

export default function DaftarTransaksi() {
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
          <div className="col-span-2 border rounded-lg border-neutral-200 flex items-center py-4 flex items-center justify-center text-neutral-300 cursor-pointer">
            Filter jasa kurir
          </div>
          <div className="col-span-2 border rounded-lg border-neutral-200 flex items-center py-4 flex items-center justify-center text-neutral-300 cursor-pointer">
            Filter harga
          </div>
          <div className="col-span-2 border rounded-lg border-neutral-200 flex items-center py-4 flex items-center justify-center text-neutral-300 cursor-pointer">
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
              <div className="col-span-4">
                <button className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer">
                  <Edit fill={"#3C60CD"} />
                </button>
              </div>
              <div className="col-span-4">
                <button className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer">
                  <Print fill={"#3C60CD"} />
                </button>
              </div>
              <div className="col-span-4">
                <button className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer">
                  <Trash fill={"#3C60CD"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
