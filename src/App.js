import './App.scss';
import { Switch, Route } from 'react-router-dom';
import TOC from './toc';
import Chat from './Chat';
import data from './data/chatz';
import { isChat, parseChatz } from './utils/helpers';
const chatz = data.filter(chat => isChat(chat));

const item = parseChatz(chatz[0]);

function App() {
	return (
	<div className="App">
          <header>
	    <h1>Chatz With Topaz</h1>
	    <h3>by Scott Kovacs</h3>
	  </header>
	  <div className="chatz-content">
	    <Switch>
	      <Route exact path="/" component={TOC} />
	      <Route exact path="/chat/:ndx" component={Chat} />
	    </Switch>
	  </div>
	</div>
	);
}

export default App;
