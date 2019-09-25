import http from 'http'
import { createServer } from 'http'

import app from './server'
const server = http.createServer(app)
let currentApp = app



server.listen(1234, () => {
	console.log(`Live on PORT 1234`)
})

if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}
