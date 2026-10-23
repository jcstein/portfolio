import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ogImageDefault from "../../content/default.jpg"

import { lightTheme } from "../styles/theme"

const SEO = ({ description = ``, lang = `en`, meta = [], title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const ogImageUrl = site.siteMetadata.siteUrl + ogImageDefault

  return (
    <>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="msapplication-TileColor"
        content={lightTheme.colors.primary}
      />
      <meta name="theme-color" content={lightTheme.colors.primary} />
      {meta.map(item => (
        <meta
          key={`${item.name || item.property}:${item.content}`}
          name={item.name}
          property={item.property}
          content={item.content}
        />
      ))}
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      property: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  lang: PropTypes.string,
}

export default SEO
