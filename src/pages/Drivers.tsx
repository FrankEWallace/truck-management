import { useState } from "react";
import { Search, Plus, Phone, Mail, Star, MapPin, Clock, Truck, Filter, MoreHorizontal } from "lucide-react";

const drivers = [
  { id: "D-001", name: "Mike Rodriguez", status: "On Route", phone: "+1 (555) 123-4567", email: "mike.r@truckco.com", rating: 4.8, trips: 342, vehicle: "T-1042", license: "CDL-A", experience: "8 years", location: "I-10 W, AZ", avatar: "MR" },
  { id: "D-002", name: "Sarah Kim", status: "Loading", phone: "+1 (555) 234-5678", email: "sarah.k@truckco.com", rating: 4.9, trips: 287, vehicle: "T-1015", license: "CDL-A", experience: "6 years", location: "Dallas, TX", avatar: "SK" },
  { id: "D-003", name: "Tom Bradley", status: "Off Duty", phone: "+1 (555) 345-6789", email: "tom.b@truckco.com", rating: 4.7, trips: 512, vehicle: "Unassigned", license: "CDL-A", experience: "12 years", location: "Chicago, IL", avatar: "TB" },
  { id: "D-004", name: "James Lee", status: "On Route", phone: "+1 (555) 456-7890", email: "james.l@truckco.com", rating: 4.6, trips: 198, vehicle: "T-1025", license: "CDL-B", experience: "4 years", location: "I-5 S, OR", avatar: "JL" },
  { id: "D-005", name: "Dave Wilson", status: "On Route", phone: "+1 (555) 567-8901", email: "dave.w@truckco.com", rating: 4.5, trips: 423, vehicle: "T-1038", license: "CDL-A", experience: "10 years", location: "I-40 E, TN", avatar: "DW" },
  { id: "D-006", name: "Amy Park", status: "Loading", phone: "+1 (555) 678-9012", email: "amy.p@truckco.com", rating: 4.8, trips: 156, vehicle: "T-1033", license: "CDL-A", experience: "3 years", location: "Boston, MA", avatar: "AP" },
  { id: "D-007", name: "Chris Martinez", status: "Off Duty", phone: "+1 (555) 789-0123", email: "chris.m@truckco.com", rating: 4.4, trips: 378, vehicle: "Unassigned", license: "CDL-A", experience: "9 years", location: "Denver, CO", avatar: "CM" },
  { id: "D-008", name: "Lisa Chen", status: "On Route", phone: "+1 (555) 890-1234", email: "lisa.c@truckco.com", rating: 4.9, trips: 264, vehicle: "T-1019", license: "CDL-A", experience: "5 years", location: "I-95 N, VA", avatar: "LC" },
];

const statusColor: Record<string, string> = {
  "On Route": "bg-emerald-500/15 text-emerald-400",
  "Loading": "bg-amber-500/15 text-amber-400",
  "Off Duty": "bg-muted text-muted-foreground",
};

const Drivers = () => {
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const filters = ["All", "On Route", "Loading", "Off Duty"];
  const filtered = filter === "All" ? drivers : drivers.filter(d => d.status === filter);

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-foreground">Drivers</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Manage your fleet drivers and assignments</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors self-start sm:self-auto">
          <Plus className="w-4 h-4" /> Add Driver
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Total Drivers", value: drivers.length },
          { label: "On Route", value: drivers.filter(d => d.status === "On Route").length },
          { label: "Avg Rating", value: (drivers.reduce((a, d) => a + d.rating, 0) / drivers.length).toFixed(1) },
          { label: "Total Trips", value: drivers.reduce((a, d) => a + d.trips, 0).toLocaleString() },
        ].map(s => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-3 sm:p-4">
            <p className="text-[11px] text-muted-foreground">{s.label}</p>
            <p className="text-base sm:text-lg font-bold text-foreground mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex gap-1.5 flex-wrap">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >{f}</button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:flex-none">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input className="pl-9 pr-3 py-1.5 text-xs bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground w-full sm:w-52" placeholder="Search drivers..." />
          </div>
          <div className="flex bg-card border border-border rounded-lg overflow-hidden">
            {(["grid", "list"] as const).map(v => (
              <button key={v} onClick={() => setView(v)}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${view === v ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >{v === "grid" ? "Grid" : "List"}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Driver Cards / List */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {filtered.map((d) => (
            <div key={d.id} className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary">{d.avatar}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{d.name}</h3>
                    <p className="text-[11px] text-muted-foreground">{d.id}</p>
                  </div>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${statusColor[d.status]}`}>{d.status}</span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Truck className="w-3 h-3" /> <span>{d.vehicle}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-3 h-3" /> <span className="truncate">{d.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Star className="w-3 h-3 text-amber-400" /> <span>{d.rating} · {d.trips} trips</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-3 h-3" /> <span>{d.experience}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 flex items-center justify-center gap-1 bg-primary/10 text-primary py-1.5 rounded-lg text-[11px] font-medium hover:bg-primary/20 transition-colors">
                  <Phone className="w-3 h-3" /> Call
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 bg-muted text-muted-foreground py-1.5 rounded-lg text-[11px] font-medium hover:text-foreground transition-colors">
                  <Mail className="w-3 h-3" /> Email
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                {["Driver", "Status", "Vehicle", "Location", "Rating", "Trips", "License", ""].map(h => (
                  <th key={h} className="text-left text-[11px] font-medium text-muted-foreground px-4 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(d => (
                <tr key={d.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-[10px] font-bold text-primary">{d.avatar}</div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">{d.name}</p>
                        <p className="text-[11px] text-muted-foreground">{d.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3"><span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${statusColor[d.status]}`}>{d.status}</span></td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{d.vehicle}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{d.location}</td>
                  <td className="px-4 py-3"><div className="flex items-center gap-1 text-xs"><Star className="w-3 h-3 text-amber-400" />{d.rating}</div></td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{d.trips}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{d.license}</td>
                  <td className="px-4 py-3"><button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="w-4 h-4" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Drivers;
