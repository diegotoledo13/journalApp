import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/router/JournalRoutes";
import { ChekingAuth } from "../UI/";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const AppRouter = () => {
  const { status } = useCheckAuth();
  if (status === "checking") {
    return <ChekingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <>
          <Route path="/auth/*" element={<Navigate to="/" />} />
          <Route path="/*" element={<JournalRoutes />} />
        </>
      ) : (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      )}
    </Routes>
  );
};
