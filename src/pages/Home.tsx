import { type FC, type ReactElement } from 'react';
import { Link } from 'react-router';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import { profile } from 'data';

const sections = [
  {
    title: 'Experience',
    description: 'My professional journey, education, and technical skills.',
    path: '/experience',
    icon: <WorkIcon sx={{ fontSize: 48 }} />,
  },
  {
    title: 'Projects',
    description: 'Interactive demos and fun projects built with React.',
    path: '/projects',
    icon: <CodeIcon sx={{ fontSize: 48 }} />,
  },
];

const Home: FC = (): ReactElement => {
  return (
    <Box>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
          {profile.name}
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom fontWeight={500}>
          {profile.title}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: 'auto', mt: 2, lineHeight: 1.8, whiteSpace: 'pre-line' }}
        >
          {profile.bio}
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {sections.map((section) => (
          <Grid size={{ xs: 12, sm: 6, md: 5 }} key={section.path}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea
                component={Link}
                to={section.path}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {section.icon}
                  </Box>
                  <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {section.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
