import { ComponentMeta } from "@storybook/react";
import React from "react";
import { ComponentStory } from "@storybook/react";
import { PMSGrid } from "../types";
import Grid from "../grid";

export default {
    title: 'PMSGrid/Grid',
    component: Grid,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      columnsOptions: {
        color: {control:"color"}
      }
    },
  } as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

const testData:PMSGrid.GridData = {
    columns: [
        {   
            innerContent: "-",
            color: "white",
            drop: false
        },
    
        {
            innerContent: "TestC2",
            color: "white",
            drop: false
        },
    
        {
            innerContent: "TestC3",
            color: "white",
            drop: true
        },
    ],
    rows: [
        {   
            innerContent: "TestR1",
            color: "white",
            drop: false
        },
    
        {
            innerContent: "TestR2",
            color: "white",
            drop: false
        },
    
        {
            innerContent: "TestR3",
            color: "white",
            drop: true
        },
    ],
    cells: []
}

export const BasicGrid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicGrid.args = {
    width: 500,
    height: 500,
    data: testData
};