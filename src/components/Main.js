import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Dendrogram from './Dendro.js';
import ProgressBar from './ProgressBar.js';
import Contents from './Contents.js';

import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import CircleIcon from '@mui/icons-material/Circle';

import "./section.css"

// New function to transform your specific data format into a hierarchical structure


const orderDict = {
  "/preparation": {
    "start" : 0,
    "Wants & Needs": 1,
    "Homebuying Education": 2,
    "Create Your Budget": 3,
    "Build Your Credit": 4,
    "Gather Documents": 5
  },
  "/exploration": {
    "start" : 0,
    "Build Your Team": 1,
    "Pre-Approval": 2,
    "Begin Your Search": 3,
    "Choose Your Home": 4
  },
  "/initiation": {
    "start" : 0,
    "Make An Offer": 1,
    "Home Inspection": 2,
    "Purchase & Sale Agreement": 3,
    "Apply for a Mortgage": 4
  },
  "/finalization" : {
    "start" : 0,
    "Shop for Home Insurance": 1,
    "Final Walkthrough": 2,
    "Closing": 3
  }
}


function transformData(inputData) {
  shuffleArray(inputData)

  const root = {
    type: 'node',
    name: 'You',
    children: []
  };

  // Using a for loop instead of forEach
  for (let i = 0; i < inputData.length; i++) {
    const item = inputData[i];
    var min = -20;
    var max = 20;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Skip the current iteration if the name is a single space
    if (item.name === " ") {
      continue;
    }

    root.children.push({
      type: 'leaf',
      name: item.name,
      value: item['Position'],
      section: item.section, // Storing the section information
      links: ['Root'],
      offset: randomNumber
    });
  }

  return root;
}


function extractSections(initiation) {
  const sectionMap = new Map();
  const sections = [];

  initiation.forEach((item) => {
    item.section.forEach((sectionId) => {
      if (!sectionMap.has(sectionId)) {
        sectionMap.set(sectionId, true);
        sections.push({ id: sectionId, name: sectionId });
      }
    });
  });

  return sections;
}

function extractIndexes(initiation) {
  var counter = 0;
  const result = {};
  initiation.forEach(item => {
    item.section.forEach(sectionName => {
      if (!result[sectionName]) {
        result[sectionName] = counter;
        counter++;
      }
    });
  });
  result["start"] = 0;
  return result;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


export default function BasicGrid({ data, contents, color, sectionDescription, title }) {
  const transformedData = useMemo(() => transformData(data), [data]);

  const sections = extractSections(data);


  const graphWidth = window.innerWidth / 1.8;
  const dendrogramRef = useRef();

  const [activeSection, setActiveSection] = useState("start");
  const [previousSection, setPreviousSection] = useState(null);

  useEffect(() => {
    const container = document.querySelector('.container-snap');

    const handleScroll = () => {
      let activeSectionId = null;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        const { top, bottom } = sectionElement.getBoundingClientRect();

        if (top < window.innerHeight && bottom >= 0) {
          // Section is in the viewport
          activeSectionId = section.id;
        }
      });

      if (activeSectionId && activeSectionId !== activeSection) {
        setPreviousSection(activeSection);
        setActiveSection(activeSectionId);


        // Call revealNodes for the new active section
        dendrogramRef.current.revealNodes(activeSectionId);
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeSection, sections, previousSection]);

  const navigate = useNavigate();

  // Use navigate to change the route

  const location = useLocation().pathname
  const nextPage = () => {
    navigate("/exploration")
    // You can use navigate with a string path
    if (location === "/preparation") {
      navigate('/exploration')
    } else if (location === "/exploration") {
      navigate('/initiation')
    } else if (location === "/initiation") {
      navigate('/finalization')
    } else if (location === "/finalization") {
      navigate('/final')
    }
  };

  const test = extractIndexes(data)

  console.log(test)

  let height = window.innerHeight;

  const overlayStyle = {
    position: 'absolute',
    zIndex: 20
  }
  const imageLocation = require(`../media${location}/${orderDict[location][activeSection]}.png`)

  // console.log(activeSection)

  // iterate through contents dict and make an array of contents[i].section
  const progressSections = contents.map(({ section }) => { return { id: section, name: section } })
  progressSections.unshift({ id: "start", name: "start" });

  return (
    <Box className="page">
      <div style={{ ...overlayStyle, ...{ top: 20, left: 25, fontSize: '13px', position: "fixed", display: "flex", alignItems: "center" } }} id="fade-in">
        <Box component="img" sx={{ height: 40 }} src={imageLocation} /><Typography pl={2} color={color} variant="h4">{title}</Typography>
      </div>

      <Box className="page" sx={{ position: "absolute", zIndex: 50, background: "white" }} id="fade-overlay" />

      <Box className="centered-flex" sx={{ width: "50%", height: "100%", position: "fixed", pr: 5 }}>
        <Dendrogram ref={dendrogramRef} data={transformedData} width={graphWidth} color={color} height={graphWidth * 1.5} initialSection={contents[0].section} />

      </Box>

      <ProgressBar sections={progressSections} activeSection={activeSection} />

      <Box className="container-snap" sx={{ width: "50%", height: "100vh", right: 0, position: "absolute" }}>
        <Box
          key={-1}
          className="section top-section"
          sx={{
            width: '35vw',
            height: '100vh',
            margin: '10px',
          }}
          id={"start"}
        >

          <Typography variant='h3' color={color}>{title}</Typography>
          <p>
            {sectionDescription}
          </p>
          <Typography variant='h5' mb={2} fontWeight={600}>Contents</Typography>
          {sections.map((section, index) => (
            <Box key={section["id"]} sx={{ display: "flex", alignItems: "center", cursor: "pointer", zIndex: 10, mb: "10px" }}>
              <CircleIcon sx={{ color: color, fontSize: 15, pr: 1 }} />
              <Typography marginBottom={0}>{section["id"]}</Typography>
            </Box>
          ))}
        </Box>
        {contents.map(({ section, description, resources, barriers }, index) => (

          <Box
            key={index + 1}
            className="section budget-section"
            sx={{
              width: '35vw',
              height: '100vh',
              margin: '10px',
            }}
            id={section}
          >

            <Contents title={section} description={description} barriers={barriers} resources={resources} color={color} />

            {(index === sections.length - 1) && <Box sx={{ width: "100%", mt: 10, display: "flex", justifyContent: "center" }} >
              <Button variant="outlined" size='large' color={location.slice(1)} onClick={nextPage}>{(location === "/finalization") ? "Finish" : "Next"}</Button>
            </Box>}

          </Box>
        ))}

      </Box>
    </Box >
  );
}
