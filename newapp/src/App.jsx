import React from 'react'

function Head() {
  return (

    <div className='flex justify-between bg-blue-900 shadow-black rounded-lg shadow-lg'>
           <div className="flex items-center gap-4 ">
        <img
          src="https://www.google.com/logos/fnbx/animal_paws/cat_kp_dm.gif"
          alt="yo"
          className="w-15 h-15"
        />
        <h1 className="text-xl font-bold">This is tcaer</h1>
      </div>
<nav className='flex items-center' >
          <ul  className='flex x gap-10 font-semibold  mx-2'>
            <li>
              price 
            </li>
            <li>about</li>
            <li>
              contact
            </li>
          </ul>
        </nav>
</div>

  )
}
function Footer() {
  return (
    <footer className="bg-gray-100 text-center h-25  py-4 border-t text-sm text-gray-600">
      &copy; 2025 Your Website. All rights reserved.
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col"
     
    >
      <Head />
      
      <main className="flex-grow p-4 ">
  <h1 className="text-xl text-white">I like girls a lot</h1>

  <ul className="list-disc marker:text-blue-400 ml-5">
    <li className="border border-green-400 text-white font-semibold p-2 rounded mb-2">
      bend over 
    </li>
    <li className="border border-green-400 text-white font-semibold p-2 rounded mb-2">
      little girl 
    </li>
    <li className="border border-green-400 text-white font-semibold p-2 rounded">
      love won't save you 
    </li>
  </ul>
</main>

      <Footer />
    </div>
  );
}

export default App