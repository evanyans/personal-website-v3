import * as React from "react"
import NavBar from './navbar.js'

const IndexPage = () => {
  return (
    <main class="container mx-auto px-4">
      {/* <Link to="/writing/">Writing</Link> */}
      <NavBar/>
      <div class="flex flex-col gap-2">
        <h1 class="font-semibold">Evan Yan</h1>
        <p>I'm a designer, gamer and engineer. I'm currently working as an AI software developer at 
          the University of Waterloo, where I'm building the next job portal for WaterlooWorks.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div> 
      

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Evan Yan</title>
