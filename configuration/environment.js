const path = require('path');

module.exports = {
	paths: {
		/* Path to source files directory */
		source: path.resolve(__dirname, '../src/'),

		/* Path to built files directory */
		output: path.resolve(__dirname, '../dist/'),
	},
	server: {
		// host: '192.168.88.126',
		host: '192.168.3.24',
		port: 8000,
	},
	limits: {
		/* Image files size in bytes. Below this value the image file will be served as DataURL (inline base64). */
		images: 8192,

		/* Font files size in bytes. Below this value the font file will be served as DataURL (inline base64). */
		fonts: 8192,
	},
};
