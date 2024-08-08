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

interface IState {
  width: number;
  height: number;
}

type IAction =
  {
    type: "change";
    value: IState
  }

export const windowReducer: (state: IState, action: IAction) => IState = (
  state,
  action,
) => {
  if (action.type === "change") {
    return {
      ...state,
      ...action.value
    };
  }

  return state;
};
export const windowDefaultValue: IState = {
  width: 0,
  height: 0,
};
export const WindowContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<IAction>;
}>({
  state: windowDefaultValue,
  dispatch: () => {
    //
  },
});

/**
 * 持久化存储的 context 配套useWindow
 */
export function WindowProvider(props: PropsWithChildren) {
  const { children } = props;
  // const [data, setData] = useState<string>({});
  const [state, dispatch] = useReducer(
    windowReducer,
    windowDefaultValue,
  );

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );

  const handleResize = useCallback((ev: UIEvent) => {
    dispatch({
      type: "change",
      value: {
        width: globalThis?.innerWidth,
        height: globalThis?.innerHeight,
      },
    })
  }, [])

  useEffect(() => {
    globalThis?.addEventListener('resize', handleResize)

    return () => globalThis?.removeEventListener('resize', handleResize)
  }, [handleResize])
  useEffect(() => {
    dispatch({
      type: "change",
      value: {
        width: globalThis?.innerWidth,
        height: globalThis?.innerHeight,
      },
    })
  }, [])

  return (
    <WindowContext.Provider value={value}>
      {children}
    </WindowContext.Provider>
  );
}
export const useWindow: () => [IState, (v: IState) => void] = (

) => {
  const { state, dispatch } = useContext(WindowContext);

  const setValue = useCallback(
    (value: IState) => {
      dispatch({
        type: "change",
        value: value,
      });
    },
    [dispatch],
  );

  return [state, setValue];
};
