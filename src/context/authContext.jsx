import { createContext, useState, useContext } from "react";


const AuthContext = createContext();


export function AuthProvider ({children}) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const saveToken = (newToken) => {
    setToken(newToken)
    localStorage.setItem("token", newToken)
}

    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken: saveToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}