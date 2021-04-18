import React, { Component } from "react";
import moment from "moment";
import { formatRupiah } from "utils/formatRupiah";

export default class Print extends Component {
  render() {
    return (
      <div className={`px-12 pt-6 ${this.props.className}`}>
        <p className="text-3-bold">Nomor resi</p>
        <p className="text-2">{this.props.dataEdit.noResi}</p>
        <p className="text-3-bold mt-8">Jasa kurir</p>
        <p className="text-2">{this.props.dataEdit.courier?.name}</p>
        <p className="text-3-bold mt-8">Tanggal pengiriman</p>
        <p className="text-2">
          {moment(this.props.dataEdit.deliveryDate).format("DD/MM/YYYY")}
        </p>

        <p className="text-3-bold mt-8">Alamat tujuan</p>
        <p className="text-2">{this.props.dataEdit.destinationAddress}</p>
        <p className="text-3-bold mt-8">Biaya</p>
        <p className="text-2">{`${formatRupiah(this.props.dataEdit.cost)}`}</p>
        <p className="text-3-bold mt-8">Nama pengirim</p>
        <p className="text-2">{this.props.dataEdit.senderName}</p>
      </div>
    );
  }
}
