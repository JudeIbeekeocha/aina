function TickerTape(){
    return (
        <div class="ticker-tape">

        <div class="tradingview-widget-container item ticker-tape">
          <div class="tradingview-widget-container__widget"></div>
          <div class="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/"
              rel="noopener nofollow"
              target="_blank"
              ><span class="blue-text">Track all markets on TradingView</span></a>
          </div>
          <script
            type="text/javascript"
            src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
            async
          >
                {
                "symbols": [
                {
                    "proName": "FOREXCOM:SPXUSD",
                    "title": "S&P 500 Index"
                },
                {
                    "proName": "FX_IDC:EURUSD",
                    "title": "EUR to USD"
                },
                {
                    "proName": "BITSTAMP:BTCUSD",
                    "title": "Bitcoin"
                },
                {
                    "description": "Apple",
                    "proName": "NASDAQ:AAPL"
                },
                {
                    "description": "Microsoft",
                    "proName": "NASDAQ:MSFT"
                },
                {
                    "description": "Nvidia",
                    "proName": "NASDAQ:NVDA"
                },
                {
                    "description": "J.P Morgan",
                    "proName": "NYSE:JPM"
                }
                ],
                "showSymbolLogo": true,
                "isTransparent": false,
                "displayMode": "adaptive",
                "colorTheme": "dark",
                "locale": "en"
            }
          </script>
        </div>
      </div>
    )
}