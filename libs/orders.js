module.exports = client => {

	const deliveryArea = async _ => await client.get('/b2b/working-areas').catch(console.error)

	const estimate = async body => await client.post('/b2b/orders/estimate', body).catch(console.error)

	const order = async body => await client.post('/b2b/orders', body).catch(console.error)

	const cancel = async order_id => await client.post(`/b2b/orders/${order_id}/cancel`).catch(console.error)

	const find = async order_id => await client.get(`/b2b/orders/${order_id}`).catch(console.error)

	const list = async ({ limit = null , offset = null } = {}) => {

		let url = '/b2b/orders'

		const params = {}
		if (limit) params.limit = limit
		if (offset) params.offset = offset

		const search = new URLSearchParams(params).toString()
		if (search) url = `${url}?${search}`

		return await client.get(url).catch(console.error)
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
