import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Success = () => {
  return (
    <Layout>
      <SEO title="Success!" />
      <main className="error-page">
        <div className="error-container">
          <h1>Success!</h1>
          <h2 style={{ marginBottom: "3rem" }}>
            Thankyou for contacting. I will get back to you soon!
          </h2>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Success
