import { Divider } from "@mui/material";
import { alpha, styled, type Theme } from "@mui/material/styles";

export const StyledDivider = styled(Divider)(({ theme }: { theme: Theme }) => ({
    borderTop: `3px solid ${alpha(theme.palette.common.black, 0.4)}`
  }))