

// export async function localArray(arr: any) {
// 	var country = new Object();
// 	var world = { code: "UN", name: "Worldwide" };
// 	var codeString = new Array();
// 	codeString.push(world);
// 	var i: number
// 	for (i = 0; i < arr.length; i++) {
// 		var countryNames = await getCountry(arr[i]);
// 		country = { code: arr[i], name: countryNames };
// 		codeString.push(country);
// 	}
// 	return codeString;
// }

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