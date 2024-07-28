"use client"

import { useCallback, useId, useMemo, useState, KeyboardEvent } from "react"
import { toClassName } from "@/shared/lib/class-name-converter"
import styles from "./styles.module.css"

type Option = {
  label: string
  value: string
}

type Props = {
  label: string
  size: "medium" | "large"
  options: Option[]
}

const update = <T extends object, Key extends keyof T>(state: T, values: Record<Key, T[Key]>) => ({
  ...state,
  ...values,
})

const decrementIndex = (options: Option[], index: number) => {
  return index - 1 < 0 ? options.length - 1 : index - 1
}

const incrementIndex = (options: Option[], index: number) => {
  return index + 1 >= options.length ? 0 : index + 1
}

const getOption = (options: Option[], prev: Option & { index: number }) => {
  return options[prev.index] ?? prev
}

export const SelectBox = ({ label, size, options }: Props) => {
  const id = useId()
  const labelId = `${id}-label`
  const listBoxId = `${id}-listbox`
  const optionId = `${id}-option`

  const [state, setState] = useState({
    isOpen: false,
    value: "",
    label: "選択してください",
    index: -1,
  })

  const toggle = useCallback(() => {
    setState((prev) => update(prev, { isOpen: !prev.isOpen }))
  }, [])

  const updateOption = useCallback(
    (option: Option) => setState((prev) => update(prev, { ...option, isOpen: false })),
    [],
  )

  const handleKeyDownInComboBox = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      switch (event.code) {
        case "Up":
        case "ArrowUp": {
          setState((prev) =>
            update(prev, { isOpen: true, index: decrementIndex(options, prev.index) }),
          )
          break
        }
        case "Down":
        case "ArrowDown": {
          setState((prev) =>
            update(prev, { isOpen: true, index: incrementIndex(options, prev.index) }),
          )
          break
        }
        case "Space":
        case "Enter": {
          setState((prev) =>
            update(prev, { isOpen: false, index: -1, ...getOption(options, prev) }),
          )
          break
        }
        case "Escape": {
          setState((prev) => update(prev, { isOpen: false }))
          break
        }
        default:
      }
    },
    [options],
  )

  const activeDescendant = useMemo(() => {
    return state.value ? `${optionId}-${state.value}` : undefined
  }, [optionId, state.value])

  const listBoxClassName = useMemo(() => {
    return toClassName({
      [styles.listBox]: true,
      [styles.hidden]: !state.isOpen,
    })
  }, [state.isOpen])

  return (
    <div className={toClassName([styles.selectBox, styles[size]])}>
      <label id={labelId}>{label}</label>
      <div
        role="combobox"
        tabIndex={0}
        className={toClassName([styles.comboBox, styles.ellipsis])}
        aria-expanded={state.isOpen}
        aria-haspopup="listbox"
        aria-labelledby={labelId}
        aria-controls={activeDescendant}
        onClick={toggle}
        onBlur={() => {}}
        onKeyDown={handleKeyDownInComboBox}
      >
        <div className={toClassName([styles.label, styles.ellipsis])}>{state.label}</div>
        <div className={styles.arrow}>▼</div>
      </div>
      <ul
        role="listbox"
        id={listBoxId}
        className={listBoxClassName}
        tabIndex={-1}
        aria-expanded={state.isOpen}
        aria-hidden={!state.isOpen}
      >
        {options.map((option, index) => (
          <li
            role="option"
            key={option.value}
            aria-selected={option.value === state.value}
            className={toClassName([
              styles.ellipsis,
              styles.option,
              index === state.index && styles.active,
            ])}
            id={`${optionId}-${option.value}`}
            onClick={() => updateOption(option)}
            onKeyDown={() => {}}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
