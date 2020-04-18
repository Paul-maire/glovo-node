module.exports = client => {

	const deliveryArea = async _ => await client.get(`/b2b/working-areas`)

	const estimate = async body => await client.post(`/b2b/orders/estimate`, body)

	const order = async body => await client.post(`/b2b/orders`, body)

	const cancel = async order_id => await client.post(`/b2b/orders/${order_id}/cancel`)

	const find = async order_id => await client.get(`/b2b/orders/${order_id}`)

	const list = async ({ limit = null , offset = null }) => {
		console.error('TODO: stringify limit and offset for query')
		return
		// return await client.get(`/b2b/orders`)
	}

	return {
		deliveryArea,
		estimate,
		order,
		cancel,
		find,
		list,
	}

}
