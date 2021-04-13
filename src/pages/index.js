import React from "react";
import CheckCircle from "assets/icon/CheckCircle";
import Print from "assets/icon/Print";
import Info from "assets/icon/Info";

export default function PageSuccess() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <CheckCircle fill={"#3C60CD"} width={"105px"} height={"105px"} />
      <p className="heading-3 mt-11">Transaksi berhasil ditambah</p>
      <p className="text-2 mt-2 mb-11">MIDNV600100430-1</p>
      <button className="text-2-bold text-white rounded-lg w-72 py-3 bg-blue-300 flex items-center justify-center ">
        <Print fill={"#FFFFFF"} className={"mr-2"} />
        <p>Cetak transaksi</p>
      </button>
      <button className="text-2-bold text-white rounded-lg w-72 py-3 bg-blue-300 flex items-center justify-center mt-2">
        <Info fill={"#FFFFFF"} className={"mr-2"} />
        <p>Lihat detail transaksi</p>
      </button>
      <button className="text-2-bold text-blue-300 border border-blue-300 rounded-lg w-72 py-3 mt-2">
        Selesai
      </button>
    </div>
  );
}
