import React from 'react';
import Layout from '../components/Layout';
import styles from '../css/error.module.css'
import {Link} from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Banner from '../components/Banner'

const error = () => {
	return (
		<>
		<Layout>
			<header className={styles.error}>
				<Banner title=" oops its an end">
					<AniLink to="/" className="btn-white">back to home</AniLink>
				</Banner>
			</header>
			</Layout>
		</>
	);
};

export default error;
