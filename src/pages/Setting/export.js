import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function Download({ data }) {

  return (

    <div className="row justify-content-end">
      <ExcelFile
        element={
          <button className="mt-6 bg-blue-300 py-4 cursor-pointer justify-center text-white text-2-bold w-full rounded-lg w-full focus:outline-none">
            Ekspor daftar transaksi</button>
        }>
        <ExcelSheet data={data} name="Employees">
          <ExcelColumn label="No resi" value="noResi" />
          <ExcelColumn label="Tanggal pengiriman" value="deliveryDate" />
          <ExcelColumn label="Pengirim" value="senderName" />
          <ExcelColumn label="Penerima" value="receiverName" />
          <ExcelColumn label="Alamat penerima" value="destinationAddress" />
          <ExcelColumn label="Kurir" value="courierName" />
          <ExcelColumn label="Biaya" value="cost" />
          <ExcelColumn label="Info" value="additionalInfo" />
        </ExcelSheet>
      </ExcelFile>
    </div>

  );

}

export default Download;
