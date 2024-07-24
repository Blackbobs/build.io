'use client'
import { createContext, useContext, useState, PropsWithChildren, Dispatch, SetStateAction } from "react";

// Define a type or interface for your context value
interface AppStateContextType {
  user: null | string; // Example: user can be null or a string (adjust as per your actual use case)
  setUser: Dispatch<SetStateAction<null | string>>; // Setter function type
}

// Create your context with initial value of null
export const AppState = createContext<AppStateContextType | null>(null);

export const AppStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [user, setUser] = useState<null | string>(null); // Initialize with null

  return (
    <AppState.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppState.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppState);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};
