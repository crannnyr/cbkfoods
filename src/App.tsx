import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { FOOD_ITEMS, MOCK_ORDERS } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import CartDrawer from '@/components/CartDrawer';
import Toast from '@/components/Toast';
import HomePage from '@/pages/HomePage';
import CategoryPage from '@/pages/CategoryPage';
import ProductPage from '@/pages/ProductPage';
import CartPage from '@/pages/CartPage';
import CheckoutPage from '@/pages/CheckoutPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import OrdersPage from '@/pages/OrdersPage';
import OrderDetailPage from '@/pages/OrderDetailPage';
import ProfilePage from '@/pages/ProfilePage';
import AdsPage from '@/pages/AdsPage';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminItems from '@/pages/admin/AdminItems';
import AdminCategories from '@/pages/admin/AdminCategories';
import AdminBanners from '@/pages/admin/AdminBanners';
import AdminAds from '@/pages/admin/AdminAds';
import AdminOrders from '@/pages/admin/AdminOrders';
import AdminEOD from '@/pages/admin/AdminEOD';
import AdminAnalytics from '@/pages/admin/AdminAnalytics';
import AdminSettings from '@/pages/admin/AdminSettings';
import ProtectedRoute from '@/components/ProtectedRoute';
import AdminRoute from '@/components/AdminRoute';

function AppInitializer({ children }: { children: React.ReactNode }) {
  const setOrders = useStore(s => s.setOrders);
  
  useEffect(() => {
    // Load mock orders on init
    setOrders(MOCK_ORDERS);
    
    // Load food items into window for global access
    (window as any).__FOOD_ITEMS = FOOD_ITEMS;
  }, [setOrders]);
  
  return <>{children}</>;
}

export default function App() {
  return (
    <HashRouter>
      <AppInitializer>
        <div className="min-h-[100dvh] flex flex-col" style={{ background: 'var(--secondary)' }}>
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/ads" element={<AdsPage />} />
              
              {/* Protected routes */}
              <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
              <Route path="/orders" element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
              <Route path="/order/:id" element={<ProtectedRoute><OrderDetailPage /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              
              {/* Admin routes */}
              <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/admin/items" element={<AdminRoute><AdminItems /></AdminRoute>} />
              <Route path="/admin/categories" element={<AdminRoute><AdminCategories /></AdminRoute>} />
              <Route path="/admin/banners" element={<AdminRoute><AdminBanners /></AdminRoute>} />
              <Route path="/admin/ads" element={<AdminRoute><AdminAds /></AdminRoute>} />
              <Route path="/admin/orders" element={<AdminRoute><AdminOrders /></AdminRoute>} />
              <Route path="/admin/eod" element={<AdminRoute><AdminEOD /></AdminRoute>} />
              <Route path="/admin/analytics" element={<AdminRoute><AdminAnalytics /></AdminRoute>} />
              <Route path="/admin/settings" element={<AdminRoute><AdminSettings /></AdminRoute>} />
            </Routes>
          </main>
          <Footer />
          <MobileNav />
          <CartDrawer />
          <Toast />
        </div>
      </AppInitializer>
    </HashRouter>
  );
}
