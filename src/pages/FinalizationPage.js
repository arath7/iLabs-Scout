import React from "react";
import { Finalization } from "../data/Data";
import BasicGrid from "../components/Main";
import { FinalizationContents } from "../data/FinalizationContents";

const sectionDescription= "Now that you've submitted an offer and, hopefully, reached an agreement with the seller, what's next? Well, to officially make your chosen home yours, there are still some paperwork and procedural steps to navigate. This phase provides details on appraising your home, conducting a thorough home inspection, and completing the official title transfer, ensuring that your perfect new home is officially under your name. It's an exhilarating step that brings you closer to the conclusion of your home-buying journey. Keep pushing forward— you've got this!"

export default function FinalizationPage() {
    return (
        <BasicGrid data={Finalization} contents={FinalizationContents} color={"#B65965"} title={"Finalization"} sectionDescription={sectionDescription}/>
    );
}