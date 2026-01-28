import { type FC } from 'react';
import { Link } from 'react-router';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Chip,
  Stack,
} from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PetsIcon from '@mui/icons-material/Pets';
import { projects } from 'data';

const iconMap: Record<string, React.ReactNode> = {
  games: <SportsEsportsIcon sx={{ fontSize: 48 }} />,
  pets: <PetsIcon sx={{ fontSize: 48 }} />,
};

const Projects: FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A collection of fun projects showcasing React, TypeScript, and Material-UI.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6 }} key={project.path}>
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
                to={project.path}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <CardContent sx={{ width: '100%' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {iconMap[project.icon]}
                  </Box>
                  <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={0.5}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{ borderRadius: 1, fontSize: '0.75rem' }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
