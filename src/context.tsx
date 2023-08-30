import { useRuntime } from '@voiceflow/react-chat';
import { createContext, useContext } from 'react';
import React from 'react';
import { API_KeyProvider, ApiConfig } from './contextAPi'; // Adjust the path


export interface RuntimeContextValue {
  runtime: ReturnType<typeof useRuntime>;
}

interface RuntimeProviderProps {
  apiKeyProject: string; // Add this prop
  children: React.ReactNode;
}

export const RuntimeContext = createContext<RuntimeContextValue | null>(null);

export const RuntimeProvider: React.FC<RuntimeProviderProps> = ({ apiKeyProject, children }) => {
  const runtime = useRuntime({
    verify: { authorization: apiKeyProject },
    session: { userID: `anonymous-${Math.random()}` },
    traces: [],
  });

  return <RuntimeContext.Provider value={{runtime}}>{children}</RuntimeContext.Provider>;
};
