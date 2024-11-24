"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface LayoutContextType {
  version: "v1" | "v2";
  setVersion: (version: "v1" | "v2") => void;
}


const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
};


export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [version, setVersion] = useState<"v1" | "v2">("v1");
  const router = useRouter();

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const queryVersion = params.get("version") as "v1" | "v2" | null;
    const storedVersion = localStorage.getItem("version") as "v1" | "v2" | null;

    if (queryVersion) {
      setVersion(queryVersion); 
    } else if (storedVersion) {
      setVersion(storedVersion);
    }
  }, []);

  const handleSetVersion = (newVersion: "v1" | "v2") => {
    setVersion(newVersion);
    localStorage.setItem("version", newVersion); // Save version to localStorage

    // Update the URL
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("version", newVersion); // Set query parameter
    router.push(currentUrl.toString()); // Update URL in browser
  };

  return (
    <LayoutContext.Provider value={{ version, setVersion: handleSetVersion }}>
      {children}
    </LayoutContext.Provider>
  );
};
