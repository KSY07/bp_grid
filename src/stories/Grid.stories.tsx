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
            color: "white",
            title: "TestR1",
            data: [
                {
                    innerContent: "Test1-1"
                },
                {
                    innerContent: "Test1-2"
                },
            ]
        },
        {   
            color: "white",
            title: "TestR2",
            data: [
                {
                    innerContent: "Test2-1"
                },
                {
                    innerContent: "Test2-2"
                },
            ]
        },
    ]
}

export const BasicGrid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicGrid.args = {
    width: 500,
    height: 500,
    data: testData
};