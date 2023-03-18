import { createContext } from "react";
import { useAuthProvider } from "../hooks/useAuthProvider";

export const AuthContext = createContext({
  user: {},
  error: {},
  signin: () => {},
  signout: () => {},
  signup: () => {},
});

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
