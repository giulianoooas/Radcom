import { useEffect } from "react";

export function useTitle(title) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prevTitle = document.title;
      document.title = title ? `Radcom - ${title}` : "Radcom";

      return () => {
        document.title = prevTitle;
      };
    }
  }, [title]);
}
