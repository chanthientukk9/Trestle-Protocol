import { useContext, useEffect } from "react";
import { ErrorContext, ErrorContextValue } from "../contexts/errorContext";

export default function usePushError(error?: Error | null) {
  const { pushError } = useContext(ErrorContext) as ErrorContextValue;

  useEffect(() => {
    if (error) {
      if (error.message.includes("User rejected the request")) {
        pushError(`${error.name}: User rejected the request`);
      } else {
        pushError(`${error.name}: error.message`);
      }
    }
  }, [error, pushError]);
}
