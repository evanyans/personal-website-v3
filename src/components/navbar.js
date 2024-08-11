import * as React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <main >
      <div class="flex flex-row gap-6 font-light">
          <Link to="/">About</Link>
          <Link to="/writing/">Writing</Link>
          <a href="/Evan_Yan_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
      </div>
    </main>
  )
}

export default NavBar
