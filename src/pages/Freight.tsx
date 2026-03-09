import { useState } from "react";
import { Package, Search, Filter, Plus, ArrowUpDown, MoreHorizontal, MapPin, Calendar, Weight } from "lucide-react";

const shipments = [
  { id: "FO-2847", origin: "Los Angeles, CA", destination: "Phoenix, AZ", status: "In Transit", weight: "12,400 lbs", type: "Dry Van", date: "Mar 8, 2026", driver: "Mike R.", eta: "Mar 9, 2026", progress: 65 },
  { id: "FO-2846", origin: "Dallas, TX", destination: "Houston, TX", status: "Loading", weight: "8,200 lbs", type: "Flatbed", date: "Mar 8, 2026", driver: "Sarah K.", eta: "Mar 8, 2026", progress: 15 },
  { id: "FO-2845", origin: "Chicago, IL", destination: "Detroit, MI", status: "Delivered", weight: "15,800 lbs", type: "Reefer", date: "Mar 7, 2026", driver: "Tom B.", eta: "Mar 8, 2026", progress: 100 },
  { id: "FO-2844", origin: "Seattle, WA", destination: "Portland, OR", status: "In Transit", weight: "9,500 lbs", type: "Dry Van", date: "Mar 7, 2026", driver: "James L.", eta: "Mar 8, 2026", progress: 82 },
  { id: "FO-2843", origin: "Miami, FL", destination: "Atlanta, GA", status: "Pending", weight: "11,200 lbs", type: "Tanker", date: "Mar 9, 2026", driver: "Unassigned", eta: "Mar 10, 2026", progress: 0 },
  { id: "FO-2842", origin: "Denver, CO", destination: "Salt Lake City, UT", status: "Delivered", weight: "7,600 lbs", type: "Flatbed", date: "Mar 6, 2026", driver: "Chris M.", eta: "Mar 7, 2026", progress: 100 },
  { id: "FO-2841", origin: "Nashville, TN", destination: "Memphis, TN", status: "In Transit", weight: "13,100 lbs", type: "Dry Van", date: "Mar 7, 2026", driver: "Dave W.", eta: "Mar 8, 2026", progress: 45 },
  { id: "FO-2840", origin: "Boston, MA", destination: "New York, NY", status: "Loading", weight: "6,900 lbs", type: "Reefer", date: "Mar 8, 2026", driver: "Amy P.", eta: "Mar 8, 2026", progress: 10 },
];

const statusColor: Record<string, string> = {
  "In Transit": "bg-blue-500/15 text-blue-400",
  "Loading": "bg-amber-500/15 text-amber-400",
  "Delivered": "bg-emerald-500/15 text-emerald-400",
  "Pending": "bg-muted text-muted-foreground",
};

const Freight = () => {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "In Transit", "Loading", "Delivered", "Pending"];
  const filtered = filter === "All" ? shipments : shipments.filter(s => s.status === filter);

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-foreground">Freight Management</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Manage and track all freight orders</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors self-start sm:self-auto">
          <Plus className="w-4 h-4" /> New Order
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Total Orders", value: shipments.length, sub: "This week" },
          { label: "In Transit", value: shipments.filter(s => s.status === "In Transit").length, sub: "Active now" },
          { label: "Delivered", value: shipments.filter(s => s.status === "Delivered").length, sub: "Completed" },
          { label: "Total Weight", value: "84,700 lbs", sub: "All shipments" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-3 sm:p-4">
            <p className="text-[11px] text-muted-foreground">{s.label}</p>
            <p className="text-base sm:text-lg font-bold text-foreground mt-1">{s.value}</p>
            <p className="text-[11px] text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex gap-1.5 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input className="pl-9 pr-3 py-1.5 text-xs bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground w-full sm:w-52" placeholder="Search orders..." />
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-border">
              {["Order ID", "Route", "Status", "Weight", "Type", "Driver", "ETA", "Progress", ""].map(h => (
                <th key={h} className="text-left text-[11px] font-medium text-muted-foreground px-4 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <span className="text-xs font-semibold text-foreground">{s.id}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="text-xs text-foreground">{s.origin}</div>
                  <div className="text-[11px] text-muted-foreground">→ {s.destination}</div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${statusColor[s.status]}`}>{s.status}</span>
                </td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{s.weight}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{s.type}</td>
                <td className="px-4 py-3 text-xs text-foreground">{s.driver}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{s.eta}</td>
                <td className="px-4 py-3">
                  <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${s.progress}%` }} />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Freight;
