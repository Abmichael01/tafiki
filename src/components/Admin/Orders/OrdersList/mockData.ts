import { Order } from "@/types/admin";


export const ongoingOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'Order #5210',
    timestamp: '17:56, 21st Jan, 2025',
    partner: { name: 'John Doe', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Kapac Ventures', avatar: '/api/placeholder/24/24' },
    amount: 12300,
    currency: 'GBP',
    items: '5 units of Rice, 2 units of...',
    
  },
  {
    id: '2',
    orderNumber: 'Order #5211',
    timestamp: '16:30, 21st Jan, 2025',
    partner: { name: 'Jane Smith', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Fresh Market Co', avatar: '/api/placeholder/24/24' },
    amount: 8500,
    currency: 'GBP',
    items: '3 units of Wheat, 4 units of...',
    
  },
  {
    id: '3',
    orderNumber: 'Order #5212',
    timestamp: '15:45, 21st Jan, 2025',
    partner: { name: 'Mike Johnson', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Green Valley Foods', avatar: '/api/placeholder/24/24' },
    amount: 15600,
    currency: 'GBP',
    items: '8 units of Corn, 1 unit of...',
    
  },
  {
    id: '4',
    orderNumber: 'Order #5213',
    timestamp: '14:20, 21st Jan, 2025',
    partner: { name: 'Sarah Wilson', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Organic Supplies Ltd', avatar: '/api/placeholder/24/24' },
    amount: 9800,
    currency: 'GBP',
    items: '2 units of Sugar, 6 units of...',
    
  },
  {
    id: '5',
    orderNumber: 'Order #5214',
    timestamp: '13:10, 21st Jan, 2025',
    partner: { name: 'David Brown', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Global Trade Hub', avatar: '/api/placeholder/24/24' },
    amount: 11200,
    currency: 'GBP',
    items: '10 units of Flour, 3 units of...',
    
  },
  {
    id: '6',
    orderNumber: 'Order #5215',
    timestamp: '12:30, 21st Jan, 2025',
    partner: { name: 'Emma Davis', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Premium Goods Inc', avatar: '/api/placeholder/24/24' },
    amount: 7300,
    currency: 'GBP',
    items: '1 unit of Honey, 7 units of...',
    
  },
  {
    id: '7',
    orderNumber: 'Order #5216',
    timestamp: '11:15, 21st Jan, 2025',
    partner: { name: 'Alex Chen', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Swift Delivery Co', avatar: '/api/placeholder/24/24' },
    amount: 6500,
    currency: 'GBP',
    items: '4 units of Pasta, 2 units of...',
    
  },
  {
    id: '8',
    orderNumber: 'Order #5217',
    timestamp: '10:45, 21st Jan, 2025',
    partner: { name: 'Lisa Garcia', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Elite Commerce', avatar: '/api/placeholder/24/24' },
    amount: 13400,
    currency: 'GBP',
    items: '6 units of Beans, 3 units of...',
    
  },
  {
    id: '9',
    orderNumber: 'Order #5218',
    timestamp: '09:30, 21st Jan, 2025',
    partner: { name: 'Tom Wilson', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Quality Foods Ltd', avatar: '/api/placeholder/24/24' },
    amount: 9900,
    currency: 'GBP',
    items: '7 units of Barley, 2 units of...',
    
  },
  {
    id: '10',
    orderNumber: 'Order #5219',
    timestamp: '08:15, 21st Jan, 2025',
    partner: { name: 'Amy Rodriguez', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Farm Direct Supply', avatar: '/api/placeholder/24/24' },
    amount: 16800,
    currency: 'GBP',
    items: '15 units of Quinoa, 3 units of...',
    
  }
];

export const historyOrders: Order[] = [
  // Today
  {
    id: '11',
    orderNumber: 'Order #5220',
    timestamp: '18:20, 21st Jan, 2025',
    partner: { name: 'John Doe', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Kapac Ventures', avatar: '/api/placeholder/24/24' },
    amount: 9600,
    currency: 'GBP',
    items: '5 units of Nuts, 2 units of...',
    date: 'Today'
  },
  {
    id: '12',
    orderNumber: 'Order #5221',
    timestamp: '17:50, 21st Jan, 2025',
    partner: { name: 'Jane Smith', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Fresh Market Co', avatar: '/api/placeholder/24/24' },
    amount: 8200,
    currency: 'GBP',
    items: '3 units of Coffee, 4 units of...',
    date: 'Today'
  },
  {
    id: '13',
    orderNumber: 'Order #5222',
    timestamp: '16:35, 21st Jan, 2025',
    partner: { name: 'Mike Johnson', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Green Valley Foods', avatar: '/api/placeholder/24/24' },
    amount: 12800,
    currency: 'GBP',
    items: '8 units of Oats, 4 units of...',
    date: 'Today'
  },
  {
    id: '14',
    orderNumber: 'Order #5223',
    timestamp: '15:20, 21st Jan, 2025',
    partner: { name: 'Sarah Wilson', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Organic Supplies Ltd', avatar: '/api/placeholder/24/24' },
    amount: 10500,
    currency: 'GBP',
    items: '7 units of Spices, 1 unit of...',
    date: 'Today'
  },
  {
    id: '15',
    orderNumber: 'Order #5224',
    timestamp: '14:10, 21st Jan, 2025',
    partner: { name: 'David Brown', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Global Trade Hub', avatar: '/api/placeholder/24/24' },
    amount: 14200,
    currency: 'GBP',
    items: '12 units of Rice, 5 units of...',
    date: 'Today'
  },

  // Yesterday
  {
    id: '16',
    orderNumber: 'Order #5225',
    timestamp: '19:40, 20th Jan, 2025',
    partner: { name: 'Emma Davis', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Premium Goods Inc', avatar: '/api/placeholder/24/24' },
    amount: 11300,
    currency: 'GBP',
    items: '6 units of Salt, 8 units of...',
    date: 'Yesterday'
  },
  {
    id: '17',
    orderNumber: 'Order #5226',
    timestamp: '18:25, 20th Jan, 2025',
    partner: { name: 'Alex Chen', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Swift Delivery Co', avatar: '/api/placeholder/24/24' },
    amount: 7800,
    currency: 'GBP',
    items: '4 units of Oil, 3 units of...',
    date: 'Yesterday'
  },
  {
    id: '18',
    orderNumber: 'Order #5227',
    timestamp: '17:15, 20th Jan, 2025',
    partner: { name: 'Lisa Garcia', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Elite Commerce', avatar: '/api/placeholder/24/24' },
    amount: 13600,
    currency: 'GBP',
    items: '9 units of Lentils, 2 units of...',
    date: 'Yesterday'
  },
  {
    id: '19',
    orderNumber: 'Order #5228',
    timestamp: '16:05, 20th Jan, 2025',
    partner: { name: 'Tom Wilson', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Quality Foods Ltd', avatar: '/api/placeholder/24/24' },
    amount: 9400,
    currency: 'GBP',
    items: '5 units of Seeds, 6 units of...',
    date: 'Yesterday'
  },
  {
    id: '20',
    orderNumber: 'Order #5229',
    timestamp: '15:30, 20th Jan, 2025',
    partner: { name: 'Amy Rodriguez', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Farm Direct Supply', avatar: '/api/placeholder/24/24' },
    amount: 12100,
    currency: 'GBP',
    items: '8 units of Tea, 4 units of...',
    date: 'Yesterday'
  },
  {
    id: '21',
    orderNumber: 'Order #5230',
    timestamp: '14:45, 20th Jan, 2025',
    partner: { name: 'Chris Martinez', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Wholesale Direct', avatar: '/api/placeholder/24/24' },
    amount: 15700,
    currency: 'GBP',
    items: '11 units of Corn, 3 units of...',
    date: 'Yesterday'
  },

  // This week
  {
    id: '22',
    orderNumber: 'Order #5231',
    timestamp: '13:20, 19th Jan, 2025',
    partner: { name: 'Rachel Johnson', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Express Goods Co', avatar: '/api/placeholder/24/24' },
    amount: 8900,
    currency: 'GBP',
    items: '4 units of Sauce, 7 units of...',
    date: 'This week'
  },
  {
    id: '23',
    orderNumber: 'Order #5232',
    timestamp: '11:55, 19th Jan, 2025',
    partner: { name: 'Kevin Lee', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Metro Supply Chain', avatar: '/api/placeholder/24/24' },
    amount: 10800,
    currency: 'GBP',
    items: '6 units of Wheat, 5 units of...',
    date: 'This week'
  },
  {
    id: '24',
    orderNumber: 'Order #5233',
    timestamp: '10:30, 18th Jan, 2025',
    partner: { name: 'Maria Santos', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Prime Distribution', avatar: '/api/placeholder/24/24' },
    amount: 13900,
    currency: 'GBP',
    items: '10 units of Sugar, 2 units of...',
    date: 'This week'
  },
  {
    id: '25',
    orderNumber: 'Order #5234',
    timestamp: '09:15, 18th Jan, 2025',
    partner: { name: 'Robert Kim', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Direct Trade Ltd', avatar: '/api/placeholder/24/24' },
    amount: 7600,
    currency: 'GBP',
    items: '3 units of Honey, 9 units of...',
    date: 'This week'
  },
  {
    id: '26',
    orderNumber: 'Order #5235',
    timestamp: '14:40, 17th Jan, 2025',
    partner: { name: 'Linda Wang', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Smart Logistics', avatar: '/api/placeholder/24/24' },
    amount: 16200,
    currency: 'GBP',
    items: '14 units of Flour, 1 unit of...',
    date: 'This week'
  },

  // Last week
  {
    id: '27',
    orderNumber: 'Order #5236',
    timestamp: '16:25, 14th Jan, 2025',
    partner: { name: 'Daniel Taylor', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Reliable Supplies', avatar: '/api/placeholder/24/24' },
    amount: 11700,
    currency: 'GBP',
    items: '8 units of Pasta, 4 units of...',
    date: 'Last week'
  },
  {
    id: '28',
    orderNumber: 'Order #5237',
    timestamp: '15:10, 13th Jan, 2025',
    partner: { name: 'Nicole Brown', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Quality Express', avatar: '/api/placeholder/24/24' },
    amount: 9200,
    currency: 'GBP',
    items: '5 units of Beans, 6 units of...',
    date: 'Last week'
  },
  {
    id: '29',
    orderNumber: 'Order #5238',
    timestamp: '12:45, 12th Jan, 2025',
    partner: { name: 'James Wilson', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Fast Track Supply', avatar: '/api/placeholder/24/24' },
    amount: 14500,
    currency: 'GBP',
    items: '12 units of Nuts, 3 units of...',
    date: 'Last week'
  },
  {
    id: '30',
    orderNumber: 'Order #5239',
    timestamp: '11:30, 11th Jan, 2025',
    partner: { name: 'Jennifer Davis', avatar: '/api/placeholder/24/24' },
    vendor: { name: 'Efficient Delivery', avatar: '/api/placeholder/24/24' },
    amount: 8400,
    currency: 'GBP',
    items: '4 units of Coffee, 8 units of...',
    date: 'Last week'
  }
];