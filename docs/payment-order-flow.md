# 💳 GreenNest Payment & Order Flow

## Overview

This document describes how a customer places an order and how payments are handled securely.

---

# Order Flow

Customer visits website

↓

Browse products

↓

View product details

↓

Add product to cart

↓

Review shopping cart

↓

Login / Register (if required)

↓

Select delivery address

↓

Choose payment method

↓

Review order summary

↓

Place order

↓

Payment processing

↓

Order confirmation

↓

Email confirmation

↓

Admin receives new order notification

↓

Packing

↓

Shipping

↓

Delivered

---

# Payment Methods

Supported

- Visa
- Mastercard
- PayHere
- Cash on Delivery
- Bank Transfer (Future)

---

# Secure Online Payment Flow

Customer clicks "Pay Now"

↓

GreenNest sends payment request to the payment gateway

↓

Customer enters card details on the payment gateway page

↓

Payment gateway processes payment securely

↓

Gateway returns payment result

↓

GreenNest verifies the payment using a secure callback (webhook)

↓

Order status is updated

↓

Customer receives confirmation

Important:

GreenNest never stores:

- Card Number
- CVV
- Expiry Date

Only the payment reference, status, and transaction ID are stored.

---

# Order Status Lifecycle

Pending

↓

Confirmed

↓

Processing

↓

Packed

↓

Shipped

↓

Delivered

Possible alternative states:

- Cancelled
- Refunded

---

# Inventory Update

After successful payment:

- Reduce stock quantity
- Prevent overselling
- Mark out-of-stock products

---

# Notifications

Customer

- Order confirmation email
- Payment confirmation
- Shipping update
- Delivery confirmation

Admin

- New order alert
- Payment received
- Low stock warning

---

# Refund Flow

Customer requests refund

↓

Admin reviews request

↓

Approved

↓

Payment gateway processes refund

↓

Order status updated

↓

Customer notified

---

# Fraud Prevention

- HTTPS only
- Webhook signature verification
- Duplicate payment detection
- Order amount validation
- Rate limiting
- Audit logs

---

# Future Enhancements

- Apple Pay
- Google Pay
- Loyalty points
- Gift cards
- Partial payments

---

Version

1.0

Status

Approved
