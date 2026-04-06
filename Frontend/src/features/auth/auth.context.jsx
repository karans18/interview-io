import { createContext, useEffect, useState } from "react";
import { getMe, login, logout, register } from "./services/auth.api";


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            if (data?.user) {
                setUser(data.user)
            }
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            if (data?.user) {
                setUser(data.user)
            }
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const getAndSetUser = async () => {
            try {
                const data = await getMe()
                setUser(data?.user ?? null)
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()
    }, [])


    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, handleRegister, handleLogin, handleLogout }} >
            {children}
        </AuthContext.Provider>
    )

    
}
