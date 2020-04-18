module.exports = client => ({
	contact: async order_id => await client.get(`/b2b/orders/${order_id}/courier-contact`).catch(console.error)
})
