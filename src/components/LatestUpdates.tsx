import React, { useEffect, useState } from 'react';

const LatestUpdates = () => {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  useEffect(() => {
    // Create and append the Juicer script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.juicer.io/embed/sign/embed-code.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Create and append the TradingView widget script
    const tradingViewScript = document.createElement('script');
    tradingViewScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    tradingViewScript.type = "text/javascript";
    tradingViewScript.async = true;
    tradingViewScript.onload = () => setIsWidgetLoaded(true);
    document.head.appendChild(tradingViewScript);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      const existingJuicerScript = document.querySelector('script[src="https://www.juicer.io/embed/sign/embed-code.js"]');
      const existingTradingViewScript = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"]');
      
      if (existingJuicerScript) {
        document.head.removeChild(existingJuicerScript);
      }
      if (existingTradingViewScript) {
        document.head.removeChild(existingTradingViewScript);
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold crypto-gradient bg-clip-text text-transparent">
        Latest Updates
      </h2>
      
      {/* Juicer Embed */}
      <div className="crypto-card">
        <h3 className="text-lg font-semibold mb-4 crypto-gradient bg-clip-text text-transparent">
          Live Social Feed
        </h3>
        <div id="juicer-embed" className="juicer-feed" data-feed-id="sign"></div>
      </div>
      
      {/* Crypto Widget */}
      <div className="crypto-card mt-8">
        <h3 className="text-lg font-semibold mb-4 crypto-gradient bg-clip-text text-transparent">
          Live Crypto Prices
        </h3>
        {!isWidgetLoaded && (
          <div className="text-center py-4 text-muted-foreground">
            Loading crypto prices...
          </div>
        )}
        <div className="tradingview-widget-container">
          <div dangerouslySetInnerHTML={{
            __html: `
              <div class="tradingview-widget-container">
                <div class="tradingview-widget-container__widget"></div>
                <script type="text/javascript">
                new TradingView.MediumWidget({
                  "container_id": "tradingview-widget-container__widget",
                  "symbols": [
                    ["Bitcoin", "BINANCE:BTCUSDT|1D"],
                    ["Ethereum", "BINANCE:ETHUSDT|1D"],
                    ["Solana", "BINANCE:SOLUSDT|1D"],
                    ["Sign", "BINANCE:SIGNUSDT|1D"],
                    ["TON", "BINANCE:TONUSDT|1D"]
                  ],
                  "chartOnly": false,
                  "width": "100%",
                  "height": 400,
                  "locale": "en",
                  "colorTheme": "dark",
                  "autosize": true,
                  "showVolume": true,
                  "hideDateRanges": false,
                  "scalePosition": "right",
                  "scaleMode": "Normal",
                  "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
                  "fontSize": "12",
                  "noTimeScale": false,
                  "valuesTracking": "1",
                  "chartType": "line",
                  "container_id": "tradingview-widget-container__widget"
                });
                </script>
              </div>
            `
          }} />
        </div>

        {/* Additional Mini Ticker */}
        <div className="mt-4">
          <div dangerouslySetInnerHTML={{
            __html: `
              <div class="tradingview-widget-container">
                <div class="tradingview-widget-container__widget"></div>
                <script type="text/javascript">
                new TradingView.MiniWidget({
                  "symbol": "BINANCE:BTCUSDT",
                  "width": "100%",
                  "height": 150,
                  "locale": "en",
                  "dateRange": "1D",
                  "colorTheme": "dark",
                  "trendLineColor": "#37a6ef",
                  "underLineColor": "#5c7080",
                  "isTransparent": true,
                  "autosize": true,
                  "largeChartUrl": ""
                });
                </script>
              </div>
            `
          }} />
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;
