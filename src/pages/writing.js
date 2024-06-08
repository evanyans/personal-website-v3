import * as React from "react"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
const WritingPage = () => {
  return (
    <Layout>
      <main >
        <h1 class="font-semibold text-2xl mt-12">
            my brain dump <span class="text-2xl">&nbsp;</span>
          </h1>
      </main>
    </Layout>
  )
}

export default WritingPage

export const Head = () => <title>Evan Yan</title>

