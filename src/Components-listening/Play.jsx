import ReactPlayer from "react-player" 
const Lecture = ({reciterDetail,chapterDetail}) => {
  const audioLink = (reciter,number) =>{
    return reciter + '/' + ('00' + number).slice(-3)+'.mp3'
  }
  return (
    <div className='min-h-[100%] shadow-lg p-3 bg-primary overflow-auto text-white'>
      <h1 className='text-lg font-bold text-center'>Lecture</h1>
      <hr/>
      {reciterDetail !== null && chapterDetail !== null ? (
          <ul className='list-none text-right'>
          <div>
            <li className='bg-transparent border-0 text-white py-0 cursor-pointer text-base pl-0 flex justify-between'>
              <span>Reciter:</span>
              <span className='text-base pb-10'>{reciterDetail.name}</span>
            </li>
            <hr/>
            <li className='bg-transparent border-0 text-white py-0 cursor-pointer text-base pl-0 flex justify-between'>
              <span>Surah in arabic:</span>
              <span className='text-base pb-10'>{chapterDetail.name_arabic}</span>
            </li>
            <hr/>
            <li className='bg-transparent border-0 text-white py-0 cursor-pointer text-base pl-0 flex justify-between'>
              <span>Surah in english:</span>
              <span className='text-base pb-10'>{chapterDetail.name_complex}</span>
            </li>
            <hr/>
            <li className='bg-transparent border-0 text-white py-0 cursor-pointer text-base pl-0 flex justify-between'>
              <span>Revelation place:</span>
              <span className='text-base pb-10'>{chapterDetail.revelation_place}</span>
            </li>
            <hr/>
            <li className='bg-transparent border-0 text-white py-0 cursor-pointer text-base pl-0 flex justify-between'>
              <span>Surah's name in english :</span>
              <span className='text-base pb-10'>{chapterDetail.translated_name.name}</span>
            </li>
            <hr/>
            <div>
              <ReactPlayer url={
                audioLink(reciterDetail.Server, chapterDetail.id)
              }
              controls={true} 
              playing={true}
              width='100%'
              height='60px'/>
            </div>
          </div>
        </ul>
      ):(
        <span class="relative flex h-3 w-3 animate-[wiggle_1s_ease-in-out_infinite]">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
</span>
      ) }
      
    </div>
  )
}

export default Lecture