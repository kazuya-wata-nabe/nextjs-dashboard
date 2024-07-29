import type { Meta, StoryObj } from "@storybook/react"
import { userEvent, within } from "@storybook/test"
import Page from "./page"

const meta = {
  component: Page,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const ValidInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // const input = canvas.getByRole("textbox", { name: "名前必須" })
    const input = canvas.getByRole("textbox", { name: /名前/ })
    const button = canvas.getByRole("button", { name: "登録" })

    await userEvent.type(input, "foo")

    await userEvent.click(button)
  },
}
