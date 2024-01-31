import React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledAccordion = ({ summary, details, defaultExpanded }) => (
  <MuiAccordion
    
    defaultExpanded={defaultExpanded}
    sx={{
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
        marginBottom: 0, 
      },
      '&:before': {
        display: 'none',
      },
      '&.Mui-focused, &.Mui-focusVisible': {
        outline: 'none',
      },
      '& .MuiAccordionDetails': {
        paddingTop: 0, // Reduce padding-top
        paddingBottom: 0, // Reduce padding-bottom
      },
      '& .MuiAccordionSummary-root': {
        marginTop: '0px' // Reduce margin-bottom to pull AccordionDetails up
      },
      // Add additional styles as needed
    }}
    margin={"100px"}
  >
    <MuiAccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel-content"
      id="panel-header"
    >
      <Typography variant='h5'>{summary}</Typography>
    </MuiAccordionSummary>
    <MuiAccordionDetails>
      <Typography sx={{fontSize: "17px"}}>
        {details}
      </Typography>
    </MuiAccordionDetails>
  </MuiAccordion>
);

export default StyledAccordion;
