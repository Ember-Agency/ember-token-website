import "../styles/Chart.scss";

export const Chart = () => {
  return (
    <div className="chart-container">
      <a
        href="https://launchpad.blockstar.site/swap/"
        target="_blank"
        rel="noreferrer"
        className="ember-buy-btn"
      >
        Buy Ember
      </a>
      <iframe
        src="https://teams.bogged.finance/embeds/chart?address=0x36a8fcb1f8bca02dc74eb34281de3b9143eae8e3&chain=bsc&charttype=candles&theme=bg:000000FF|bg2:1f2021FF|primary:F7931EFF|secondary:00000000|text:ffffffFF|text2:ffffffFF|candlesUp:1ABE7CFF|candlesDown:fb4a25FF|chartLine:018CF0FF&defaultinterval=4h&showchartbutton=false"
        frameBorder="0"
        height="100%"
        width="100%"
        title="Ember Token Chart"
      ></iframe>
    </div>
  );
};
