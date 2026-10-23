exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      title: String
      seoTitle: String
      useSeoTitleSuffix: Boolean
      useSplashScreen: Boolean
      greetings: String
      subtitlePrefix: String
      subtitle: String
      icon: File @fileByRelativePath
      image: File @fileByRelativePath
      name: String
      email: String
      profileImage: File @fileByRelativePath
      category: String
      emoji: String
      external: String
      github: String
      screenshot: File @fileByRelativePath
      tags: [String]
      position: Int
      visible: Boolean
      buttonVisible: Boolean
      buttonUrl: String
      buttonText: String
      shownItems: Int
      interests: [MdxInterest]
    }

    type MdxInterest {
      name: String
      icon: File @fileByRelativePath
    }
  `)
}
