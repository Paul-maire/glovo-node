const client = require('./client')

const {
	courier,
	orders,
	tracking
} = require('./libs')

module.exports = {
	courier: courier(client),
	orders: orders(client),
	tracking: tracking(client),
}
