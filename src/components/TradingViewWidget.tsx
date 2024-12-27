import { useEffect, useRef } from 'react';

export const TradingViewWidget = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any existing scripts first
    const existingScript = document.getElementById('tradingview-widget-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'tradingview-widget-script';
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = 'text/javascript';
    script.async = true;

    // Set the configuration as a text attribute
    script.textContent = JSON.stringify({
      "width": "100%",
      "height": 550,
      "defaultColumn": "overview",
      "defaultScreen": "general",
      "market": "forex",
      "showToolbar": true,
      "colorTheme": "light",
      "locale": "fr"
    });

    // Only append if container exists
    if (container.current) {
      container.current.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden border border-gray-200 shadow-lg">
      <div ref={container} className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright p-2 text-center bg-white">
          <a 
            href="https://fr.tradingview.com/" 
            rel="noopener noreferrer" 
            target="_blank"
            className="text-primary hover:underline text-sm"
          >
            Suivre tous les marchés sur TradingView
          </a>
        </div>
      </div>
    </div>
  );
};