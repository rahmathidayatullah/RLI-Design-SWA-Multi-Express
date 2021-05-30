import React, { Component } from "react";
import moment from "moment";
import { formatRupiah } from "utils/formatRupiah";
import IconBarcode from "assets/icon/bacrode_test.png";
import IconSWA from "assets/icon/Untitled.png";
import Barcode from "react-barcode";

export default class Print extends Component {
  render() {
    console.log("this.props.dataEdit");
    console.log(this.props.dataEdit);
    return (
      <div className={`px-4 pt-2 ${this.props.className}`}>
        {/* <p className="text-3-bold">Nomor resi</p>
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
        <p className="text-2">{this.props.dataEdit.senderName}</p> */}

        <div className="flex flex-col w-full rounded-lg border-2 p-4 border-black">
          {/* image section */}
          <div className="flex items-center w-full barcode">
            {/* image logo */}
            <img className="w-1/2" src={IconSWA} />

            <div className="flex flex-col items-center w-1/2 ">
              <p className="font-bold whitespace-nowrap text-sm">
                PT.SWA MULTI EXPRESS
              </p>
              {/* IMAGE BARCODE */}

              <Barcode value={this.props.dataEdit.noResi} />
            </div>
          </div>
          {/* text section */}
          <div className="w-full">
            <div className="flex items-start w-full mt-4">
              <p
                className="w-48 text-sm whitespace-nowrap font-semibold"
                style={{ minWidth: "12rem" }}
              >
                Jasa kurir / No Resi
              </p>
              <p className="w-3 relative -top-1" style={{ minWidth: "1rem" }}>
                :
              </p>
              <p className="text-sm whitespace-nowrap font-semibold">
                {this.props.dataEdit.courier?.name}
              </p>
            </div>
            <div className="flex items-start w-full mt-2">
              <p
                className="w-48 text-sm whitespace-nowrap font-semibold"
                style={{ minWidth: "12rem" }}
              >
                Tanggal pengiriman
              </p>
              <p className="w-3 relative -top-1" style={{ minWidth: "1rem" }}>
                :
              </p>
              <p className="text-sm whitespace-nowrap font-semibold">
                {" "}
                {moment(this.props.dataEdit.deliveryDate).format("DD/MM/YYYY")}
              </p>
            </div>
            <div className="flex items-start w-full mt-2">
              <p
                className="w-48 text-sm whitespace-nowrap font-semibold"
                style={{ minWidth: "12rem" }}
              >
                Nama pengirim
              </p>
              <p className="w-3 relative -top-1" style={{ minWidth: "1rem" }}>
                :
              </p>
              <p className="text-sm whitespace-nowrap font-semibold">
                {this.props.dataEdit.senderName}
              </p>
            </div>
            <div className="flex items-start w-full mt-2">
              <p
                className="w-48 text-sm whitespace-nowrap font-semibold"
                style={{ minWidth: "12rem" }}
              >
                Tujuan
              </p>
              <p className="w-3 relative -top-1" style={{ minWidth: "1rem" }}>
                :
              </p>
              <p className="text-sm font-semibold">
                {this.props.dataEdit.destinationAddress}
              </p>
            </div>
            <div className="flex items-start w-full mt-2">
              <p
                className="w-48 text-sm whitespace-nowrap font-semibold"
                style={{ minWidth: "12rem" }}
              >
                Biaya
              </p>
              <p className="w-3 relative -top-1" style={{ minWidth: "1rem" }}>
                :
              </p>
              <p className="text-sm whitespace-nowrap font-semibold">
                {`${formatRupiah(this.props.dataEdit.cost)}`}
              </p>
            </div>
          </div>

          <p className="font-semibold text-xs text-center mt-12">
            Terimakasih telah menggunakan jasa kami. Kami tunggu untuk
            pengiriman selanjutnya. Untuk Kalim Bisa Menghubungi No :
            08934343434
          </p>
        </div>
      </div>
    );
  }
}
