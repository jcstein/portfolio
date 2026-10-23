import React from "react"
import PropTypes from "prop-types"

import Buildspace from "../../content/index/projects/buildspace/index.mdx"
import Buildspace2 from "../../content/index/projects/buildspace-2/index.mdx"
import Buildspace3 from "../../content/index/projects/buildspace-3/index.mdx"
import Buildspace4 from "../../content/index/projects/buildspace-4/index.mdx"
import Buildspace5 from "../../content/index/projects/buildspace-5/index.mdx"
import Buildspace6 from "../../content/index/projects/buildspace-6/index.mdx"
import Epa from "../../content/index/projects/epa/index.mdx"
import LatticeSupply from "../../content/index/projects/lattice-supply/index.mdx"
import PitAndPeel from "../../content/index/projects/pit-and-peel/index.mdx"
import ProjectRestoreUs from "../../content/index/projects/project-restore-us/index.mdx"
import SequoiaVans from "../../content/index/projects/sequoia-vans/index.mdx"

const bodies = {
  buildspace: Buildspace,
  "buildspace-2": Buildspace2,
  "buildspace-3": Buildspace3,
  "buildspace-4": Buildspace4,
  "buildspace-5": Buildspace5,
  "buildspace-6": Buildspace6,
  epa: Epa,
  "lattice-supply": LatticeSupply,
  "pit-and-peel": PitAndPeel,
  "project-restore-us": ProjectRestoreUs,
  "sequoia-vans": SequoiaVans,
}

const ProjectBody = ({ contentFilePath }) => {
  const match = contentFilePath.match(/\/projects\/([^/]+)\//)
  const Body = match ? bodies[match[1]] : null
  if (!Body) return null
  return <Body />
}

ProjectBody.propTypes = {
  contentFilePath: PropTypes.string.isRequired,
}

export default ProjectBody
