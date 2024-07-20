"use client"

import { FormEvent, useCallback } from "react"
import { SubmitButton } from "@/shared/components/button"
import { TextField } from "@/shared/components/form"

export const RegisterForm = () => {
  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()
    console.debug("1")
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <TextField label="hoge" />
      <SubmitButton size="small">push me</SubmitButton>
    </form>
  )
}
