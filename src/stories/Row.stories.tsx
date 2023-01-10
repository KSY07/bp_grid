import { ComponentMeta } from "@storybook/react";
import React from "react";
import { ComponentStory } from "@storybook/react";
import { Row } from "../Component/Row";

export default {
    title: 'PMSGrid/Row',
    component: Row,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      color: { control: 'color' },
    },
  } as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => <Row {...args} />;

export const BasicRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicRow.args = {
  color: "white",
  innerContent: "TestRow",
};