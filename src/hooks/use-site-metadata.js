import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
            keywords
            siteUrl
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};
