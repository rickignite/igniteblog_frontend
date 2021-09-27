import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Article($slug: String!){
    articles(where: {slug: $slug}) {
      slug
      title
      category {
        slug
        name
      }
      content
      image {
        url
      }
    }
  }
`;

export default ARTICLE_QUERY;