import { useEffect, useRef, useState } from "react"
import axios from "axios"
import ContentNew from "./content"
import Content from "../../components/Content"
export const  getDataSurah = async (setDataSurah) =>{
  try {
    const response = await axios.get(`https://api.alquran.cloud/v1/surah`)
    setDataSurah(response.data)
    
  } catch (err) {
    console.log(err);
    
  }
}
const QuranPage = () => {
  // Data suwar
  const [dataSurah,setDataSurah] = useState([])
  const [loadingSurah,setLoadingSurah] = useState(true)
  // surah data
  useEffect(()=>{
    getDataSurah((value)=>{
      setDataSurah(value.data)
      setLoadingSurah(false)
    })
    
  },[])
  return (
    <Content>
      {
          loadingSurah ? <div className="w-[85vw] h-full flex items-center justify-center text-md">
            Loading...
          </div> : <ContentNew dataSurah={dataSurah}/>
        }
    </Content>
  )
}

export default QuranPage