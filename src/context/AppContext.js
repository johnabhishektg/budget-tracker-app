import React, { useReducer, createContext } from "react";
import { nanoid } from "nanoid";

export const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    {
      id: nanoid(),
      name: "Shopping",
      cost: "2000",
    },
    {
      id: nanoid(),
      name: "Holiday",
      cost: "7000",
    },
    {
      id: nanoid(),
      name: "Transport",
      cost: "3000",
    },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
