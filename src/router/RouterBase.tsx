import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import RecipeProvider from '../contexts/Recipe'
import Navbar from '../components/Navbar/Navbar'
import Recipe from '../pages/Recipe'


const RouterBase = () => {
  return (
    <RecipeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/recipe' element={<Recipe />}></Route>
          </Routes>
        </BrowserRouter>
    </RecipeProvider>
  )
}

export default RouterBase
