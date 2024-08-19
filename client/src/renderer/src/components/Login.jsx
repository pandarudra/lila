import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-1/2 h-96 flex flex-col justify-center p-6 shadow-lg rounded-lg bg-white">
      <h1 className="text-4xl text-center font-mono text-gray-800 mb-4">Login</h1>
      <form className="flex flex-col gap-3 items-center">
        <input
          type="text"
          placeholder="Username"
          className="w-1/2 p-2 m-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-1/2 p-2 m-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <div>
          <NavLink to="/forgotPassword" className="text-blue-500 font-semibold hover:underline">
            Forgot password?
          </NavLink>
        </div>
        <button
          type="submit"
          className="w-1/2 p-2 m-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded hover:from-blue-500 hover:to-blue-700"
        >
          Login
        </button>
      </form>
      <div className="flex justify-center items-center mt-4">
        <span className="text-gray-700">
          Don't have an account?
          <NavLink to="/signIn" className="text-blue-500 font-bold ml-1 hover:underline">
            Sign Up
          </NavLink>
        </span>
      </div>
    </div>
  )
}

export default Login
