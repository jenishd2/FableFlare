import './App.css'
import {Header, Loader} from "./components/index"
import { Outlet } from 'react-router-dom'
import {Footer} from './components/index'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authServices from './appwrite/auth'
import {login,logout} from './store/authSlice'

function App() {
  const [Loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  // this is useEffect is use to check the user will Login Or not
  useEffect(()=>{
    authServices.getAccount()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
  
  return Loading ? (
    <div className='h-screen bg-black flex justify-center items-center'>
      <Loader/>
    </div>
  ): (
    <div className='bg-gray-100'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}


export default App
