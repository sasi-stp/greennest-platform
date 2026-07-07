# 🌐 GreenNest REST API Specification

## Overview

GreenNest uses a RESTful API architecture.

Frontend

- Next.js

Backend

- Laravel

Data Format

- JSON

Authentication

- Laravel Sanctum

Base URL

/api/v1

---

# Authentication

Authentication is required for:

- Cart
- Wishlist
- Orders
- Reviews
- User Profile

Public endpoints do not require login.

---

# Response Format

Success

{
  "success": true,
  "message": "Request completed successfully.",
  "data": {}
}

Error

{
  "success": false,
  "message": "Validation failed.",
  "errors": {}
}

---

# Authentication Endpoints

## Register

POST

/api/v1/auth/register

Body

- first_name
- last_name
- email
- phone
- password

---

## Login

POST

/api/v1/auth/login

Body

- email
- password

---

## Logout

POST

/api/v1/auth/logout

Authentication Required

Yes

---

## Current User

GET

/api/v1/auth/me

Authentication Required

Yes

---

# Categories

## Get Categories

GET

/api/v1/categories

Public

Yes

---

# Products

## Get Products

GET

/api/v1/products

Query Parameters

- category
- search
- sort
- page
- min_price
- max_price

---

## Product Details

GET

/api/v1/products/{slug}

---

## Featured Products

GET

/api/v1/products/featured

---

## New Arrivals

GET

/api/v1/products/new

---

## Best Sellers

GET

/api/v1/products/best-sellers

---

# Wishlist

## Get Wishlist

GET

/api/v1/wishlist

Login Required

Yes

---

## Add Product

POST

/api/v1/wishlist

Body

- product_id

---

## Remove Product

DELETE

/api/v1/wishlist/{id}

---

# Shopping Cart

## View Cart

GET

/api/v1/cart

---

## Add Item

POST

/api/v1/cart

Body

- product_id
- quantity

---

## Update Quantity

PUT

/api/v1/cart/{id}

Body

- quantity

---

## Remove Item

DELETE

/api/v1/cart/{id}

---

# Orders

## Create Order

POST

/api/v1/orders

Body

- address_id
- payment_method

---

## Order History

GET

/api/v1/orders

---

## Order Details

GET

/api/v1/orders/{id}

---

# Payments

## Start Payment

POST

/api/v1/payments/start

---

## Payment Callback

POST

/api/v1/payments/callback

Gateway Only

---

## Payment Status

GET

/api/v1/payments/{reference}

---

# Reviews

## Product Reviews

GET

/api/v1/products/{id}/reviews

---

## Add Review

POST

/api/v1/products/{id}/reviews

Login Required

Yes

---

# User Profile

## Get Profile

GET

/api/v1/profile

---

## Update Profile

PUT

/api/v1/profile

---

## Change Password

PUT

/api/v1/profile/password

---

# Addresses

## List Addresses

GET

/api/v1/addresses

---

## Add Address

POST

/api/v1/addresses

---

## Update Address

PUT

/api/v1/addresses/{id}

---

## Delete Address

DELETE

/api/v1/addresses/{id}

---

# Admin APIs

Authentication Required

Admin

---

Products

GET /api/v1/admin/products

POST /api/v1/admin/products

PUT /api/v1/admin/products/{id}

DELETE /api/v1/admin/products/{id}

---

Orders

GET /api/v1/admin/orders

PUT /api/v1/admin/orders/{id}

---

Categories

GET /api/v1/admin/categories

POST /api/v1/admin/categories

PUT /api/v1/admin/categories/{id}

DELETE /api/v1/admin/categories/{id}

---

Users

GET /api/v1/admin/users

GET /api/v1/admin/users/{id}

PUT /api/v1/admin/users/{id}

---

Reports

GET /api/v1/admin/reports

---

# HTTP Status Codes

200 OK

201 Created

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

422 Validation Error

429 Too Many Requests

500 Internal Server Error

---

# Security

- HTTPS Only
- CSRF Protection
- Rate Limiting
- Input Validation
- Output Escaping
- Authentication Tokens
- Role-Based Authorization
- Audit Logging

---

# Versioning

Current Version

v1

Future Versions

v2

v3

---

# Future APIs

- AI Plant Care
- Plant Disease Detection
- Loyalty Points
- Gift Cards
- Wholesale Portal
- Mobile App API

---

Version

1.0

Status

Approved
