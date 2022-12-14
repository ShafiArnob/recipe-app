import { projectFirestore } from '../../firebase/config';

import RecipeList from '../../components/RecipeList';
import './Home.css'
import { useEffect, useState } from 'react';


const Home = () => {
  const [data,setData] = useState(null)
  const [isPending,setIsPending] = useState(false)
  const [error,setError] = useState(false)

  useEffect(()=>{
    setIsPending(true)
    const unSub = projectFirestore.collection('recipe').onSnapshot((snapshot)=>{
      if(snapshot.empty){
        setError("No Recipe to load")
        setIsPending(false)
      }
      else{
        let results = []
        snapshot.docs.forEach(doc=>{
          results.push({id:doc.id,...doc.data()})
        })
        setData(results)
        setIsPending(false)
      }
    },(err)=>{
      setError(err.message)
      setIsPending(false)
    })

    return () => unSub()

  },[])
  
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading . . . </p>}
      {data && <RecipeList recipes={data}></RecipeList>}
    </div>
  )
}

export default Home