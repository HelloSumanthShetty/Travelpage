import React from 'react'

function Header() {
  return (
    <header className='flex items-center space-x-4 z-50  justify-center top-0 sticky h-20 md:h-32 bg-emerald-600  shadow-zinc-800 shadow-md  '>
        <img className=' rounded-lg h-15 md:h-25  w- auto shrink-0 ' src="https://media1.giphy.com/media/ZYR6BXtEgKiFdlppA0/200w.gif?cid=6c09b952jftvrntpw2je1wfc59xj00voaq55mwgqadygzsdx&ep=v1_gifs_search&rid=200w.gif&ct=g"  alt="gobal react" />
    <a className='font-extrabold pl-7 text-3xl animate-bounce'   href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" >Global travels</a>
 
    </header>
  )
}

export default Header