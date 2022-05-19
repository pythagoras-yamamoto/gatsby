import React from "react"

export const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
      }}
    >
      © {new Date().getFullYear()} &middot; Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  )
}
