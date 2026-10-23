import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Anchor = ({ to, children, ...rest }) => {
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Anchor
