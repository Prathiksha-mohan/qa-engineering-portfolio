# Farmers Market – API Testing Report

## 1. Project Overview

**Project:** Farmers Market  
**Testing Type:** REST API Testing  
**Tools Used:**
- Postman
- Supabase PostgreSQL
- SQL Editor

## 2. API Testing Coverage

### POST – Create Product

Test scenarios:
- Create product with valid fields
- Product name containing spaces
- Long product name
- Missing required fields
- Zero price
- Negative price
- Negative quantity
- Invalid farmer ID
- Decimal quantity
- Decimal price

### GET – Retrieve Products

Test scenarios:
- Retrieve all products
- Retrieve products using a valid farmer ID
- Retrieve products using a non-numeric farmer ID

### PUT – Update Product

Test scenarios:
- Update using a valid product ID
- Update using an invalid product ID
- Update with a missing required field

### DELETE – Delete Product

Test scenarios:
- Delete using a valid product ID
- Delete using an invalid product ID

## 3. Test Execution Summary

**Tool:** Postman Collection Runner

- Passed: 10
- Failed: 1

### Failed Test Observation

**Test:** Product is deleted successfully

**Expected:** HTTP 200

**Actual:** HTTP 404

**Status:** Requires further investigation.

## 4. Database Validation

Database: Supabase PostgreSQL  
Table: `products`

| Operation | Validation | Result |
|---|---|---|
| POST | Newly created products exist in database | Passed |
| PUT | Updated product details are saved | Passed |
| DELETE | Deleted product record no longer exists | Passed |

## 5. Test Evidence

Screenshots include:
- Postman Collection Runner results
- POST database validation
- PUT database validation
- DELETE database validation

## 6. Test Artifacts

- Exported Postman collection (JSON)
- API testing report
- Database validation screenshots

