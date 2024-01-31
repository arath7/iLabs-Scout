import React from 'react';
import Box from '@mui/material/Box';

const ProgressBar = ({ sections, activeSection }) => {
  return (
    <Box sx={{
      position: 'fixed',
      top: '50%',
      right: '20px',
      transform: 'translateY(-50%)',
      zIndex: 1000
    }}>
      {sections.map((section, index) => (
        <Box key={section.id} sx={{ cursor: 'pointer' }}>
          <Box sx={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: section.id === activeSection ? 'black' : 'grey',
            margin: '10px 0'
          }} />
        </Box>
      ))}
    </Box>
  );
};

export default ProgressBar;
