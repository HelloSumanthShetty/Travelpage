    import React from 'react'

function Content(props) {
  return (
  <>
  <div className='card'>
<img className="cardimg"src={props.img} alt="img" />
   
   <div className='cardbody'>
    <div className='flex space-x-3 text-[12px] justify-end  animate-pulse'>
 <img className='h-5 w-4' src={props.img2} alt="logo" />
 <a href={props.link} className=' hover:text-blue-600 hover:underline cursor-pointer' target='_blank'>{props.loc}</a>
<h1 >{props.time}</h1>
   </div >
<h1>{props.child}</h1>
   <a href={props.btn} target='_blank' className='card-title'>{props.title}</a>
   <h2 className='card-text'>{props.content}</h2>
   <a className='card-btn' href={props.btn} target='_blank'>Read ME</a>
   </div>
   </div>


   </>
  )
}

export default Content