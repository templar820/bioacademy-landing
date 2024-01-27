import React, { createContext, ReactNode, useContext } from 'react';
import RootService from '$services/Root.service';

// create the context
const ServiceContext = createContext<typeof RootService | undefined>(undefined);

// create the provider component
export function RootServiceProvider({ children }: { children: ReactNode }) {
  // only create the store once ( store is a singleton)
  const root = RootService;

  return <ServiceContext.Provider value={root}>{children}</ServiceContext.Provider>;
}

// create the hook
export function useRootService() {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error('useRootService must be used within RootServiceProvider');
  }

  return context;
}
