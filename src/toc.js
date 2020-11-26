import data from './data/chatz';
import { isChat, parseChatz } from './utils/helpers';
const chatz = data.filter(chat => isChat(chat));

function TOC() {
	return (
	<ul>
	{chatz.map((chat, ndx) => {
		let item = parseChatz(chat);
        	return <li key={ndx}><a href={'/chat/' + ndx}>{item.title}</a></li>
	})}
	</ul>
	)
}

export default TOC;
