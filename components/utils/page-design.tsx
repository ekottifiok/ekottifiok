import {useResponsive} from "@components/hooks";
import {Stack, Typography} from "@mui/material";
import type {ReactNode} from "react";
import kebabCase from 'lodash.kebabcase';
import type {PageDesignParameters} from "@components/interface";

export function PageDesign({header, children, sx}: PageDesignParameters): ReactNode {
  const upMd = useResponsive('up', 'md')
  return (
    <Stack
      direction={upMd ? 'row' : 'column'}
      gap={8}
      id={kebabCase(header.toLowerCase())} px={3} py={8}
      sx={{alignItems: 'center', justifyContent: 'flex-start', minHeight: '100vh', color: 'white', ...sx}}>
      <Typography sx={{
        textAlign: upMd ? 'start' : 'center',
        width: '250px'
      }} variant='h2'>{header}.</Typography>
      {children}
    </Stack>
  )
}