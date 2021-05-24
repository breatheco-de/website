import React, { useEffect, useState } from "react";
import { MarkdownParser } from "@breathecode/ui-components";
import Helmett from "../components/helmet";
import terms from "../content/terms-and-conditions.md"
import Layout from "../components/layout";

const Terms = () => <div>
    <Helmett
        title="BreatheCode | About Us"
        description="BreatheCode's mission is to accelerate the way junior developers learn and evolve using technology."
        url="https://breatheco.de/aboutus"
        image="https://ucarecdn.com/717ad4fe-f186-44aa-872a-dd04584e4da0/logobcode.png"
    />
    <Layout>
    <p align="center">
        <img alt="breathecode logo" src="https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,128" />
    </p>
    <div className="px-5 container">
        <MarkdownParser source={terms} />
    </div>
    </Layout>
</div>;

export default Terms
