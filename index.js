const glovo_client = require('./client')

const {
	courier,
	orders,
	tracking
} = require('./libs')

module.exports = config => {
	const client = glovo_client(config)
	
	return {
		courier: courier(client),
		orders: orders(client),
		tracking: tracking(client),
	}
}
