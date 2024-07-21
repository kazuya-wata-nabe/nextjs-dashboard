import type { Meta, StoryObj } from "@storybook/react"
import { SelectBox } from "./select-box"

const meta = {
  component: SelectBox,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "sample",
    size: "medium",
  },
} satisfies Meta<typeof SelectBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    options: [
      { label: "りんご", value: "apple" },
      { label: "ばなな", value: "banana" },
      { label: "ぶどう", value: "grape" },
    ],
  },
}
