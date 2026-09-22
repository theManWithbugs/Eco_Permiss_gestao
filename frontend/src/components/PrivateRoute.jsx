import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkAuth } from "../auth/auth";
import Loader from "./Loader";

function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function verify() {
      const ok = await checkAuth();
      setAuth(ok);
      setLoading(false);
    }

    verify();
  }, []);

  if (loading) return <Loader />;

  if (!auth) return <Navigate to="/login" />;

  return children;
}

export default PrivateRoute;