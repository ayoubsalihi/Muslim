import { useState } from "react"

const Chapitres = ({chapters,chapterHandler}) => {
  const [activeId,setActiveId] = useState('')
  return (
    <div className='min-h-[100%] shadow-lg p-3 bg-primary overflow-auto text-white'>
      <h1 className='text-lg font-bold text-center'>Surahs</h1>
      <hr/>
      <ul className='text-lg text-center'>
        {
        chapters && chapters.length > 0 ? chapters.map((chapter)=>(
            <div key={chapter.id}>
            <li onClick={(e)=>{
              chapterHandler(chapter)
              setActiveId(chapter.id)
            }} className={`bg-transparent border-0 text-white py-0 flex justify-between cursor-pointer text-base ${activeId === chapter.id && 'active'}`}>
            <span>{chapter.id}</span>
            <span className="pb-[92px]">{chapter.name_arabic}</span>{''}
          </li>
          <hr/>
          </div>
          )):(
            <span class="relative flex h-3 w-3 animate-[wiggle_1s_ease-in-out_infinite]">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
          )
        }
          
        
      </ul>
    </div>
  )
}

export default Chapitres