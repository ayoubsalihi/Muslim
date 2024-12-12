import Acceuil from './Home'
import '../style.css'
import SideBar from '../components/SideBar'
const App = () => {
  return (
    <div className='grid col-span-2'>
        <Acceuil/>
      <SideBar/>
    </div>
  )
}

export default App