import { useActions } from '../../hooks/useActions';
import { useFevorites } from '../../hooks/useFavorites';
import React from 'react';

interface RecipeItemsProps {
  recipe: {
    id: number;
    name: string;
    image: string; // Добавьте другие поля рецепта, если необходимо
  };
}

const RecipeItems: React.FC<RecipeItemsProps> = ({ recipe }) => {
  const { favorit } = useFevorites(); // Исправлено название хука
  const { toggleFavorites } = useActions(); // Исправлено название функции
  const isExist = favorit.some((r) => r.id === recipe.id);

  return (
    <div>
      <img src={recipe.image} alt={recipe.name} width={100} />
      <h2>{recipe.name}</h2>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExist ? 'Убрать из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  );
};

export default RecipeItems;
