import React, { useState } from "react";

function RecipeCreate({addRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  //these 3 variables take care of the inputs from the create feature
  const initialFromData = {name:"",cuisine:"", photo:"",ingredients:"",preparation:""}
  const [formData, setFormData] = useState({...initialFromData});
  const handleInput= (event)=>{
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  
  // handles the submit
  const handleSubmit = (event) =>{
    event.preventDefault();
    addRecipes(formData);
    setFormData({...initialFromData});
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        {/* this body is the create row below the rest of the page */}
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" placeholder="Name" 
              onChange={handleInput} value={formData.name} />
            </td>
            <td>
              <input name="cuisine" type="text" placeholder="Cuisine"
              onChange={handleInput} value={formData.cuisine} />
            </td>
            <td>
              <input name="photo" type="url" placeholder="Photo"
              onChange={handleInput} value={formData.photo} />
            </td>
            <td>
              <textarea name="ingredients" rows={2} placeholder="Ingredients"
              onChange={handleInput} value={formData.ingredients} />
            </td>
            <td>
              <textarea name="preparation" rows={2} placeholder="Preparation"
              onChange={handleInput} value={formData.preparation} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
