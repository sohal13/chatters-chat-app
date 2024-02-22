import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import DefaultPage from './pages/DefaultPage.jsx'
import { useAuth } from './context/AuthContext.jsx'
import { VerifiedRout } from './context/VerifyUser.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/profile/Profile.jsx'

function App() {
  const {authUser} = useAuth();
  return (
    <>
     <div className='p-2 w-screen h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<VerifiedRout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>

        </Route>
      </Routes>
      <ToastContainer />
     </div>
    </>
  )
}

export default App
