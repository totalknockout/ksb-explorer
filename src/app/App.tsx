import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';
import compassLogo from '../assets/compass.png';

export default function App() {
  useEffect(() => {
    // Set the favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = compassLogo;
    if (!document.querySelector("link[rel~='icon']")) {
      document.head.appendChild(link);
    }

    // Set the page title
    document.title = 'KSB Explorer by Compass';
  }, []);

  return <RouterProvider router={router} />;
}