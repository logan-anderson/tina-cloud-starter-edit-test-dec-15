import { useState, useEffect } from "react";
export default function useEditData() {
  const [location, setLocation] = useState("");
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);
  return (fieldName) =>
    JSON.stringify([
      {
        source: "tina",
        path: [location, fieldName],
      },
    ]);
}
