import * as React from 'react'
import Modal from 'components/Modal'
import PinInput from 'react-pin-input'
import { putData } from 'utils/fetchData'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { fetchSetting } from 'features/Setting/actions'

export default function UpdatePin({ close }) {
  const dispatch = useDispatch()
  const [oldPin, setOldPin] = React.useState(null)
  const [isShow, setIsShow] = React.useState(false)

  const onComplateOldPin = (value) => {
    setOldPin(value)
    setIsShow(true)
  }

  const onComplateNewPin = async (value) => {
    try {
      const payload = {
        oldPin,
        newPin: value
      }

      const res = await putData('settings/pin', payload)

      if (res.data.success) {
        notify('pin berhasil diubah')
        close()
        setIsShow(false)
        dispatch(fetchSetting())
      }

    } catch (err) {
      if (err.response.data.code === "INVALID_OLD_PIN") {
        setIsShow(false)
        notifyError('pin sekarang anda tidak valid!.')
      }
    }
  }

  const notifyError = (data) => toast.error(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

  const notify = (data) => toast.success(data, {
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
      <Modal
        onClick={close}
        content={
          <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="border b-2 text-center text-1-bold py-4">Ubah PIN</p>
            <div className="p-6">
              <p className="text-center text-2 text-neutral-500">Masukkan PIN sekarang untuk ubah PIN</p>
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
                  onComplete={onComplateOldPin}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1 px-3 pb-3 border-t-2 pt-3">
              <div className="col-span-1">
                <button onClick={close} className="text-center bg-white text-blue-300 border border-blue-300 rounded-lg w-full py-4 focus:outline-none">
                  Kembali
              </button>
              </div>
              <div className="col-span-1">
                <button className="text-center bg-blue-300 rounded-lg text-white w-full py-4 focus:outline-none">
                  Lanjut
                </button>
              </div>
            </div>
          </div>
        }
      />

      {isShow && <Modal
        onClick={close}
        content={
          <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="border b-2 text-center text-1-bold py-4">Ubah PIN</p>
            <div className="p-6">
              <p className="text-center text-2 text-neutral-500">Masukkan PIN yang baru</p>
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
                  onComplete={onComplateNewPin}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1 px-3 pb-3 border-t-2 pt-3">
              <div className="col-span-1">
                <button onClick={() => { setIsShow(false) }} className="text-center bg-white text-blue-300 border border-blue-300 rounded-lg w-full py-4 focus:outline-none">
                  Kembali
              </button>
              </div>
              <div className="col-span-1">
                <button className="text-center bg-blue-300 rounded-lg text-white w-full py-4 focus:outline-none">
                  Selesai
                </button>
              </div>
            </div>
          </div>
        }
      />}
    </React.Fragment>

  )
}
