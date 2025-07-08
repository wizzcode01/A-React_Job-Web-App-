import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import BottomNav from "../components/BottomNav"


const MainLayout = () => {
    return (
        <>
          <Navbar/>
          <Outlet/>
          <ToastContainer/>
          <BottomNav/>
        </>
    )
}
export default MainLayout;