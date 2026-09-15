# LUMA — Modern E-Commerce Product Showcase

LUMA is a modern and responsive e-commerce product showcase built using React and Vite.

The website provides a smooth shopping experience where users can browse products, search for products, filter them by category, sort them, add products to a wishlist, add products to a shopping cart, and view product details using Quick View.

## Features

- Modern and responsive e-commerce design
- 16 products
- Products divided into multiple categories
- Product images
- Product names
- Product prices
- Original prices and discount information
- Product ratings
- Product badges such as Bestseller, Trending, New and Top Rated
- Search products by name
- Filter products by category
- Sort products by price and rating
- Wishlist functionality
- Wishlist item count
- Add to cart functionality
- Cart item count
- Cart drawer
- Increase or decrease product quantity
- Automatic cart subtotal calculation
- Quick View product modal
- Loading state
- Empty search/filter result state
- Responsive desktop, tablet and mobile layout
- Hero section
- Featured product section
- Shopping benefits section
- Hover effects and interactive UI

## Categories

The products are divided into the following categories:

- Electronics
- Fashion
- Home
- Accessories

## Sorting Options

Users can sort products using:

- Price: Low to High
- Price: High to Low
- Rating
- Newest

## Technologies Used

- React
- JavaScript
- Vite
- HTML5
- CSS3
- React Hooks

## Installation

This project is built using React and Vite.

To install the required packages, run:

npm install

## Run the Project

To start the development server, run:

npm run dev

After running the command, Vite will provide a local URL where the website can be opened in a browser.

## Build for Production

To create a production build, run:

npm run build

## Project Structure

LUMA/
│
├── src/
│ ├── App.jsx
│ ├── App.css
│ └── index.css
│
├── public/
│
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── AI-LOG.md

## Main Application Functionality

### Product Search

Users can search for products by entering a product name in the search field.

The displayed products are automatically updated based on the search term.

### Category Filtering

Users can filter products using the category buttons.

Available categories are:

- All
- Electronics
- Fashion
- Home
- Accessories

### Product Sorting

Users can change the product order using the sorting options.

Products can be sorted by:

- Price from low to high
- Price from high to low
- Rating
- Newest

### Wishlist

Users can click the heart icon on a product to add or remove it from the wishlist.

The wishlist count is displayed in the navigation area.

### Shopping Cart

Users can add products to the shopping cart using the Add to Bag button.

The cart allows users to:

- View added products
- Increase product quantity
- Decrease product quantity
- View the subtotal
- Remove products when their quantity reaches zero

### Quick View

Users can open Quick View for a product to see:

- Product image
- Product name
- Category
- Description
- Price
- Rating
- Add to Bag option

## Responsive Design

The website is designed to work across different screen sizes.

It supports:

- Desktop
- Tablet
- Mobile

The product grid and sections automatically adjust according to the available screen width.

## Additional UI Features

The project also includes:

- Premium hero section
- Promotional product badges
- Featured product section
- Shopping benefits section
- Interactive product cards
- Hover effects
- Loading indicator
- Empty state when no products match the selected filters
- Cart drawer
- Quick View modal

## Challenges

Some of the main challenges during development were:

1. Creating a responsive product layout for desktop, tablet and mobile screens.
2. Implementing search, category filtering and sorting together.
3. Managing wishlist and cart state using React.
4. Creating the Quick View modal.
5. Creating the cart drawer with quantity controls.
6. Maintaining a consistent and polished design across different screen sizes.

## AI Assistance

AI tools were used during the development process for:

- Project planning
- React implementation assistance
- UI design ideas
- CSS development
- Debugging alignment issues
- Responsive design improvements
- Documentation assistance

The generated code was reviewed and modified according to the requirements of the internship task.

## Project Scope

This is a frontend-only e-commerce product showcase.

The project does not use:

- Backend services
- Database
- User authentication
- Payment processing
- External product APIs

Product information is stored locally within the React application.

## Conclusion

LUMA demonstrates a modern frontend e-commerce experience using React, with interactive product browsing, search, filtering, sorting, wishlist, cart and Quick View functionality.

The project focuses on responsive design, reusable UI components and a polished user experience.
