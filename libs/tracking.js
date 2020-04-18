module.exports = client => ({
	position: async order_id => await client.get(`/b2b/orders/${order_id}/tracking`).catch(console.error)
})
