import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import Header from '../../../components/layout/Header';
import Sidebar from '../../../components/layout/Sidebar';
import ProductCard from '../../../components/dashboard/ProductCard';
import AddProductForm from '../../../components/dashboard/AddProductForm';
import BlockchainViewer from '../../../components/blockchain/BlockchainViewer';
import UpdateStoreForm from '../../../components/dashboard/UpdateStoreForm';
import Button from '../../../components/ui/Button';

export default function StoreDashboard() {
  const { query } = useRouter();
  const storeId = query.storeId;
  const { data: session } = useSession();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('products');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showUpdateStore, setShowUpdateStore] = useState(false);
  
  // Mock data for demonstration
  const store = {
    id: storeId,
    name: 'My Electronics Store',
    description: 'Premium electronics supplier',
    owner: session?.user?.name
  };
  
  const products = [
    { id: '1', name: 'Smartphone', quantity: 50, blockchain: [] },
    { id: '2', name: 'Laptop', quantity: 30, blockchain: [] },
    { id: '3', name: 'Tablet', quantity: 40, blockchain: [] },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">{store.name}</h1>
            <p className="text-gray-600">{store.description}</p>
            
            <div className="flex gap-2 mt-4">
              <Button onClick={() => setShowUpdateStore(true)}>
                {t('update_store')}
              </Button>
            </div>
          </div>
          
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'products'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('products')}
              >
                {t('products')}
              </button>
              <button
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'blockchain'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('blockchain')}
              >
                {t('blockchain_history')}
              </button>
            </nav>
          </div>
          
          {activeTab === 'products' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">{t('products')}</h2>
                <Button onClick={() => setShowAddProduct(true)}>
                  {t('add_product')}
                </Button>
              </div>
              
              {products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onClick={() => console.log('View product', product.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">{t('no_products')}</p>
                  <Button onClick={() => setShowAddProduct(true)}>
                    {t('add_product')}
                  </Button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'blockchain' && (
            <BlockchainViewer />
          )}
          
          {showAddProduct && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-semibold mb-4">{t('add_product')}</h3>
                <AddProductForm 
                  onClose={() => setShowAddProduct(false)}
                  onSave={(productData) => {
                    console.log('Save product', productData);
                    setShowAddProduct(false);
                  }}
                />
              </div>
            </div>
          )}
          
          {showUpdateStore && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 className="text-lg font-semibold mb-4">{t('update_store')}</h3>
                <UpdateStoreForm 
                  store={store}
                  onClose={() => setShowUpdateStore(false)}
                  onSave={(storeData) => {
                    console.log('Update store', storeData);
                    setShowUpdateStore(false);
                  }}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}