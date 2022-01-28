import Header from "./Components/header";
import "./sql.css";
import { motion } from "framer-motion";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Columns from "./graphs/columns";
import Bars from "./graphs/bars";
import Areas from "./graphs/areas";
import Lines from "./graphs/lines";
import Pies from "./graphs/pies";

const Page3 = () => {
  return (
    <div>
      <Header />
      <button className="button-position my-1 bg-opacity-40 border-2 bg-black-500 hover:bg-gray-700 text-white font-bold py-1 px-5 ml-12 rounded-full">
        <a href="/page2">Back</a>
      </button>
      <form action="" className="flex flex-col space-y-4">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.9, x: 0 }}
          style={{ overflow: "scroll" }}
          className="self-center textColor font-bold fixed bg-gray-800 opacity-80 shadow-2xl container h-3/4 w-11/12 mt-13 mr-8 mb-8 ml-8 px-4 ring-1 ring-gray-300 rounded-md px-4 py-2"
        >
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
        </motion.div>
      </form>
    </div>
  );
};

export default Page3;
