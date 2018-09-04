const reEscapableChars = /[&<>"]/g;
const charToEscapedMap = Object.create(null);

charToEscapedMap['&'] = '&amp;';
charToEscapedMap['<'] = '&lt;';
charToEscapedMap['>'] = '&gt;';
charToEscapedMap['"'] = '&quot;';

export function escapeHTML(str: string | null): string | null {
	return str
		? reEscapableChars.test(str)
			? str.replace(reEscapableChars, chr => charToEscapedMap[chr])
			: str
		: null;
}
