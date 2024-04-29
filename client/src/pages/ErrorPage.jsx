import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <section className="error-page">
        <div className="center">
          <Link to="/" className="btn primary">Go Back Home</Link>
          <h1>Page Not Found</h1>
        </div>
      </section>
    </div>
  )
}

export default ErrorPage
