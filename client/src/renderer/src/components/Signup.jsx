import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';


const SignIn = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState([])

 async function handleSumbitBtn(event) {
    event.preventDefault()
    try {
      const res=await axios.post("http://localhost:3000/api/signup",{
        email,
        username:userName,
        password
      })
     toast.success("success")
      // const res=await fetch("http://localhost:3000/api/signup",{
      //   method:"POST",
      //   headers:{
      //     "Content-Type":"application/json"
      //   },
      //   body:JSON.stringify({
      //     email,
      //     username:userName,
      //     password
      //   })
      //   })
      //   const data=await res.json()
      
      // console.log(data)
      
    } catch (error) {
      toast.error("error")
      console.log(error);
    }
    const obj = {
      userName: userName,
      password: password,
      email: email
    }

    setData((prev) => [...prev, obj])
    console.log(data)
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
    <Toaster/>
      <div className="flex flex-col gap-3 p-6 rounded-2xl shadow-lg bg-white">
        <div className="flex justify-center items-center text-blue-600 text-3xl font-bold mb-4">
          Sign Up
        </div>
        <form className="flex flex-col mx-5 gap-3" onSubmit={handleSumbitBtn}>
          <div>
            <label htmlFor="a" className="text-blue-800 font-bold">
              User Name:
            </label>
            <br />
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="px-3 w-96 h-9 rounded border-2 border-blue-900 focus:outline-none focus:border-blue-500"
              id="a"
            />
          </div>

          <div>
            <label htmlFor="b" className="text-blue-800 font-bold">
              Email:
            </label>
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 w-96 h-9 rounded border-2 border-blue-900 focus:outline-none focus:border-blue-500"
              id="b"
            />
          </div>
          <div>
            <label htmlFor="c" className="text-blue-800 font-bold">
              Password:
            </label>
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 w-96 h-9 rounded border-2 border-blue-900 focus:outline-none focus:border-blue-500"
              id="c"
            />
          </div>
          <button
            type="submit"
            className="h-8 w-32 mx-auto mt-4 rounded-xl text-white bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-700 hover:to-blue-500"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <span className="text-gray-700">
            Already have an account?
            <NavLink to="/" className="text-blue-400 font-semibold ml-1 hover:underline">
              Log In
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SignIn
