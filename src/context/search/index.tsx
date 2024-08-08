"use client";

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";


type IAction =
  {
    type: "change";
    value: string
  }

export const searchReducer: (state: string, action: IAction) => string = (
  state,
  action,
) => {
  if (action.type === "change") {
    return action.value;
  }

  return state;
};
export const searchDefaultValue: string = "";
export const SearchContext = createContext<{
  state: string;
  dispatch: React.Dispatch<IAction>;
}>({
  state: searchDefaultValue,
  dispatch: () => {
    //
  },
});
/**
 * 持久化存储的 context 配套useSearch
 */
export function SearchProvider(props: PropsWithChildren) {
  const { children } = props;
  // const [data, setData] = useState<string>({});
  const [state, dispatch] = useReducer(
    searchReducer,
    searchDefaultValue,
  );

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}
export const useSearch: () => [string, (v: string) => void] = (

) => {
  const { state, dispatch } = useContext(SearchContext);

  const setValue = useCallback(
    (value: string) => {
      dispatch({
        type: "change",
        value: value,
      });
    },
    [dispatch],
  );

  return [state, setValue];
};
