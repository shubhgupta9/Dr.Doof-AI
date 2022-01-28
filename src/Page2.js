import Header from "./Components/header";
import Footer from "./Components/footer";
import Search from "./Components/search";
import Sql_container from "./Components/sql";
import Output_container from "./Components/output";
import "./sql.css";
import { useState } from "react";

const Page2 = ({ config, setConfig }) => {
  const [search, setSearch] = useState(null);
  // const [config, setConfig] = useState(null)
  return (
    <div>
      <Header />
      <Search setSearch={setSearch} setConfig={setConfig} />
      <Footer className="bottom-0" />
      <Sql_container search={search} />
      <Output_container search={search} config={config} />
    </div>
  );
};

export default Page2;
