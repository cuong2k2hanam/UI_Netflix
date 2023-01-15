import "./home.css";
import { LineChart } from "../../chart";
import FeaturedInfo from "../../featuredinfo/FeaturedInfo";
import { userData } from "../../../dummyData";
import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="wapperChart">
        <div className="chart">
          <select name="" id=""></select>
          <LineChart
            title={"User Analytics"}
            datassets={userData}
            dataKey={"User"}
          />
        </div>
      </div>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
