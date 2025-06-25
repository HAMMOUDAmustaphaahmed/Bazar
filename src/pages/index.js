import { useTranslation } from 'react-i18next';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Button from '../components/ui/Button';

export default function Home() {
  const { t } = useTranslation();
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') return <div>Loading...</div>;

  if (session) {
    router.push('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {t('welcome')}
        </h1>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Button onClick={() => signIn()} className="w-full md:w-auto">
            {t('login')}
          </Button>
          
          <Button 
            onClick={() => router.push('/auth/signup')} 
            variant="secondary"
            className="w-full md:w-auto"
          >
            {t('signup')}
          </Button>
        </div>
      </div>
    </div>
  );
}