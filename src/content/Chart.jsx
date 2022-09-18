import "../styles/Chart.scss";

export const Chart = () => {
  return (
    <div className="chart-container">
      <a
        href="https://swap.embertoken.io"
        target="_blank"
        rel="noreferrer"
        className="ember-buy-btn"
      >
        Buy Ember
      </a>
      <iframe
        src="https://teams.bogged.finance/embeds/chart?address=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c&chain=bsc&charttype=candles&theme=bg:000000FF|bg2:1f2021FF|primary:F7931EFF|secondary:00000000|text:ffffffFF|text2:ffffffFF|candlesUp:1ABE7CFF|candlesDown:fb4a25FF|chartLine:018CF0FF&defaultinterval=15m&showchartbutton=false"
        frameBorder="0"
        height="100%"
        width="100%"
        title="Ember Token Chart"
      ></iframe>
    </div>
  );
};
