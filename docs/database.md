# 🗄️ GreenNest Database Design

## Overview

The GreenNest database is designed to support a modern, secure, and scalable foliage e-commerce platform.

Database Engine

- MySQL 8+

Character Set

- utf8mb4

Collation

- utf8mb4_unicode_ci

Primary Key Type

- BIGINT UNSIGNED

Soft Deletes

Enabled where appropriate.

Timestamps

Every table should include:

- created_at
- updated_at

---

# Entity Relationship Overview

Users
│
├── Addresses
├── Wishlist
├── Orders
│      ├── Order Items
│      └── Payments
├── Reviews
└── Notifications

Products
│
├── Categories
├── Images
├── Inventory
└── Reviews

---

# Tables

## users

Stores customer and administrator accounts.

Columns

- id
- first_name
- last_name
- email
- password
- phone
- role
- email_verified_at
- remember_token
- created_at
- updated_at

Role Values

- customer
- admin
- super_admin

---

## addresses

Stores delivery addresses.

Columns

- id
- user_id
- full_name
- phone
- address_line_1
- address_line_2
- city
- district
- postal_code
- is_default
- created_at
- updated_at

Relationship

One User → Many Addresses

---

## categories

Product categories.

Columns

- id
- name
- slug
- description
- image
- status

Examples

- Indoor Plants
- Outdoor Plants
- Air Purifying
- Rare Collection
- Hanging Plants

---

## products

Stores all products.

Columns

- id
- category_id
- name
- slug
- short_description
- description
- sku
- price
- discount_price
- stock_quantity
- featured
- status
- created_at
- updated_at

Status

- active
- inactive

---

## product_images

Stores product gallery images.

Columns

- id
- product_id
- image
- sort_order

Relationship

One Product → Many Images

---

## inventory

Tracks stock.

Columns

- id
- product_id
- quantity
- low_stock_limit
- last_updated

---

## wishlist

Customer wishlist.

Columns

- id
- user_id
- product_id
- created_at

Relationship

Many Users ↔ Many Products

---

## cart_items

Temporary shopping cart.

Columns

- id
- user_id
- product_id
- quantity
- created_at

---

## orders

Stores customer orders.

Columns

- id
- user_id
- address_id
- order_number
- subtotal
- delivery_fee
- discount
- total
- payment_status
- order_status
- created_at
- updated_at

Order Status

- Pending
- Confirmed
- Processing
- Shipped
- Delivered
- Cancelled

Payment Status

- Pending
- Paid
- Failed
- Refunded

---

## order_items

Stores ordered products.

Columns

- id
- order_id
- product_id
- quantity
- price

---

## payments

Stores payment records.

Columns

- id
- order_id
- gateway
- transaction_reference
- amount
- currency
- status
- paid_at

Important

Never store

- Card Number
- CVV
- Expiry Date

---

## reviews

Stores customer reviews.

Columns

- id
- user_id
- product_id
- rating
- comment
- created_at

Rating

1–5

---

## coupons

Discount coupons.

Columns

- id
- code
- discount_type
- discount_value
- start_date
- end_date
- usage_limit
- status

---

## notifications

System notifications.

Columns

- id
- user_id
- title
- message
- is_read
- created_at

---

# Relationships

User

- hasMany Addresses
- hasMany Orders
- hasMany Reviews
- hasMany Wishlist Items

Category

- hasMany Products

Product

- belongsTo Category
- hasMany Images
- hasMany Reviews

Order

- belongsTo User
- hasMany Order Items
- hasOne Payment

---

# Indexes

Create indexes for:

- email
- slug
- sku
- category_id
- product_id
- user_id
- order_number

---

# Security

Passwords

- Hashed using bcrypt or Argon2.

Sensitive data

- Never stored in plain text.

Prepared Statements

- Required.

Validation

- Required on every input.

---

# Backup Strategy

- Daily automatic backup
- Weekly full backup
- Monthly archive backup

---

# Future Tables

- loyalty_points
- gift_cards
- plant_disease_reports
- ai_chat_history
- wholesale_customers
- vendors

---

Version

1.0

Status

Approved
