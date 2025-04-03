import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Function to get the maximum price for a given PriceBracket
const getMaxPrice = (price: PriceBracket): number => {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
    default:
      throw new Error("Invalid price bracket value");
  }
};

// Function to filter the orders from each restaurant that cost below the maximum price
const getOrders = (price: number, orders: Order[][]): Order[][] => {
  let filteredOrders: Order[][] = [];

  orders.forEach((restaurant) => {
    filteredOrders.push(
      restaurant.filter((order) => order.price <= getMaxPrice(price))
    );
  });

  return filteredOrders;
};

const eligibleOrders = getOrders(PriceBracket.Low, orders);
console.log(eligibleOrders);
