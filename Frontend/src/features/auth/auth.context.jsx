import { useEffect, useState } from "react";
import { AuthContext } from "./auth.context";
import { getMe } from "./services/auth.api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const syncUser = async () => {
      try {
        const data = await getMe();

        if (isMounted) {
          setUser(data.user);
        }
      } catch (err) {
        if (!isMounted) {
          return;
        }

        setUser(null);

        if (err.response?.status !== 401) {
          console.log(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    syncUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
