import React from "react";

import DashBoard from "./dashboard";
import DashBoardHead from "./dashboard/DashBoardHead";
import DashBoardBody from "./dashboard/DashBoardBody";
import Tab from "./tabs";
import TabHeadMenu from "./tabs/TabHeadMenu";
import TabHeadItem from "./tabs/TabHeadItem";
import TabBodyContainer from "./tabs/TabBodyContainer";
import TabBodyItem from "./tabs/TabBodyItem"
import {Switch, Route} from "react-router-dom"

//Ask about component naming convention

const App = () => {
    return (
    // <div>
    //     <DashBoard>
    //         <Tab>
    //             <DashBoardHead>
    //                 <TabHeadMenu>
    //                     <TabHeadItem toLink="/" name="Home"/>
    //                     <TabHeadItem toLink="/about" name="About"/>
    //                 </TabHeadMenu>
    //             </DashBoardHead>
    //             <DashBoardBody>
    //                 <TabBodyContainer>
    //                     <TabBodyItem toPath="/about">
    //                         Hi
    //                     </TabBodyItem>
    //                 </TabBodyContainer>
    //             </DashBoardBody>
    //         </Tab>
    //     </DashBoard>
    // </div>
    <Tab>
        <TabHeadMenu>
            <TabHeadItem toLink="/" name="Home"/>
            <TabHeadItem toLink="/about" name="About"/>
            <TabHeadItem toLink="/contacts" name="contact"/>
        </TabHeadMenu>
        <TabBodyContainer>
            <TabBodyItem toPath="/">
                home
            </TabBodyItem>
            <TabBodyItem toPath="/about">
                about
            </TabBodyItem>
            <TabBodyItem toPath="/contacts">
                contacts
            </TabBodyItem>
        </TabBodyContainer>
    </Tab>
    )
}

export default App;