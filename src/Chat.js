import data from './data/chatz';
import { isChat, parseChatz } from './utils/helpers';
const chatz = data.filter(chat => isChat(chat));

function Chat(props) {
	const ndx = props.match.params.ndx;
	const chat = parseChatz(chatz[ndx]);
	const title = chat.title.split('\n');
	const date = new Date(chat.date);

	return (
	<div className="chat">
	  <div><a href="/">TOC</a></div>
	  <div class="chat-title">
	    <h2>{title.map(t => <span>{t}<br/></span>)}</h2>
	    <h3>{chat.date}</h3>
	  </div>
	  {chat.lines.map((l, key) => {
		var className = 'dialog';
		if (l.match(/^Topaz:/)) { className += ' topie'; }
		if (l.match(/^Me:/)) { className += ' scott'; }
		return <div className={className}>{l}</div>
	  })}
	  <div className="nav">
	    <div className="prev"><a href={'./' + (ndx - 1)}>Previous</a></div>
	    <div className="next"><a href={'./' + (1*ndx + 1)}>Next</a></div>
	  </div>
	</div>
	);
}

export default Chat;
