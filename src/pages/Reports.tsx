import { useState } from "react";
import { FileText, Download, Eye, Calendar, Filter, Plus, BarChart3, DollarSign, Users, Truck } from "lucide-react";

const reports = [
  { id: "RPT-001", name: "Monthly Revenue Report", type: "Financial", date: "Mar 1, 2026", status: "Ready", size: "2.4 MB", icon: DollarSign },
  { id: "RPT-002", name: "Fleet Utilization Summary", type: "Operational", date: "Mar 1, 2026", status: "Ready", size: "1.8 MB", icon: Truck },
  { id: "RPT-003", name: "Driver Performance Review", type: "HR", date: "Feb 28, 2026", status: "Ready", size: "3.1 MB", icon: Users },
  { id: "RPT-004", name: "Fuel Consumption Analysis", type: "Operational", date: "Feb 28, 2026", status: "Ready", size: "1.5 MB", icon: BarChart3 },
  { id: "RPT-005", name: "Q1 Financial Forecast", type: "Financial", date: "Feb 25, 2026", status: "Ready", size: "4.2 MB", icon: DollarSign },
  { id: "RPT-006", name: "Maintenance Cost Report", type: "Operational", date: "Feb 20, 2026", status: "Ready", size: "2.0 MB", icon: Truck },
  { id: "RPT-007", name: "Weekly Delivery Metrics", type: "Operational", date: "Mar 7, 2026", status: "Generating", size: "—", icon: BarChart3 },
  { id: "RPT-008", name: "Driver Hours & Compliance", type: "HR", date: "Mar 5, 2026", status: "Ready", size: "1.9 MB", icon: Users },
];

const typeColor: Record<string, string> = {
  Financial: "bg-emerald-500/15 text-emerald-400",
  Operational: "bg-blue-500/15 text-blue-400",
  HR: "bg-purple-500/15 text-purple-400",
};

const scheduledReports = [
  { name: "Daily Delivery Summary", frequency: "Daily at 6:00 PM", nextRun: "Today", active: true },
  { name: "Weekly Revenue Report", frequency: "Every Monday", nextRun: "Mar 10", active: true },
  { name: "Monthly Fleet Report", frequency: "1st of month", nextRun: "Apr 1", active: true },
  { name: "Quarterly Analysis", frequency: "Every quarter", nextRun: "Apr 1", active: false },
];

const Reports = () => {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Financial", "Operational", "HR"];
  const filtered = filter === "All" ? reports : reports.filter(r => r.type === filter);

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-foreground">Reports</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Generate and manage fleet reports</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors self-start sm:self-auto">
          <Plus className="w-4 h-4" /> Generate Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Total Reports", value: reports.length },
          { label: "This Month", value: reports.filter(r => r.date.includes("Mar")).length },
          { label: "Scheduled", value: scheduledReports.filter(s => s.active).length },
          { label: "Generating", value: reports.filter(r => r.status === "Generating").length },
        ].map(s => (
          <div key={s.label} className="glass rounded-xl p-3 sm:p-4">
            <p className="text-[11px] text-muted-foreground">{s.label}</p>
            <p className="text-base sm:text-lg font-bold text-foreground mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Report List */}
        <div className="lg:col-span-2 space-y-3">
          <div className="flex gap-1.5 flex-wrap">
            {filters.map(f => (
             <button key={f} onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filter === f ? "glass" : "bg-muted border border-muted text-muted-foreground hover:text-foreground"
                }`}
               >{f}</button>
            ))}
          </div>

          <div className="glass rounded-xl overflow-hidden">
            {filtered.map((r, i) => (
              <div key={r.id} className={`flex items-center justify-between px-3 sm:px-4 py-3 hover:bg-muted/30 transition-colors ${i < filtered.length - 1 ? "border-b border-border" : ""}`}>
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <r.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold text-foreground truncate">{r.name}</h4>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${typeColor[r.type]}`}>{r.type}</span>
                      <span className="text-[11px] text-muted-foreground">{r.date}</span>
                      <span className="text-[11px] text-muted-foreground hidden sm:inline">{r.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 shrink-0 ml-2">
                  {r.status === "Generating" ? (
                    <span className="text-[11px] text-amber-400 font-medium">Generating...</span>
                  ) : (
                    <>
                      <button className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                        <Download className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scheduled Reports */}
        <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Scheduled Reports</h3>
          <div className="space-y-3">
            {scheduledReports.map((s) => (
              <div key={s.name} className="p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-xs font-medium text-foreground">{s.name}</h4>
                  <div className={`w-2 h-2 rounded-full ${s.active ? "bg-emerald-500" : "bg-muted-foreground"}`} />
                </div>
                <p className="text-[11px] text-muted-foreground">{s.frequency}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">Next: {s.nextRun}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <h4 className="text-xs font-semibold text-foreground mb-3">Quick Generate</h4>
            <div className="space-y-2">
              {["Daily Summary", "Revenue Report", "Fleet Status"].map(r => (
                <button key={r} className="w-full text-left px-3 py-2 bg-muted/30 rounded-lg text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5" /> {r}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
