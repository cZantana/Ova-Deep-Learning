// src/components/TemaItem.jsx
import React from 'react';
import { Typography, Box } from '@mui/material';

const TemaItem = ({ label, value }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 0.5 }}>
      <Typography variant="body1">{label}</Typography>
      <Typography variant="body1" fontWeight="bold">{value}</Typography>
    </Box>
  );
};

export default TemaItem;
