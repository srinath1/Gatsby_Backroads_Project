import React from 'react';
import Layout from '../components/Layout';
import Header from '../examples/RegularHeader'
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 4160, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;


const tours = ({data}) => {
	return (		
		<Layout>
			<h2>hello tours</h2>
			<StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}/>

			
			</Layout>
			
		
	);
};

export default tours;
