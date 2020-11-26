import data from './data/chatz';
import { isChat, parseChatz } from './utils/helpers';
const chatz = data.filter(chat => isChat(chat));

function TOC() {
	return (
	<div className="App">
          <header>
	    <div className="title">
	      <h1>Chatz With Topaz</h1>
	      <h3>by Scott Kovacs</h3>
	    </div>
	  </header>
	  <div className="chatz-content">
	    <ul>
	    {chatz.map((chat, ndx) => {
		let item = parseChatz(chat);
        	return <li key={ndx}><a href={'/chat/' + ndx}>{item.title}</a></li>
	    })}
	    </ul>
	  </div>

	  <footer className="copyright">
	    &copy; 2013 - 2020
	  </footer>
	</div>
	)
}

export default TOC;
