import TruckDetails from "@/components/TruckDetails";
import StatsBar from "@/components/StatsBar";
import GanttChart from "@/components/GanttChart";
import FreightOrders from "@/components/FreightOrders";
import LoadPlanning from "@/components/LoadPlanning";
import FreightUnits from "@/components/FreightUnits";

const Index = () => {
  return (
    <div className="space-y-5">
      <TruckDetails />
      <StatsBar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <GanttChart />
          <FreightOrders />
        </div>
        <div className="space-y-5">
          <LoadPlanning />
          <FreightUnits />
        </div>
      </div>
    </div>
  );
};

export default Index;
