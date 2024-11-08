import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'> Signup</h1>
      <form className='flex flex-col gap-4'>
        <input type='text'placeholder='username' id='username' className='bg-slate-100 p-3 rounded-lg'></input>
        <input type='email'placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg'></input>
        <input type='password'placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg'></input>
        <button className='bg-slate-800 rounded-lg uppercase hover:opacity-75 text-white p-3'>Sign up</button>
      </form>
    </div>
  )
}
