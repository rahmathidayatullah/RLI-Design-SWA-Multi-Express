import React from "react";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import DaftarTransaksi from "../components/content/DaftarTransaksi";
import Pengaturan from "../components/content/Pengaturan";
import TambahTransaksi from "../components/content/TambahTransaksi";
import { Route, Switch } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex items-start">
      <div className="w-1/4 flex justify-center h-screen pt-6">
        <Sidebar />
      </div>
      <div className="w-3/4 h-screen overflow-scroll px-5 pt-6">
        <Content />
        <Switch>
          <Route path="/tambah-transaksi" component={TambahTransaksi} />
        </Switch>
        <Switch>
          <Route path="/daftar-transaksi" component={DaftarTransaksi} />
        </Switch>
        <Switch>
          <Route path="/pengaturan" component={Pengaturan} />
        </Switch>
      </div>
    </div>
  );
}
