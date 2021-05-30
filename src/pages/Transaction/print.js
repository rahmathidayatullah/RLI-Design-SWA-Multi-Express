import React, { Component } from "react";
import moment from "moment";
import { formatRupiah } from "utils/formatRupiah";
import IconBarcode from "assets/icon/bacrode_test.png";
import IconSWA from "assets/icon/Untitled.png";

export default class Print extends Component {
  render() {
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
          <div className="flex items-center">
            {/* image logo */}
            <img src={IconSWA} />

            <div className="flex flex-col items-center">
              <p className="font-semibold whitespace-nowrap">
                PT.SWA MULTI EXPRESS
              </p>
              {/* IMAGE BARCODE */}
              <img src={IconBarcode} />
              <p>SME06-06022021</p>
            </div>
          </div>
          {/* text section */}
          <div className="w-full">
            <div className="flex items-center w-full mt-4">
              <p className="w-48 text-sm whitespace-nowrap font-semibold">
                Jasa kurir / No Resi
              </p>
              <p className="text-sm whitespace-nowrap font-semibold">
                : {this.props.dataEdit.noResi}
              </p>
            </div>
            <div className="flex items-center w-full mt-2">
              <p className="w-48 text-sm whitespace-nowrap font-semibold">
                Tanggal pengiriman
              </p>
              <p className="text-sm whitespace-nowrap font-semibold">
                :{" "}
                {moment(this.props.dataEdit.deliveryDate).format("DD/MM/YYYY")}
              </p>
            </div>
            <div className="flex items-center w-full mt-2">
              <p className="w-48 text-sm whitespace-nowrap font-semibold">
                Nama pengirim
              </p>
              <p className="text-sm whitespace-nowrap font-semibold">
                : {this.props.dataEdit.courier?.name}
              </p>
            </div>
            <div className="flex items-center w-full mt-2">
              <p className="w-48 text-sm whitespace-nowrap font-semibold">
                No Telpon Pengirim
              </p>
              <p className="text-sm whitespace-nowrap font-semibold">
                : 091139293923
              </p>
            </div>
            <div className="flex items-center w-full mt-2">
              <p className="w-48 text-sm whitespace-nowrap font-semibold">
                Tujuan
              </p>
              <p className="text-sm whitespace-nowrap font-semibold">
                : {this.props.dataEdit.destinationAddress}
              </p>
            </div>
            <div className="flex items-center w-full mt-2">
              <p className="w-48 text-sm whitespace-nowrap font-semibold">
                Biaya
              </p>
              <p className="text-sm whitespace-nowrap font-semibold">
                : {`${formatRupiah(this.props.dataEdit.cost)}`}
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
