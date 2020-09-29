import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return (
            <Link to={`projects/${project.slug}`}>
              {" "}
              <Project key={project.id} index={index} {...project} />{" "}
            </Link>
          )
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          All Projects
        </Link>
      )}
    </section>
  )
}

export default Projects
