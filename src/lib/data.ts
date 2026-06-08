import type { Category, FoodItem, Banner, Order, Profile, AdminPaymentDetails, SiteSettings, AdSubmission, DayClosing } from '@/types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Rice Dishes', slug: 'rice-dishes', image: '/images/cat-rice.jpg', displayOrder: 1, itemCount: 8 },
  { id: '2', name: 'Soups', slug: 'soups', image: '/images/cat-soups.jpg', displayOrder: 2, itemCount: 6 },
  { id: '3', name: 'Grilled', slug: 'grilled', image: '/images/cat-grilled.jpg', displayOrder: 3, itemCount: 5 },
  { id: '4', name: 'Swallows', slug: 'swallows', image: '/images/cat-swallows.jpg', displayOrder: 4, itemCount: 4 },
  { id: '5', name: 'Snacks', slug: 'snacks', image: '/images/cat-snacks.jpg', displayOrder: 5, itemCount: 7 },
  { id: '6', name: 'Drinks', slug: 'drinks', image: '/images/cat-drinks.jpg', displayOrder: 6, itemCount: 5 },
  { id: '7', name: 'Breakfast', slug: 'breakfast', image: '/images/cat-breakfast.jpg', displayOrder: 7, itemCount: 4 },
];

export const FOOD_ITEMS: FoodItem[] = [
  { id: '1', name: 'Jollof Rice & Chicken', slug: 'jollof-rice-chicken', description: 'Premium Nigerian jollof rice with that signature smoky flavor, served with crispy fried chicken and fresh coleslaw.', price: 2500, costPrice: 1200, categoryId: '1', categoryName: 'Rice Dishes', owner: 'joint', image: '/images/food-jollof.jpg', deliveryTime: 'instant', isFeatured: true, isAvailable: true, createdAt: '2026-05-01' },
  { id: '2', name: 'Egusi Soup & Pounded Yam', slug: 'egusi-soup-pounded-yam', description: 'Rich and creamy egusi soup with tender beef, dried fish, and assorted meats. Served with smooth pounded yam.', price: 3500, costPrice: 1600, categoryId: '2', categoryName: 'Soups', owner: 'ebube', image: '/images/food-egusi.jpg', deliveryTime: '24hrs', isFeatured: true, isAvailable: true, createdAt: '2026-05-02' },
  { id: '3', name: 'Suya Platter (5 Skewers)', slug: 'suya-platter', description: 'Spicy grilled beef suya skewers with groundnut powder, sliced onions, and fresh tomatoes.', price: 2000, costPrice: 900, categoryId: '3', categoryName: 'Grilled', owner: 'bundu', image: '/images/food-suya.jpg', deliveryTime: 'instant', isFeatured: true, isAvailable: true, createdAt: '2026-05-03' },
  { id: '4', name: 'Efo Riro & Pounded Yam', slug: 'efo-riro-pounded-yam', description: 'Flavorful spinach stew cooked in palm oil with smoked turkey, crayfish, and locust beans.', price: 3000, costPrice: 1400, categoryId: '2', categoryName: 'Soups', owner: 'joint', image: '/images/food-efo-riro.jpg', deliveryTime: '24hrs', isFeatured: true, isAvailable: true, createdAt: '2026-05-04' },
  { id: '5', name: 'Moi Moi Special', slug: 'moi-moi-special', description: 'Steamed bean pudding with eggs, fish, and corned beef. Served with jollof rice and fried plantains.', price: 2200, costPrice: 1000, categoryId: '7', categoryName: 'Breakfast', owner: 'ebube', image: '/images/food-moimoi.jpg', deliveryTime: 'instant', isFeatured: false, isAvailable: true, createdAt: '2026-05-05' },
  { id: '6', name: 'Fried Rice & Seafood', slug: 'fried-rice-seafood', description: ' aromatic fried rice with mixed vegetables, shrimp, and chicken pieces. A crowd favorite.', price: 3500, costPrice: 1700, categoryId: '1', categoryName: 'Rice Dishes', owner: 'bundu', image: '/images/food-friedrice.jpg', deliveryTime: 'instant', isFeatured: false, isAvailable: true, createdAt: '2026-05-06' },
  { id: '7', name: 'Goat Meat Pepper Soup', slug: 'goat-meat-pepper-soup', description: 'Hot and spicy pepper soup with tender goat meat, yam cubes, and utazi leaves. Perfect for cold evenings.', price: 2800, costPrice: 1300, categoryId: '2', categoryName: 'Soups', owner: 'joint', image: '/images/food-peppersoup.jpg', deliveryTime: 'instant', isFeatured: false, isAvailable: true, createdAt: '2026-05-07' },
  { id: '8', name: 'Chin Chin Pack (500g)', slug: 'chin-chin-pack', description: 'Crunchy, sweet fried dough snacks. Perfect for snacking at home or on the go.', price: 1500, costPrice: 600, categoryId: '5', categoryName: 'Snacks', owner: 'ebube', image: '/images/food-chinchin.jpg', deliveryTime: '1week', isFeatured: false, isAvailable: true, createdAt: '2026-05-08' },
  { id: '9', name: 'Akara & Pap Breakfast', slug: 'akara-pap-breakfast', description: 'Golden fried bean cakes served with warm pap (akamu). A classic Nigerian breakfast combo.', price: 1200, costPrice: 500, categoryId: '7', categoryName: 'Breakfast', owner: 'bundu', image: '/images/food-akara.jpg', deliveryTime: 'instant', isFeatured: false, isAvailable: true, createdAt: '2026-05-09' },
  { id: '10', name: 'Ofada Rice & Ayamase', slug: 'ofada-rice-ayamase', description: 'Local Ofada brown rice with spicy green pepper stew (ayamase), boiled eggs, and assorted meat.', price: 3000, costPrice: 1400, categoryId: '1', categoryName: 'Rice Dishes', owner: 'joint', image: '/images/food-ofada.jpg', deliveryTime: '24hrs', isFeatured: false, isAvailable: true, createdAt: '2026-05-10' },
];

