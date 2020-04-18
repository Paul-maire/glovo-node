# Glovo API Node JS (unofficial)

## Get started

### NPM
```bash
npm i glovo-node
```
### Yarn
```bash
yarn add glovo-node
```

```javascript
const glovo_node = require('glovo-node')

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
see response [Working areas](https://api-docs.glovoapp.com/b2b/index.html#get-working-areas)

#### Estimate price
```javascript
await glovo.orders.estimate(params)
```
see response and params [Estimate order price](https://api-docs.glovoapp.com/b2b/index.html#estimate-order-price)

#### Create order
```javascript
await glovo.orders.order(params)
```
see response [Create order](https://api-docs.glovoapp.com/b2b/index.html#create-a-one-way-order)

#### Cancel
```javascript
await glovo.orders.cancel(<your_order_id>)
```
see response [Cancel order](https://api-docs.glovoapp.com/b2b/index.html#cancel-order)

#### Find one
```javascript
await glovo.orders.find(<your_order_id>)
```
see response [Get single order](https://api-docs.glovoapp.com/b2b/index.html#get-single-order)

#### List
```javascript
await glovo.orders.list()
await glovo.orders.list({ limit, offset })
```
see response [Get orders list](https://api-docs.glovoapp.com/b2b/index.html#get-orders-list)


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
- baseURL => Glovo API URL
- api_key => Your public API key
- api_secret => Your secret API key
- header_options => header config (axios) object
- client_options => axios options object