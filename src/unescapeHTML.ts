const reEscapableEntities = /&(?:amp|lt|gt|quot);/g;
const escapedToCharMap = Object.create(null);

escapedToCharMap['&amp;'] = '&';
escapedToCharMap['&lt;'] = '<';
escapedToCharMap['&gt;'] = '>';
escapedToCharMap['&quot;'] = '"';

export function unescapeHTML(str: string | null): string | null {
	return str
		? reEscapableEntities.test(str)
			? str.replace(reEscapableEntities, entity => escapedToCharMap[entity])
			: str
		: null;
}
