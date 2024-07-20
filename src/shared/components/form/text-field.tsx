"use client"

import { useId } from "react"
import styles from "./styles.module.css"

type Props = {
  label: string
  required?: true
  name?: string
}

export const TextField = ({ name, label }: Props) => {
  const id = useId()

  return (
    <div className={styles.textField}>
      <label htmlFor={id}>
        {label}
        <span className={styles.required}>必須</span>
      </label>
      <input id={id} name={name} />
    </div>
  )
}
