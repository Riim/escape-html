const reEscapableEntities = /&(?:amp|lt|gt|quot);/g;
const escapedToCharMap = Object.create(null);

escapedToCharMap['&amp;'] = '&';
escapedToCharMap['&lt;'] = '<';
escapedToCharMap['&gt;'] = '>';
escapedToCharMap['&quot;'] = '"';

export function unescapeHTML<T extends string | null>(str: T): T {
	return (str
		? reEscapableEntities.test(str!)
			? str.replace(reEscapableEntities, entity => escapedToCharMap[entity])
			: str
		: null) as T;
}
