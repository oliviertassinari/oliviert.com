import * as React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 16, children, ...rest }: IconProps & { children: React.ReactNode }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
		>
			{children}
		</svg>
	);
}

export function SunIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
		</Svg>
	);
}

export function MoonIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</Svg>
	);
}

export function MapPinIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z" />
			<circle cx="12" cy="10" r="3" />
		</Svg>
	);
}

export function BriefcaseIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<rect x="2" y="7" width="20" height="14" rx="2" />
			<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
		</Svg>
	);
}

export function GithubIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		</Svg>
	);
}

export function TwitterIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" stroke="none" />
		</Svg>
	);
}

export function LinkedInIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</Svg>
	);
}

export function MailIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="m22 7-10 6L2 7" />
		</Svg>
	);
}

export function ExternalLinkIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
			<path d="M15 3h6v6" />
			<path d="m10 14 11-11" />
		</Svg>
	);
}

export function ChevronDownIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="m6 9 6 6 6-6" />
		</Svg>
	);
}

export function ArrowRightIcon(props: IconProps) {
	return (
		<Svg {...props}>
			<path d="M5 12h14M13 5l7 7-7 7" />
		</Svg>
	);
}
