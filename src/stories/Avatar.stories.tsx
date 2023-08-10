import { Avatar } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Radix/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    color: {
      control: "color",
      options: ["solid", "soft"],
    },
    variant: {
      control: "radio",
      options: [
        "tomato",
        "red",
        "crimson",
        "pink",
        "plum",
        "purple",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "teal",
        "green",
        "grass",
        "brown",
        "orange",
        "sky",
        "mint",
        "lime",
        "yellow",
        "amber",
        "gold",
        "bronze",
        "gray",
      ],
    },
    radius: {
      control: "radio",
      options: ["none", "small", "medium", "large", "full"],
    },
    fallback: {
      control: "text",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MainAvatar: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop",
    fallback: "AQ",
  },
};
