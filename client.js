const axios = require('axios')

module.exports = ({ 
	baseURL,
	api_key,
	api_secret,
	header_options,
	client_options,
} = {}) => {

	if (!baseURL) throw Error('glovo-api-node: baseURL is required')
	if (!api_key) throw Error('glovo-api-node: api_key is required') 
	if (!api_secret) throw Error('glovo-api-node: api_secret is required')

	const keys = Buffer.from(`${api_key}:${api_secret}`)
	const token = keys.toString('base64')
	const headers = {
		...header_options,
		'Content-Type': 'application/json',
		'Authorization': `Basic ${token}`,
	}

	return axios.create({
		baseURL,
		...client_options,
		headers,
	})
}