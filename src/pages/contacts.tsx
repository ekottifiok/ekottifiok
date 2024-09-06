import { Button, Link, Stack, Typography } from '@mui/material'
import type { ReactNode } from "react";
import { ContactData } from "@components/populate";
import { MdSend } from "react-icons/md";
import { PageDesign } from '@components/utils';

export function Contacts(): ReactNode {
  return <PageDesign header='Contacts'>
    <Stack gap={3}>
      {ContactData.map((item) => (
        <Stack direction='row' gap={3} key={item.key} sx={{ alignItems: 'center', color: 'white', fontSize: 40}}>
          {item.icon}
          <Link href={item.link} rel="noopener noreferrer" target="_blank" underline='none'>
            <Typography sx={{ color: 'white', fontSize: '20px', lineHeight: '1.5rem' }}>
              {item.content}
            </Typography>
          </Link>
        </Stack>
      ))}
      <Button color="success" startIcon={<MdSend fontSize='large' />} sx={{width: 'auto'}} variant="contained">
        <Typography variant='body1'>Contact Form</Typography>
      </Button>
    </Stack>
  </PageDesign>
}