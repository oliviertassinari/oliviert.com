import * as React from 'react';
import Hero from './Hero';
import About from './About';
import styles from './Home.module.css';

export default function Home() {
	return (
		<React.Fragment>
			<main className="page">
				<Hero />
				<About />
				<footer className={styles.PageFooter}>
					© A playground to test different vibe coding tools.
				</footer>
			</main>
		</React.Fragment>
	);
}
