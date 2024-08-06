import { PopoverOrigin } from "@mui/material";

export interface PopoverProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  anchorOrigin?: PopoverOrigin | undefined
  handleClose: () => void;
}