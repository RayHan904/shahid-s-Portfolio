import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ReactPlayer from "react-player"
import "../css/main.css"
const ComponentName = ({ data }) => {
  const { title, description, url } = data.project

  return (
    <Layout>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <h1 className="heading">{title}</h1>
        <div className="player-wrapper margin-TB">
          <ReactPlayer
            className="section-center  sizevid "
            width="100%"
            height="100%"
            controls
            url={url}
          />
        </div>
        <div className="section-center desc">
          <h3 style={{ textAlign: "center" }}>Description</h3>
          <p style={{ textAlign: "justify" }}>{description}</p>
        </div>

        <div className="section-center">
          <Link to="/projects" className="btn center-btn">
            All Projects
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
