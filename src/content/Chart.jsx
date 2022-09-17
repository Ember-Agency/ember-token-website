import "../styles/Chart.scss";

export const Chart = () => {
  return (
    <div className="chart-container">
      <iframe
        src="https://teams.bogged.finance/embeds/chart?address=0x4033F69f486debe311D804E116a29DD90054C7D0&chain=bsc&charttype=line&theme=bg:03070DFF|bg2:2B3648FF|primary:F00111FF|secondary:F00111FF|text:252526FF|text2:D6D9DDFF|candlesUp:1BC870FF|candlesDown:ff4976ff|chartLine:D4F001FF&defaultinterval=15m&showchartbutton=false"
        frameBorder="0"
        height="100%"
        width="100%"
        title="Ember Token Chart"
      ></iframe>
    </div>
  );
};
