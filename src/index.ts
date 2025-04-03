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
const getOrders = (price: PriceBracket, orders: Order[][]): Order[][] => {
  let filteredOrders: Order[][] = [];

  orders.forEach((restaurant) => {
    filteredOrders.push(
      restaurant.filter((order) => order.price <= getMaxPrice(price))
    );
  });

  return filteredOrders;
};

// Function to format the results and print in a user-friendly format
const printOrders = (restaurants: Restaurant[], orders: Order[][]) => {
  orders.forEach((order, index) => {
    if (order.length > 0) {
      console.log(`\n ${restaurants[index].name}`);
      order.forEach((item) => console.log(`- ${item.name}: $${item.price}`));
    }
  });
  console.log("");
};

const eligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, eligibleOrders);
