# Glovo API Node JS (unofficial)

## Get started

```javascript
const glovo_node = require('glovo-api-node')

const glovo = glovo_node({
	baseURL: '<Glovo base url>',
	api_key: '<your PUBLIC API key>',
	api_secret: '<your SECRET API key>',
})
```

## Usage

### Orders
#### Delivery area
```javascript
await glovo.orders.deliveryArea()
```
see response [Order tracking](https://api-docs.glovoapp.com/b2b/index.html#get-order-tracking)

#### Estimate price
```javascript
await glovo.orders.estimate(params)
```
see response [Order tracking](https://api-docs.glovoapp.com/b2b/index.html#get-order-tracking)

#### Create order
```javascript
await glovo.orders.order(params)
```
see response [Order tracking](https://api-docs.glovoapp.com/b2b/index.html#get-order-tracking)

#### Cancel
```javascript
await glovo.orders.cancel(<your_order_id>)
```
see response [Order tracking](https://api-docs.glovoapp.com/b2b/index.html#get-order-tracking)

#### Find one
```javascript
await glovo.orders.find(<your_order_id>)
```
see response [Order tracking](https://api-docs.glovoapp.com/b2b/index.html#get-order-tracking)

#### List
```javascript
await glovo.orders.list()
await glovo.orders.list({ limit, offset })
```
see response [Order tracking](https://api-docs.glovoapp.com/b2b/index.html#get-order-tracking)



### Courier
#### Get contact
```javascript
await glovo.courier.contact(<your_order_id>)
```
see response [Courier contact](https://api-docs.glovoapp.com/b2b/index.html#get-courier-contact)

### Tracking
#### Get current position
```javascript
await glovo.tracking.position(<your_order_id>)
```
see response [Order tracking](https://api-docs.glovoapp.com/b2b/index.html#get-order-tracking)

## Configuration
