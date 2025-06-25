import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { data: session } = useSession();
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          <div className="ml-4">
            <h1 className="text-xl font-bold text-gray-900">Blockchain Supply Chain</h1>
            {session && (
              <p className="text-sm text-gray-500">
                {t('welcome')}, {session.user.name}
              </p>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          
          {session && (
            <button
              onClick={() => signOut()}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {t('logout')}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}