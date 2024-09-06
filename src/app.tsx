import { Box, IconButton, Stack } from "@mui/material";
import type { ReactNode } from "react";
import { MdReplay } from "react-icons/md";
import { useResponsive } from "@components/hooks";
import {StyledDivider} from "@components/styled";
import { AboutMe, Intro, Footer, Portfolio, Contacts, Projects } from "./pages";

export function App(): ReactNode {
  const upMd = useResponsive('up', 'md')
  const upSm = useResponsive('up', 'sm')
  
  return (
    <Box sx={{ backgroundColor: 'rgb(8, 103, 136)' }}>
      <Stack p={1} sx={{ flexDirection: 'row-reverse', zIndex: 1, height: '10vh' }}>
        <IconButton>
          <MdReplay color='white' fontSize='large' />
        </IconButton>
      </Stack>
      <Intro upMd={upMd} />
      <StyledDivider />
      <AboutMe />
      <StyledDivider />
      <Portfolio />
      <StyledDivider />
      <Projects upMd={upMd} upSm={upSm} />
      <StyledDivider />
      <Contacts />
      <Footer />
    </Box>
  )
}