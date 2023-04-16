import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  //how the app processes the creation of new recipes
  const addRecipes = (newRecipe) =>{
    setRecipes([
      ...recipes,
      newRecipe
    ]);
  }

  //how the app handles the deletion of recipes
  const deleteRecipes = (deleteRecipe)=>{
    let filteredRecipes = recipes.filter(recipe=> recipe !== deleteRecipe);
    setRecipes(filteredRecipes);
  }
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipes={deleteRecipes} />
      <RecipeCreate addRecipes={addRecipes} />
    </div>
  );
}

export default App;
