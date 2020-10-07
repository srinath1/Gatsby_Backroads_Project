import React from 'react';
import Title from '../Title';

import styles from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
const getAbout = graphql`
	query aboutImage {
		aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const About = () => {
	const { aboutImage } = useStaticQuery(getAbout);
	return (
		<section className={styles.about}>
			<Title title="About" subtitle="us" />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						{/* <img src={img} alt="The Image" /> */}
						<Img fluid={aboutImage.childImageSharp.fluid} alt="landscape" />
					</div>
				</article>
				<article className="styles.info">
					

				
					<h4>Expllore the difference</h4>
					<p>
						A beach is a landform alongside a body of water which consists of loose particles. The particles
						composing a beach are typically made from rock, such as sand
					</p>
					<p>
						Denmark has some of the most beautiful beaches in Europe. With over 7,400km of coastline,
						choosing the best of Denmark's fine white sand, family friendly and
					</p>
					<button className="btn-primary">Read More</button>
				</article>
			</div>
		</section>
	);
};

export default About;
