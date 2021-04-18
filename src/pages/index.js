import * as React from "react";
import CheckCircle from "assets/icon/CheckCircle";
import Print from "assets/icon/Print";
import Info from "assets/icon/Info";
import { Link, useLocation } from "react-router-dom";
import { getData } from "utils/fetchData";
import ComponentToPrint from "pages/Transaction/print";
import { useReactToPrint } from "react-to-print";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function PageSuccess() {
  let query = useQuery();
  const [dataEdit, setDataEdit] = React.useState({});

  React.useEffect(() => {
    const fetchSingleTransaction = async () => {
      const res = await getData(`transactions/${query.get("id")}`);
      if (res.data.success) {
        setDataEdit(res.data.data);
      }
    };
    fetchSingleTransaction();
  }, []);

  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleBeforeToPrint = async () => {
    handlePrint();
  };

  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center pr-10 mr-20 border-r">
        <CheckCircle fill={"#3C60CD"} width={"105px"} height={"105px"} />
        <p className="heading-3 mt-11">Transaksi berhasil ditambah</p>
        <p className="text-2 mt-2 mb-11">{query.get("noResi")}</p>
        <button
          onClick={() => handleBeforeToPrint()}
          className="focus:outline-none text-2-bold text-white rounded-lg w-72 py-3 bg-blue-300 flex items-center justify-center "
        >
          <Print fill={"#FFFFFF"} className={"mr-2"} />
          <p>Cetak transaksi</p>
        </button>
        <Link to="/transaction">
          <button className="focus:outline-none text-2-bold text-white rounded-lg w-72 py-3 bg-blue-300 flex items-center justify-center mt-2">
            <Info fill={"#FFFFFF"} className={"mr-2"} />
            <p>Lihat detail transaksi</p>
          </button>
        </Link>
        <Link to="/transaction/create">
          <button className="focus:outline-none text-2-bold text-blue-300 border border-blue-300 rounded-lg w-72 py-3 mt-2">
            Selesai
          </button>
        </Link>
      </div>
      <ComponentToPrint dataEdit={dataEdit} ref={componentRef} />
    </div>
  );
}
