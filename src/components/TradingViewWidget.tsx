import { useEffect } from 'react';

export const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "550",
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "forex",
      showToolbar: true,
      colorTheme: "light",
      locale: "fr"
    });

    const container = document.querySelector('.tradingview-widget-container__widget');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a 
          href="https://fr.tradingview.com/" 
          rel="noopener nofollow" 
          target="_blank"
          className="text-primary hover:underline"
        >
          Suivre tous les marchés sur TradingView
        </a>
      </div>
    </div>
  );
};