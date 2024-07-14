import type { Meta, StoryObj } from "@storybook/react"
import { SubmitButton } from "./index"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  component: SubmitButton,
  parameters: {
    layout: "centered",
  },
  args: {
    size: "small",
  },
} satisfies Meta<typeof SubmitButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    children: "hoge",
  },
}
