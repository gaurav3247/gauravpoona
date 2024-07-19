import { useMediaQuery } from "@mui/material";

export const useIsMobile = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return isMobile;
};

export const listItemTextStyles = {
    fontFamily: 'Consolas',
    fontSize: 14,
    fontWeight: 'light',
};