import RecipeList from '@/components/recipe/RecipeList'
import './base-page.scss'
import { useState } from 'react'

const Home = () => {
    const [searchRecipe, setSearchRecipe] = useState('')

    const handleClick = () => {
        //
    }

    return (
        <div className="page">
            <div className="search">
                <input value={searchRecipe} onChange={(e) => setSearchRecipe(e.target.value)} placeholder='couscous' />
                <button className='' onClick={handleClick}>rechercher</button>
            </div>
            <RecipeList />
        </div>
    )
}

export default Home
