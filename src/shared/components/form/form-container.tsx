"use client"

import { FormEvent, ReactNode, useCallback } from "react"
import styles from "./styles.module.css"

type Props = {
  children: ReactNode
}

export const FormContainer = ({ children }: Props) => {
  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()
    console.debug("1")
  }, [])

  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      {children}
    </form>
  )
}
