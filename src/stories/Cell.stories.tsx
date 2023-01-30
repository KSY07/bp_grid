import { Cell } from "../Component/Cell";
import { ComponentMeta } from "@storybook/react";
import React from "react";
import { ComponentStory } from "@storybook/react";

export default {
    title: 'PMSGrid/Cell',
    component: Cell,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      color: { control: 'color' },
    },
  } as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const BasicCell = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicCell.args = {
  color: "white",
  innerContent: "TestCell",
  isEnable: true
};

export const DisabledCell = Template.bind({});

DisabledCell.args = {
  color: "white",
  innerContent: "TestCell",
  isEnable: false
}