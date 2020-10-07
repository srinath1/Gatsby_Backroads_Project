import React from 'react';
import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 4160, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;



const blog = ({data}) => {
	
	
	return (
		<>
		<Layout>
			<h2>the blog:</h2>
			<StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid} />
			
			<AniLink fade to="/">Home</AniLink>
			</Layout>
		</>
	);
};


export default blog;
