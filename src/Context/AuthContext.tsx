import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useStorage';
import { ACCESSTOKEN } from '../redux/constants/auth';

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const { getItem }: any = useLocalStorage();
  const [isAuthenticated, setIsAuthenticated] = useState(getItem(ACCESSTOKEN)
  )
  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
