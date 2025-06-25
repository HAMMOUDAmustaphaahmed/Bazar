import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Header from '../../components/layout/Header';
import Sidebar from '../../components/layout/Sidebar';
import StoreCard from '../../components/dashboard/StoreCard';
import Button from '../../components/ui/Button';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const { t } = useTranslation();
  const router = useRouter();
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) {
    router.push('/');
    return null;
  }

  // In a real app, you would fetch stores from your API
  const mockStores = [
    {
      id: '1',
      name: 'My Electronics Store',
      description: 'Premium electronics supplier',
      productCount: 12,
      owner: session.user.name
    },
    {
      id: '2',
      name: 'Fashion Boutique',
      description: 'Trendy clothing and accessories',
      productCount: 8,
      owner: session.user.name
    }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{t('my_stores')}</h1>
            <Button onClick={() => router.push('/dashboard/new-store')}>
              {t('create_store')}
            </Button>
          </div>
          
          {mockStores.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockStores.map(store => (
                <StoreCard 
                  key={store.id} 
                  store={store} 
                  onClick={() => router.push(`/dashboard/${store.id}`)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">{t('no_stores')}</p>
              <Button onClick={() => router.push('/dashboard/new-store')}>
                {t('create_first_store')}
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}