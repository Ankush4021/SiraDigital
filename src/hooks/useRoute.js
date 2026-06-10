import { useCallback, useEffect, useState } from "react";

export function useRoute() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const handlePop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  const navigate = useCallback((nextPath) => {
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
      setPath(nextPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return { path, navigate };
}
