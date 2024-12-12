import { useEffect, useState } from "react";
import { Replace } from "../utils";

const ItemAyat = (props) => {
  const [isBookMark,setIsBookmark] = useState(false)
  const {ayah,updateBookmark} = props
  const setBookMark = (ayah)=>{
    // console.log(ayah);
    const bookmarkList = localStorage.getItem('bookmark-ayah')
    if (bookmarkList) {
      const getAyah = JSON.parse(bookmarkList)
      if (getAyah.length > 0) {
        const findAyat = getAyah.filter((data)=>data.text == ayah.text && data.number == ayah.number)
        
      if (findAyat.length > 0) {
        const updateList = getAyah.filter((data)=>data.text !== ayah.text && data.number !== ayah.number)
        localStorage.setItem('bookmark-ayah',JSON.stringify(updateList))
        setIsBookmark(false)
      }
      else{
        const updateList = [...getAyah,ayah]
        localStorage.setItem('bookmark-ayah',JSON.stringify(updateList))
        setIsBookmark(true)
      }        
      }else{
        localStorage.setItem('bookmark-ayah',JSON.stringify([ayah]))
        setIsBookmark(true)
      }
      
    } else{
      localStorage.setItem('bookmark-ayah',JSON.stringify([ayah]))
      setIsBookmark(true)
    }
    if (updateBookmark) updateBookmark()
    
    
    // const listAyat = [ayah]
    // localStorage.setItem('bookmark-ayah',JSON.stringify(listAyat))
    
  }
  const isInBookmark = (ayah)=>{
    const bookmarkList = localStorage.getItem('bookmark-ayah')
    if (bookmarkList) {
      const getAyah = JSON.parse(bookmarkList)
      const findAyat = getAyah.filter((data)=>data.text == ayah.text && data.number == ayah.number)
      if (findAyat.length >0) return true
      
    }
  
    return false
  }
  useEffect(()=>setIsBookmark(isInBookmark(ayah)),[])
  return (
    <div className="border-b border-b-gray-300 p-2 hover:bg-gray-300 relative ">
        {/*  */}
        <div className="w-full flex text-right justify-between text-black text-4xl leading-loose">
          
          <span className="text-xl flex gap-1 items-center w-10">
            <img src="ayah.png" alt="" className="h-8 w-8"/>
            {Replace(`${ayah.numberInSurah}`)}
           </span>
           <span className="ml-5">{ayah.text}</span>
        </div>
        <img src={isBookMark || isInBookmark(ayah) ? "bookmark_done.png" : "bookmark.png"} alt="bookmark" className="h-6 w-6 absolute right-0 bottom-[-20px] bg-white cursor-pointer"
        onClick={()=>setBookMark(ayah)}/>
    </div>
  )
}

export default ItemAyat