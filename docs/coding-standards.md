# 💻 GreenNest Coding Standards

## Purpose

This document defines the coding standards used throughout the GreenNest project.

Every contributor should follow these rules to keep the codebase clean, secure, maintainable, and scalable.

---

# General Principles

- Write readable code.
- Keep functions small.
- Prefer reusable components.
- Avoid duplicated code.
- Always think about security.
- Performance matters.
- Mobile-first development.

---

# Project Structure

frontend/
backend/
database/
docs/
assets/

Never create random folders.

---

# Naming Conventions

Folders

Use lowercase.

Example

components

hooks

utils

---

Files

React Components

Use PascalCase.

Example

Navbar.tsx

Hero.tsx

ProductCard.tsx

Footer.tsx

---

Functions

Use camelCase.

Example

getProducts()

createOrder()

calculateDiscount()

---

Variables

Use meaningful names.

Good

productPrice

customerName

totalAmount

Bad

a

abc

data1

---

Constants

Use UPPER_CASE.

Example

MAX_PRODUCTS

API_TIMEOUT

DEFAULT_LANGUAGE

---

Boolean Variables

Start with

is

has

can

should

Example

isLoggedIn

hasDiscount

canCheckout

---

Comments

Only write comments when necessary.

Bad

// This adds two numbers

Good

// Calculate shipping based on delivery zone

---

React Rules

Use Functional Components only.

Use Hooks.

Never use class components.

---

TypeScript

Avoid "any".

Always define proper types.

Use interfaces when possible.

---

Component Rules

One component = One responsibility.

Components should be reusable.

Do not make very large components.

---

Styling

Use Tailwind CSS.

Do not use inline styles unless absolutely necessary.

Keep spacing consistent.

---

Images

Use WebP whenever possible.

Compress images.

Lazy load large images.

---

Forms

Always validate user input.

Never trust frontend validation only.

Backend validation is mandatory.

---

API

Never expose secrets.

Use HTTPS only.

Return proper status codes.

Validate every request.

---

Database

Never build raw SQL from user input.

Use ORM.

Validate data before saving.

---

Authentication

Passwords must be hashed.

Never store passwords in plain text.

Never expose sensitive information.

---

Security

Protect against

- SQL Injection
- XSS
- CSRF
- Clickjacking
- Brute Force attacks

Always sanitize input.

Escape output.

---

Git Rules

Commit often.

Write meaningful commit messages.

Examples

feat: add product search

fix: resolve cart calculation

docs: update architecture

style: improve hero spacing

refactor: simplify checkout logic

---

Branch Strategy

main

Production

develop

Development

feature/*

New Features

fix/*

Bug Fixes

hotfix/*

Emergency Fixes

---

Performance

Optimize images.

Lazy loading.

Code splitting.

Cache where appropriate.

Reduce unnecessary renders.

---

Accessibility

Use semantic HTML.

Add alt text for images.

Keyboard navigation should work.

Maintain proper color contrast.

---

Responsive Design

Design for mobile first.

Support

Mobile

Tablet

Desktop

---

Code Review Checklist

Before merging code

- No errors
- No warnings
- Mobile responsive
- Secure
- Accessible
- Reusable
- Performance checked

---

Documentation

Every important feature should have documentation.

Keep documentation updated.

---

Project Goal

Build a premium, secure, scalable, and maintainable foliage e-commerce platform that follows modern software engineering best practices.

---

Version

1.0

Status

Active
