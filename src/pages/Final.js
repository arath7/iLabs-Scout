import React, { useState, useEffect } from "react"
import { useTrail, useSpring, a } from "@react-spring/web"
import { Typography, Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import "../styles/cover.css"

const TitleTrail = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200, duration: 250 },
        opacity: open ? 1 : 0,
        y: open ? 0 : 100,
        height: open ? 110 : 0,
        delay: 500,
        transform: `perspective(600px) rotateX(${0}deg)`,
        from: { opacity: 0, y: 100, transform: `perspective(600px) rotateX(${-90}deg)`, height: 0 },
    })
    return (
        <Box
            sx={{ mb: 5 }}
        >
            {trail.map(({ height, ...style }, index) => (
                <a.div key={index} className="title-trail" style={style} >
                    <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
            ))}
        </Box>
    )
}

const FadeInComponent = ({ children }) => {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 1250,
    });

    return <a.div style={fadeIn}>{children}</a.div>;
};

export default function Final() {
    const [open] = useState(true)
    const [visible, setVisible] = useState(false)


    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );


    function openPage(page) {
        setVisible(true)
        setTrigger(true)
    }


    let navigate = useNavigate();

    const [trigger, setTrigger] = useState(false);

    const sectionNames = ["Preparation", "Exploration", "Application", "Finalization"];
    const colors = ['#4482CF', '#E27B68', '#4F9C82', '#B65965'];

    useEffect(() => {
        let interval;
        if (trigger) {
            interval = setInterval(() => navigate("/preparation"), 1000);
        }
        return () => clearInterval(interval);
    }, [trigger]);

    const navigateToSection = (section) => {
        // You'll need to define the logic to navigate to a specific section
        navigate(section)
    }

    return (
        <div>
            {visible && <Box className="page" sx={{ position: "absolute", zIndex: 50, background: "white" }} id="fade-in" />}
            <div className={"centered-flex page"} onClick={() => openPage("/narrative")} >
                <Box sx={{ width: "50%" }}>
                    <TitleTrail open={open}>
                        <Typography variant='h1' color="black">CONGRATULATIONS</Typography>
                        <Typography variant='h1' color="black">HOMEONWER</Typography>
                    </TitleTrail>
                    <FadeInComponent variant="h6">
                        <Box sx={{width: "30vw"}}>
                            <Typography>
                                You did it! Bravo on completing the guide, your dedication to understanding each step of the process has equipped you with the knowledge needed to navigate the exciting journey ahead.
                                <br /><br />
                                If you have additional questions please reach out to the Boston Home Center.
                                <br /><br />
                                Good luck!
                            </Typography>
                        </Box>
                    </FadeInComponent>
                </Box>
                <Box sx={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-end", pr: 4, mt: -19 }}>
                    <Box
                        sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
                    >

                        {sectionNames.map((section, index) => (
                            <Box key={section} sx={{ display: "flex", alignItems: "center", mb: 2, cursor: "pointer", zIndex: 10 }} onClick={() => navigateToSection(section.toLowerCase())}>
                                <ArrowForwardIcon sx={{ color: colors[index], fontSize: 25 }} />
                                <Typography> {section}</Typography>
                            </Box>
                        ))}
                    </Box>

                </Box>
            </div>
        </div>
    )
}
