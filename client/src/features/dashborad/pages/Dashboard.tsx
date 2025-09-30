import AppBarChart from "../components/AppBarChart";
import AppLineChart from "../components/AppLineChart";
import AppPieChart from "../components/AppPieChart";
import CardList from "../components/CardList";
import TodoList from "../components/TodoList";

const Dashboard = () => {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[900px] lg:grid-rows-2 p-4 items-center md:items-stretch">
      <div className="bg-secondary p-4 rounded-lg lg:col-span-2  2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-secondary px-2 py-4 rounded-lg">
        <CardList title="Lastest Transactions" />
      </div>
      <div className="bg-secondary p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-secondary p-4 rounded-lg">
        <TodoList />
      </div>
      <div className="bg-secondary p-4 rounded-lg lg:col-span-2 xl:col-span-2">
        <AppLineChart />
      </div>
      <div className="bg-secondary px-1 py-4 rounded-lg">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
};

export default Dashboard;
