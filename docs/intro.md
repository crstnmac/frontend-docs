---
sidebar_position: 1
---

# Requirements

## USER

- User can enter in website as guest
  To make any purchase user must Login/Register **(customer microservice)**

- He can search a product based on name and filter/sort the product based on price **(product microservice)**

- User can add multiple products in cart and checkout. **(orderandcustomer orderandproduct)**

- User can update the quantity by going in my order section.

- User can cancel a order by going in my order section.
  (new)
- User can also cancel partial orders.

- for this add seperate buttons for partial order cancel and complete order cancel.
- partial button will be active only if there are 2 or more product in the order.

**(keep in mind) when user add two or more same products in the cart only the quantity will increase.**

## ADMIN

- Admin can login through credentials only no guest entry.
- Home page will have a navigation one to products page another to customers page
- On product page he can read product details,add a new product,update existing product and delete a product
- On customers page admin can see customer id,name,email,and orders he placed
- Product and Customer page will use Data Tables.

---

**DATABASE: furnitures**

**_Tables-1: customer_**

- Column1: cust_id (Primary_Key,auto)
- Column2: cust_name
- Column3: cust_email
- Column4: cust_password

**_Table-2: product_**

- Column1: prod_id (Primary_Key,auto)
- Column2: prod_name
- Column3: prod_price
- Column4: prod_inv
- Column5: prod_img

**_Table-3: orderandcustomer_**

- Column1: order_id (Primary_Key,auto)
- Column2: cust_id (Foreign Key)

**_Table-4: Order (PrimaryKey -> order_id and prod_id)_**

- Column1: order_id (Foreign Key,Not-Null)
- Column2: prod_id (Foreign Key,Not-Null)
- Column3: qty (Greater than 0)

---

Challenges we solved

## Challenge 1: Adding multiple orders in a cart

- this was really one of the challenge that took us a day or two and we decided to go to mongo but having a team conversation about how to normalize the third table and what should be the primary keys we finally came to the solution.

- another problem came and that was really another good problem how to get the automatic generated orderid from backend without having anything to search for

---

What features can be added in future

- Virtual payment page
- WishList
- Inventory (In Stock/Out of Stock)
- Save items of cart in DB so when customer re-login he can see the added items in cart
