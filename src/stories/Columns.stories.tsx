import { Columns } from "../Component/Columns";
import { ComponentMeta } from "@storybook/react";
import React from "react";
import { ComponentStory } from "@storybook/react";
import { PMSGrid } from "../types";

export default {
    title: 'PMSGrid/Columns',
    component: Columns,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      columnsOptions: {
        color: {control:"color"}
      }
    },
  } as ComponentMeta<typeof Columns>;

const Template: ComponentStory<typeof Columns> = (args) => <Columns {...args} />;

const testData:PMSGrid.ColumnOptions[] = [
    
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

export const BasicColumns = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicColumns.args = {
  columnsOptions: testData
};