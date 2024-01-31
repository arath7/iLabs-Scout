import React from "react";
import { Initiation } from "../data/Data";
import BasicGrid from "../components/Main";
import { InitiationContents } from "../data/InitiationContents";

const sectionDescription = "Begin your journey of finding your dream home by comparing different homes, hiring or making sure you have legal representation, and finalizing your mortgage. This crucial step marks the culmination of your home-buying journey, so revisit your must-haves list to ensure the chosen home meets all your requirements seamlessly."

export default function ApplicationPage() {
    return (
        <BasicGrid data={Initiation} contents={InitiationContents} color={"#4F9C82"} title={"Initiation"} sectionDescription={sectionDescription}/>
    );
}