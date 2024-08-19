import React, { useState } from 'react'

const SignIn = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmial] = useState('')
  const [data,setData] = useState([{}]);
  function handleSumbitBtn(event){
    event.preventDefault()
    const obj = {
        userName: userName,
        password: password,
        email:email
    }

    setData((prev)=> [prev,obj]);
    console.log(data);
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="  flex flex-col gap-3  rounded-2xl">
        <div className="flex justify-center items-center text-fuchsia-600 text-3xl font-bold">Sign In</div>
        <form className="flex flex-col mx-5 gap-3 " onClick={handleSumbitBtn}>
          <div>
            <label htmlFor="a" className="text-fuchsia-800 font-bold">User Name:</label>
            <br />
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
                className="px-3 w-96 h-9 rounded border-2 border-cyan-900"
              htmlFor="a"
            />
          </div>

          <div>
            <label htmlFor="b" className="text-fuchsia-800 font-bold">Email:</label>
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmial(e.target.value)}
              className="px-3 w-96 h-9 rounded border-2 border-cyan-900"
              htmlFor="b"
            />
          </div>
          <div>
            <label htmlFor="c" className=" text-fuchsia-800 font-bold">Password:</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 w-96 h-9 rounded border-2 border-cyan-900"
              htmlFor="c"
            />
          </div>
        </form>
        <button type="submit" className="h-8 w-32 mx-36 rounded-xl hover:bg-cyan-500 bg-fuchsia-800" onClick={handleSumbitBtn} >
               Sign Up
        </button>
      </div>
    </div>
  )
}

export default SignIn
