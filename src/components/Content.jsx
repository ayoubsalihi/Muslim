import SideBar from "./SideBar"
const Content = ({children}) => {
  return (
    <div className="h-screen w-screen flex overflow-hidden">
    <SideBar/>
    
    <div className="flex flex-col w-[85vw] h-full p-4">
        {children}
    </div>
    
</div>
    
  )
}

export default Content