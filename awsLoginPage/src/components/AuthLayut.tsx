import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const AuthLayut = () => {
  return (
    <div className='h-screen w-full flex'>
        <div className='hidden lg:block w-[30%]'>
        <SideBar/>
        </div>
        <div>

        <Outlet/>
        </div>
    </div>
  )
}

export default AuthLayut