import * as React from "react"
import { Link } from "gatsby"

const NavBar = () => {
  return (
    <div class="flex flex-row gap-6 font-light mt-16">
        <Link to="/">About</Link>
        <Link to="/writing/">Writing</Link>
        <Link to="/writing/">Resume</Link>
    </div>
  )
}

export default NavBar
