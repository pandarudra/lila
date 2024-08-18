import Login from './Login'

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <img
        src="https://images.unsplash.com/photo-1723714521054-7caf8ec7f5c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="logo"
        className="w-full h-1/2"
      />
      <Login />
    </div>
  )
}

export default Home
