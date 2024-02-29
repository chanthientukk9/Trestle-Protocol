import React from "react";

export type ErrorContextValue = {
  error: unknown;
  setError: unknown;
  pushError: (value: string) => void;
};

export const ErrorContext = React.createContext<ErrorContextValue>({
  error: [],
  setError: () => null,
  pushError: () => null,
});
