import { NavLink }  from 'react-router-dom'
import { useAuth } from './AuthContext'
import { FaHome, FaBriefcase, FaPlus, FaUser, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa'

const BottomNav = () => {
    const { user, logout } = useAuth()

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0077b6] border-t border-[#0096c7] flex justify-around items-center py-2 md:hidden">
           {user ? (
            <>
             <NavLink to="/" className="flex flex-col items-center text-white">
               <FaHome className="text-xl"/>
               <span className="text-xs">Home</span>
             </NavLink>
             <NavLink to="/jobs" className="flex flex-col items-center text-white">
                <FaBriefcase className="text-xl"/>
                <span className="text-xs">Jobs</span>
             </NavLink>
             <NavLink to="/add-job" className="flex flex-col items-center text-white">
                <FaPlus className="text-xl" />
               <span className="text-xs">Add</span>
             </NavLink>
             <NavLink to="/profile" className="flex flex-col items-center text-white">
                <FaUser className="text-xl" />
                <span className="text-xs">Profile</span>
             </NavLink>
             <button onClick={logout} className="flex flex-col items-center text-white">
               <FaSignOutAlt className="text-xl" />
               <span className="text-xs">Logout</span>
             </button>
            </>
           ) : (
            <>
             <NavLink to="/login" className="flex flex-col items-center text-white">
               <FaSignInAlt className="text-xl" />
               <span className="text-xs">Login</span>
             </NavLink>
            <NavLink to="/registration" className="flex flex-col items-center text-white">
                <FaUser className="text-xl" />
                <span className="text-xs">Register</span>
            </NavLink>
            </>
           )

           } 
        </nav>
    )
}

export default BottomNav