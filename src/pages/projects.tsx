import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { useEffect, useState, type ReactNode } from "react";
import { programmingStack, projectsData } from "@components/populate";
import type { PageParameters, ProgrammingStackEnum } from "@components/interface";
import { PageDesign } from '@components/utils';
import useMeasure from 'react-use-measure'
import { animate, motion, useMotionValue } from 'framer-motion';

function HandleIndividualProject(
  { language, upSm }: { language: ProgrammingStackEnum[], upSm: boolean | undefined }
): ReactNode {
  const xTranslation = useMotionValue(0)
  const [ref, { width }] = useMeasure()
  const [pauseOnHover, setPauseOnHover] = useState(false)
  const [rerender, setRerender] = useState(false)
  const [mustFinish, setMustFinish] = useState(false)


  useEffect(() => {
    const finalPosition = pauseOnHover ? 1000 : 5
    // console.log(`final position ${finalPosition}`)
    const position = (-width / 2) - 8
    const xTranslationValue = xTranslation.get()

    const controls = mustFinish ? animate(xTranslation, [xTranslationValue, finalPosition], {
      ease: 'linear',
      duration: finalPosition * (1 - xTranslationValue / finalPosition),
      onComplete: () => {
        setMustFinish(false)
        setRerender(!rerender)
      }
    }) : animate(xTranslation, [0, position], {
      ease: 'linear',
      duration: finalPosition,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    });
    controls.stop;

    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only care about this dependencies
  }, [xTranslation, width, pauseOnHover, rerender])

  return (


    <Box sx={{ overflow: 'hidden', width: '40vw', zIndex: '3' }}>
      <motion.div
        onHoverEnd={() => {
          setMustFinish(true)
          setPauseOnHover(false)
        }}
        onHoverStart={() => {
          setMustFinish(true)
          setPauseOnHover(true)
        }}
        ref={ref}
        style={{ x: xTranslation }}
      >
        <Stack direction='row' gap={100} sx={{
          // width: '100%',
          // /* animation properties */
          // mozTransform: 'translateX(100%)',
          // webkitTransform: 'translateX(100%)',
          // transform: 'translateX(100%)',
          // mozAnimation: "my-animation 15s linear infinite",
          // webkitAnimation: 'my-animation 15s linear infinite',
          // animation: 'my-animation 15s linear infinite',
          display: upSm ? 'none' : undefined,
          zIndex: 0,
        }}>
          {language.map((item) => {
            const stackDetails = programmingStack[item]
            return (
              <Link href={stackDetails.link} key={item}>
                <img
                  alt={`${item} logo`}
                  src={stackDetails.image}
                  style={{ height: 'auto', width: "150px" }}
                />
              </Link>
            )
          })}
        </Stack>
      </motion.div>
    </Box>)


}

export function Projects({ upMd, upSm }: PageParameters): ReactNode {

  return <PageDesign header='Projects'>
    <Stack gap={3} sx={{ width: '100%' }}>
      {projectsData.map(({
        title, logo, devices, subHeader, language
      }) => {
        return (
          <Stack direction='row' key={title} p={2} sx={{
            alignItems: 'center', backgroundColor: 'white',
            borderRadius: '4px', color: 'black', height: '157px',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}>

            <Stack gap={1} sx={{ justifyContent: 'center', zIndex: 1 }} width={upMd ? "25vw" : "auto"}>
              <Typography
                noWrap sx={{ width: 'inherit', height: 'inherit' }}
                textOverflow='ellipsis'
                variant='h3'
              >{title}</Typography>
              <Typography variant='body2'>{subHeader}</Typography>
              <Stack direction='row' gap={1} sx={{ display: upMd ? undefined : 'none' }}>
                {devices.map(({ device, id }) => (
                  <Box key={id} px={1} sx={{ backgroundColor: '#01579b', borderRadius: '4px' }}>
                    <Typography sx={{ color: 'white', fontSize: '12px' }}>
                      {device}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>

            <HandleIndividualProject language={language} upSm={upSm} />

            <Stack direction="column" sx={{
              alignItems: 'center',
              justifyContent: 'center', zIndex: 1
            }}>
              <img alt={title} height="auto" src={logo} width={upMd ? "100px" : "50px"} />
              <Box sx={{ flexDirection: 'row-reverse' }}>
                <Button color="success" variant="contained">
                  <Typography>Open</Typography>
                </Button>
              </Box>
            </Stack>
          </Stack>
        )
      })}
    </Stack>
  </PageDesign>;

}