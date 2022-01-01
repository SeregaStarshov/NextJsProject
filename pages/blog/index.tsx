import { FC } from 'react';
import { Box, Typography, Container } from '@mui/material';

const Blog: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        flex: '1 1 auto',
      }}
    >
      <Container
        sx={{
          maxWidth: '1278px',
        }}
      >
        <Typography
          component='h2'
          sx={{
            color: '#FFFFFF',
            padding: '15px 49px',
            backgroundColor: 'transparent',
          }}
        >
          БЛОГ
        </Typography>
      </Container>
    </Box>
  );
};

export default Blog;
