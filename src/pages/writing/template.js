import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";

export default function Article({ data: { article } }) {
  return (
    <Layout>
      <h1 class="font-semibold text-2xl mt-12">
        {article.title}
      </h1>
      <h2>
        {article.date}
      </h2>
      <article class="mt-6">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String) {
    article: datoCmsArticle(slug: { eq: $slug }) {
      title
      slug
      date
      content
    }
  }
`;
