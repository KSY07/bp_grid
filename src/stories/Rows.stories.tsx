import { ComponentMeta } from "@storybook/react";
import React from "react";
import { ComponentStory } from "@storybook/react";
import { PMSGrid } from "../types";
import { Rows } from "../Component/Rows";

export default {
    title: 'PMSGrid/Rows',
    component: Rows,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      color: { control: 'color' },
    },
  } as ComponentMeta<typeof Rows>;

const Template: ComponentStory<typeof Rows> = (args) => <Rows {...args} />;

const testData = [
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
export const BasicRows = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicRows.args = {
    rowsOptions: testData  
};