const Login = () => {
  return (
    <div className=" w-1/2 h-96 ">
      <h1 className="text-4xl text-center font-mono ">Login</h1>
      <form className="flex flex-col gap-3 items-center">
        <input
          type="text"
          placeholder="Username"
          className="w-1/2 p-2 m-2 border border-gray-900 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-1/2 p-2 m-2 border border-gray-900 rounded"
        />
        <button
          type="submit"
          className="w-1/2 p-2 m-2 hover:bg-cyan-950 bg-cyan-400 text-white rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
