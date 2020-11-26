function isChat(chat) {
	var post = chat.post;
	return post.match(/^\S*Chatz with Topaz/);
}

function fixTitle(title) {
	title = title.replace('Cat>', 'Cat>\n');
	title = title.replace('Topaz>', 'Topaz>\n');
	title = title.replace('Topaz-', 'Topaz-\n');
	
	return title;
}

function formatChat(lines) {
	if (lines[0] === '') {
		lines.shift();
	}

	return lines;
}

function parseChatz(item) {
	var { date, post } = item;
	var lines = post.split('\n');
	var title = fixTitle(lines.shift());
	var chat = formatChat(lines);
	return { date, title, lines };
	
}

export { isChat, parseChatz };
