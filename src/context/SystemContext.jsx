import { createContext, useContext, useMemo, useState } from 'react';

const SystemContext = createContext(null);

export function SystemProvider({ children }) {
  const [assistantMessage, setAssistantMessage] = useState('System Online');
  const value = useMemo(() => ({ assistantMessage, setAssistantMessage }), [assistantMessage]);
  return <SystemContext.Provider value={value}>{children}</SystemContext.Provider>;
}

export function useSystem() {
  const context = useContext(SystemContext);
  if (!context) throw new Error('useSystem must be used inside SystemProvider');
  return context;
}
