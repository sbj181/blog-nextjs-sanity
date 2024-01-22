import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './BlogHeader.module.scss';
import { useDarkMode } from '../context/DarkModeContext';
import Toggle from './Toggle';

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string;
  description?: any[] | string;
  level: 1 | 2;
}) {
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const navigation = [
    { name: 'Home', href: '/', current: router.pathname === '/' },
    { name: 'Blog', href: '/blog', current: router.pathname === '/blog' },
    { name: 'Contact', href: '/contact', current: router.pathname === '/contact' },
  ];

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return <PortableText className="mt-4 mb-4" value={description} />;
    }
    return <div className="mt-4 mb-4">{description}</div>;
  };

  let headerContent;
  switch (level) {
    case 1:
      headerContent = (
        <>
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            <Link href="/" className={router.pathname === '/' ? 'active' : ''}>{title}</Link>
          </h1>
          <h4
            className={`text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            {renderDescription()}
          </h4>
        </>
      );
      break;
    case 2:
      headerContent = (
        <>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </>
      );
      break;
    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      );
  }

  return (
    <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
      {headerContent}
      <nav className="mainnav mt-4 mb-4 flex items-center space-x-6">
        <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
          <span className='hover:underline'>Home</span>
        </Link>
        <Link href="/blog" className={router.pathname === '/blog' ? 'active' : ''}>
          <span className='hover:underline'>Blog</span>
        </Link>
        <Link href="/contact" className={router.pathname === '/contact' ? 'active' : ''}>
          <span className='hover:underline'>Contact</span>
        </Link>
        <Toggle
          enabled={darkMode}
          onToggle={toggleDarkMode}
          label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        />
      </nav>
      
      
    </header>
  );
}
