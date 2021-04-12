import Trasaction from 'pages/Transaction'
import CreateTrasaction from 'pages/Transaction/create'
import Signin from 'pages/Signin'
import Logout from 'pages/Logout'
import Setting from 'pages/Setting'
import Sidebar from 'components/sidebar'
import GuardRoute from 'utils/guardRoute'
import GuardOnlyRoute from 'utils/guardOnlyRoute'


const TrasactionPage = () => {
  return (
    <GuardRoute>
      <div className="flex items-start">
        <div className="w-1/4 flex justify-center h-screen pt-6">
          <Sidebar />
        </div>
        <div className="w-3/4 h-screen overflow-scroll px-5 pt-6">
          <Trasaction />
        </div>
      </div>
    </GuardRoute>
  )
}
const CreateTrasactionPage = () => {
  return (
    <GuardRoute>
      <div className="flex items-start">
        <div className="w-1/4 flex justify-center h-screen pt-6">
          <Sidebar />
        </div>
        <div className="w-3/4 h-screen overflow-scroll px-5 pt-6">
          <CreateTrasaction />
        </div>
      </div>
    </GuardRoute>
  )
}
const SettingPage = () => {
  return (
    <GuardRoute>
      <div className="flex items-start">
        <div className="w-1/4 flex justify-center h-screen pt-6">
          <Sidebar />
        </div>
        <div className="w-3/4 h-screen overflow-scroll px-5 pt-6">
          <Setting />
        </div>
      </div>
    </GuardRoute>
  )
}

const SigninPage = () => {
  return (
    <GuardOnlyRoute>
      <Signin />
    </GuardOnlyRoute>
  )
}

const router = [
  {
    path: "/",
    exact: true,
    component: SigninPage,
  },
  {
    path: "/transaction/create",
    exact: true,
    component: CreateTrasactionPage,
  },
  {
    path: "/transaction",
    exact: true,
    component: TrasactionPage,
  },
  {
    path: "/setting",
    exact: true,
    component: SettingPage,
  },
  {
    path: "/logout",
    exact: true,
    component: Logout,
  },
]

export default router