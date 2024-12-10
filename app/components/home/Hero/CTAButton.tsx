'use client';

import { useRouter } from 'next/navigation';

export default function CTAButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/quiz');
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-200 transform hover:scale-105"
      style={{
        ':hover': {
          backgroundColor: 'var(--primary-hover)'
        }
      }}
    >
      立即开始测评
    </button>
  );
} 