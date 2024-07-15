import { PropsWithChildren } from "react"
import { toClassName } from "@/shared/lib/class-name-converter"
import styles from "./styles.module.css"

type Props = PropsWithChildren<{
  className?: string
  gap?: 8 | 16 | 24 | 32 | 64
}>

export const GridContainer = () => {}

export const FlexRow = ({ gap, children, ...props }: Props) => {
  const className = toClassName({
    [props.className ?? ""]: !!props.className,
    [styles.flexCol]: true,
    [styles[`gap${gap ?? 8}`]]: !!gap,
  })

  return <div className={className}>{children}</div>
}

export const FlexCol = ({ gap, children, ...props }: Props) => {
  const className = toClassName({
    [props.className ?? ""]: !!props.className,
    [styles.flexCol]: true,
    [styles[`gap${gap ?? 8}`]]: !!gap,
  })

  return <div className={className}>{children}</div>
}

export const GridBox = ({ children }: PropsWithChildren) => {
  return <div className={styles.grid}>{children}</div>
}
