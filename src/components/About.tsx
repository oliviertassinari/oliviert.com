import * as React from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { ChevronDownIcon } from './icons';
import styles from './About.module.css';

export default function About() {
	return (
		<section className="section" id="about">
			<h2 className="section-title">About</h2>
			<div className={styles.aboutBody}>
				<p>
					I&apos;ve spent the last decade building UI tooling. I
					co-founded <strong>MUI</strong>, where we maintain Base UI, Material UI, and MUI X — libraries used by millions of developers and
					thousands of companies to ship interfaces.
				</p>
				<Collapsible.Root>
					<Collapsible.Panel className="collapsible-panel">
						<div className={styles.aboutExtra}>
							<p>
								My focus is on the intersection of engineering and design. I care a lot about how
								products feel to use.
							</p>
						</div>
					</Collapsible.Panel>
					<Collapsible.Trigger className={styles.AboutToggle}>
						<span className={styles.aboutToggleShow}>Show more</span>
						<span className={styles.aboutToggleHide}>Show less</span>
						<ChevronDownIcon size={14} className={styles.aboutToggleIcon} />
					</Collapsible.Trigger>
				</Collapsible.Root>
			</div>
		</section>
	);
}
