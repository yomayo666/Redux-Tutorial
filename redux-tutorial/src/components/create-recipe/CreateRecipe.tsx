import React, { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";
import { IRecipeData } from "../../typs/recipe.types";

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState<IRecipeData>({
    name: "",
    image: "",
  });
  const defaultValue:IRecipeData = {
    name: "",
    image: "",
  };

  // Деструктуризация для извлечения createRecipe из результата useCreateRecipeMutation
  const [createRecipe] = useCreateRecipeMutation()
console.log("Mutation result:", createRecipe);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(recipe);
    createRecipe(recipe).then(() => {
      setRecipe(defaultValue);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Create new recipe: </p>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          ></input>
        </label>
        <label>
          <input
            type="text"
            placeholder="Image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          ></input>
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
