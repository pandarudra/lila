import { NavLink } from 'react-router-dom'
const ForgotPassword = () => {
  return (
   <div className=' h-screen w-screen flex justify-center items-center'>
     <div className=" w-1/2 h-96  flex flex-col justify-center  ">
      <h1 className="text-4xl text-center font-mono ">Change Your Password</h1>
      <form className="flex flex-col gap-3 items-center">
        <input
          type="email"
          placeholder="Email"
          className="w-1/2 p-2 m-2 border border-gray-900 rounded"
        />
        {/* <input
          type="password"
          placeholder="Confirm Password"
          className="w-1/2 p-2 m-2 border border-gray-900 rounded"
        /> */}
       
        <button
          type="submit"
          className="w-1/2 p-2 m-2 hover:bg-cyan-950 bg-cyan-400 text-white rounded"
        >
        SUMBIT
        </button>
      </form>
      <div className="flex justify-center items-center">
        <span>
          Don't have an account ?
          <NavLink to="/signIn" className="text-cyan-400 font-semibold">
            {' '}
            Sign In
          </NavLink>
        </span>
      </div>
    </div>
   </div>
  )
}
export default  ForgotPassword