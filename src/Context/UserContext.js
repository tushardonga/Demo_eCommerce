import { createContext, useContext, useEffect, useState } from "react";
export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setIsLogin(true);
    }
  }, []);

  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, setIsLogin, isLogin }}>
      {children}
    </UserContext.Provider>
  );
}
