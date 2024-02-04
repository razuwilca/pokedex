import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default useAuthHook = () => useContext(AuthContext);
