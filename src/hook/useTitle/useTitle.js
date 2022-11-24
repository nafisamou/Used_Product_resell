import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Cooking-
    Stove`;
  }, [title]);
};

export default useTitle;
