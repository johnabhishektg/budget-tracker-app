import React, { createContext, useReducer } from "react";
import { nanoid } from "nanoid";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 30000,
  expenses: [
    {
      id: nanoid(),
      name: "Shopping",
      cost: 2000,
    },
    {
      id: nanoid(),
      name: "Holiday",
      cost: 7000,
    },
    {
      id: nanoid(),
      name: "Transport",
      cost: 3000,
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
