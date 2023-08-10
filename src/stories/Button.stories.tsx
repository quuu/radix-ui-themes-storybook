import { Button } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Radix/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["classic", "solid", "soft", "surface", "outline", "ghost"],
    },
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainButton: Story = {
  args: {
    children: "Button",
  },
};
