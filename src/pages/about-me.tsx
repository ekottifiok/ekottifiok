import { useState, type ReactNode } from "react";
import { Backdrop, Box, Button, FormControlLabel, Grid, Link, Stack, Typography } from "@mui/material";
import {
  Timeline,
  TimelineContent,
  TimelineConnector,
  TimelineDot,
  TimelineOppositeContent,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import type { Theme } from "@mui/material/styles";
import { timelineData } from "@components/populate";
import { MdLocationPin, MdSchool, MdWork } from "react-icons/md";
import { useResponsive } from "@components/hooks";
import { PageDesign } from "@components/utils";
import { StyledSwitch } from "@components/styled";
import { ABOUT_ME, RESUME_LINK } from "@components/constants";


export function AboutMe(): ReactNode {
  const [isSimplified, setIsSimplified] = useState<boolean>(true);

  const handleIsSimplified = (): void => {
    setIsSimplified(prevState => !prevState);
  };


  return <PageDesign header="About me">
    <Stack>
      <Typography sx={{ textAlign: 'center' }}>{ABOUT_ME}</Typography>
      <Stack>
        <FormControlLabel
          control={<StyledSwitch checked={isSimplified} sx={{ m: 1 }} />}
          label="Simplified Timeline"
          onChange={handleIsSimplified}
        />
      </Stack>
      <AlternateTimeline isSimplified={isSimplified} />
    </Stack>
  </PageDesign>
}

function AlternateTimeline({ isSimplified }: { isSimplified: boolean }): ReactNode {
  const upMd = useResponsive('up', 'md')
  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false)
  const [backdropLink, setBackdropLink] = useState<string | undefined>(undefined);
  const handleBackdropClose = (): void => {
    setOpenBackdrop(false)
    setTimeout(function delayBackdrop() {
      setBackdropLink(undefined)
    }, 500)
  };
  const handleBackdropOpen = (link: string | undefined): void => {
    setBackdropLink(link);
    setOpenBackdrop(true)
  };

  const timeline = timelineData.filter(i => !isSimplified || isSimplified === i.simplified)

  return (
    <Box pt={6}>
      {
        upMd ? (
          <Timeline position="alternate" sx={{ pl: 10 }}>
            {
              timeline.map((item, index) => {
                const isRight = index % 2 === 0;

                return (
                  <TimelineItem key={item.header}>
                    <TimelineOppositeContent
                      align={isRight ? "right" : 'left'}
                      color="white"
                      sx={{ m: 'auto 0' }}
                      variant="body1"
                    >
                      {item.period} {item.isPresent ? "- present": null}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color='primary' sx={{ fontSize: 30 }}>
                        {item.isSchool ? <MdSchool /> : <MdWork />}
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Stack gap={1} sx={{ color: 'white' }}>

                        <Typography component="span" sx={{ color: 'black' }} variant="h5">
                          {item.header}
                        </Typography>


                        <Stack direction={isRight ? 'row' : 'row-reverse'} gap={1} sx={{
                          alignItems: 'center',
                        }}>

                          <MdLocationPin size={30} />
                          <Stack direction='column'>
                            <Typography>{item.institute}</Typography>
                            <Typography>{item.location}</Typography>
                          </Stack>

                        </Stack>

                        <Typography>{item.subheader.split('<br />')}</Typography>
                        {item.previewLink ? (
                          <Box>
                            <Button onClick={() => {
                              handleBackdropOpen(item.previewLink);
                            }} size="small" sx={{ color: '#D0D0D0' }} variant="text">
                              <Typography variant='body2'>View certificate</Typography>
                            </Button>

                          </Box>
                        ) : <Box />}
                      </Stack>
                    </TimelineContent>
                  </TimelineItem>
                )
              })
            }
          </Timeline>
        ) : (
          <Grid container spacing={2}>
            {
              timeline.map((item) => (
                <Grid item key={item.header}>
                  <Stack gap={1} p={2} sx={{
                    backgroundColor: 'white',
                    color: '#00000099',
                    borderRadius: '3% 8%',
                  }}>

                    <Stack>
                      <Typography component="span" sx={{ color: 'black' }} variant="h5">
                        {item.header}
                      </Typography>
                      <Typography variant="caption">
                      {item.period} {item.isPresent ? "- present": null}
                      </Typography>
                    </Stack>


                    <Stack direction='row' gap={1} sx={{
                      alignItems: 'center',
                    }}>
                      {item.isSchool ? <MdSchool size={20} /> : <MdWork size={20} />}
                      <Typography>{item.institute}</Typography>
                    </Stack>

                    <Stack direction='row' gap={1} sx={{
                      alignItems: 'center',
                    }}>

                      <MdLocationPin size={20} />
                      <Typography>{item.location}</Typography>

                    </Stack>

                    <Typography>{item.subheader}</Typography>
                    {item.previewLink ? (
                      <Box>
                        <Button onClick={() => {
                          handleBackdropOpen(item.previewLink);
                        }} size="small" sx={{ color: '#707070' }} variant="outlined">
                          <Typography sx={{ fontSize: 12 }} variant='body2'>View certificate</Typography>
                        </Button>

                      </Box>
                    ) : <Box />}
                  </Stack>

                </Grid>
              ))
            }
          </Grid>
        )
      }
      <Backdrop
        onClick={handleBackdropClose}
        open={openBackdrop}
        sx={{ color: 'white', zIndex: (theme: Theme) => theme.zIndex.drawer + 1 }}
      >
        <img
          alt='A certificate is in view'
          src={backdropLink}
          style={{ height: 'auto', width: upMd ? '50vw' : '75vw' }}
        />
      </Backdrop>

      <Box pt={3}>
        <Link href={RESUME_LINK} underline="hover">
          <Typography sx={{ color: "#D0D0D0" }}>View Résumé</Typography>
        </Link>
      </Box>
    </Box>
  )
}
