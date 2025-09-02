interface Product {
  id: number;
  title: string;
  category: 'watches' | 'shoes' | 'others';
  price: number;
  discount?: number;
  rating: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface Order {
  user: User;
  items: CartItem[];
  total: number;
  paymentMethod: string;
}

export type { Product, CartItem, User, Order };