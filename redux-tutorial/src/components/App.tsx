import './App.css';
import RecipeItems from './recipe-item/Recipeitem';
import Header from './header/Header';
import User from './user/User';
import { useGetRecipesQuery } from '../store/api/api';
import CreateRecipe from './create-recipe/CreateRecipe';

function App() {
  const { isLoading, data } = useGetRecipesQuery(null);

  return (
    <section>
      <Header />
      <User />
      <CreateRecipe />

      {isLoading ? (
        <div>Loading...</div>
      ) : data && data.length > 0 ? (
        data.map((recipe) => (
          <RecipeItems key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <div>Not found</div>
      )}

      <div className="App">
        <div>ssssss</div>
      </div>
    </section>
  );
}

export default App;
