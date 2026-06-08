import { create } from 'zustand';
import type { CartItem, Toast, Profile, Order, FoodItem } from '@/types';
import { MOCK_PROFILE } from '@/lib/data';

interface AppState {
  // Auth
  user: Profile | null;
  isAuthLoading: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  setUser: (user: Profile | null) => void;

  // Cart
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: FoodItem, qty?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, qty: number) => void;
  setInstructions: (itemId: string, text: string) => void;
  toggleCart: () => void;
  setCartOpen: (open: boolean) => void;
  clearCart: () => void;
  cartTotal: () => number;
  cartCount: () => number;

  // Orders
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;

  // Toast
  toasts: Toast[];
  addToast: (type: Toast['type'], message: string) => void;
  removeToast: (id: string) => void;
}

export const useStore = create<AppState>((set, get) => ({
  // Auth
  user: null,
  isAuthLoading: false,
  isAdmin: false,

  login: async (email: string, _password: string) => {
    set({ isAuthLoading: true });
    await new Promise(r => setTimeout(r, 800));
    // Mock login - in production this calls Supabase
    const mockUser = { ...MOCK_PROFILE, email };
    set({ user: mockUser, isAdmin: mockUser.role.startsWith('admin'), isAuthLoading: false });
    return true;
  },

  register: async (name: string, email: string, _password: string) => {
    set({ isAuthLoading: true });
    await new Promise(r => setTimeout(r, 800));
    const newUser = { ...MOCK_PROFILE, id: 'new-' + Date.now(), fullName: name, email };
    set({ user: newUser, isAdmin: false, isAuthLoading: false });
    return true;
  },

  logout: () => {
    set({ user: null, isAdmin: false, cartItems: [] });
  },

  setUser: (user) => {
    set({ user, isAdmin: user?.role.startsWith('admin') ?? false });
  },

  // Cart
  cartItems: [],
  isCartOpen: false,

  addToCart: (item, qty = 1) => {
    const { cartItems } = get();
    const existing = cartItems.find(c => c.itemId === item.id);
    if (existing) {
      set({
        cartItems: cartItems.map(c =>
          c.itemId === item.id ? { ...c, quantity: c.quantity + qty } : c
        ),
      });
    } else {
      set({
        cartItems: [...cartItems, {
          itemId: item.id,
          name: item.name,
          price: item.price,
          quantity: qty,
          image: item.image,
          owner: item.owner,
          deliveryTime: item.deliveryTime,
        }],
      });
    }
    get().addToast('success', `Added ${item.name} to cart`);
  },

  removeFromCart: (itemId) => {
    set({ cartItems: get().cartItems.filter(c => c.itemId !== itemId) });
  },

  updateQuantity: (itemId, qty) => {
    if (qty < 1) {
      get().removeFromCart(itemId);
      return;
    }
    set({
      cartItems: get().cartItems.map(c =>
        c.itemId === itemId ? { ...c, quantity: qty } : c
      ),
    });
  },

  setInstructions: (itemId, text) => {
    set({
      cartItems: get().cartItems.map(c =>
        c.itemId === itemId ? { ...c, specialInstructions: text } : c
      ),
    });
  },

  toggleCart: () => set(state => ({ isCartOpen: !state.isCartOpen })),
  setCartOpen: (open) => set({ isCartOpen: open }),
  clearCart: () => set({ cartItems: [] }),

  cartTotal: () => {
    return get().cartItems.reduce((sum, c) => sum + c.price * c.quantity, 0);
  },

  cartCount: () => {
    return get().cartItems.reduce((sum, c) => sum + c.quantity, 0);
  },

  // Orders
  orders: [],
  setOrders: (orders) => set({ orders }),
  addOrder: (order) => set(state => ({ orders: [order, ...state.orders] })),

  // Toast
  toasts: [],
  addToast: (type, message) => {
    const id = Date.now().toString() + Math.random().toString(36).slice(2);
    set(state => ({ toasts: [...state.toasts.slice(-2), { id, type, message }] }));
    setTimeout(() => get().removeToast(id), 4000);
  },
  removeToast: (id) => {
    set(state => ({ toasts: state.toasts.filter(t => t.id !== id) }));
  },
}));
