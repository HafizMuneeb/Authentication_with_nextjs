"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    number: ""
  })

  const onSignUp = async () => {

  }

  return (
    <main className="flex justify-center items-center w-full h-auto sm:h-screen xl:overflow-hidden bg-gradient-to-t from-[#030637] to-[#2b053b] overflow-visible">
      <div className="w-[380px] h-auto bg-transparent border-y-4 border-x-4 border-x-rose-500 border-y-yellow-500 flex flex-col flex-wrap gap-5 justify-center items-center rounded-lg py-8 overflow-hidden">
        <div>
          <h1 className="text-white font-semibold text-2xl"><span className="border-b-4 border-b-orange-500 rounded">Sign</span> Up</h1>
        </div>
        <div className="flex flex-wrap flex-col gap-1 w-full px-8">
          <label htmlFor="username" className="text-white text-lg font-semibold text-pretty">User Name</label>
          <input type="text" 
            id="username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="User Name"
            className="w-full p-2 rounded placeholder:italic border placeholder:text-blue-600 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:shadow-md focus:shadow-orange-600"
          />
          <br />
          <label htmlFor="username" className="text-white text-lg font-semibold text-pretty">Email</label>
          <input type="email" 
            id="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="muneeb@example.com"
            className="w-full p-2 rounded placeholder:italic border placeholder:text-blue-600 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:shadow-md focus:shadow-orange-600"
          />
          <br />
          <label htmlFor="password" className="text-white text-lg font-semibold text-pretty">Password</label>
          <input type="password" 
            id="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="Your Password"
            className="w-full p-2 rounded placeholder:italic border placeholder:text-blue-600 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:shadow-md focus:shadow-orange-600"
          />
          <br />
          <label htmlFor="number" className="text-white text-lg font-semibold text-pretty">Number</label>
          <input type="number" 
            id="number"
            value={user.number}
            onChange={(e) => setUser({...user, number: e.target.value})}
            placeholder="Phone Number"
            className="w-full p-2 rounded placeholder:italic border placeholder:text-blue-600 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:shadow-md focus:shadow-orange-600"
          />
          <br />
          <button onClick={onSignUp}
            className="bg-violet-500 pt-2 pb-2 rounded text-white text-lg font-semibold hover:bg-sky-700 active:bg-indigo-700"
           >Sign Up</button>
          <br />
          <Link href="/login">
            <p className="text-white">Already have an account! <span className=" text-blue-300"> <span className="border-b-2 border-orange-500 rounded-sm">Sign</span> In</span></p>
          </Link>
        </div>

      </div>
    </main>
  )
}

export default Signup