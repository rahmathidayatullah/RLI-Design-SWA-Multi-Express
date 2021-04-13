import React from 'react'
import Radio from 'components/Radio'
import Modal from 'components/Modal'

export default function PageCourier({ data, close, idCourier, handleSelectCourier }) {
  return (
    <Modal
      onClick={close}
      content={
        <div className="rounded-lg w-460px h-5/6 bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="border b-2 text-center text-1-bold py-4">
            Pilih jasa kurir
         </p>
          <div className="overflow-scroll pt-4 h-87%">
            <ul>
              {data.map((courier, i) => {
                return (
                  <li key={i} className="py-4 pl-6 flex items-center justify-between" onClick={() => {
                    handleSelectCourier(courier)
                    close()
                  }}>
                    <p>{courier.name}</p>
                    <Radio name={"name"} checked={idCourier === courier.id ? true : false} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      }
    />
  )
}
