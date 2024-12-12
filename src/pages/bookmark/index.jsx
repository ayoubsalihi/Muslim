import { useEffect, useState } from 'react'
import Content from '../../components/Content'
import ItemAyat from '../../components/ItemAyat'
const BookMark = () => {
  const [loading,setLoading] = useState(true)
  const [dataAyah,setDataAyah] = useState([])
  // copilot
  useEffect(()=>updateBookmark(),[])
  const updateBookmark = () =>{
    const bookmarks = localStorage.getItem('bookmark-ayah')
    if (bookmarks) {
      setLoading(false)
      setDataAyah(JSON.parse(bookmarks))
    }
  }
  return (
    <Content>
      
      {/* List Ayat */}
      {
                  loading ? (<div className="w-full flex flex-col my-4 h-[90vh] justify-center items-center">
                      Working to show data
                  </div>) :
             ( <div className="w-full flex flex-col my-4 h-[90vh] gap-7 bg-white overflow-x-hidden overflow-y-auto">
                  {dataAyah && dataAyah.map((ayah,index)=>(
                      <div key={index}>
                      <ItemAyat ayah={ayah} updateBookmark={updateBookmark}/>
                      </div>
                  ))}
              </div>)
              }
    </Content>
  )
}

export default BookMark