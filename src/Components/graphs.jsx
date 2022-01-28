import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import configUtils from '../configUtils.js'
import Columns from "../graphs/columns";
import Bars from "../graphs/bars";
import Areas from "../graphs/areas";
import Lines from "../graphs/lines";
import Pies from "../graphs/pies";
// import All from "../graphs/all";
import { useState, useEffect } from "react";

const Graphs = ({ config }) => {
  // const [options, setOptions] = useState(null)

  // useEffect(() => {
  //   if (!config) {
  //     setOptions(null)
  //     return
  //   }

  //   switch (config) {
  //     // is tarah baki case add karta ja

  //     case 'bars':
  //     case 'bar':
  //       setOptions(Bars)
  //       break

  //     case 'columns':
  //     case 'column':
  //       setOptions(Columns)
  //       break

  //     case 'lines':
  //     case 'line':
  //       setOptions(Lines)
  //       break

  //     case 'areas':
  //     case 'area':
  //       setOptions(Areas)
  //       break

  //     case 'pies':
  //     case 'pie':
  //       setOptions(Pies)
  //       break
  //     default:
  //       setOptions(Bars)
  //       break
  //   }
  // }, [config])

  const options = configToOption[config?.toLowerCase()] || Bars;
  console.log(config, options);

  if (config === "all") {
    console.log("working");
    return (
      <div>
        <table>
          <tr>
            <td>
              <div>
                <HighchartsReact highcharts={Highcharts} options={Pies} />
              </div>
            </td>
            <td>
              <div>
                <HighchartsReact highcharts={Highcharts} options={Areas} />
              </div>
            </td>
            <td>
              <div>
                <HighchartsReact highcharts={Highcharts} options={Columns} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <HighchartsReact highcharts={Highcharts} options={Bars} />
              </div>
            </td>
            <td>
              <div>
                <HighchartsReact highcharts={Highcharts} options={Lines} />
              </div>
            </td>
          </tr>
        </table>
        {/* <div className="ml-6 mt-2">
          <HighchartsReact highcharts={Highcharts} options={Pies} />
        </div>
        <div className="ml-6 mt-2">
          <HighchartsReact highcharts={Highcharts} options={Areas} />
        </div>
        <div className="ml-6 mt-2">
          <HighchartsReact highcharts={Highcharts} options={Columns} />
        </div>
        <div className="ml-6 mt-2">
          <HighchartsReact highcharts={Highcharts} options={Bars} />
        </div>
        <div className="ml-6 mt-2">
          <HighchartsReact highcharts={Highcharts} options={Lines} />
        </div> */}
      </div>
    );
  } else
    return (
      <div className="ml-6 mt-2 rounded-l-full">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
};
export default Graphs;

const configToOption = {
  bars: Bars,
  bar: Bars,
  columns: Columns,
  column: Columns,
  lines: Lines,
  line: Lines,
  areas: Areas,
  area: Areas,
  pies: Pies,
  pie: Pies,
  all: "all",
};
