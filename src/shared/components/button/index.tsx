import styles from "./styles.module.css"

type Props = {
  size: "small" | "medium" | "large"
  children: string
}

export const SubmitButton = ({ size, children }: Props) => {
  return (
    <button type="submit" className={styles[size]}>
      {children}
    </button>
  )
}
