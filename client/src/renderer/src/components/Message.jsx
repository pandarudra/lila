import React, { useState } from 'react'
import User from './User'

const Message = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="h-screen  w-1/4 bg-slate-50">
      <div className="h-full bg-black w-full flex flex-col gap-5">
        <section className="w-full h-12  px-7  font-bold text-3xl text-white">Chats</section>
        <section>
          <form className="h-full w-full flex justify-center">
            <input
              type="search"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-2  w-11/12 h-10 rounded-md  bg-slate-900 text-white"
            />
          </form>
        </section>
        <section className="w-full h-4/5 border">
          <ul>
            <li className="w-full h-16  flex  justify-center items-center gap-5">
              <User />
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Message
