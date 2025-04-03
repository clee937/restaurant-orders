# Restaurant Orders

## About

Restaurant Orders is a program that filters restaurant orders based on a price bracket specified by the user. The project focuses on TypeScript functions and the use of custom types such as type aliases and enums to annotate more complex data structures.

# Features and code breakdown

- A `PriceBracket` **enum** is used to limit the possible values of the **variable** and reduce the chances of error.
- The `getMaxPrice()` **function** uses the value of the `PriceBracket` **enum** together with a **switch statement** to return the maximum price that an order should be filtered for.
- The `getOrders()` **function** takes a max price value of the `PriceBracket` **enum** type and a two-dimensional list of orders with the `Order` **type alias** as parameters. It filters through the **array** of orders and returns a new **two-dimensional array** of restaurant orders that are equal to, or less than the maximum price.
- The `printOrders()` **function** takes an **array** of restaurants with the `Restaurant` **type alias** and a **two-dimensional array** of orders with the `Order` **type alias**. It formats the results and prints them to the console in an easy to read format.
- The use of custom types allow for finer-grained control and greater type-safety in large scale projects.

## Preview

![restaurant-orders](/restaurant-orders.png "image of restaurant orders")

## Technologies used

- TypeScript
