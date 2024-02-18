import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/SignUp.jsx'

function App() {

  return (
    <>

     <div className='p-4 h-screen flex items-center justify-center'>
      <Home/>
      {/*<div className='p-4 md:px-10 mb-10 flex justify-around flex-col'>
      <h1  className='text-3xl md:text-6xl text-black font-bold p-6'>
        <span className='md:text-white p-1'>Hey, what's up? </span>
        <span className='p-1'>Let's roll and start chatting,</span>
        <span className='text-white p-1'>Chatters!!</span>
        </h1>
        <button className="btn bg-slate-950 text-white text-xl w-1/4 self-center mt-6">
            LogIn
        </button>
  </div>*/}
     </div>
    </>
  )
}

export default App
