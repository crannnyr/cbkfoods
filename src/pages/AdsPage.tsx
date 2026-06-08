import { useState } from 'react';
import { Check, Upload, Image, Gift, Palette } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { ADMIN_PAYMENT } from '@/lib/data';
import ImageUploader from '@/components/ImageUploader';
import LoadingSpinner from '@/components/LoadingSpinner';

type AdType = 'image' | 'gif';
type AdDuration = '5s' | '10s';
type AdPeriod = '1month' | '2months';

const PRICING = {
  image: { '5s': 6000, '10s': 12000 },
  gif: { '5s': 10000, '10s': 20000 },
  custom: 5000,
};

export default function AdsPage() {
  const { addToast } = useStore();
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    adType: 'image' as AdType,
    duration: '5s' as AdDuration,
    period: '1month' as AdPeriod,
    customCreation: false,
    linkUrl: '',
  });
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const totalPrice = (PRICING[form.adType][form.duration] * (form.period === '2months' ? 2 : 1)) + (form.customCreation ? PRICING.custom : 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.linkUrl) { addToast('error', 'Please fill in all required fields'); return; }
    if (!proofFile) { addToast('error', 'Please upload payment proof'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    addToast('success', 'Ad submitted for review!');
    setForm({ name: '', email: '', phone: '', adType: 'image', duration: '5s', period: '1month', customCreation: false, linkUrl: '' });
    setProofFile(null);
  };

  const steps = [
    { icon: Check, title: 'Choose Package', desc: 'Select your ad type and duration' },
    { icon: Upload, title: 'Upload Media', desc: 'Upload your ad creative or request custom' },
    { icon: Image, title: 'Submit for Review', desc: 'We review within 24 hours' },
    { icon: Gift, title: 'Go Live!', desc: 'Your ad appears on our platform' },
  ];

  return (
    <div className="pt-20 pb-8 px-4">
      <div className="max-w-[1000px] mx-auto">
        {/* Hero */}
        <div className="text-center py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
            Advertise on <span style={{ color: 'var(--primary)' }}>CBK Foods</span>
          </h1>
          <p className="max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Reach thousands of hungry customers in Anambra. Your brand, our platform.
          </p>
          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>5K+</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Monthly Visitors</p>
            </div>
            <div className="w-px h-10" style={{ background: 'var(--border)' }} />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>85%</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Engagement Rate</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { type: 'image' as AdType, title: 'Image Ad', prices: { '5s': 6000, '10s': 12000 }, desc: 'Static image banner', featured: false },
            { type: 'gif' as AdType, title: 'GIF Ad', prices: { '5s': 10000, '10s': 20000 }, desc: 'Animated GIF banner', featured: true },
            { type: 'custom' as any, title: 'Custom Creation', prices: { '5s': 5000, '10s': 5000 }, desc: 'We design for you', featured: false },
          ].map(plan => (
            <div key={plan.title} className={`card p-6 text-center ${plan.featured ? 'ring-2 ring-[#FF6B35]' : ''}`}>
              {plan.featured && <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--primary)' }}>Most Popular</span>}
              <h3 className="font-bold text-lg mt-2" style={{ color: 'var(--text-primary)' }}>{plan.title}</h3>
              <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{plan.desc}</p>
              {plan.type !== 'custom' ? (
                <>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span style={{ color: 'var(--text-secondary)' }}>5s / month</span>
                      <span className="font-mono font-bold" style={{ color: 'var(--text-primary)' }}>N{plan.prices['5s'].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: 'var(--text-secondary)' }}>10s / month</span>
                      <span className="font-mono font-bold" style={{ color: 'var(--text-primary)' }}>N{plan.prices['10s'].toLocaleString()}</span>
                    </div>
                  </div>
                </>
              ) : (
                <p className="font-mono font-bold text-xl mb-4" style={{ color: 'var(--text-primary)' }}>N5,000</p>
              )}
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>How It Works</h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: 'var(--primary-light)' }}>
                  <step.icon size={20} style={{ color: 'var(--primary)' }} />
                </div>
                <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{step.title}</h4>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Form */}
        <div className="card p-6 md:p-8">
          <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Submit Your Ad</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Name *</label>
                <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  className="input-field" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Email *</label>
                <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  className="input-field" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Phone *</label>
                <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="input-field" placeholder="08012345678" />
              </div>
            </div>

            {/* Ad Type */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Ad Type</label>
              <div className="flex gap-3">
                {(['image', 'gif'] as AdType[]).map(t => (
                  <button key={t} type="button" onClick={() => setForm({ ...form, adType: t })}
                    className="flex-1 py-3 rounded-lg text-sm font-medium capitalize transition-all border-2"
                    style={{
                      borderColor: form.adType === t ? 'var(--primary)' : 'var(--border)',
                      background: form.adType === t ? 'var(--primary-light)' : 'transparent',
                      color: form.adType === t ? 'var(--primary)' : 'var(--text-secondary)',
                    }}>
                    {t === 'gif' ? 'GIF' : t} Ad
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Duration per rotation</label>
              <div className="flex gap-3">
                {(['5s', '10s'] as AdDuration[]).map(d => (
                  <button key={d} type="button" onClick={() => setForm({ ...form, duration: d })}
                    className="flex-1 py-3 rounded-lg text-sm font-medium transition-all border-2"
                    style={{
                      borderColor: form.duration === d ? 'var(--primary)' : 'var(--border)',
                      background: form.duration === d ? 'var(--primary-light)' : 'transparent',
                      color: form.duration === d ? 'var(--primary)' : 'var(--text-secondary)',
                    }}>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Period */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Period</label>
              <div className="flex gap-3">
                {(['1month', '2months'] as AdPeriod[]).map(p => (
                  <button key={p} type="button" onClick={() => setForm({ ...form, period: p })}
                    className="flex-1 py-3 rounded-lg text-sm font-medium transition-all border-2"
                    style={{
                      borderColor: form.period === p ? 'var(--primary)' : 'var(--border)',
                      background: form.period === p ? 'var(--primary-light)' : 'transparent',
                      color: form.period === p ? 'var(--primary)' : 'var(--text-secondary)',
                    }}>
                    {p === '1month' ? '1 Month' : '2 Months'}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Creation Toggle */}
            <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'var(--surface-elevated)' }}>
              <Palette size={18} style={{ color: 'var(--primary)' }} />
              <div className="flex-1">
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Custom Creation (+N5,000)</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Our team designs the ad for you</p>
              </div>
              <button type="button" onClick={() => setForm({ ...form, customCreation: !form.customCreation })}
                className="w-12 h-6 rounded-full transition-all relative"
                style={{ background: form.customCreation ? 'var(--primary)' : 'var(--surface-hover)' }}>
                <div className="w-5 h-5 rounded-full absolute top-0.5 transition-all"
                  style={{ left: form.customCreation ? '26px' : '2px', background: '#fff' }} />
              </button>
            </div>

            {/* Media Upload */}
            {!form.customCreation && (
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Ad Media</label>
                <ImageUploader onImageSelect={() => {}} />
              </div>
            )}

            {/* Payment Proof */}
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Payment Proof *</label>
              <ImageUploader onImageSelect={(file) => { setProofFile(file); }} />
              <div className="mt-2 p-3 rounded-lg text-xs" style={{ background: 'var(--surface-elevated)' }}>
                <p style={{ color: 'var(--text-muted)' }}>Pay to: {ADMIN_PAYMENT.bankName} | {ADMIN_PAYMENT.accountNumber} | {ADMIN_PAYMENT.accountName}</p>
              </div>
            </div>

            {/* Link */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>Ad Link URL *</label>
              <input type="url" required value={form.linkUrl} onChange={e => setForm({ ...form, linkUrl: e.target.value })}
                className="input-field" placeholder="https://your-website.com" />
            </div>

            {/* Total */}
            <div className="card p-4 flex items-center justify-between" style={{ background: 'var(--surface-elevated)' }}>
              <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>Total Price:</span>
              <span className="font-mono text-2xl font-bold" style={{ color: 'var(--primary)' }}>N{totalPrice.toLocaleString()}</span>
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full py-4 flex items-center justify-center gap-2">
              {loading ? <LoadingSpinner size="sm" /> : 'Submit Ad for Review'}
            </button>

            <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
              Accepted formats: JPG, PNG, WEBP (max 2MB) | GIF (max 5MB) | Dimensions: 1200x400px recommended
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
