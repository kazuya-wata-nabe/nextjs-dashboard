import { MouseEvent, TouchEvent, useCallback } from "react"
import { toClassName } from "@/shared/lib/class-name-converter"
import styles from "./styles.module.css"

type Props = {
  open: boolean
  onClose: () => void
}

export const InformationDialog = ({ open, onClose }: Props) => {
  const className = toClassName({
    [styles.overlay]: true,
    [styles.close]: !open,
  })
  const stopPropagation = useCallback(
    (event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => event.stopPropagation(),
    [],
  )

  return (
    <div role="presentation" className={className} onClick={onClose} onTouchEnd={onClose}>
      <div
        role="presentation"
        className={styles.container}
        onClick={stopPropagation}
        onTouchEnd={stopPropagation}
      >
        <div role="dialog" aria-hidden={open}>
          <h3>hoge</h3>
          <button onClick={onClose}>close</button>
        </div>
      </div>
    </div>
  )
}
