import { Rows } from "../Component/Rows";
import { ComponentMeta } from "@storybook/react";
import React from "react";
import { ComponentStory } from "@storybook/react";
import { PMSGrid } from "../types";

export default {
    title: 'PMSGrid/Rows',
    component: Rows,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      rowsOptions: {
        color: {control:"color"}
      }
    },
  } as ComponentMeta<typeof Rows>;

const Template: ComponentStory<typeof Rows> = (args) => <Rows {...args} />;

const testData:PMSGrid.RowOptions[] = [
    
    {   
        innerContent: "Test1",
        color: "white",
        drop: false
    },

    {
        innerContent: "Test2",
        color: "white",
        drop: false
    },

    {
        innerContent: "Test3",
        color: "white",
        drop: true
    },
]

export const BasicRows = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicRows.args = {
  rowsOptions: testData
};