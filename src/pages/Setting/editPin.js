import React from 'react'
import Modal from 'components/Modal'
import PinInput from 'react-pin-input'

export default function UpdatePin({ close, status }) {
  return (
    <Modal
      onClick={close}
      content={
        <div className="rounded-lg w-460px  bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="border b-2 text-center text-1-bold py-4">{status ? 'Matikan pin' : 'Hidupkan pin'}</p>
          <div className="p-6">
            <p className="text-center text-2 text-neutral-500">Masukkan PIN sekarang untuk ubah PIN</p>
            <div className="flex items-center justify-center">

              <PinInput
                focus
                length={6}
                secret
                onChange={null}
                type="numeric"
                inputMode="number"
                style={{ padding: '10px' }}
                inputStyle={{ borderColor: 'gray' }}
                inputFocusStyle={{ borderColor: 'blue' }}
                onComplete={null}
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
                {status ? 'Matikan pin' : 'Hidupkan pin'}
              </button>
            </div>
          </div>
        </div>
      }
    />
  )
}
