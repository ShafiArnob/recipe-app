import './Create.css'
import { useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

export default function Create() {
  const [title,setTitle] = useState('')
  const [method,setMethod] = useState('')
  const [cookingTime,setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST')
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    postData({title, ingredients, method, cookingTime:cookingTime+'minutes'})
  }

  const handleAdd = (e) =>{
    e.preventDefault()
    const ing = newIngredient.trim()

    if(ing && !ingredients.includes(ing)){
      setIngredients(prevIngredients=>[...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title: </span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} required/>
        </label>

        <label>
          <span>Recipe Ingredients: </span>
          <div className="ingredients">
            <input type="text" onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} ref={ingredientInput}/>
            <button onClick={handleAdd} className='btn'>add</button>
          </div>
        </label>
        <p>Current Ingredients: {ingredients.map(i => <em>{i},</em>)}</p>

        <label>
          <span>Recipe Method: </span>
          <input type="text" onChange={(e) => setMethod(e.target.value)} required/>
        </label>

        <label>
          <span>Recipe Cooking Time: </span>
          <input type="text" onChange={(e) => setCookingTime(e.target.value)} required/>
        </label>

        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
