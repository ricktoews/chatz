import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import data from './data/chatz';
import { isChat, parseChatz } from './utils/helpers';
const chatz = data.filter(chat => isChat(chat));

function Chat(props) {
	const ndx = props.match.params.ndx;
	const chat = parseChatz(chatz[ndx]);
	const title = chat.title.split('\n');
	const date = new Date(chat.date);

	const history = props.history;

	useEffect(() => {
		window.scrollTo(0, 0);
		console.log('chatz useEffect');
	});

	const handleTOC = e => {
		console.log('clicked TOC');
		e.preventDefault();
		history.push('/');
	}

	const handlePrev = e => {
		e.preventDefault();
		history.push('./' + (ndx - 1));		
	};

	const handleNext = e => {
		e.preventDefault();
		history.push('./' + (1*ndx + 1));		
	};

	return (
	<div className="App">

          <header>
	    <div className="btn-toc" onClick={handleTOC}>TOC</div>
	    <div className="title">
	      <h1>Chatz With Topaz</h1>
	      <h3>by Scott Kovacs</h3>
	    </div>
	  </header>
	  <div className="chatz-content">

	    <div className="chat">
	      <div class="chat-title">
	        <h2>{title.map(t => <span>{t}<br/></span>)}</h2>
	        <h3>{chat.date}</h3>
	      </div>
	      {chat.lines.map((l, key) => {
		var className = 'dialog';
		if (l.match(/^T:/) || l.match(/^Topaz:/)) { className += ' topie'; }
		if (l.match(/^S:/) || l.match(/^Me:/)) { className += ' scott'; }
		return <div className={className}>{l}</div>
	      })}
	    </div>

	  </div>

	  <footer className="chatz">
	    <div className="prev" onClick={handlePrev}><span class="glyphicon glyphicon-chevron-left"></span></div>
	    <div className="next" onClick={handleNext}><span class="glyphicon glyphicon-chevron-right"></span></div>
	  </footer>
	</div>
	);
}

export default withRouter(Chat);
