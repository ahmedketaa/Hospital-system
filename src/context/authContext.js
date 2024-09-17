import { createContext, useState } from "react";

export let AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [auth, setAuth] = useState();

  const authLocalStorage = () => {
    setAuth({
      user:
        localStorage.getItem("auth") &&
        JSON.parse(localStorage.getItem("auth")),
    });
  };

  const logOut = () => {
    setAuth("");
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logOut, authLocalStorage }}>
      {children}
    </AuthContext.Provider>
  );
};
