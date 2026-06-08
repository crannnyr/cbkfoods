export type Owner = 'ebube' | 'bundu' | 'joint';
export type DeliveryTime = 'instant' | '24hrs' | '1week';
export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'out_for_delivery' | 'delivered' | 'cancelled';
export type UserRole = 'customer' | 'admin_ebube' | 'admin_bundu' | 'admin_joint';
export type AdType = 'image' | 'gif';
export type AdDuration = '5s' | '10s';
export type AdPeriod = '1month' | '2months';
export type AdStatus = 'pending' | 'approved' | 'rejected' | 'active' | 'expired';

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  displayOrder: number;
  itemCount?: number;
}

export interface FoodItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  costPrice?: number;
  categoryId: string;
  categoryName?: string;
  owner: Owner;
  image: string;
  deliveryTime: DeliveryTime;
  isFeatured: boolean;
  isAvailable: boolean;
  createdAt?: string;
}

export interface CartItem {
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  owner: Owner;
  deliveryTime: DeliveryTime;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  userName: string;
  userPhone: string;
  userAddress: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: OrderStatus;
  paymentStatus: 'pending' | 'paid';
  deliveryNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  owner: Owner;
  specialInstructions?: string;
}

export interface Profile {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phone?: string;
  address?: string;
  role: UserRole;
  avatar?: string;
}

export interface AdSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  adType: AdType;
  duration: AdDuration;
  period: AdPeriod;
  customCreation: boolean;
  mediaUrl?: string;
  paymentProofUrl: string;
  linkUrl: string;
  totalPrice: number;
  status: AdStatus;
  rejectionReason?: string;
  startDate?: string;
  endDate?: string;
  createdAt: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  mediaUrl: string;
  mediaType: 'image' | 'gif';
  targetType: 'category' | 'external';
  targetValue: string;
  displayOrder: number;
  activeStart: string;
  activeEnd: string;
  isActive: boolean;
}

export interface AdminPaymentDetails {
  id: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
  isActive: boolean;
}

export interface SiteSettings {
  deliveryFee: number;
  contactPhone: string;
  contactWhatsApp: string;
  contactEmail: string;
  socialInstagram: string;
  socialFacebook: string;
  socialTwitter: string;
}

export interface DayClosing {
  id: string;
  date: string;
  totalOrders: number;
  totalRevenue: number;
  ebubeOrders: number;
  ebubeRevenue: number;
  ebubeCost: number;
  ebubeProfit: number;
  bunduOrders: number;
  bunduRevenue: number;
  bunduCost: number;
  bunduProfit: number;
  jointOrders: number;
  jointRevenue: number;
  jointCost: number;
  jointProfit: number;
  createdAt: string;
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}
