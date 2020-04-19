# Glovo API Node JS (unofficial)

Hello world ! This project allows to use different endpoints of the Glovo Business API. It's an open source project so don't hesitate to participate or just notify me of changes that would not be present in this package.

Here is the official documentation of the [Glovo Buisness API](https://api-docs.glovoapp.com/b2b/index.html#introduction)

## Get started

### NPM
```bash
npm i glovo-node
```
### Yarn
```bash
yarn add glovo-node
```

### Set your credentials
Go to the [Get Started section](https://api-docs.glovoapp.com/b2b/index.html#getting-started)


## Usage

### Create the Glovo client

```javascript
const glovo_node = require('glovo-node')

const glovo = glovo_node({
	baseURL: '<Glovo base url>', // API URL -> Actually https://api.glovoapp.com
	api_key: '<your PUBLIC API key>', // Go on your profile at the bottom of the page
	api_secret: '<your SECRET API key>', // Go on your profile at the bottom of the page
})
```

### Orders
#### Delivery area
```javascript
glovo.orders.deliveryArea()
```
see response [Working areas](https://api-docs.glovoapp.com/b2b/index.html#get-working-areas)

#### Estimate price
```javascript
glovo.orders.estimate(params)
```
see response and params [Estimate order price](https://api-docs.glovoapp.com/b2b/index.html#estimate-order-price)

#### Create order
```javascript
glovo.orders.order(params)
```
see response [Create order](https://api-docs.glovoapp.com/b2b/index.html#create-a-one-way-order)

#### Cancel
```javascript
glovo.orders.cancel(<your_order_id>)
```
see response [Cancel order](https://api-docs.glovoapp.com/b2b/index.html#cancel-order)

#### Find one
```javascript
glovo.orders.find(<your_order_id>)
```
see response [Get single order](https://api-docs.glovoapp.com/b2b/index.html#get-single-order)

#### List
```javascript
glovo.orders.list()
glovo.orders.list({ limit, offset })
```
see response [Get orders list](https://api-docs.glovoapp.com/b2b/index.html#get-orders-list)


### Courier
#### Get contact
```javascript
glovo.courier.contact(<your_order_id>)
```
see response [Courier contact](https://api-docs.glovoapp.com/b2b/index.html#get-courier-contact)

### Tracking
#### Get current position
```javascript
glovo.tracking.position(<your_order_id>)
```
see response [Order tracking](https://api-docs.glovoapp.com/b2b/index.html#get-order-tracking)

## Configuration
- baseURL => Glovo API URL
- api_key => Your public API key
- api_secret => Your secret API key
- header_options => header config (axios) object
- client_options => axios options object