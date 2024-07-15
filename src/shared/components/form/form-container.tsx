"use client"

import { FormEvent, ReactNode, useCallback } from "react"
import styles from "./styles.module.css"

type Props = {
  children: ReactNode
}

export const FormContainer = ({ children }: Props) => {
  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const entries = new Array<string>()
    for (const [, v] of formData.entries()) {
      entries.push(`${v}`)
    }
    alert(entries)
  }, [])

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      {children}
    </form>
  )
}
