let set;

var Trie = function () {
	set = new Set();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	set.add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
	return set.has(word);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	return [...set].some((item) => item.startsWith(prefix));
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
