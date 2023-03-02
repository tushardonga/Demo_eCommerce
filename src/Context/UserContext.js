import { createContext, useContext, useState } from "react";
export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, setIsLogin, isLogin }}>
      {children}
    </UserContext.Provider>
  );
}
