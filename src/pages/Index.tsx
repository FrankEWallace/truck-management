import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import TruckDetails from "@/components/TruckDetails";
import StatsBar from "@/components/StatsBar";
import GanttChart from "@/components/GanttChart";
import FreightOrders from "@/components/FreightOrders";
import LoadPlanning from "@/components/LoadPlanning";
import FreightUnits from "@/components/FreightUnits";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-5 space-y-5">
          <TruckDetails />
          <StatsBar />
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 space-y-5">
              <GanttChart />
              <FreightOrders />
            </div>
            <div className="space-y-5">
              <LoadPlanning />
              <FreightUnits />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
