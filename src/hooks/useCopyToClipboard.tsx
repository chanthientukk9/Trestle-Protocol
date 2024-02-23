import { useEffect, useState } from "react";

export default function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isCopied]);

  const copyToClipboard = (copyText: string) => {
    navigator.clipboard.writeText(copyText);
    setIsCopied(true);
  };

  return {
    isCopied,
    copyToClipboard
  }
}
