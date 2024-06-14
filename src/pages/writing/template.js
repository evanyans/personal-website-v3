import React from "react";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

export default function Article({ data: { article } }) {
  return (
    <main>
      <header>
        <h1>{article.title}</h1>
        <p>{article.date}</p>
      </header>
      <article>
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </article>
    </main>
  );
}

export const query = graphql`
  query ArticleBySlug($slug: String!) {
    article: datoCmsArticle(slug: { eq: $slug }) {
      title
      date
      content
    }
  }
`;