"use client"

import Image from "next/image"

const A11y = () => {
  return (
    <main>
      <label htmlFor="hoge">aa</label>
      <input id="hoge" onClick={() => {}}></input>

      <Image src="hoge" alt="hoge" />

      <div role="button" onClick={() => {}} onKeyDown={() => {}} tabIndex={0}>
        button
      </div>
    </main>
  )
}

export default A11y
