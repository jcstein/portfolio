import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import GlobalStateProvider from "../context/provider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
// import Articles from "../components/sections/articles"
import About from "../components/sections/about"
import Interests from "../components/sections/interests"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import { seoTitleSuffix } from "../../config"

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index.edges[0].node
  const { useSplashScreen } = frontmatter

  const globalState = {
    // if useSplashScreen=false, we skip the intro by setting isIntroDone=true
    isIntroDone: useSplashScreen ? false : true,
    // darkMode is initially disabled, a hook inside the Layout component
    // will check the user's preferences and switch to dark mode if needed
    darkMode: false,
  }

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <Hero content={data.hero.edges} />
        {/* Articles is populated via Medium RSS Feed fetch
        <Articles /> */}
        <About content={data.about.edges} />
        <Interests content={data.interests.edges} />
        <Projects content={data.projects.edges} />
        <Contact content={data.contact.edges} />
      </Layout>
    </GlobalStateProvider>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const Head = ({ data }) => {
  const { frontmatter } = data.index.edges[0].node
  const { seoTitle, useSeoTitleSuffix } = frontmatter

  return (
    <SEO
      title={
        useSeoTitleSuffix ? `${seoTitle} - ${seoTitleSuffix}` : `${seoTitle}`
      }
    />
  )
}

Head.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  {
    index: allMdx(
      filter: { internal: { contentFilePath: { regex: "/index/index.mdx/" } } }
    ) {
      edges {
        node {
          frontmatter {
            seoTitle
            useSeoTitleSuffix
            useSplashScreen
          }
        }
      }
    }
    hero: allMdx(
      filter: { internal: { contentFilePath: { regex: "/index/hero/" } } }
    ) {
      edges {
        node {
          frontmatter {
            greetings
            title
            subtitlePrefix
            subtitle
            icon {
              childImageSharp {
                gatsbyImageData(
                  width: 60
                  quality: 90
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
    about: allMdx(
      filter: { internal: { contentFilePath: { regex: "/index/about/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  quality: 90
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
    interests: allMdx(
      filter: { internal: { contentFilePath: { regex: "/index/interests/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            shownItems
            interests {
              name
              icon {
                childImageSharp {
                  gatsbyImageData(
                    width: 20
                    height: 20
                    quality: 90
                    layout: FIXED
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
    projects: allMdx(
      filter: {
        internal: { contentFilePath: { regex: "/index/projects/" } }
        frontmatter: { visible: { eq: true } }
      }
      sort: { frontmatter: { position: ASC } }
    ) {
      edges {
        node {
          internal {
            contentFilePath
          }
          frontmatter {
            title
            category
            emoji
            external
            github
            screenshot {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  quality: 90
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
            tags
            position
            buttonVisible
            buttonUrl
            buttonText
          }
        }
      }
    }
    contact: allMdx(
      filter: { internal: { contentFilePath: { regex: "/index/contact/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            name
            email
            profileImage {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  quality: 90
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`
