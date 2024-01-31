import React from 'react';
import Typography from '@mui/material/Typography';
import StyledAccordion from './StyledAccordion';
import { Paper, Box } from '@mui/material';

export default function Contents({ title, description, resources, barriers, color }) {
    return (
        <>
            <Typography variant='h3'>{title}</Typography>
            <p>
                {description}
            </p>
            {resources !== "None" &&
                <>
                    <Typography variant='h5'>Resources</Typography>
                    <Box>
                        {resources.map((link, index) => (
                            <a key={index} href={link.url}>{link.name}</a>
                        ))}
                    </Box>
                </>
            }
            {barriers !== "None" &&
                <Box sx={{
                    border: 3,
                    borderColor: color,
                    borderRadius: 5,
                    paddingX: 3,
                    paddingY: 2,
                    marginTop: (resources === "None") ? 0 : 3,
                }}>
                    {barriers}
                </Box>
            }

        </>
    )
}
