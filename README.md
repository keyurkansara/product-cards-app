# Product Cards App

A simple Vue.js app that displays products in a card format using data from the [FakeStore API](https://fakestoreapi.com/). The app includes reusable components, custom directives, and filters.

## Features

- **Reusable `ProductCard` Component**: Displays each product's title, image, and price in a card format.
- **Custom Directive**: Changes the color of the product title to red.
- **Currency Filter**: Formats the product price to display with a `$` sign.
- **API Integration**: Fetches product data from the FakeStore API.
- **Responsive Layout**: CSS Flexbox/Grid is used for a responsive design that works on various screen sizes.

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/keyurkansara/product-cards-app.git
cd product-cards-app
```

### 2. Install Dependencies

To install the required dependencies, run the following command:

```bash
npm install
```

### 3. Run the Development Server

Start the development server:

```bash
npm run serve
```

By default, the app will be served at `http://localhost:8080`.

### 4. Build for Production

To build the app for production, run:

```bash
npm run build
```

## Components

### `ProductCard.vue`

This component is responsible for displaying individual products in a card format. It receives a `product` object as a prop and renders the product's title, image, and price.

```vue
<ProductCard :product="product" />
```

Props:
- `product` (Object): Contains product details such as title, price, and image.

## Directives

### `v-color`

A custom directive to change the text color of the product title. In this app, it is used to turn the product titles red.

Example of usage:

```html
<h3 v-color="'red'">{{ product.title }}</h3>
```

The `v-color` directive accepts a string value which sets the text color.

### Implementation

The custom directive is defined in `src/main.js`:

```javascript
Vue.directive('color', {
  bind(el, binding) {
    el.style.color = binding.value;
  }
});
```

## Filters

### `currencyFilter`

A custom Vue.js filter to format product prices with a dollar sign and two decimal places.

Example of usage:

```html
<p>{{ product.price | currencyFilter }}</p>
```

### Implementation

The `currencyFilter` is defined in `src/main.js`:

```javascript
Vue.filter('currencyFilter', function (value) {
  return `$${parseFloat(value).toFixed(2)}`;
});
```

This filter ensures that all product prices are displayed in the format `$XX.XX`.

## API

The products are fetched from the FakeStore API:

- **Endpoint**: `https://fakestoreapi.com/products`

The products are fetched when the `App.vue` component is created, and the data is passed to the `ProductCard` components.

## CSS Layout

- **Flexbox**: Used to create a responsive layout for smaller screens.
- **CSS Grid**: Used for larger screens to ensure products are neatly displayed in rows and columns.
  
### Example of layout in `App.vue`:

```css
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
}

@media (min-width: 600px) {
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
}
```

## Conclusion

This project demonstrates the use of reusable components, API integration, custom directives, and filters in Vue.js. The app fetches products from a remote API, displays them in a responsive layout, and uses custom directives to manipulate the UI dynamically.

Feel free to fork, extend, or modify this project to suit your needs.
