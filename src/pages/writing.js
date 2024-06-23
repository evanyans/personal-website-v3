import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const WritingPage = ({data}) => {
  return (
    <Layout>
      <main >
        <h1 class="font-semibold text-2xl mt-12">
            my brain dump <span class="text-2xl">&nbsp;</span>
        </h1>
        <ul class="mt-6">
          {data.allDatoCmsArticle.nodes.map(post => (
            <Link to={`/writing/${post.slug}`} key={post.id} >
            <li class="mt-5">
              <h2 class="text-white">{post.title}</h2>
              <p>{post.date}</p>
            </li>
            </Link>
          ))}
        </ul>
        
      </main>
    </Layout>
  )
}

export const query = graphql`
{
  allDatoCmsArticle(sort: { date: DESC }) {
    nodes {
      id
      title
      slug
      date(formatString: "MMMM DD, YYYY")
    }
  }
}`

export default WritingPage

export const Head = () => <title>Evan Yan</title>

