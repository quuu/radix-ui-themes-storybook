import { AspectRatio } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const AspectRatioDemo = () => {
  return (
    <AspectRatio ratio={16 / 8}>
      <img
        src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
        alt="A house in a forest"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: "var(--radius-2)",
        }}
      />
    </AspectRatio>
  );
};

const meta = {
  title: "Radix/AspectRatio",
  component: AspectRatioDemo,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AspectRatioDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainAspectRatio: Story = {
  args: {},
};
