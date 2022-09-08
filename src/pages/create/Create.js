import './Create.css'
import { useState } from 'react'


export default function Create() {
  const [title,setTitle] = useState('')
  const [method,setMethod] = useState('')
  const [cookingTime,setCookingTime] = useState('')
  
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(title, method, cookingTime);
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
