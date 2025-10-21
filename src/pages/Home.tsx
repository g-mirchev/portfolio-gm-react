import { Divider, Paper, Typography } from '@mui/material'
import { CatCard } from 'modules/cat'
import { ThemeToggleButton } from 'modules/theme';

const Home = () => {

  return (
    <Paper  
      style={{
        padding: '20px',
      }}
    >
      <Typography variant='h2'>UNDER CONSTRUCTION</Typography>
      <Divider />
      <Typography variant='body1'>Content coming soon...</Typography>
      <CatCard />
      <ThemeToggleButton />
    </Paper>
  )
}

export default Home;