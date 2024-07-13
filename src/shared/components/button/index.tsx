"use client"

import { styled } from "styled-components"

type Props = {
  size: "small" | "medium" | "large"
  children: string
}

const pixel = {
  small: "100px",
  medium: "200px",
  large: "300px",
} as const

export const SubmitButton = ({ size, children }: Props) => {
  return size === "small" && <SmallButton size={size}>{children}</SmallButton>
}

const SmallButton = styled.button<{ size: Props["size"] }>`
  width: ${({ size }) => pixel[size]};
`
