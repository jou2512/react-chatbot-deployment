import React, { createContext, FC, useContext } from 'react';

export interface ApiConfig {
  apiKeyProject: string,
  apiKeyDialog?: string,
  otherAPIKeys?: string[],
}

export const API_KeyContext = createContext<ApiConfig | null>(null);

interface API_KeyProviderProps {
    apiKeys: ApiConfig;
    children: React.ReactNode;
}

export const API_KeyProvider: FC<API_KeyProviderProps> = ({ apiKeys, children }) => {
  return (
    <API_KeyContext.Provider value={apiKeys}>
      {children}
    </API_KeyContext.Provider>
  );
};
