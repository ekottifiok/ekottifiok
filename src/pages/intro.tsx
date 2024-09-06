// noinspection HtmlUnknownTarget

import {Box, Button, Link, Stack, Typography} from "@mui/material";
import type {ReactNode} from "react";
import {motion} from "framer-motion"
import {IntroButtons, whatIDo} from "@components/populate";
import {InfinityText} from '@components/utils';
import type {PageParameters} from "@components/interface";


export function Intro({upMd}: PageParameters): ReactNode {
  return (
    <Box pb={upMd ? undefined : 5} sx={{
      height: upMd ? "90vh" : undefined,
      width: "100%"
    }}>
      <motion.div
        animate={{x: 0, opacity: upMd ? undefined : 1,}}
        initial={{x: upMd ? 100 : 0, opacity: upMd ? undefined : 0,}}
        transition={{ease: upMd ? "easeOut" : undefined, duration: 2}}>
        <Stack
          gap={3}
          sx={{
            alignItems: 'center',
            color: 'white',
          }}>
          <Stack
            direction={upMd ? 'row' : 'column'}
            gap={5}
            pt={upMd ? 20 : 5}
            sx={{alignItems: 'center'}}
          >

            <img
              alt='Ifiok Uko Ekott Avatar'
              loading='lazy'
              referrerPolicy="no-referrer"
              src='avatar.jpg'
              style={{
                borderRadius: '15px',
                height: '170px',
                width: '170px'
              }}
            />
            <Stack sx={{alignItems: upMd ? 'normal' : 'center'}}>
              <Typography sx={{textAlign: 'center'}} variant={upMd ? 'h1' : 'h2'}>
                Ifiok Uko Ekott
              </Typography>
              <InfinityText color='white' texts={whatIDo} variant='h3'/>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
      <motion.div
        transition={{duration: 4}}
      >
        <Stack direction={upMd ? 'row' : 'column'} gap={4} mt={5} pt={5}
               sx={{alignItems: 'center', justifyContent: 'center'}}>
          {
            IntroButtons.map((item) => (
              <Link href={item.link} key={item.key}>
                <Button
                  size='large'
                  startIcon={item.icon}
                  sx={{color: 'white', borderRadius: 5, backgroundColor: '#00000080'}}
                  variant='outlined'
                >
                  <Typography variant='body1'>{item.content}</Typography>
                </Button>
              </Link>
            ))
          }
        </Stack>
      </motion.div>
    </Box>
  )
}
