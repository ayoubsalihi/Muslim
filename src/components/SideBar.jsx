import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <div className="bg-primary h-full w-min-[15vw] p-4 relative">
        <div className="w-full flex items-center">
            <img src="islam.png" alt="Hilal" className="h-12 w-12 bg-white p-2.5 rounded-full"/>
            <h4 className="text-xl text-white">Read Quran</h4>
        </div>
    {/* Menu d jenb */}
        <div className="w-fit flex flex-col my-5 gap-3 ">
            <Link to={"/"} type="button" className="border border-white rounded-lg py-1 text-white p-2  hover:bg-white hover:text-primary">
                Quran with Al-Afasi
            </Link>
            <Link to={"/bookmark"} type="button" className="border border-white rounded-lg py-1 text-white  hover:bg-white hover:text-primary">
                Bookmarks
            </Link>
            <Link to={"/listen"} type="button" className="border border-white rounded-lg py-1 text-white  hover:bg-white hover:text-primary">
                Listen Quran
            </Link>
        </div>
    </div>
  )
}

export default SideBar