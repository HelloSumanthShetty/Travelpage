import React from 'react'

function Header() {
  return (
    <header className='flex items-center space-x-3 z-50  justify-center top-0 sticky h-22 bg-gray-200 shadow-zinc-800 shadow-md hover:shadow-lg '>
        <img className=' rounded-lg h-16  w- auto shrink-0 ' src="https://media1.giphy.com/media/ZYR6BXtEgKiFdlppA0/200w.gif?cid=6c09b952jftvrntpw2je1wfc59xj00voaq55mwgqadygzsdx&ep=v1_gifs_search&rid=200w.gif&ct=g"  alt="gobal react" />
    <h1 className='font-extrabold pl-7 text-3xl animate-bounce    '>Global travels</h1>
    </header>
  )
}

export default Header