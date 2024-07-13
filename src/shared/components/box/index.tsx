"use client"

import { PropsWithChildren } from "react"
import styled from "styled-components"

type Props = PropsWithChildren

export const FlexRow = ({ children }: Props) => {
  return <Flex direction={"row"}>{children}</Flex>
}

export const FlexCol = ({ children }: Props) => {
  return <Flex direction={"column"}>{children}</Flex>
}

const Flex = styled.div<{ direction: "row" | "column" }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`
