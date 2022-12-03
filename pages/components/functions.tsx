

export async function localArray(arr) {
	var country = new Object();
	var world = { code: "UN", name: "Worldwide" };
	var codeString = new Array();
	codeString.push(world);
	for (i = 0; i < arr.length; i++) {
		var countryNames = await getCountry(arr[i]);
		country = { code: arr[i], name: countryNames };
		codeString.push(country);
	}
	return codeString;
}

export function getFlagEmoji(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

export function getPercentage(portion, total) {
	return Math.trunc((portion * 100) / total);
}