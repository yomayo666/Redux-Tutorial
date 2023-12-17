import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from '../store/favorits/favorit.slice';
import * as userActions from "../store/users/user.actions";

const rootActions = {
  ...actions,
  toggleFavorites: actions.toggleFavorits,
  ...userActions
}

export const useActions = () => {
  const dispatch = useDispatch();

  const memoizedActions = useMemo(() => {
    console.log('Creating memoized actions'); // Добавляем вывод в консоль
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);

  return memoizedActions;
}
