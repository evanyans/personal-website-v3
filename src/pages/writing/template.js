import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import './style.css'

export default function Article({ data: { article } }) {
  return (
    <Layout>
      <h1 class="font-semibold text-2xl mt-12">
        {article.title}
      </h1>
      <h2>
        {article.date}
      </h2>
      <article
        className="mt-6 prose dark:prose-invert article-content"
        dangerouslySetInnerHTML={{ __html: article.contentNode.childMarkdownRemark.html }}
      />
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String) {
    article: datoCmsArticle(slug: { eq: $slug }) {
      title
      slug
      date(formatString: "MMMM DD, YYYY")
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
