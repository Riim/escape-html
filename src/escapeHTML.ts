const reEscapableChars = /[&<>"]/g;
const charToEscapedMap = Object.create(null);

charToEscapedMap['&'] = '&amp;';
charToEscapedMap['<'] = '&lt;';
charToEscapedMap['>'] = '&gt;';
charToEscapedMap['"'] = '&quot;';

export function escapeHTML<T extends string | null>(str: T): T {
	return (str
		? reEscapableChars.test(str!)
			? str.replace(reEscapableChars, chr => charToEscapedMap[chr])
			: str
		: null) as T;
}
