import * as React from 'react';
import { Tooltip } from '@base-ui/react/tooltip';
import {
	GithubIcon,
	TwitterIcon,
	LinkedInIcon,
	MapPinIcon,
	BriefcaseIcon,
} from './icons';
import styles from './Hero.module.css';
import { getCloudflareImage, getSrcSet } from '../utils';

const socials = [
	{ label: 'GitHub', href: 'https://github.com/oliviertassinari', Icon: GithubIcon },
	{ label: 'X / Twitter', href: 'https://x.com/olivtassinari', Icon: TwitterIcon },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/oliviertassinari/', Icon: LinkedInIcon },
];

export default function Hero() {
	const avatarUrl = 'https://avatars.githubusercontent.com/u/3165635';

	return (
		<header className={styles.Hero}>
			<div className={styles.heroAvatar} aria-hidden="true">
				<img
					src={getCloudflareImage(avatarUrl, 80)}
					srcSet={getSrcSet(avatarUrl, 80)}
					alt=""
					width="80"
					height="80"
				/>
			</div>
			<h1 className={styles.heroName}>Olivier Tassinari</h1>
			<p className={styles.heroTagline}>Building UI tooling.</p>
			<ul className={styles.heroMeta}>
				<li>
					<BriefcaseIcon size={14} aria-hidden="true" />
					CEO & Co-founder at MUI
				</li>
				<li>
					<MapPinIcon size={14} aria-hidden="true" />
					Paris, France
				</li>
			</ul>
			<Tooltip.Provider delay={200}>
				<ul className={styles.heroSocials}>
					{socials.map(({ label, href, Icon }) => (
						<li key={label}>
							<Tooltip.Root>
								<Tooltip.Trigger
									render={
										<a
											href={href}
											target={href.startsWith('http') ? '_blank' : undefined}
											rel={href.startsWith('http') ? 'noreferrer' : undefined}
											aria-label={label}
											className={styles.SocialLink}
										>
											<Icon size={18} />
										</a>
									}
								/>
								<Tooltip.Portal>
									<Tooltip.Positioner sideOffset={8}>
										<Tooltip.Popup className="tooltip-popup">{label}</Tooltip.Popup>
									</Tooltip.Positioner>
								</Tooltip.Portal>
							</Tooltip.Root>
						</li>
					))}
				</ul>
			</Tooltip.Provider>
		</header>
	);
}
