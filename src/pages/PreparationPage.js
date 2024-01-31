import React from "react";
import { Preparation } from "../data/Data";
import BasicGrid from "../components/Main";
import { PreparationContents } from "../data/PreparationContents";

const sectionDescription = "The first phase of your journey outlines everything you need to accomplish before embarking on your home search. By preparing thoroughly in advance, you can approach the process with confidence, ensuring you are comfortable with your decisions and grounded in your expectations for your new home. While unexpected changes or exigent circumstances may arise, the following steps are designed to account for the anticipated course of action. Good luck!"

export default function PreparationPage() {
    return (
        <BasicGrid data={Preparation} contents={PreparationContents} color={"#4482CF"} title={"Preparation"} sectionDescription={sectionDescription}/>
    );
}