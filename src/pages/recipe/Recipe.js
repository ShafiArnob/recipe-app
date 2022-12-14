import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {useFetch} from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'
import './Recipe.css'
const Recipe = () => {
  const { id } = useParams()

  const [recipe,setRecipe] = useState(null)
  const [isPending,setIsPending] = useState(false)
  const [error,setError] = useState(false)

  const {mode} = useTheme()

  useEffect(()=>{
    setIsPending(true)
    projectFirestore.collection('recipe').doc(id).get().then((doc)=>{
      if(doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
      }
      else{
        setIsPending(false)
        setError("Could not find recipe")
      }
    })
  },[id])

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading . . .</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe