import { useState, useEffect,useRef } from "react";
import axios from "axios";
import { Replace } from "../../utils";
import ItemAyat from "../../components/ItemAyat";

const getDataAyah = async (numberSurah,setDataAyah) =>{
    try {
        const response = await axios.get(`https://api.alquran.cloud/v1/surah/${numberSurah}/ar.alafasy`)
        console.log(response.data);
        setDataAyah(response.data)
    } catch (err) {
        console.log(err);
        
    }
}
const ContentNew = ({dataSurah}) => {
    // data ayat
      const[selectedSurah,setSelectedSurah] = useState({})
        const [dataAyah, setDataAyah] = useState({})
        const [loading,setLoading] = useState(true)
        // Audio
        const [currentTrack,setCurrentTrack ]= useState(0)
        const [isPlaying,setIsPlaying] = useState(false)
        const audioRef = useRef(new Audio())
    // data ayat by each surah selected
  const selectSurah = (surah) =>{
    // console.log(surah);
    
    setSelectedSurah(surah)
    setLoading(true)
    // api
    getDataAyah(surah.number,(value)=>{
        // test ashbi hh console.log(value.data);
        setDataAyah(value.data)
        setLoading(false)
    })
}
//! just for testing hhh const array = Array.from(Array(114)).map((value)=>value)
// surah to be played
useEffect(()=>{
if (Object.keys(dataAyah).length>0 && dataAyah.ayahs.length > 0) {
    audioRef.current.src = dataAyah.ayahs[currentTrack]?.audio;
    if (isPlaying) audioRef.current.play()
        audioRef.current.addEventListener('ended',handleNextTrack)
    return ()=>{
        audioRef.current.addEventListener('ended',handleNextTrack)
    }
}
},[currentTrack,dataAyah])  
const handleNextTrack = ()=>{
if (currentTrack < dataAyah.ayahs.length -1) {
    setCurrentTrack((previous)=>previous+1)
} else{
    setCurrentTrack(0)
    setIsPlaying(false)
}
}
const selectTrack = (index) =>{
if (Object.keys(dataAyah).length > 0 && index < (dataAyah.ayahs.length-1) && index > -1) {
    setCurrentTrack(index)
}
}
const stopTrack = ()=>{
audioRef.current.pause()
audioRef.current.currentTime = 0
setCurrentTrack(0)
setIsPlaying(false)
}
const pauseTrack = ()=>{
audioRef.current.pause()
setIsPlaying(false)
}
const playTrack = ()=>{
audioRef.current.play()
setIsPlaying(true)
}
    return (
      <div className="flex flex-col h-full  text-primary">
              {/* Search */}
              <div className="w-full flex rounded-md relative items-center">
                <input 
                type="text"
                placeholder="Search"
                name="" id="" 
                className="text-sm p-2 w-full rounded-md border border-primary text-white"
                />
                <img 
                src="search.png" 
                alt="search" 
                className="h-5 w-5 absolute right-4"
                />
              </div>
              {/* Surahes list */}
              <div className="w-full h-fit flex overflow-y-hidden overflow-x-auto my-4 gap-3 scroll-smooth pb-2 border-b border-b-primary">
                 {
                  dataSurah.length > 0 && dataSurah.map((surah,index)=>(
                      <button
                      key={index} 
                      type="button" 
                      className={` px-4 py-1 text-sm rounded-md  border-primary hover:bg-primary border hover:text-white min-w-max pb-6 ${
                          surah.englishName === selectedSurah.englishName ? "bg-primary text-white" : ""
                      }`}
                      onClick={()=>selectSurah(surah)}>
                      {surah.englishName}
                      </button>
                  ))
                 }
              </div>
  
             
              {/* Surah selected */}
              {
                  Object.values(selectedSurah).length >0 ?
                  <div className=" w-full flex justify-between border-b border-b-primary p-2 ">
                  <div className="flex flex-col w-fit">
                      <h2 className="text-3xl mb-1">{selectedSurah.name}</h2>
                      <span className="text-xl">{selectedSurah.englishName}</span>
                  </div>
              <div className="flex flex-col items-end text-xl justify-between">
                  <div className="flex gap-1">
                      {/* previous button */}
                      <button type="button" className="rounded-full p-1 bg" onClick={()=>selectTrack(currentTrack-1)}>
                      <img src="next.png" alt="previous" className="h-5 w-5 cursor-pointer rotate-180"/>
                      </button>
                      {/* Play or pause button - as an image  */}
                      <button type="button" className="rounded-full p-1 bg" onClick={()=>isPlaying ? pauseTrack():playTrack()}>
                      <img src={isPlaying ? 'pause.png' : 'play-button.png'} alt={isPlaying ? 'paused' : 'played'} className="h-5 w-5 cursor-pointer"/>
                      </button>
                      {/* button stop */}
                      <button type="button" className="rounded-full p-1 bg" onClick={stopTrack}>
                      <img src="stop.png" alt="stop" className="h-5 w-5 cursor-pointer"/>
                      </button>
                      {/* button next */}
                      <button type="button" className="rounded-full p-1 bg">
                      <img src="next.png" alt="play" className="h-5 w-5 cursor-pointer" onClick={()=>selectTrack(currentTrack+1)}/>
                      </button>
                      </div>
                       {Replace(`${selectedSurah.numberOfAyahs}`)}Ayat, {" "}
                        {selectedSurah.revelationType}
                  </div>
              </div> : <></>
              }
              
              {/* List Ayat */}
              {
                  loading ? (<div className="w-full flex flex-col my-4 h-[90vh] justify-center items-center">
                      {Object.values(dataAyah).length >0 ? 'Working to show data' : 'Please select a surah'}
                  </div>) :
             ( <div className="w-full flex flex-col my-4 h-[90vh] gap-7 bg-white overflow-x-hidden overflow-y-auto">
                  {dataAyah && Object.values(dataAyah).length >0 && dataAyah.ayahs.map((ayah,index)=>(
                      <div key={index} className={isPlaying && currentTrack === index ? 'bg-gray-200' :""}>
                      <ItemAyat ayah={ayah}/>
                      </div>
                  ))}
              </div>)
              }
      </div>
    )
  }
  
  export default ContentNew