import { createContext, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";


const AuthContext = createContext();


export function AuthProvider ({children}) {
    const [user, setUser] = useState(null)

    const getValidToken = () => {
        const token = localStorage.getItem("token");
        if (!token) return null;

        try {
            const decoded = jwtDecode(token);
            const ahora = Date.now() / 1000;
            if (decoded.exp < ahora){
                localStorage.removeItem("token");
                return null;
            }
            return token;
        } catch {
            localStorage.removeItem("token")
            return null;
        }
    };

    const [token, setToken] = useState(getValidToken);

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