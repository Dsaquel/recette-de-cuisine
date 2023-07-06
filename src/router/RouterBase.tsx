import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import RecipeProvider from '../contexts/Recipe'
import Navbar from '../components/Navbar/Navbar'
import RecipeHome from '../pages/RecipeHome'
import RecipeDetail from '@/pages/RecipeDetail'


const RouterBase = () => {
  return (
    <RecipeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/recipe' element={<RecipeHome />}></Route>
            <Route path='/recipe/:id' element={<RecipeDetail />}></Route>
          </Routes>
        </BrowserRouter>
    </RecipeProvider>
  )
}

export default RouterBase
