#!/usr/bin/env node
const reporter = require(`./src/tap-color.js`)()

process.stdin
	.pipe(reporter)
	.pipe(process.stdout)

process.on(`exit`, status => {
	if (status === 1) {
		process.exit(1)
	}
	if (reporter.failed) {
		process.exit(1)
	}
})
