import * as React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { postData } from "utils/fetchData"
import { useDispatch } from 'react-redux'
import { userLogin } from 'features/Auth/actions'
import { useHistory } from 'react-router-dom'

const schema = yup.object().shape({
  password: yup.string().required('masukan kata sandi anda.'),
  username: yup.string().required('username tidak boleh kosong.'),
  website: yup.string().url()
});

export default function SigninPage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [loading, setLoading] = React.useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await postData("users/login", data);
      const token = res.data.data.token
      dispatch(userLogin(token));
      setLoading(false);
      history.push("/transaction/create");
    } catch (err) {
      if (err.response.data.status === 403 || err.response.data.status === 404) {
        alert(err.response.data.message)
      }
      setLoading(false);
    }
  }


  return (
    <div className="flex justify-center bg-gray-500 h-screen">
      <div className="rounded-xl bg-white px-10 self-center h-1/2 w-1/3 shadow-gray flex justify-center">
        <form className="self-center px-2" onSubmit={!loading ? handleSubmit(onSubmit) : null}>
          <div className="flex justify-center mb-10">
            <p className="text-xl text-gray-200">SWA</p>
            <p className="text-2xl font-semibold text-gray-400"> YUYUN</p>
          </div>
          <div className="my-5">

            <input
              {...register("username")}
              type="text"
              name="username"
              className={`w-64px pl-4 py-2 border duration-500 focus:outline-none outline-none placeholder-gray-300 border-gray-400 rounded-lg`}
              placeholder="masukan username"
            />
            {errors.username && <p className="text-sm text-red-300">{errors.username.message}</p>}
          </div>
          <div>
            <input
              className={`w-64px pl-4 py-2 border duration-500 focus:outline-none outline-none placeholder-gray-300 border-gray-400 rounded-lg`}
              {...register("password")}
              type="text"
              name="password"
              placeholder="masukan kata sandi"
            />
            {errors.password && <p className="text-sm text-red-300">{errors.password.message}</p>}
          </div>
          <button disabled={loading ? true : false} className="mt-3 rounded-lg px-4 py-2 text-sm cursor-pointer text-white font-semibold focus:outline-none duration-500 bg-blue-300 hover:bg-blue-200  active:bg-blue-100">
            Masuk
          </button>
        </form>
      </div>
    </div>
  )
}
