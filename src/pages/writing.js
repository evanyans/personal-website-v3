import * as React from "react"
import NavBar from "./navbar"

const WritingPage = () => {
  return (
    <main class="container mx-auto px-10 pb-64  mt-16">
      <NavBar />
      <h1 class="font-semibold text-2xl mt-12">
          my brain dump <span class="text-2xl">&nbsp;</span>
        </h1>
    </main>
  )
}

export default WritingPage

export const Head = () => <title>Evan Yan</title>

