import { useEffect } from 'react';

const ReactScan = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost' && window.location.port === '3000') {
      const script = document.createElement('script');
      script.src = '//unpkg.com/react-scan/dist/auto.global.js';
      script.crossOrigin = 'anonymous';
      script.async = true;

      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null;
};

export default ReactScan;
