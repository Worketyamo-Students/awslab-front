import { Route, Routes } from 'react-router-dom'
import Account from './page/account'
import AuthLayut from './components/AuthLayut'
import Finalisation from './page/finalisation'
import Otp from './page/otp'
import WelcomePage from './page/welcomePage'
import Error from './page/notfound'

const App = () => {
  return (
  <div>
    <Routes>
      <Route element={<AuthLayut/>} path='/auth'>
        <Route index element={<Account/>} path='create'/>
        <Route element={<Finalisation/>} path='invite'/>
        <Route element={<Otp/>} path='otp'/>
        <Route element={<WelcomePage/>} path='welcome'/>
        <Route element={<Error/>} path='*'/>
      </Route>
    </Routes>
  </div>    

  )
}

export default App