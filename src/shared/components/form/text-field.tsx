"use client"

import { useId } from "react"
import styles from "./styles.module.css"

type Props = {
  label: string
  name?: string
}

export const TextField = ({ name, label }: Props) => {
  const id = useId()

  return (
    <div className={styles.textField}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} />
    </div>
  )
}
