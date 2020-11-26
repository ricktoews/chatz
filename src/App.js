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
	  <Switch>
	    <Route exact path="/" component={TOC} />
	    <Route exact path="/chat/:ndx" component={Chat} />
	  </Switch>
	);
}

export default App;
