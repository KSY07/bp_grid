import { ComponentMeta } from "@storybook/react";
import React from "react";
import { ComponentStory } from "@storybook/react";
import { Row } from "../Component/Row";
import { PMSGrid } from "../types";

export default {
    title: 'PMSGrid/Row',
    component: Row,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      color: { control: 'color' },
    },
  } as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => <Row {...args} />;

const testData = [
            {
                innerContent: "Test1-1"
            },
            {
                innerContent: "Test1-2"
            },
        ]

export const BasicRow = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicRow.args = {
  color: "white",
  title: "TestR1",
  data: testData
};