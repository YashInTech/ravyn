# RAVYN 🏋️‍♂️

**RAVYN** is a modern, responsive, and full-featured Gymwear E-commerce Web Application built using **Next.js 15 App Router** and **Appwrite**. It offers a smooth shopping experience, robust authentication, admin control, and secure checkout — inspired by brands like Gymshark and Fuark.

---

## 🚀 Features

### 🛍️ Storefront

- Home page with featured collections
- Product listings with filtering (category, price, size, etc.)
- Product detail pages with image gallery and details
- Cart & Wishlist (Zustand state management)
- Checkout flow (Stripe integration)

### 🔐 Auth

- Sign Up / Login with Appwrite Auth
- Session persistence
- Role-based access (User/Admin)

### ⚙️ Admin Panel

- Add / Edit / Delete Products
- Manage Orders
- Upload product images using Appwrite Storage

### 📦 Order Management

- Order placement and confirmation
- Store order history in Appwrite Database

### 💅 UI/UX

- Fully responsive design (TailwindCSS)
- Optimized for performance and SEO (Next.js)
- Fast image loading with next/image + Appwrite

---

## 🧰 Tech Stack

| Layer     | Technology              |
| --------- | ----------------------- |
| Frontend  | Next.js 15 (App Router) |
| Styling   | TailwindCSS             |
| Auth & DB | Appwrite                |
| Payments  | Razorpay                |
| Hosting   | Vercel / Appwrite Cloud |

---

## 📁 Project Structure (App Router)

```
/app
  /page.js              # Home Page
  /products             # Products route
  /product/[slug]       # Single product
  /auth                 # Login / Register
  /cart                 # Cart page
  /checkout             # Stripe checkout
  /admin                # Admin dashboard
/components            # Reusable UI components
/lib                   # Appwrite SDK, helpers
/store                 # Zustand stores
/styles                # Global styles (Tailwind)
/utils                 # Utility functions
```

---

## 📦 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/your-username/ravyn.git
cd ravyn
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up Appwrite**

- Create a project on [Appwrite Cloud](https://cloud.appwrite.io)
- Add Web Platform
- Create Collections: `products`, `users`, `orders`
- Enable Auth & Storage

4. **Add `.env.local`**

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
```

5. **Run the project**

```bash
npm run dev
```

---

## 🛠️ To Do

- [ ] Add product filtering and search
- [ ] Add user order history page
- [ ] Setup Appwrite Functions for webhook handling
- [ ] Add reviews/ratings system

---

## 🙌 Contributing

Feel free to fork this repo and contribute via PRs. Suggestions and improvements are always welcome!

---

## 📄 License

MIT © 2025 RAVYN
