import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage() {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (credentials) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password
    });

    if (result.error) {
      setError(t('invalid_credentials'));
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <AuthLayout title={t('login')}>
      <LoginForm onSubmit={handleLogin} error={error} />
    </AuthLayout>
  );
}