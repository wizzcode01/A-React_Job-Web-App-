import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useAuth } from './AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout } = useAuth()
  const location = useLocation() // get current route

  const LinkClass = ({isActive}) => 
    isActive? 'text-white bg-[#0096c7] hover:bg-[#023e8a] hover:text-white rounded-md px-3 py-2 font-semibold' : 'text-white hover:bg-[#023e8a] hover:text-white rounded-md px-3 py-2 font-semibold'
    console.log("navbar user", user)

    const showSearchAndProfile = !['/login', '/registration'].includes(location.pathname)

    return (
        <nav className ='bg-[#0077b6]'>
           <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
             <div className='flex h-20 items-center justify-between'>
                <div className='flex flex-1 items-center justify-between md:items-stretch md:justify-start'>
                   <NavLink
                    className='flex flex-shrink-0 items-center mr-4'
                    to='/'
                   >
                    <img 
                        className='h-10 w-auto'
                        src={logo}
                        alt="React Jobs" 
                    />
                    <span className={
                      `text-[17px] sm:text-[20px] md:block text-white md:text-2xl font-bold ml-2` + 
                      (
                        ['/login', '/registration'].includes(location.pathname)
                        ? ' text-[1.5rem] sm:text-[2rem] md:text-[2.5rem text-lg] '
                        : ''
                      )
                    }
                  >
                        WiedicJobs
                    </span>
                   </NavLink>
                   {/*Desktop nav links */}
                    <div className='hidden md:flex md:ml-auto'> 
                        <div className='flex space-x-2'>
                          {
                            user ? (
                              <>
                                  <NavLink
                                  to='/'
                                  className={LinkClass}
                                >
                                 Home
                                 </NavLink>
                                <NavLink
                                to='/jobs'
                                    className={LinkClass}
                                    >
                                    Jobs
                                </NavLink>
                                <NavLink 
                                to='/add-job'
                                    className={LinkClass}>
                                    Add Jobs
                                </NavLink>
                                <button onClick={logout} className="text-white hover:bg-gray-900 hover:text-blue-400 rounded-md px-3 py-2 font-semibold">Logout</button>
                              </>
                            ) : (
                              <>
                                  <NavLink
                                  to="/login" className={LinkClass}>Login</NavLink>
                                  <NavLink
                                  to="/registration" className={LinkClass}>Register</NavLink>
                              </>
                            )
                          }
                      </div>
                    </div>
                   { /*Mobile: search + profile, only show if not on login/registration */ } 
                   {showSearchAndProfile && (
                    <div className=" flex items-center gap-3 md:hidden w-full justify-end">
                     <input
                      type="text"
                      placeholder='search jobs...'
                      className="px-3 py-2 rounded-[2rem] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096c7] w-2/3 text-sm"
                     />
                     <NavLink to={user ? "/profile" : "/login"}>
                       <FaUserCircle className="text-white text-3xl"/>
                     </NavLink>
                   </div>
                   )}
                </div>
             </div>
           </div>
        </nav>
    )
}
export default Navbar