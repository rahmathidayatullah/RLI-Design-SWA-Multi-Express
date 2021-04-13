import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTransaction, setKeyword } from 'features/Transaction/actions'
import { fetchSetting } from 'features/Setting/actions'
import FadeLoader from "react-spinners/FadeLoader"
import Search from "assets/icon/Search"
import Edit from "assets/icon/Edit";
import Print from "assets/icon/Print";
import Trash from "assets/icon/Trash";
import { formatRupiah } from 'utils/formatRupiah'
import moment from 'moment'
import Modal from 'components/Modal'
import { getData, postData } from 'utils/fetchData'
import { CgSpinnerAlt } from "react-icons/cg"
import PinInput from 'react-pin-input'
import { ToastContainer, toast } from 'react-toastify'
import ModalEdit from './edit'

export default function TrasactionPage() {
  const dispatch = useDispatch()
  const transaction = useSelector((state) => state.transaction)
  const setting = useSelector((state) => state.setting)
  const [isShowEdit, setIsShowEdit] = React.useState({ status: false, id: '', loading: false })
  const [dataEdit, setDataEdit] = React.useState({})
  const [isShowAlert, setIsShowAlert] = React.useState(false)
  const [isShowPin, setIsShowPin] = React.useState(false)
  const [isShowModalEdit, setIsShowModalEdit] = React.useState(false)

  const [loading, setLoading] = React.useState({
    isRemove: false
  })

  React.useEffect(() => {
    dispatch(fetchTransaction())
  }, [dispatch, transaction.keyword])

  React.useEffect(() => {
    dispatch(fetchSetting())
  }, [])

  if (transaction.status === 'idle') return <FadeLoader color={'#123abc'} />

  const handleShowFieldEdit = async (data) => {
    setIsShowEdit({ ...isShowEdit, status: true, id: data.id, loading: true })
    const res = await getData(`transactions/${data.id}`)
    if (res.data.success) {
      setIsShowEdit({ status: true, loading: false, id: data.id })
      setDataEdit(res.data.data)
    }
  }

  const handleShowRemoveTransaction = async () => {
    setIsShowAlert(true)
  }

  const handleRemoveTransaction = async () => {
    if (setting.data.shouldPinDelete) {
      setIsShowPin(true)
    } else {
      const res = await postData(`transactions/${dataEdit.id}/delete`, {})
      if (res.data.success) {
        setIsShowEdit({ ...isShowEdit, status: false, id: null, loading: false })
        dispatch(fetchTransaction());
        setLoading({ ...loading, isRemove: false });
        notify(`berhasil hapus data transaksi.`)
        setIsShowAlert(false)
      }
    }
  }
  const onComplete = async (value) => {
    try {
      const payload = { pin: value }
      const res = await postData(`transactions/${dataEdit.id}/delete`, payload)
      if (res.data.success) {
        setIsShowEdit({ ...isShowEdit, status: false, id: null, loading: false })
        dispatch(fetchTransaction());
        setLoading({ ...loading, isRemove: false });
        notify(`berhasil hapus data transaksi.`)
        setIsShowAlert(false)
        setIsShowPin(false)
      }

    } catch (err) {
      if (err.response.data.code === "PIN_INCORRECT") {
        setIsShowAlert(false)
        notifyError('pin yang anda masukan tidak salah.')
      }
    }

  }
  const notify = (data) => toast.success(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  const notifyError = (data) => toast.error(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  return (
    <React.Fragment>
      <ToastContainer />
      {/* START: HEADER */}
      <div className="flex items-center bg-white p-4 shadow-card rounded-lg">
        <div className="grid grid-cols-11 gap-2 w-full">
          <div className="col-span-5  border rounded-lg border-neutral-200 flex items-center pl-5 py-4">
            <Search fill={"#858585"} />
            <input
              type="text"
              name={transaction.keyword}
              onChange={(e) => dispatch(setKeyword(e.target.value))}
              className="bg-transparent focus:outline-none pl-3 text-neutral-300 w-full"
              placeholder="Cari nama, no. resi, atau alamat"
            />
          </div>
          <div
            className="col-span-2 border rounded-lg border-neutral-200 py-4 flex items-center justify-center text-neutral-300 cursor-pointer"
          // onClick={() =>
          //   modalFilterJasaKurir === false
          //     ? setModalFilterjasakurir(true)
          //     : setModalFilterjasakurir(false)
          // }
          >
            Filter jasa kurir
          </div>
          <div
            className="col-span-2 border rounded-lg border-neutral-200 py-4 flex items-center justify-center text-neutral-300 cursor-pointer"
          // onClick={() =>
          //   modalFilterHarga === false
          //     ? setModalFilterHarga(true)
          //     : setModalFilterHarga(false)
          // }
          >
            Filter harga
          </div>
          <div
            className="col-span-2 border rounded-lg border-neutral-200 py-4 flex items-center justify-center text-neutral-300 cursor-pointer"
          // onClick={() =>
          //   modalCalenderDT === false
          //     ? setModalCalenderDT(true)
          //     : setModalCalenderDT(false)
          // }
          >
            Filter tanggal
          </div>
        </div>
      </div>
      {/* END: HEADER */}

      {/* START: LIST TRANSACTION */}
      {/* END: LIST TRANSACTION */}

      <div className="grid grid-cols-11 gap-7 mt-5">
        <div className="col-span-6">
          {transaction.status === 'process' ? <FadeLoader color={'#123abc'} /> : transaction.data.map((data, i) => {
            return (
              <div
                key={i}
                onClick={() => handleShowFieldEdit(data)}
                className={`mb-2 rounded-lg p-6 shadow-card ${data.id === isShowEdit.id ? 'bg-blue-300 text-neutral-100' : 'bg-neutral-100 text-neutral-400'}  hover:bg-blue-300 duration-200 flex items-center justify-between  hover:text-neutral-100 cursor-pointer`}>
                <div>
                  <p className="text-2-bold">{data.senderName}</p>
                  <p className="text-3 py-1">{moment(data.deliveryDate).format('DD/MM/YYYY')} &sdot; {data.courier?.name}</p>
                  <p className="text-3">{data.noResi}</p>
                </div>
                <p className="text-2-bold">{formatRupiah(data.cost)}</p>
              </div>
            )
          })}

        </div>
        {isShowEdit.status && <div className="col-span-5 shadow-card">
          {/* content right */}
          <div className="bg-white pb-9 border-b-2">
            {isShowEdit.loading ? <FadeLoader color={'#123abc'} /> :
              <div className="px-12 pt-6">
                <p className="text-3-bold">Nomor resi</p>
                <p className="text-2">{dataEdit.noResi}</p>
                <p className="text-3-bold mt-8">Jasa kurir</p>
                <p className="text-2">{dataEdit.courier?.name}</p>
                <p className="text-3-bold mt-8">Tanggal pengiriman</p>
                <p className="text-2">{moment(dataEdit.deliveryDate).format('DD/MM/YYYY')}</p>
                <p className="text-3-bold mt-8">Alamat tujuan</p>
                <p className="text-2">{dataEdit.destinationAddress}</p>
                <p className="text-3-bold mt-8">Biaya</p>
                <p className="text-2">{`${formatRupiah(dataEdit.cost)}`}</p>
                <p className="text-3-bold mt-8">Nama pengirim</p>
                <p className="text-2">{dataEdit.senderName}</p>
              </div>}

          </div>
          <div className="shadow-card p-4">
            <div className="grid grid-cols-12 gap-2">
              <div
                className="col-span-4"
                onClick={() => setIsShowModalEdit(true)}
              >
                <button className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer focus:outline-none">
                  <Edit fill={"#3C60CD"} />
                </button>
              </div>
              <div className="col-span-4">
                <button className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer focus:outline-none">
                  <Print fill={"#3C60CD"} />
                </button>
              </div>
              <div className="col-span-4">
                <button onClick={handleShowRemoveTransaction} className="flex items-center justify-center w-full bg-blue-100 rounded-lg py-3 cursor-pointer focus:outline-none">
                  <Trash fill={"#3C60CD"} />
                </button>
              </div>
            </div>
          </div>
        </div>
        }


        {isShowAlert && <Modal
          onClick={() => setIsShowAlert(false)}
          content={
            <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Batal tambah transaksi?
              </p>
              <div className="p-6">
                <p className="text-center text-2 text-neutral-500">
                  Apakah Anda yakin ingin hapus transaksi? Semua data yang telah
                  dicatat akan hilang dan tidak bisa dikembalikan lagi jika Anda
                  lanjut untuk hapus.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1 px-3 pb-3 border-t-2 pt-3">
                <div className="col-span-1">
                  <button onClick={() => setIsShowAlert(false)} className="text-center bg-white text-blue-300 border border-blue-300 rounded-lg  w-full py-4 focus:outline-none">
                    Kembali
                  </button>
                </div>
                <div
                  className="flex"
                  onClick={() => handleRemoveTransaction()}
                >
                  <button className="justify-center items-center flex text-center bg-red-300 rounded-lg text-white w-full py-4 focus:outline-none">
                    {loading.isRemove && <div className={`animate-spin`}>
                      <CgSpinnerAlt />
                    </div>}   Hapus transaksi
                  </button>
                </div>
              </div>
            </div>
          }
        />
        }
      </div>

      {isShowPin && <Modal
        onClick={() => setIsShowPin(false)}
        content={
          <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="border b-2 text-center text-1-bold py-4">Konfirmasi PIN</p>
            <div className="p-6">
              <p className="text-center text-2 text-neutral-500">Masukkan PIN untuk konfirmasi hapus transaksi</p>
              <div className="flex items-center justify-center">

                <PinInput
                  focus
                  length={6}
                  secret
                  type="numeric"
                  inputMode="number"
                  style={{ padding: '10px' }}
                  inputStyle={{ borderColor: 'gray' }}
                  inputFocusStyle={{ borderColor: 'blue' }}
                  onComplete={onComplete}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1 px-3 pb-3 border-t-2 pt-3">
              <div className="col-span-1">
                <button onClick={() => setIsShowPin(false)} className="text-center bg-white text-blue-300 border border-blue-300 rounded-lg w-full py-4 focus:outline-none">
                  Kembali
                </button>
              </div>
              <div className="col-span-1">
                <button className="justify-center items-center flex text-center bg-red-300 rounded-lg text-white w-full py-4 focus:outline-none">
                  {loading.isRemove && <div className={`animate-spin`}>
                    <CgSpinnerAlt />
                  </div>}   Hapus transaksi
                  </button>
              </div>
            </div>
          </div>
        }
      />}

      {isShowModalEdit && <ModalEdit

        setting={setting}
        transaction={isShowEdit.id}
        close={() => {
          setIsShowModalEdit(false)
          setIsShowEdit({ ...isShowEdit, status: false, id: null, loading: false })
        }}
      />}


    </React.Fragment>
  )
}
