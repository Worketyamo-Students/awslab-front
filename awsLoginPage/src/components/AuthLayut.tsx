import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const AuthLayut = () => {
  return (
    <div className='h-screen flex'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default AuthLayut