import React from 'react';
import Title from '../Title';
import styles from '../../css/contact.module.css';

const Contact = () => {
	return (
		<section className={styles.contact}>
			<Title title="contact" subtitle="ours" />
			<div className={styles.center}>
				<form action="https://formspree.io/srinath.erp@gmail.com" method="POST" className={styles.form}>
					<div>
						<label htmlFor="name">name</label>
						<input
							type="text"
							name="name"
							id="name"
							className={styles.formControl}
							placeholder="enter name"
						/>
					</div>
					<div>
						<label htmlFor="email">email</label>
						<input
							type="email"
							name="email"
							id="email"
							className={styles.formControl}
							placeholder="enter email"
						/>
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							className={styles.formControl}
							placeholder="enter details"
							rows="10"
						/>
					</div>
					<div>
						<input type="submit" value="submit" className={styles.submit} />
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
