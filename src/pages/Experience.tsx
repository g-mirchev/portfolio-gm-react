import { type FC } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Grid,
  Paper,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { experiences, education, skills } from 'data';

const Experience: FC = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
          Experience
        </Typography>
        <Typography variant="body1" color="text.secondary">
          My professional journey in software development.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
              Work
            </Typography>
            <Stack spacing={3}>
              {experiences.map((exp) => (
                <Card key={exp.company}>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          color: 'primary.main',
                          mt: 0.5,
                          display: { xs: 'none', sm: 'block' },
                        }}
                      >
                        <WorkIcon sx={{ fontSize: 32 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight={600}>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          {exp.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {exp.location} | {exp.period}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {exp.description}
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={0.5}>
                          {exp.technologies.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              variant="outlined"
                              sx={{ borderRadius: 1, fontSize: '0.75rem' }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h4" component="h2" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
              Education
            </Typography>
            <Stack spacing={3}>
              {education.map((edu) => (
                <Card key={edu.institution}>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          color: 'primary.main',
                          mt: 0.5,
                          display: { xs: 'none', sm: 'block' },
                        }}
                      >
                        <SchoolIcon sx={{ fontSize: 32 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight={600}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          {edu.institution}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {edu.location} | {edu.period}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {edu.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              position: { md: 'sticky' },
              top: { md: 100 },
              border: 1,
              borderColor: 'divider',
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom fontWeight={600} sx={{ mb: 2 }}>
              Skills
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    fontWeight: 500,
                  }}
                />
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
