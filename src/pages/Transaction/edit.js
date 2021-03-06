import * as React from 'react'
import Modal from 'components/Modal'
import { getData } from 'utils/fetchData'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import DatePicker from 'react-datepicker'
import SelectCourier from './courier'
import { fetchCourier } from 'features/Courier/actions'
import { useDispatch, useSelector } from 'react-redux'
import PinInput from 'react-pin-input'
import { toast } from 'react-toastify'
import { fetchTransaction } from 'features/Transaction/actions'
import { putData } from 'utils/fetchData'
import { CgSpinnerAlt } from "react-icons/cg"

const schema = yup.object().shape({
  noResi: yup.string().required('no resi tidak boleh kosong.'),
  destinationAddress: yup.string().required('alamat pengirimaan tidak boleh kosong.'),
  receiverName: yup.string().required('nama penerima tidak boleh kosong.'),
  senderName: yup.string().required('nama pengirin tidak boleh kosong.'),
  senderAddress: yup.string().required('alamat pengirim tidak boleh kosong.'),
  cost: yup.string().required('biaya tidak boleh kosong.'),
  // additionalInfo: yup.string().required('alamat pengirimaan tidak boleh kosong.'),
});

export default function EditTransaction({ close, transaction, setting }) {
  const [field, setField] = React.useState({})
  const [isShowCourier, setIsShowCourier] = React.useState(false)
  const [idCourier, setIdCourier] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [isShowPin, setIsShowPin] = React.useState(false)
  const dispatch = useDispatch()
  const courier = useSelector((state) => state.courier)
  const [formPin, setFormPin] = React.useState({})

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    const fetchSingleTransaction = async () => {
      const res = await getData(`transactions/${transaction}`)
      if (res.data.data.deliveryDate || res.data.data.courier) {
        res.data.data.deliveryDate = new Date(res.data.data.deliveryDate)
        res.data.data.courier = res.data.data.courier.name
      }
      setIdCourier(res.data.data.courierId)
      setField(res.data.data)
      setValue('noResi', res.data.data.noResi)
      setValue('deliveryDate', new Date(res.data.data.deliveryDate))
      setValue('destinationAddress', res.data.data.destinationAddress)
      setValue('receiverName', res.data.data.receiverName)
      setValue('senderName', res.data.data.senderName)
      setValue('senderAddress', res.data.data.senderAddress)
      setValue('cost', Number(res.data.data.cost))
      setValue('additionalInfo', res.data.data.senderAddress)
    }

    fetchSingleTransaction()
    dispatch(fetchCourier())
  }, [])

  const onSubmit = async (data) => {
    const payload = {
      courId: idCourier,
      noResi: data.noResi,
      deliveryDate: field.deliveryDate,
      receiverName: data.receiverName,
      destinationAddress: data.destinationAddress,
      senderName: data.senderName,
      senderAddress: data.senderAddress,
      cost: data.cost,
      additionalInfo: data.additionalInfo
    }
    setFormPin(payload)
    if (setting.data.shouldPinEdit) {
      setIsShowPin(true)
    } else {
      const res = await putData(`transactions/${field.id}`, payload)
      if (res.data.success) {
        dispatch(fetchTransaction())
        close()
        setLoading(false);
        notify(`berhasil hapus data transaksi.`)
      }
    }
  }
  const onComplete = async (value) => {
    try {
      const payload = {
        courId: formPin.courId,
        noResi: formPin.noResi,
        deliveryDate: formPin.deliveryDate,
        receiverName: formPin.receiverName,
        destinationAddress: formPin.destinationAddress,
        senderName: formPin.senderName,
        senderAddress: formPin.senderAddress,
        cost: formPin.cost,
        additionalInfo: formPin.additionalInfo,
        pin: value
      }

      setFormPin(payload)
      const res = await putData(`transactions/${field.id}/`, payload)
      if (res.data.success) {
        dispatch(fetchTransaction())
        close()
        setLoading(false);
        notify(`berhasil hapus data transaksi.`)
      }

    } catch (err) {
      if (err.response.data.code === "PIN_REQUIRED") {
        notifyError('pin yang anda masukan tidak salah.')
      } else if (err.response.data.code === "") {

      }
    }
  }

  // }
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

  const handleSelectCourier = (data) => {
    setField({ ...field, courier: data.name })
    setIdCourier(data.id)
    dispatch(fetchCourier())
  }


  return (

    <React.Fragment>
      <Modal
        onClick={close}
        content={
          <form onSubmit={!loading ? handleSubmit(onSubmit) : null}>
            <div className="rounded-lg w-55vw h-5/6 bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
              <p className="border b-2 text-center text-1-bold py-4">
                Edit transaksi
              </p>
              <div className="overflow-scroll pt-4 h-3/4">
                <div className="flex flex-col px-8">
                  <p className="text-2-bold text-neutral-400 mb-2"> Jasa kurir</p>
                  <div
                    className="rounded-lg pr-6 py-2 pl-4 border text-blue-300 border-neutral-200 cursor-pointer"
                    onClick={() => setIsShowCourier(true)}
                  >
                    {field.courier}
                  </div>
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">Nomor resi</p>
                  <input
                    {...register("noResi")}
                    name="noResi"
                    type="text"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Masukkan nomor resi"
                  />
                  {errors.noResi && <p className="text-sm text-red-300">{errors.noResi.message}</p>}
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">Tanggal pengiriman</p>
                  <DatePicker
                    onChange={(date) => setField({ ...field, deliveryDate: date })}
                    selected={field?.deliveryDate}
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 cursor-pointer"
                  />
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">Nama penerima</p>
                  <input
                    {...register("receiverName")}
                    name="receiverName"
                    type="text"
                    defaultValue={field.receiverName}
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Masukkan nama penerima"
                  />
                  {errors.receiverName && <p className="text-sm text-red-300">{errors.receiverName.message}</p>}
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">Alamat tujuan</p>
                  <textarea
                    {...register("destinationAddress")}
                    name="destinationAddress"
                    type="text"
                    defaultValue={field.destinationAddress}
                    rows="4"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Isi alamat"
                  />
                  {errors.destinationAddress && <p className="text-sm text-red-300">{errors.destinationAddress.message}</p>}
                  <hr className="my-10" />
                  <p className="text-2-bold text-neutral-400 mb-2">Nama pengirim</p>
                  <input
                    {...register("senderName")}
                    name="senderName"
                    type="text"
                    defaultValue={field.senderName}
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Isi nama pengirim"
                  />
                  {errors.senderName && <p className="text-sm text-red-300">{errors.senderName.message}</p>}
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">Alamat pengirim</p>
                  <textarea
                    {...register("senderAddress")}
                    name="senderAddress"
                    type="text"
                    defaultValue={field.senderAddress}
                    rows="4"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Isi alamat"
                  />
                  {errors.senderAddress && <p className="text-sm text-red-300">{errors.senderAddress.message}</p>}
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">Biaya</p>
                  <input
                    {...register("cost")}
                    name="cost"
                    defaultValue={Number(field.cost)}
                    type="number"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Rp."
                  />
                  {errors.cost && <p className="text-sm text-red-300">{errors.cost.message}</p>}
                  <p className="text-2-bold text-neutral-400 mb-2 mt-8">Informasi tambahan</p>
                  <textarea
                    {...register("additionalInfo")}
                    name="additionalInfo"
                    defaultValue={field.additionalInfo}
                    rows="4"
                    type="text"
                    className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200"
                    placeholder="Isi informasi tambahan"
                  />
                </div>
                <div className="absolute bottom-0 left-0 grid grid-cols-2 gap-2 items-center w-full px-4 pb-2">
                  <div className="col-span-1">
                    <button onClick={close} className="bg-white border rounded-lg border-neutral-300 text-neutral-300 w-full py-2 text-2-bold">
                      Batal edit
                </button>
                  </div>
                  <div className="col-span-1">
                    <button type="submit" className="rounded-lg  w-full py-2 text-2-bold text-white bg-blue-300">
                      Selesai edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        }
      />

      {isShowCourier && <SelectCourier
        data={courier.data} close={() => setIsShowCourier(false)}
        idCourier={idCourier}
        handleSelectCourier={(data) => handleSelectCourier(data)}
      />}

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
                <button className="justify-center items-center flex text-center bg-blue-300 rounded-lg text-white w-full py-4 focus:outline-none">
                  {loading && <div className={`animate-spin`}>
                    <CgSpinnerAlt />
                  </div>} Selesai edit transaksi
                  </button>
              </div>
            </div>
          </div>
        }
      />}
    </React.Fragment>
  )
}
