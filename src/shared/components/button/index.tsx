import { toClassName } from "@/shared/lib/class-name-converter"
import styles from "./styles.module.css"

type Props = {
  size: "small" | "medium" | "large"
  children: string
}

export const SubmitButton = ({ size, children }: Props) => {
  const className = toClassName({
    [styles[size]]: true,
    [styles.button]: true,
  })

  return (
    <button type="submit" className={className}>
      {children}
    </button>
  )
}

export const ClickButton = ({ size, children, onClick }: Props & { onClick: () => void }) => {
  const className = toClassName({
    [styles[size]]: true,
    [styles.button]: true,
  })

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}
