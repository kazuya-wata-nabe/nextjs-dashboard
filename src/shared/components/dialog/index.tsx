import { MouseEvent, TouchEvent, useCallback, useEffect, useMemo, useRef } from "react"
import { toClassName } from "@/shared/lib/class-name-converter"
import styles from "./styles.module.css"

type Props = {
  open: boolean
  onClose: () => void
}

/** フォーカス可能な要素の一覧 */
const focusableElementsSelector =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export const InformationDialog = ({ open, onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const backup = useRef<HTMLElement | null>(null)

  const className = useMemo(
    () =>
      toClassName({
        [styles.overlay]: true,
        [styles.close]: !open,
      }),
    [open],
  )

  const stopPropagation = useCallback(
    (event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => event.stopPropagation(),
    [],
  )

  const handleKeyDownTab = useCallback((event: KeyboardEvent): void => {
    if (!ref.current || event.key !== "Tab") {
      return
    }

    const focusableElements = ref.current
      ? [...ref.current.querySelectorAll<HTMLElement>(focusableElementsSelector)]
      : []
    const firstElement = focusableElements[0]
    const lastElement = focusableElements.at(-1)

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement?.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement?.focus()
    }
  }, [])

  const handleKeyDownEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    if (document.activeElement instanceof HTMLElement) {
      backup.current = document.activeElement
    }

    const target = ref.current
    target?.addEventListener("keydown", handleKeyDownTab)
    target?.addEventListener("keydown", handleKeyDownEscape)
    if (open) {
      const focusableElements = target
        ? [...target.querySelectorAll<HTMLElement>(focusableElementsSelector)]
        : []

      focusableElements[0]?.focus()
    }

    return () => {
      target?.removeEventListener("keydown", handleKeyDownTab)
      target?.removeEventListener("keydown", handleKeyDownEscape)
      backup.current?.focus()
    }
  }, [handleKeyDownEscape, handleKeyDownTab, open])

  return (
    <div role="presentation" ref={ref} className={className} onClick={onClose} onTouchEnd={onClose}>
      <div
        role="presentation"
        className={styles.container}
        onClick={stopPropagation}
        onTouchEnd={stopPropagation}
      >
        <div role="dialog" aria-modal={true}>
          <h3>hoge</h3>
          <button onClick={onClose}>閉じる</button>
        </div>
      </div>
    </div>
  )
}
