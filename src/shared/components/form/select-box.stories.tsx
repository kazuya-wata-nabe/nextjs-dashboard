import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { SelectBox } from "./select-box"

const meta = {
  component: SelectBox,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "sample",
    size: "medium",
    options: [
      { label: "りんご", value: "apple" },
      { label: "ばなな", value: "banana" },
      { label: "ぶどう", value: "grape" },
    ],
  },
} satisfies Meta<typeof SelectBox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const OnClick: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const combobox = await canvas.findByRole("combobox", { name: "sample" })
    await userEvent.click(combobox)

    const listbox = await canvas.findByRole("listbox")
    await userEvent.selectOptions(listbox, "ばなな")
  },
}
