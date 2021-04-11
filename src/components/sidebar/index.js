import React from "react";
import { Link } from "react-router-dom";
import Add from "../../assets/icon/Add";
import List from "../../assets/icon/List";
import Settings from "../../assets/icon/Settings";

export default function index() {
  return (
    <ul className="p-6 bg-blue-100 rounded-2xl">
      <Link to="/tambah-transaksi">
        <li className="flex items-center hover:bg-blue-400 duration-200 hover:text-white text-neutral-500 pl-4 pr-11 py-2 cursor-pointer rounded-md">
          <Add fill={"currentColor"} />
          <p className="ml-3 text-2-bold whitespace-nowrap">Tambah transaksi</p>
        </li>
      </Link>
      <Link to="/daftar-transaksi">
        <li className="flex items-center hover:bg-blue-400 duration-200 my-4 hover:text-white text-neutral-500 pl-4 pr-11 py-2 cursor-pointer rounded-md">
          <List fill={"currentColor"} />
          <p className="ml-3 text-2-bold whitespace-nowrap">Daftar transaksi</p>
        </li>
      </Link>
      <Link to="/pengaturan">
        <li className="flex items-center hover:bg-blue-400 duration-200 hover:text-white text-neutral-500 pl-4 pr-11 py-2 cursor-pointer rounded-md">
          <Settings fill={"currentColor"} />
          <p className="ml-3 text-2-bold whitespace-nowrap">Pengaturan</p>
        </li>
      </Link>
    </ul>
  );
}
