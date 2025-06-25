import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => changeLanguage('en')} 
        className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('fr')} 
        className={`px-2 py-1 rounded ${i18n.language === 'fr' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
      >
        FR
      </button>
      <button 
        onClick={() => changeLanguage('ar')} 
        className={`px-2 py-1 rounded ${i18n.language === 'ar' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600'}`}
      >
        AR
      </button>
    </div>
  );
}