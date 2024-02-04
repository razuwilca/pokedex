import { useState, createContext } from "react";

export const AuthContext = createContext({
  //para mostrar en el editor de codigo
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  const valueContex = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContex}>{children}</AuthContext.Provider>
  );
}
