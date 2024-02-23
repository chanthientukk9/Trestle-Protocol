import { AbstractProvider } from "ethers";
import { BrowserProvider } from "ethers";
import React from "react";

export const EtherProviderContext = React.createContext<
  BrowserProvider | AbstractProvider | null
>(null);
