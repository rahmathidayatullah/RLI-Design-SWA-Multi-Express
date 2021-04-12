import * as React from 'react'
import ModalDialog from 'components/Modal'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { putData } from "utils/fetchData"
import { useDispatch } from 'react-redux'
import { fetchCourier } from 'features/Courier/actions'
import { CgSpinnerAlt } from "react-icons/cg"
import { toast } from 'react-toastify'

const schema = yup.object().shape({
  name: yup.string().required('nama jasa kurir tidak boleh kosong.'),
  website: yup.string().required('url website tidak boleh kosong.'),
});

export default function EditCourierPage({ close, field }) {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: field.name,
      website: field.website,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await putData(`couriers/${field.id}`, data);
      if (res.data.success) {
        close()
        dispatch(fetchCourier());
        setLoading(false);
        notify(`berhasil edit kurir ${res.data.data.name}`)
      }
    } catch (err) {
      if (err.response.data.status === 403 || err.response.data.status === 404) {
        alert(err.response.data.message)
      }
      setLoading(false);
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

  return (
    <ModalDialog
      onClick={close}
      content={
        <form onSubmit={!loading ? handleSubmit(onSubmit) : null}>
          <div className="rounded-lg w-55vw bg-white absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="border b-2 text-center text-1-bold py-4">
              Edit jasa kurir
            </p>
            <div className="px-8">
              <p className="text-2-bold text-neutral-400 mb-2 mt-8">Nama jasa kurir</p>
              <input
                {...register("name")}
                type="text"
                name="name"
                className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 w-full"
                placeholder="Masukkan nama jasa kurir"
              />
              {errors.name && <p className="text-sm text-red-300">{errors.name.message}</p>}
              <p className="text-2-bold text-neutral-400 mb-2 mt-8">Website / URL jasa kurir</p>
              <input
                {...register("website")}
                name="website"
                type="text"
                className="rounded-lg pr-6 py-2 pl-4 border text-neutral-300 focus:outline-none border-neutral-200 w-full"
                placeholder="Masukkan link website"
              />
              {errors.website && <p className="text-sm text-red-300">{errors.website.message}</p>}
            </div>
            <div className="px-5 py-3 border-t-2 mt-5">

              <button className="items-center flex justify-center rounded-lg  w-full py-3 text-2-bold text-white bg-blue-300 focus:outline-none">
                {loading ? <div className={`animate-spin`}>
                  <CgSpinnerAlt />
                </div> : ''}
                Selesai edit jasa kurir
              </button>
            </div>
          </div>
        </form>
      }
    />
  )
}