export const FEATURED_ITEMS = FOOD_ITEMS.filter(i => i.isFeatured);

export const BANNERS: Banner[] = [
  { id: '1', title: 'Craving Something Delicious?', subtitle: 'Order now and get it in minutes', mediaUrl: '/images/hero-banner.jpg', mediaType: 'image', targetType: 'category', targetValue: 'rice-dishes', displayOrder: 1, activeStart: '2026-01-01', activeEnd: '2026-12-31', isActive: true },
];

export const MOCK_ORDERS: Order[] = [
  {
    id: '1', orderNumber: 'CBK-20260608-001', userId: 'user1', userName: 'Chinedu Okafor', userPhone: '08031234567', userAddress: '12 Awka Road, Onitsha',
    items: [
      { itemId: '1', name: 'Jollof Rice & Chicken', price: 2500, quantity: 2, image: '/images/food-jollof.jpg', owner: 'joint' },
      { itemId: '3', name: 'Suya Platter (5 Skewers)', price: 2000, quantity: 1, image: '/images/food-suya.jpg', owner: 'bundu' },
    ],
    subtotal: 7000, deliveryFee: 500, total: 7500, status: 'delivered', paymentStatus: 'paid',
    createdAt: '2026-06-07T14:30:00Z', updatedAt: '2026-06-07T16:00:00Z',
  },
  {
    id: '2', orderNumber: 'CBK-20260608-002', userId: 'user1', userName: 'Chinedu Okafor', userPhone: '08031234567', userAddress: '12 Awka Road, Onitsha',
    items: [
      { itemId: '2', name: 'Egusi Soup & Pounded Yam', price: 3500, quantity: 1, image: '/images/food-egusi.jpg', owner: 'ebube' },
    ],
    subtotal: 3500, deliveryFee: 500, total: 4000, status: 'preparing', paymentStatus: 'pending',
    deliveryNotes: 'Please add extra pepper', createdAt: '2026-06-08T10:15:00Z', updatedAt: '2026-06-08T10:30:00Z',
  },
];

