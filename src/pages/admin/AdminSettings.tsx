import { useState } from 'react';
import { Save, CreditCard, Globe, Phone, Mail } from 'lucide-react';
import { ADMIN_PAYMENT, SITE_SETTINGS } from '@/lib/data';
import AdminLayout from './AdminLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useStore } from '@/store/useStore';

export default function AdminSettings() {
  const { addToast } = useStore();
  const [loading, setLoading] = useState(false);
  const [paymentForm, setPaymentForm] = useState({ ...ADMIN_PAYMENT });
  const [siteForm, setSiteForm] = useState({ ...SITE_SETTINGS });

  const handlePaymentSave = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    addToast('success', 'Payment details saved');
  };

  const handleSiteSave = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    addToast('success', 'Site settings saved');
  };

  return (
    <AdminLayout title="Settings">
      <div className="max-w-2xl space-y-6">
        {/* Payment Details */}
        <div className="card p-6">
          <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <CreditCard size={18} style={{ color: 'var(--primary)' }} /> Payment Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Account Name</label>
              <input type="text" value={paymentForm.accountName} onChange={e => setPaymentForm({ ...paymentForm, accountName: e.target.value })} className="input-field" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Account Number</label>
                <input type="text" value={paymentForm.accountNumber} onChange={e => setPaymentForm({ ...paymentForm, accountNumber: e.target.value })} className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Bank Code</label>
                <input type="text" value={paymentForm.bankCode} onChange={e => setPaymentForm({ ...paymentForm, bankCode: e.target.value })} className="input-field" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Bank Name</label>
              <input type="text" value={paymentForm.bankName} onChange={e => setPaymentForm({ ...paymentForm, bankName: e.target.value })} className="input-field" />
            </div>
            <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: 'var(--text-secondary)' }}>
              <input type="checkbox" checked={paymentForm.isActive} onChange={e => setPaymentForm({ ...paymentForm, isActive: e.target.checked })} style={{ accentColor: 'var(--primary)' }} />
              Set as active payment method
            </label>
            <button onClick={handlePaymentSave} disabled={loading} className="btn-primary w-full py-3 flex items-center justify-center gap-2">
              {loading ? <LoadingSpinner size="sm" /> : <><Save size={16} /> Save Payment Details</>}
            </button>
          </div>
        </div>

        {/* Site Settings */}
        <div className="card p-6">
          <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
            <Globe size={18} style={{ color: 'var(--primary)' }} /> Site Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Delivery Fee (N)</label>
              <input type="number" value={siteForm.deliveryFee} onChange={e => setSiteForm({ ...siteForm, deliveryFee: Number(e.target.value) })} className="input-field" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Contact Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2" size={16} style={{ color: 'var(--text-muted)' }} />
                  <input type="tel" value={siteForm.contactPhone} onChange={e => setSiteForm({ ...siteForm, contactPhone: e.target.value })} className="input-field pl-10" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>WhatsApp</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2" size={16} style={{ color: 'var(--text-muted)' }} />
                  <input type="tel" value={siteForm.contactWhatsApp} onChange={e => setSiteForm({ ...siteForm, contactWhatsApp: e.target.value })} className="input-field pl-10" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Contact Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2" size={16} style={{ color: 'var(--text-muted)' }} />
                <input type="email" value={siteForm.contactEmail} onChange={e => setSiteForm({ ...siteForm, contactEmail: e.target.value })} className="input-field pl-10" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Instagram</label>
                <input type="text" value={siteForm.socialInstagram} onChange={e => setSiteForm({ ...siteForm, socialInstagram: e.target.value })} className="input-field" placeholder="@handle" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Facebook</label>
                <input type="text" value={siteForm.socialFacebook} onChange={e => setSiteForm({ ...siteForm, socialFacebook: e.target.value })} className="input-field" placeholder="Page name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Twitter/X</label>
                <input type="text" value={siteForm.socialTwitter} onChange={e => setSiteForm({ ...siteForm, socialTwitter: e.target.value })} className="input-field" placeholder="@handle" />
              </div>
            </div>
            <button onClick={handleSiteSave} disabled={loading} className="btn-primary w-full py-3 flex items-center justify-center gap-2">
              {loading ? <LoadingSpinner size="sm" /> : <><Save size={16} /> Save Site Settings</>}
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
