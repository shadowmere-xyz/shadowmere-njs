
export function getFlagEmoji(countryCode: any) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char: any) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

export function getPercentage(portion: number, total: number) {
	return Math.trunc((portion * 100) / total);
}
