import React from 'react';
import styles from '../css/banner.module.css';

const Banner = ({ title, info, children }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{info}</p>
			{children}
		</div>
	);
};

export default Banner;