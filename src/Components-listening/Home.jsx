import { useEffect, useState } from "react"
import axios from "axios"
import Recitants from "./Reciters"
import Chapitres from "./Chapters"
import Lecture from "./Play"
const Acceuil = () => {
  const [reciters,setReciters] = useState([])
  const [chapters,setChapters] = useState([])
  const [reciterDetail,setReciterDetail] = useState(null)
  const [chapterDetail, setChapterDetail] = useState(null)
  useEffect(()=>{
    async function fetchData(){
      const {data : {reciters}} = await axios.get(`https://mp3quran.net/api/_english.php`)
      setReciters(reciters)
    }
    fetchData()
  },[])

  useEffect(()=>{
    async function fetchData() {
      const {data : chapters} = await axios.get(`https://api.quran.com/api/v4/chapters`)
      setChapters(chapters)
    }
    reciters && reciters.length > 0 && fetchData()
  },[reciters])
  // console.log(chapters);
  

  const reciterHandler = (reciterss)=>{
    console.log(reciterss.id);
    setReciterDetail(reciterss)
    
  }
  const chapterHandler = (chapter)=>{
    // console.log(chapter);
    setChapterDetail(chapter)
    
  }
  
  return (
    <div>
      <div className="flex flex-wrap p-5 min-h-screen">
        <div className="w-full sm:w-full md:w-1/3 lg:w-1/3   rounded-md">
          <Recitants reciters={reciters}  reciterHandler={reciterHandler} />
        </div>
        <div className="w-full sm:w-full md:w-1/3 lg:w-1/3  rounded-md">
          <Chapitres chapters={chapters && chapters.chapters} chapterHandler={chapterHandler}/>
        </div>
        <div className="w-full sm:w-full md:w-1/3 lg:w-1/3   rounded-md">
          <Lecture reciterDetail={reciterDetail}
          chapterDetail={chapterDetail}/>
          
        </div>
      </div>
    </div>
  )
}

export default Acceuil