"use client"

import { useState } from "react"
import { FlexCol } from "@/shared/components/box"
import { Button } from "@/shared/components/button"
import { InformationDialog } from "@/shared/components/dialog"

const Home = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <FlexCol gap={32}>
        <h1>モーダル</h1>
        <Button size="full" onClick={() => setOpen(true)}>
          開く
        </Button>
      </FlexCol>
      <InformationDialog open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default Home
