import {useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useTypedSelector } from './useTypedSelector';
export const useFevorites = () => {
    const favorit = useTypedSelector((state) => state.favorit);
  
    // Мемоизация значения favorit
    const memoizedFavorites = useMemo(() => favorit, [favorit]);
  
    return { favorit: memoizedFavorites };
  }
  