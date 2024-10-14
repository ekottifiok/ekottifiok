import {Box, Stack, Typography} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import type {ReactNode} from "react";
import {portfolioTechnologiesData} from "@components/populate";
import {PageDesign} from "@components/utils";

export function Portfolio(): ReactNode {

  return <PageDesign header="Portfolio">
    <Stack sx={{width: '100%'}}>
      <Typography sx={{whiteSpace: 'pre-wrap'}}>
        I would describe myself as an all-rounder.
        <br/>
        I have experience with front end web development (with TypeScript and React).
        <br/>
        I am also versatile in backend used Python and C# to build backend applications.
        <br/>
        I also work with cross platform tools like Flutter and I have had a nice time with it
      </Typography>

      {/* Technologies */}
      <Typography py={5} variant="h4">Technologies</Typography>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={3}>
          {
            portfolioTechnologiesData.map((item) => (
              <Grid key={item.title} lg={4} m={1} sm={6} xs={12}>
                <Box p={2} sx={{
                  alignItems: 'flex-start',
                  backgroundColor: "white",
                  borderRadius: '4px',
                  boxShadow: "0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)",
                  color: 'black'
                }}>
                  <Stack direction='row' gap={3} sx={{
                    alignItems: 'center',
                  }}>
                    {item.icon}
                    <Stack direction='column'>
                      <Typography variant="h6">{item.title}</Typography>
                      <Stack direction='row' gap={0.5}>
                      {item.languages.map((language, index) => (
                        <Typography key={language} sx={{
                          '&::after': {
              content: index < item.languages.length - 1 ? '","' : 'none',
            },
                        }} variant="body1">{language}</Typography>
                      ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Stack>
  </PageDesign>
}