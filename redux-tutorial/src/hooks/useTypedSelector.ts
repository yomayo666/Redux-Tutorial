import { TypedUseSelectorHook } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector