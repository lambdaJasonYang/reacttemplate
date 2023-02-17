/* eslint-disable new-cap */
import React, { useRef, useEffect } from "react";
import uPlot from "uplot";

// import UplotReact from "uplot-react";
import "uplot/dist/uPlot.min.css";

interface IChart {
  options: uPlot.Options;
  data: uPlot.AlignedData;
  // target: HTMLElement;
}

// let opts3series = {...opts, series: [...opts.series,{
//   stroke: "green",
//   fill: "rgba(0,255,0,0.1)",
// },]}

// const Chart = ({ options, data, target }: IChart): JSX.Element => (
//   <UplotReact
//     options={options}
//     data={data}
//     target={target}
//     onCreate={(chart) => {}}
//     onDelete={(chart) => {}}
//   />
// );

const opts = {
  title: "SPY",
  id: "chart1",
  class: "my-chart",
  width: 900,
  height: 600,
  series: [
    {},
    {
      // initial toggled state (optional)
      show: true,

      spanGaps: false,

      // in-legend display
      label: "Value",
      value: (self: any, rawValue: number) => "$" + rawValue.toFixed(4),

      // series style
      stroke: "red",
      width: 1,
      fill: "rgba(255, 0, 0, 0.3)",
      // dash: [10, 5],
    },
  ],
};

const tmpdata: uPlot.AlignedData = [
  [...new Array(100000)].map((_, i) => i),
  [...new Array(100000)].map((_, i) => i % 1000),
];

const Chart = ({ options = opts, data = tmpdata }: IChart): JSX.Element => {
  const myPlotRef = useRef<HTMLDivElement>(null);
  function getSize(): any {
    let mywidth = null;
    let myheight = null;
    if (window.innerWidth < 2000) {
      mywidth = window.innerWidth * 0.73;
    } else if (window.innerWidth >= 1000) {
      mywidth = window.innerWidth - 400;
    }
    if (window.innerHeight < 2000) {
      myheight = window.innerHeight * 0.8;
    } else if (window.innerHeight >= 1000) {
      myheight = window.innerWidth - 200;
    }
    return {
      width: mywidth,
      height: myheight,
    };
  }
  // let myplot = new uPlot(options, data, myPlotRef?.current);
  useEffect(() => {
    const myplot = new uPlot(
      options,
      data,
      myPlotRef.current as HTMLDivElement
    );
    window.addEventListener("resize", (e) => {
      myplot.setSize(getSize());
    });

    return () => {
      myplot.destroy();
    };
  }, [myPlotRef.current]);
  return <div ref={myPlotRef}></div>;
};

export { Chart };
