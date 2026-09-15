import { useEffect, useMemo, useState } from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: 'AeroPods Pro',
    category: 'Electronics',
    price: 129,
    oldPrice: 159,
    rating: 4.8,
    reviews: 324,
    badge: 'BESTSELLER',
    image:
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85',
    description:
      'Premium wireless earbuds with immersive sound, active noise cancellation and a comfortable fit.',
  },
  {
    id: 2,
    name: 'SmartWatch X',
    category: 'Electronics',
    price: 189,
    oldPrice: 249,
    rating: 4.7,
    reviews: 218,
    badge: 'TRENDING',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85',
    description:
      'A modern smartwatch designed for fitness, productivity and everyday activity tracking.',
  },
  {
    id: 3,
    name: 'Studio Headphones',
    category: 'Electronics',
    price: 149,
    oldPrice: 199,
    rating: 4.9,
    reviews: 186,
    badge: 'TOP RATED',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85',
    description:
      'Over-ear headphones delivering rich sound, deep bass and exceptional comfort.',
  },
  {
    id: 4,
    name: 'Mini Soundbox',
    category: 'Electronics',
    price: 69,
    oldPrice: 89,
    rating: 4.6,
    reviews: 143,
    badge: 'NEW',
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85',
    description:
      'Compact wireless speaker with powerful sound for your desk, room or weekend trips.',
  },
  {
    id: 5,
    name: 'Urban Hoodie',
    category: 'Fashion',
    price: 64,
    oldPrice: 89,
    rating: 4.6,
    reviews: 412,
    badge: 'BESTSELLER',
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85',
    description:
      'A relaxed everyday hoodie designed for comfort and effortless street style.',
  },
  {
    id: 6,
    name: 'Classic Sneakers',
    category: 'Fashion',
    price: 92,
    oldPrice: 120,
    rating: 4.9,
    reviews: 537,
    badge: 'TOP RATED',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
    description:
      'Clean everyday sneakers combining timeless design with lightweight comfort.',
  },
  {
    id: 7,
    name: 'Oversized Shirt',
    category: 'Fashion',
    price: 54,
    oldPrice: 72,
    rating: 4.5,
    reviews: 189,
    badge: 'NEW',
    image:
      'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=85',
    description:
      'A minimal oversized shirt with a premium feel and effortless silhouette.',
  },
  {
    id: 8,
    name: 'Everyday Tote',
    category: 'Fashion',
    price: 58,
    oldPrice: 79,
    rating: 4.7,
    reviews: 264,
    badge: 'TRENDING',
    image:
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85',
    description:
      'A versatile everyday tote with enough room for everything you need.',
  },
  {
    id: 9,
    name: 'Minimal Lamp',
    category: 'Home',
    price: 48,
    oldPrice: 65,
    rating: 4.5,
    reviews: 156,
    badge: 'NEW',
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85',
    description:
      'Soft ambient lighting with a clean silhouette for modern interiors.',
  },
  {
    id: 10,
    name: 'Ceramic Vase',
    category: 'Home',
    price: 36,
    oldPrice: 49,
    rating: 4.4,
    reviews: 98,
    badge: 'SALE',
    image:
      'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=85',
    description:
      'A sculptural ceramic vase that adds a refined touch to any room.',
  },
  {
    id: 11,
    name: 'Aroma Diffuser',
    category: 'Home',
    price: 42,
    oldPrice: 59,
    rating: 4.7,
    reviews: 173,
    badge: 'TRENDING',
    image:
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85',
    description:
      'Create a calm atmosphere with a beautifully designed aroma diffuser.',
  },
  {
    id: 12,
    name: 'Nordic Clock',
    category: 'Home',
    price: 39,
    oldPrice: 55,
    rating: 4.6,
    reviews: 127,
    badge: 'NEW',
    image:
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=85',
    description:
      'Minimal Nordic-inspired clock designed for modern living spaces.',
  },
  {
    id: 13,
    name: 'Leather Wallet',
    category: 'Accessories',
    price: 42,
    oldPrice: 58,
    rating: 4.7,
    reviews: 301,
    badge: 'BESTSELLER',
    image:
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85',
    description:
      'A slim everyday wallet designed for convenience and timeless style.',
  },
  {
    id: 14,
    name: 'Travel Backpack',
    category: 'Accessories',
    price: 78,
    oldPrice: 105,
    rating: 4.8,
    reviews: 346,
    badge: 'TOP RATED',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85',
    description:
      'A spacious everyday backpack made for work, travel and city adventures.',
  },
  {
    id: 15,
    name: 'Classic Sunglasses',
    category: 'Accessories',
    price: 55,
    oldPrice: 75,
    rating: 4.6,
    reviews: 231,
    badge: 'TRENDING',
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85',
    description:
      'Timeless sunglasses with a modern silhouette and everyday versatility.',
  },
  {
    id: 16,
    name: 'Minimal Watch',
    category: 'Accessories',
    price: 119,
    oldPrice: 159,
    rating: 4.8,
    reviews: 289,
    badge: 'NEW',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85',
    description:
      'A refined minimalist watch that works with both casual and formal looks.',
  },
];

