"use client"

import { KeyboardEvent, useCallback, useRef } from "react"
import { toClassName } from "@/shared/lib/class-name-converter"
import styles from "./styles.module.css"

type Props = {
  size: "small" | "medium" | "large" | "full"
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

export const SubmitButtonA = ({ size, children }: Props) => {
  const className = toClassName({
    [styles[size]]: true,
    [styles.button]: true,
    [styles.a]: true,
  })

  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <a className={className}>{children}</a>
}

export const SubmitButtonDiv = ({ size, children }: Props) => {
  const element = useRef<HTMLInputElement>(null)
  const className = toClassName({
    [styles[size]]: true,
    [styles.button]: true,
    [styles.div]: true,
  })

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    const codes = ["Enter", "Space"]
    if (codes.includes(event.code)) {
      element.current?.click()
    }
  }, [])

  return (
    <div
      role="button"
      tabIndex={0}
      className={className}
      onClick={() => element.current?.click()}
      onKeyDown={onKeyDown}
    >
      <input hidden type="submit" ref={element} />
      {children}
    </div>
  )
}

export const Button = ({ size, children, onClick }: Props & { onClick: () => void }) => {
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
