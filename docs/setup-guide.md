# 🛠 GreenNest Development Setup Guide

## Purpose

This document explains how to set up the GreenNest project on a new computer.

---

# Requirements

Install the following software before starting.

## Required

- Git
- Node.js LTS (22.x or later)
- npm
- PHP 8.3+
- Composer
- MySQL 8+
- VS Code

Recommended

- GitHub Desktop
- Postman
- Laravel Herd (Windows/macOS)
- XAMPP (Alternative)

---

# Clone Repository

git clone https://github.com/YOUR_USERNAME/greennest-platform.git

cd greennest-platform

---

# Frontend Setup

Go to frontend

cd frontend

Install packages

npm install

Start development server

npm run dev

Default URL

http://localhost:3000

---

# Backend Setup

Go to backend

cd backend

Install dependencies

composer install

Copy environment file

cp .env.example .env

Generate application key

php artisan key:generate

Configure database inside

.env

Run database migrations

php artisan migrate

Run seeders

php artisan db:seed

Start Laravel

php artisan serve

Default URL

http://127.0.0.1:8000

---

# Database

Engine

MySQL 8+

Database Name

greennest

Character Set

utf8mb4

Collation

utf8mb4_unicode_ci

---

# Environment Variables

Frontend

NEXT_PUBLIC_API_URL

Backend

APP_NAME

APP_URL

DB_HOST

DB_PORT

DB_DATABASE

DB_USERNAME

DB_PASSWORD

MAIL_HOST

MAIL_PORT

MAIL_USERNAME

MAIL_PASSWORD

PAYMENT_GATEWAY_KEY

PAYMENT_GATEWAY_SECRET

---

# Build Project

Frontend

npm run build

Backend

php artisan optimize

---

# Production Checklist

- HTTPS enabled
- Environment variables configured
- Debug mode disabled
- Database backup enabled
- Queue worker running
- Scheduler configured
- Storage linked
- Cache optimized

---

# Useful Commands

Frontend

npm run dev

npm run build

npm run lint

Backend

php artisan migrate

php artisan db:seed

php artisan cache:clear

php artisan config:clear

php artisan route:clear

php artisan optimize

---

# Troubleshooting

Problem

Node modules missing

Solution

Run

npm install

Problem

Composer packages missing

Solution

composer install

Problem

Database connection failed

Solution

Check database credentials inside the .env file.

---

Version

1.0

Status

Approved
