import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './BlogHeader.module.scss';
import { useDarkMode } from '../context/DarkModeContext';


export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string;
  description?: any[];
  level: 1 | 2;
}) {
  const router = useRouter();
  const { darkMode, toggleDarkMode } = useDarkMode();


  const renderNav = () => (
    <nav>
      <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link href="/blog" className={router.pathname === '/blog' ? 'active' : ''}>
        Blog
      </Link>
      <Link href="/blog" className={router.pathname === '/contact' ? 'active' : ''}>
        Contact
      </Link>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </nav>
  );
  

  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
          <Link href="/" className={router.pathname === '/' ? 'active' : ''}>{title}</Link>
          </h1>
          <h4
            className={`text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4>
          {renderNav()}
        </header>
      );

    case 2:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
          {renderNav()}
        </header>
      );

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      );
  }
}
