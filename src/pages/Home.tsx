import {  Divider, Paper, Typography } from '@mui/material'
import { CatCard } from 'modules/cat'
import { ThemeToggleButton } from 'modules/theme';

const Home = () => {

  return (
    <Paper  
      sx={{
        mx: 'auto',
        my: { xs: 2, sm: 3 },
        p: { xs: 2, sm: 3 },
        textAlign: 'center',
      }}
    >
        <Typography variant='h2'>UNDER CONSTRUCTION</Typography>
        <Divider />
        <Typography variant='body1'>Content coming soon... Meanwhile, enjoy some cats :3</Typography>
        <CatCard />
        <ThemeToggleButton />
    </Paper>
  )
}

export default Home;