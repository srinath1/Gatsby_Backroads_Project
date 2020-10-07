import React from 'react';
//import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
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

const index = ({ data }) => {
	return (
		<Layout>
			<StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
				<Banner title="continue exploring" info="Please explore the mountains">
					<AniLink fade to="/tours" className="btn-white">
						Explore Tours
					</AniLink>
				</Banner>
			</StyledHero>
			<About />
			<Services />
		</Layout>
	);
};

export default index;
