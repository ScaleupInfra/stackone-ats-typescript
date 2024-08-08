import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context's value
interface SidebarContextProps {
  showManageATS: boolean;
  setShowManageATS: React.Dispatch<React.SetStateAction<boolean>>;
  showApplyForJobs: boolean;
  setShowApplyForJobs: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with an initial value of undefined
const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

// Define the provider component
export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // State to control the visibility of the Manage ATS section
  const [showManageATS, setShowManageATS] = useState(true);
  // State to control the visibility of the Apply for Jobs section
  const [showApplyForJobs, setShowApplyForJobs] = useState(false);

  // Provide the state and setter functions to the context
  return (
    <SidebarContext.Provider value={{ showManageATS, setShowManageATS, showApplyForJobs, setShowApplyForJobs }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the SidebarContext
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  // Throw an error if the hook is used outside of the provider
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
