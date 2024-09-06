import {Link, Stack, Typography} from "@mui/material";
import type {ReactNode} from "react";

export function Footer(): ReactNode {
  const date = new Date();

  return (
    <Stack id='footer' sx={{
      alignItems: 'center',
      backgroundColor: '#424242',
      color: 'white',
      fontSize: '16px',
      height: '15vh',
      justifyContent: 'center'
    }}>
      <Typography>© {date.getFullYear()} Ifiok Uko Ekott</Typography>
      <Stack direction='row' gap={2}>
        <Link href='#' underline='none'><Typography>Data Protection</Typography></Link>
        <Typography>|</Typography>
        <Link href='#' underline='none'><Typography>Contact</Typography></Link>
        <Typography>|</Typography>
        <Link href='#' underline='none'><Typography>Imprint</Typography></Link>
      </Stack>
    </Stack>
  )
}