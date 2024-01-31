import React from "react";
import { Exploration } from "../data/Data";
import BasicGrid from "../components/Main";
import { ExplorationContents } from "../data/ExplorationContents";

const sectionDescription = "Dedicate this stage to establishing your financial foundation for the exciting journey of finding your new home. Choose a realtor, secure optimal mortgage pre-approval, and explore financial assistance options. These steps mark the start of your home search, and addressing your financial situation early on contributes to a smoother transition, especially when you already have the necessary documents."

export default function ExplorationPage() {
    return (
        <BasicGrid data={Exploration} contents={ExplorationContents} color={"#E27B68"} title={"Exploration"} sectionDescription ={sectionDescription}/>
    );
}