const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Accessories'];

function Rating({ rating }) {
  return (
    <div className="rating">
      <span className="stars">★★★★★</span>
      <span>{rating}</span>
    </div>
  );
}

function ProductCard({ product, liked, onLike, onQuickView, onAddToCart }) {
  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <span className="badge">{product.badge}</span>

        <button
          className={`heart ${liked ? 'liked' : ''}`}
          onClick={() => onLike(product.id)}
        >
          {liked ? '♥' : '♡'}
        </button>

        <button className="quick-view" onClick={() => onQuickView(product)}>
          Quick View
        </button>
      </div>

      <div className="product-details">
        <span className="category-name">{product.category}</span>

        <h3>{product.name}</h3>

        <Rating rating={product.rating} />

        <div className="price-line">
          <strong>${product.price}</strong>
          <del>${product.oldPrice}</del>
          <span>{discount}% OFF</span>
        </div>

        <button className="add-cart" onClick={() => onAddToCart(product)}>
          Add to Bag <span>→</span>
        </button>
      </div>
    </article>
  );
}

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Newest');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [quickProduct, setQuickProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const visibleProducts = useMemo(() => {
    let result = products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch = category === 'All' || product.category === category;

      return searchMatch && categoryMatch;
    });

    if (sort === 'Price Low-High') {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === 'Price High-Low') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === 'Rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function toggleWishlist(id) {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(id, amount) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearFilters() {
    setSearch('');
    setCategory('All');
    setSort('Newest');
  }

  function scrollToShop() {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="app">
      {/* TOP BAR */}
      <div className="top-bar">
        <span>FREE SHIPPING ON ORDERS OVER $100</span>
        <span>NEW SEASON / 2026</span>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={clearFilters}>
          LUMA<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#shop">Shop</a>
          <a href="#featured">Featured</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <button
            className="search-icon"
            onClick={() => document.getElementById('search-input')?.focus()}
          >
            ⌕
          </button>

          <button className="wish-nav">
            ♡ <small>{wishlist.length}</small>
          </button>

          <button className="bag-nav" onClick={() => setCartOpen(true)}>
            Bag <small>{cartCount}</small>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">THE EVERYDAY EDIT</p>

          <h1>
            Things you'll
            <br />
            <i>love</i> to live with.
          </h1>

          <p className="hero-description">
            Thoughtfully selected essentials for modern living — technology,
            fashion and pieces that make your space feel like home.
          </p>

          <button className="hero-button" onClick={scrollToShop}>
            Explore Collection
            <span>↗</span>
          </button>
        </div>

        <div className="hero-gallery">
          <div className="hero-main-image">
            <img src={products[5].image} alt="Featured product" />
          </div>

          <div className="hero-small-image">
            <img src={products[8].image} alt="Home collection" />
          </div>

          <div className="round-label">
            CURATED
            <br />
            FOR YOU
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <span>CURATED ESSENTIALS</span>
        <b>✦</b>
        <span>MODERN LIVING</span>
        <b>✦</b>
        <span>EVERYDAY DESIGN</span>
        <b>✦</b>
        <span>CURATED ESSENTIALS</span>
      </div>

      {/* SHOP */}
      <section className="shop" id="shop">
        <div className="section-title">
          <div>
            <p className="eyebrow">OUR COLLECTION</p>
            <h2>Shop the edit.</h2>
          </div>

          <p>Discover pieces selected to make everyday life a little better.</p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="categories">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? 'active' : ''}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* SEARCH + SORT */}
        <div className="toolbar">
          <div className="search-box">
            <span>⌕</span>

            <input
              id="search-input"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="sort">
            <label>Sort by</label>

            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option>Newest</option>
              <option>Price Low-High</option>
              <option>Price High-Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Curating your collection...</p>
          </div>
        ) : visibleProducts.length === 0 ? (
          <div className="empty-state">
            <div>⌕</div>
            <h3>No products found</h3>
            <p>Try another search or category.</p>

            <button onClick={clearFilters}>Clear Filters</button>
          </div>
        ) : (
          <>
            <div className="result-count">
              Showing <b>{visibleProducts.length}</b> products
            </div>

            <div className="product-grid">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  liked={wishlist.includes(product.id)}
                  onLike={toggleWishlist}
                  onQuickView={setQuickProduct}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* FEATURED SECTION */}
      <section className="featured" id="featured">
        <div className="featured-image">
          <img src={products[10].image} alt="LUMA featured" />
        </div>

        <div className="featured-content">
          <p className="eyebrow">LUMA FEATURED</p>

          <h2>
            Small details.
            <br />
            <i>Big difference.</i>
          </h2>

          <p>
            We believe the best products don't just look good. They make
            everyday moments feel better.
          </p>

          <div className="feature-points">
            <div>
              <span>01</span>
              <strong>Thoughtfully selected</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Quality first</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Designed for everyday life</strong>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits" id="about">
        <div>
          <span>01</span>
          <h3>Free shipping</h3>
          <p>On orders over $100</p>
        </div>

        <div>
          <span>02</span>
          <h3>Easy returns</h3>
          <p>30-day return policy</p>
        </div>

        <div>
          <span>03</span>
          <h3>Secure checkout</h3>
          <p>Your payment is protected</p>
        </div>

        <div>
          <span>04</span>
          <h3>Curated quality</h3>
          <p>Products we believe in</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          LUMA<span>.</span>
        </div>

        <p>Modern essentials for everyday living.</p>

        <small>© 2026 LUMA. All rights reserved.</small>
      </footer>

      {/* QUICK VIEW MODAL */}
      {quickProduct && (
        <div className="modal-overlay" onClick={() => setQuickProduct(null)}>
          <div className="quick-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setQuickProduct(null)}
            >
              ×
            </button>

            <div className="modal-image">
              <img src={quickProduct.image} alt={quickProduct.name} />
            </div>

            <div className="modal-content">
              <span className="category-name">{quickProduct.category}</span>

              <h2>{quickProduct.name}</h2>

              <Rating rating={quickProduct.rating} />

              <p>{quickProduct.description}</p>

              <div className="modal-price">
                <strong>${quickProduct.price}</strong>
                <del>${quickProduct.oldPrice}</del>
              </div>

              <button
                className="modal-button"
                onClick={() => {
                  addToCart(quickProduct);
                  setQuickProduct(null);
                  setCartOpen(true);
                }}
              >
                Add to Bag →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART */}
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <div>
                <p className="eyebrow">YOUR SELECTION</p>
                <h2>Your Bag</h2>
              </div>

              <button onClick={() => setCartOpen(false)}>×</button>
            </div>

            {cart.length === 0 ? (
              <div className="cart-empty">
                <div>🛍</div>
                <h3>Your bag is empty</h3>
                <p>Add something you love to get started.</p>

                <button onClick={() => setCartOpen(false)}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div>
                        <span>{item.category}</span>
                        <h4>{item.name}</h4>
                        <strong>${item.price}</strong>

                        <div className="quantity">
                          <button onClick={() => updateQuantity(item.id, -1)}>
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button onClick={() => updateQuantity(item.id, 1)}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <strong>${subtotal.toFixed(2)}</strong>
                  </div>

                  <button>Proceed to Checkout →</button>

                  <small>Taxes and shipping calculated at checkout.</small>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
