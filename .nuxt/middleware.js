const middleware = {}

middleware['Auth'] = require('..\\middleware\\Auth.js')
middleware['Auth'] = middleware['Auth'].default || middleware['Auth']

middleware['games'] = require('..\\middleware\\games.js')
middleware['games'] = middleware['games'].default || middleware['games']

export default middleware
