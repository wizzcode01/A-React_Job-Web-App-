import { useState } from "react"
import { auth, googleProvider } from "../firebase"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"



const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   
   const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      if (!userCred.user.emailVerified){
        alert("please verify your email before logging in")
        await auth.signOut();
        return;
      }
     alert("login successful")
      navigate("/")
    }catch (error){
      alert("login failed: " + error.message)
    }
   }
  
    const handleGoogleLogin = async () => {
    try{
      await signInWithPopup(auth, googleProvider)
      alert("Google login successful!")
      navigate("/")
    }catch (error){
      alert("Google login failed: " + error.message)
    }
   
  };

  const handleAppleLogin = () => {
    // Add Apple login logic here
    alert("Apple login not implemented yet.");
  };

    return (
        <section className="flex items-center justify-center min-h-[85vh] md:min-h-screen bg-white">
           <form onSubmit={handleSubmit} className="bg-[#0077b6] p-8 rounded-[1rem] shadow-md w-full max-w-[95vw] md:max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center font-[cursive] text-white">Login to wiedicJobs</h2>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-300">Email</label>
              <input type="email"
                className="border border-none rounded-[2rem] w-full py-2 px-3" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required/>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-bold text-gray-300">Password</label>
              <input type="password"
               className="border border-none rounded-[2rem] w-full py-2 px-3"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
               />
            </div>
            <button className="bg-[#03045e] hover:bg-[#20228b] text-white font-bold py-2 px-4 rounded-[2rem] w-full" type="submit">
              Login
            </button>
            <div className="flex flex-col gap-3 mt-8">
             <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-[2rem] w-full hover:bg-gray-100"
             >
               <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
             </button>
             <button
               type="button"
               onClick={handleAppleLogin}
               className="flex items-center justify-center gap-2 bg-black text-white font-bold py-2 px-4 rounded-[2rem] w-full hover:bg-gray-900"
             
             >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-.06 0-.12 0-.18-.01.01-.13.02-.26.02-.39 0-1.14.93-2.07 2.07-2.07.06 0 .12 0 .18.01-.01.13-.02.26-.02.39zm3.47 4.13c-1.87-2.23-5.09-2.01-6.37-2.01-1.28 0-4.5-.22-6.37 2.01-2.18 2.6-1.81 7.44 1.72 11.13 1.23 1.33 2.7 2.81 4.65 2.81 1.95 0 3.42-1.48 4.65-2.81 3.53-3.69 3.9-8.53 1.72-11.13zm-6.37 15.44c-1.13 0-2.25-.37-3.13-1.09-.25-.2-.29-.57-.09-.82.2-.25.57-.29.82-.09.7.56 1.62.87 2.4.87.78 0 1.7-.31 2.4-.87.25-.2.62-.16.82.09.2.25.16.62-.09.82-.88.72-2 .09-3.13 1.09z"/>
            </svg>
            Continue with Apple 
             </button>
            </div>
           </form>
        </section>
    )
}
export default LoginPage 