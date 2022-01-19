import { useState } from 'react';

const Burrito = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ newIngredient, setNewIngredient] = useState("")

  const handleClick = () => {
    setIngredients((prev) => {
      return [...prev, newIngredient]
    })

    setNewIngredient("");


  }

  return (
    <div>
      <div>
        <input 
          value={newIngredient}
          onChange={(event) => setNewIngredient(event.target.value)}
        />
        <button onClick={handleClick}>add ingredient</button>
      </div>
      <h2>My burrito:</h2>
      {ingredients.map((ingredient, index) => {
        return <p key={index}>{ingredient}</p>
      })}
    </div>
  )
}

export default Burrito;