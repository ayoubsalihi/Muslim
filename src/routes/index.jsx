import App from '../Components-listening/App'
import BookMark from '../pages/bookmark'
import QuranPage from '../pages/quran'
import { createBrowserRouter } from 'react-router-dom'
export const router = createBrowserRouter([
    {path:"/",element:<QuranPage/>,},
    {path:"bookmark",element:<BookMark/>,},
    {path:"listen",element:<App/>,},
  ])