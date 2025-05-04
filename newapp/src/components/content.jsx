import React from 'react'

function Content(props) {
  return (
  <>
  <div className='card'>
<img className="cardimg"src={props.img} alt="img" />
   
   <div className='cardbody'>
    <div className='flex space-x-3 justify-end items-center animate-pulse'>
 <img className='h-5 w-4' src={props.img2} alt="logo" />
 <a href={props.link} className='text-blue-600 hover:underline' target='_blank'>{props.loc}</a>
<h1 >{props.time}</h1>
   </div >

   <h1 className='card-title'>{props.title}</h1>
   <h2 className='card-text'>{props.content}</h2>
   <a className='card-btn' href={props.readme} target='_blank'>Read ME</a>
   </div>
   </div>


   </>
  )
}

export default Content