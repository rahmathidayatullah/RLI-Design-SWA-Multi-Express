import React from "react";
import { Link, useLocation } from "react-router-dom";
import Add from "../../assets/icon/Add";
import List from "../../assets/icon/List";
import Settings from "../../assets/icon/Settings";

export default function Sidebar() {
  const location = useLocation().pathname
  return (
    <ul className="p-6 bg-blue-100 rounded-2xl">
      <Link to="/transaction/create">
        <li className={`flex items-center ${location === '/transaction/create' && 'bg-blue-400 text-white'} hover:bg-blue-400 duration-200 hover:text-white text-neutral-500 pl-4 pr-11 py-2 cursor-pointer rounded-md`}>
          <Add fill={"currentColor"} />
          <p className="ml-3 text-2-bold whitespace-nowrap">Tambah transaksi</p>
        </li>
      </Link>
      <Link to="/transaction">
        <li className={`flex items-center ${location === '/transaction' && 'bg-blue-400 duration-200 text-white'} hover:bg-blue-400 duration-200 my-4 hover:text-white text-neutral-500 pl-4 pr-11 py-2 cursor-pointer rounded-md`}>
          <List fill={"currentColor"} />
          <p className="ml-3 text-2-bold whitespace-nowrap">Daftar transaksi</p>
        </li>
      </Link>
      <Link to="/setting">
        <li className={`flex items-center ${location === '/setting' && 'bg-blue-400 duration-200 text-white'} hover:bg-blue-400 duration-200 my-4 hover:text-white text-neutral-500 pl-4 pr-11 py-2 cursor-pointer rounded-md`}>
          <Settings fill={"currentColor"} />
          <p className="ml-3 text-2-bold whitespace-nowrap">Pengaturan</p>
        </li>
      </Link>
    </ul >
  );
}
