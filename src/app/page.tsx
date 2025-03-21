'use client';

// Libraries
import { useLayoutEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { NULL, USER_ROLES } from '@/utils/constants';

const LandingPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!pathname.startsWith('/')) return;
    if (
      !localStorage.getItem('token') ||
      !localStorage.getItem('user') ||
      !localStorage.getItem('role')
    ) {
      router.push('/home');
      return;
    }
    switch (USER_ROLES.ADMIN) {
      case USER_ROLES.ADMIN:
        return router.push('/admin/dashboard');
      default:
        return router.push('/dashboard');
    }
  }, []);

  return NULL;
};

export default LandingPage;
