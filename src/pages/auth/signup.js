import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import AuthLayout from '../../components/auth/AuthLayout';
import SignupForm from '../../components/auth/SignupForm';

export default function SignupPage() {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = async (userData) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => router.push('/auth/login'), 2000);
      } else {
        setError(data.message || t('signup_error'));
      }
    } catch (err) {
      setError(t('network_error'));
    }
  };

  return (
    <AuthLayout title={t('signup')}>
      <SignupForm onSubmit={handleSignup} error={error} success={success} />
    </AuthLayout>
  );
}