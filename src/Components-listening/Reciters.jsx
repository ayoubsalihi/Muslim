import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
const Recitants = ({reciters, reciterHandler}) => {
  const [activeId,setActiveId] = useState('')
  return (
    <div className='min-h-[100%] shadow-lg p-3 bg-primary overflow-auto'>
      <h1 className='text-lg font-bold text-center text-white'>Reciters</h1>
      <ul className='list-none text-left'>
      {reciters && reciters.length >= 0 ? (
        reciters.map((reciter)=>(
          <div key={reciter.id}>
          <li onClick={(e)=> {
            reciterHandler(reciter)
            setActiveId(reciter.id)}} className={`bg-transparent border-0 text-white py-0 cursor-pointer text-base pl-0 ${reciter.id === activeId && 'active'}`}>
            <FaUserCircle className='text-xl float-left '/>
            <span className=''>{reciter.name}</span>
          </li>
          <hr className='pb-6'/>
        </div>
        ))
      ): (
        <span class="relative flex h-3 w-3 animate-[wiggle_1s_ease-in-out_infinite]">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
      )}
      </ul>
    </div>
  )
}

export default Recitants