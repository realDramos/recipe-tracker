import React from "react";

function Recipe({recipe, deleteRecipes}){
    //creates the new row for the info and populates each column with info from RecipeCreate.js
    return <tr>
        <td className="content_td"><p>{recipe.name}</p></td>
        <td className="content_td"><p>{recipe.cuisine}</p></td>
        <td ><img className="photo" src={recipe.photo} alt=""/></td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td><button 
        onClick={()=>deleteRecipes(recipe)}>
            Delete</button></td>
    </tr>


}

export default Recipe;