export const MOCK_PROFILE: Profile = {
  id: '1', userId: 'user1', fullName: 'Chinedu Okafor', email: 'chinedu@example.com',
  phone: '08031234567', address: '12 Awka Road, Onitsha, Anambra State', role: 'customer',
};

export const MOCK_ADMIN_PROFILE: Profile = {
  id: '2', userId: 'admin1', fullName: 'Ebube CBK', email: 'ebube@cbkfoods.online',
  phone: '08039876543', address: 'CBK Foods HQ, Onitsha', role: 'admin_joint',
};

export const ADMIN_PAYMENT: AdminPaymentDetails = {
  id: '1', accountName: 'CBK Foods Ltd', accountNumber: '0123456789', bankName: 'GTBank', bankCode: '058', isActive: true,
};

export const SITE_SETTINGS: SiteSettings = {
  deliveryFee: 500, contactPhone: '08031234567', contactWhatsApp: '08039876543',
  contactEmail: 'hello@cbkfoods.online', socialInstagram: '@cbkfoods',
  socialFacebook: 'CBKFoods', socialTwitter: '@cbkfoods',
};

export const MOCK_ADS: AdSubmission[] = [
  { id: '1', name: 'Nneka Boutique', email: 'nneka@email.com', phone: '08011112222', adType: 'image', duration: '5s', period: '1month', customCreation: false, paymentProofUrl: '/images/ad-placeholder.jpg', linkUrl: 'https://example.com', totalPrice: 6000, status: 'active', startDate: '2026-06-01', endDate: '2026-07-01', createdAt: '2026-05-28' },
];

export const MOCK_DAY_CLOSINGS: DayClosing[] = [
  { id: '1', date: '2026-06-07', totalOrders: 24, totalRevenue: 125000, ebubeOrders: 8, ebubeRevenue: 42000, ebubeCost: 18000, ebubeProfit: 24000, bunduOrders: 7, bunduRevenue: 38000, bunduCost: 16000, bunduProfit: 22000, jointOrders: 9, jointRevenue: 45000, jointCost: 19000, jointProfit: 26000, createdAt: '2026-06-07T23:59:00Z' },
  { id: '2', date: '2026-06-06', totalOrders: 31, totalRevenue: 158000, ebubeOrders: 10, ebubeRevenue: 52000, ebubeCost: 22000, ebubeProfit: 30000, bunduOrders: 9, bunduRevenue: 48000, bunduCost: 20000, bunduProfit: 28000, jointOrders: 12, jointRevenue: 58000, jointCost: 25000, jointProfit: 33000, createdAt: '2026-06-06T23:59:00Z' },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}

export function getItemsByCategory(categoryId: string): FoodItem[] {
  return FOOD_ITEMS.filter(i => i.categoryId === categoryId);
}

export function getItemBySlug(slug: string): FoodItem | undefined {
  return FOOD_ITEMS.find(i => i.slug === slug);
}

export function getRelatedItems(itemId: string, categoryId: string, limit = 4): FoodItem[] {
  return FOOD_ITEMS.filter(i => i.categoryId === categoryId && i.id !== itemId).slice(0, limit);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', minimumFractionDigits: 0 }).format(price);
}

export function getOwnerLabel(owner: string): string {
  return owner.charAt(0).toUpperCase() + owner.slice(1);
}

export function getDeliveryLabel(dt: string): string {
  switch (dt) {
    case 'instant': return 'Instant';
    case '24hrs': return '24hrs';
    case '1week': return '1 Week';
    default: return dt;
  }
}

export function getDeliveryColor(dt: string): string {
  switch (dt) {
    case 'instant': return 'bg-green-500/20 text-green-400';
    case '24hrs': return 'bg-blue-500/20 text-blue-400';
    case '1week': return 'bg-amber-500/20 text-amber-400';
    default: return 'bg-gray-500/20 text-gray-400';
  }
}
