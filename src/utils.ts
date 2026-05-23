export function getCloudflareImage(url: string, width: number) {
	return `https://oliviert.com/cdn-cgi/image/format=auto,width=${width}/${url}`;
}

export function getSrcSet(url: string, baseWidth: number, densities: number[] = [2, 3]) {
	return densities
		.map((density) => `${getCloudflareImage(url, baseWidth * density)} ${density}x`)
		.join(', ');
}
