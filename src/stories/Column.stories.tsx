import { Column } from "../Component/Column";
import { ComponentMeta } from "@storybook/react";
import React from "react";
import { ComponentStory } from "@storybook/react";

export default {
    title: 'PMSGrid/Column',
    component: Column,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      color: { control: 'color' },
    },
  } as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = (args) => <Column {...args} />;

export const BasicColumn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicColumn.args = {
  color: "white",
  innerContent: "TestColumn",
};

export const DropdownColumn = Template.bind({});

DropdownColumn.args = {
  color: "white",
  innerContent: "TestColumn",
  drop: true
}