# 🌿 GreenNest Platform Architecture 

## Overview

GreenNest is a premium foliage e-commerce platform designed with a modern, secure, scalable, and mobile-first architecture.

The platform is built to support thousands of customers while maintaining excellent performance, security, and user experience.

---

# High Level Architecture

Internet
│
▼
Cloudflare CDN + Web Application Firewall
│
▼
Nginx Web Server
│
▼
Frontend (Next.js)
│
▼
Laravel REST API
│
▼
MySQL Database
│
▼
Storage (Images / Documents)

---

# Main Components

## Frontend

Technology

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

Responsibilities

- User Interface
- Product Browsing
- Shopping Cart
- Checkout
- Authentication
- User Dashboard

---

## Backend

Technology

- Laravel

Responsibilities

- Business Logic
- Authentication
- Product Management
- Orders
- Payments
- Notifications
- Admin Dashboard

---

## Database

Technology

- MySQL

Main Tables

- Users
- Products
- Categories
- Orders
- Order Items
- Payments
- Reviews
- Wishlist
- Addresses
- Coupons

---

## File Storage

Stores

- Product Images
- Gallery Images
- Documents

Supported Formats

- JPG
- PNG
- WEBP
- AVIF

---

## Payment Layer

Supported Methods

- Visa
- Mastercard
- PayHere
- Bank Transfer
- Cash on Delivery

Important

Customer card information is NEVER stored inside GreenNest.

All online card payments are processed using a secure third-party payment gateway.

---

# Security Architecture

Authentication

- Email Verification
- Secure Password Hashing
- Session Management
- Two-Factor Authentication (Future)

Protection

- HTTPS
- CSRF Protection
- XSS Protection
- SQL Injection Protection
- Rate Limiting
- Input Validation
- Output Escaping

Server Security

- Firewall
- Secure Headers
- Encrypted Backups
- Monitoring

---

# User Roles

Guest

- Browse products

Customer

- Place orders
- Wishlist
- Reviews

Admin

- Manage products
- Manage orders
- Manage customers
- View reports

Super Admin

- Full system access

---

# Performance Goals

Page Load Time

Less than 2 seconds

SEO Score

95+

Accessibility

WCAG Compliant

Responsive

Mobile First

---

# Future Expansion

The architecture is designed to support future modules including

- Mobile Applications
- AI Plant Assistant
- Wholesale Portal
- Vendor Portal
- Loyalty System
- AR Plant Preview

---

# Development Principles

- Clean Architecture
- Reusable Components
- Secure by Default
- Performance First
- Accessibility First
- Mobile First
- SEO Friendly
- Scalable Design

---

Version

1.0

Status

In Development
