import React from "react";
import Recipe from "./Recipe";

function RecipeList({recipes, deleteRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          {/* header of the table */}
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* this maps over the recipe objects and creates a new row of information */}
          {recipes.map(recipe=><Recipe recipe={recipe} key={recipe.name} deleteRecipes={deleteRecipes}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
