import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  const [recivedmsg,setrecivedmsg]=useState([])

  const [sendmsg,setsendmsg]=useState([])
  const viewmsg=async()=>{
    const res=await axios.get('http://localhost:3001/api/msg');
    setrecivedmsg(res.data)
    

  }
  return (
    <Link onClick={viewmsg} className="h-12 w-11/12  rounded flex justify-start gap-5 items-center px-2 ">
        <img 
          className=' h-10 w-10 rounded-full border'
        />
        <div>
          <div>
            <p className="text-white  text-sm">Johnfwelkfwneflekfjyttg Doe</p>
          </div>
          <div className='text-white'>
            active
          </div>
        </div>
    </Link>
  )
}

export default User