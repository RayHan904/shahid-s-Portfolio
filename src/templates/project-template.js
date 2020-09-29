import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ReactPlayer from "react-player"

const ComponentName = ({ data }) => {
  const { title, description, url } = data.project

  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <h1>{title}</h1>
        <ReactPlayer
          className="section-center margin-TB "
          controls
          width="900px"
          height="506.25px"
          url={url}
        />
        <div className="section-center">
          <h3 style={{ textAlign: "center" }}>Description</h3>
          <p style={{ fontSize: 24, textAlign: "justify" }}>{description}</p>
        </div>

        <div className="section-center">
          <Link to="/projects" className="btn center-btn">
            All Project
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: strapiProjects(slug: { eq: $slug }) {
      title
      description
      url
    }
  }
`

export default ComponentName
