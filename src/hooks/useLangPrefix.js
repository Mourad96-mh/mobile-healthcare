import { useLocation } from "react-router-dom";

export const useLangPrefix = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith("/en")) return "/en";
  if (pathname.startsWith("/es")) return "/es";
  if (pathname.startsWith("/ar")) return "/ar";
  return "";
};
