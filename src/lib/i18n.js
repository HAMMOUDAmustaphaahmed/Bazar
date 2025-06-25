import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          login: "Login",
          signup: "Sign Up",
          email: "Email",
          password: "Password",
          name: "Name",
          confirm_password: "Confirm Password",
          welcome: "Welcome to Blockchain Supply Chain",
          create_store: "Create Your Store",
          store_name: "Store Name",
          store_description: "Store Description",
          save_store: "Save Store",
          add_product: "Add Product",
          product_name: "Product Name",
          product_description: "Product Description",
          quantity: "Quantity",
          save_product: "Save Product",
          blockchain_history: "Blockchain History",
          update_store: "Update Store",
          logout: "Logout",
          dashboard: "Dashboard",
          my_stores: "My Stores",
          language: "Language",
          english: "English",
          french: "French",
          arabic: "Arabic",
          no_stores: "You haven't created any stores yet",
          create_first_store: "Create Your First Store",
          store_updated: "Store updated successfully",
          product_added: "Product added to blockchain",
        }
      },
      fr: {
        translation: {
          login: "Connexion",
          signup: "S'inscrire",
          email: "E-mail",
          password: "Mot de passe",
          name: "Nom",
          confirm_password: "Confirmer le mot de passe",
          welcome: "Bienvenue dans Blockchain Supply Chain",
          create_store: "Créer votre magasin",
          store_name: "Nom du magasin",
          store_description: "Description du magasin",
          save_store: "Enregistrer le magasin",
          add_product: "Ajouter un produit",
          product_name: "Nom du produit",
          product_description: "Description du produit",
          quantity: "Quantité",
          save_product: "Enregistrer le produit",
          blockchain_history: "Historique de la blockchain",
          update_store: "Mettre à jour le magasin",
          logout: "Déconnexion",
          dashboard: "Tableau de bord",
          my_stores: "Mes magasins",
          language: "Langue",
          english: "Anglais",
          french: "Français",
          arabic: "Arabe",
          no_stores: "Vous n'avez créé aucun magasin pour le moment",
          create_first_store: "Créez votre premier magasin",
          store_updated: "Magasin mis à jour avec succès",
          product_added: "Produit ajouté à la blockchain",
        }
      },
      ar: {
        translation: {
          login: "تسجيل الدخول",
          signup: "التسجيل",
          email: "البريد الإلكتروني",
          password: "كلمة المرور",
          name: "الاسم",
          confirm_password: "تأكيد كلمة المرور",
          welcome: "مرحبًا بك في سلسلة التوريد القائمة على البلوك تشين",
          create_store: "أنشئ متجرك",
          store_name: "اسم المتجر",
          store_description: "وصف المتجر",
          save_store: "حفظ المتجر",
          add_product: "إضافة منتج",
          product_name: "اسم المنتج",
          product_description: "وصف المنتج",
          quantity: "الكمية",
          save_product: "حفظ المنتج",
          blockchain_history: "سجل البلوك تشين",
          update_store: "تحديث المتجر",
          logout: "تسجيل الخروج",
          dashboard: "لوحة التحكم",
          my_stores: "متاجري",
          language: "اللغة",
          english: "الإنجليزية",
          french: "الفرنسية",
          arabic: "العربية",
          no_stores: "لم تقم بإنشاء أي متاجر بعد",
          create_first_store: "أنشئ متجرك الأول",
          store_updated: "تم تحديث المتجر بنجاح",
          product_added: "تمت إضافة المنتج إلى البلوك تشين",
        }
      }
    }
  });

export default i18n;