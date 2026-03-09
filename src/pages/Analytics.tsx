import { TrendingUp, TrendingDown, DollarSign, Fuel, Clock, Truck } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const revenueByMonth = [
  { month: "Jul", value: 38000 }, { month: "Aug", value: 42000 }, { month: "Sep", value: 45000 },
  { month: "Oct", value: 48000 }, { month: "Nov", value: 52000 }, { month: "Dec", value: 47000 },
  { month: "Jan", value: 50000 }, { month: "Feb", value: 55000 }, { month: "Mar", value: 62000 },
];

const fuelConsumption = [
  { month: "Jan", diesel: 4200, adblue: 320 }, { month: "Feb", diesel: 3900, adblue: 290 },
  { month: "Mar", diesel: 4500, adblue: 340 }, { month: "Apr", diesel: 4100, adblue: 310 },
  { month: "May", diesel: 3800, adblue: 280 }, { month: "Jun", diesel: 4300, adblue: 330 },
];

const efficiencyData = [
  { week: "W1", onTime: 92, utilization: 78 }, { week: "W2", onTime: 88, utilization: 82 },
  { week: "W3", onTime: 95, utilization: 85 }, { week: "W4", onTime: 91, utilization: 80 },
  { week: "W5", onTime: 94, utilization: 87 }, { week: "W6", onTime: 96, utilization: 84 },
];

const revenueByRoute = [
  { name: "West Coast", value: 35, color: "hsl(var(--primary))" },
  { name: "East Coast", value: 28, color: "#22c55e" },
  { name: "Midwest", value: 22, color: "#f59e0b" },
  { name: "South", value: 15, color: "#8b5cf6" },
];

const kpis = [
  { label: "Revenue/Mile", value: "$2.85", change: "+8.2%", up: true, icon: DollarSign },
  { label: "Avg Fuel Cost", value: "$4,180", change: "-3.5%", up: true, icon: Fuel },
  { label: "On-Time Rate", value: "94.2%", change: "+2.1%", up: true, icon: Clock },
  { label: "Fleet Utilization", value: "84.5%", change: "+5.3%", up: true, icon: Truck },
];

const topRoutes = [
  { route: "LA → Phoenix", revenue: "$18,400", trips: 24, efficiency: 96 },
  { route: "Dallas → Houston", revenue: "$12,800", trips: 18, efficiency: 94 },
  { route: "Chicago → Detroit", revenue: "$15,200", trips: 21, efficiency: 91 },
  { route: "Seattle → Portland", revenue: "$8,600", trips: 15, efficiency: 98 },
  { route: "Miami → Atlanta", revenue: "$14,100", trips: 19, efficiency: 89 },
];

const Analytics = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg sm:text-xl font-bold text-foreground">Analytics</h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Fleet performance insights and trends</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {kpis.map(k => (
          <div key={k.label} className="glass rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <k.icon className="w-4 h-4 text-muted-foreground" />
              <span className={`text-xs font-medium flex items-center gap-0.5 ${k.up ? "text-emerald-500" : "text-red-400"}`}>
                {k.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {k.change}
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold text-foreground">{k.value}</p>
            <p className="text-[11px] text-muted-foreground">{k.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Revenue Trend */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Revenue Trend (9 Months)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueByMonth}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/0.15)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Route */}
        <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Revenue by Region</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={revenueByRoute} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" stroke="none">
                {revenueByRoute.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {revenueByRoute.map(r => (
              <div key={r.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} /><span className="text-muted-foreground">{r.name}</span></div>
                <span className="font-semibold text-foreground">{r.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Fuel Consumption */}
        <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Fuel Consumption (Gallons)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={fuelConsumption}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="diesel" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="adblue" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Efficiency */}
        <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Efficiency Metrics (%)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={efficiencyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} domain={[70, 100]} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Line type="monotone" dataKey="onTime" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} name="On-Time %" />
              <Line type="monotone" dataKey="utilization" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} name="Utilization %" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Routes */}
      <div className="bg-card border border-border rounded-xl p-4 sm:p-5 overflow-x-auto">
        <h3 className="text-sm font-semibold text-foreground mb-4">Top Performing Routes</h3>
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="border-b border-border">
              {["Route", "Revenue", "Trips", "Efficiency"].map(h => (
                <th key={h} className="text-left text-[11px] font-medium text-muted-foreground px-4 py-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {topRoutes.map(r => (
              <tr key={r.route} className="border-b border-border last:border-0">
                <td className="px-4 py-2.5 text-xs font-medium text-foreground">{r.route}</td>
                <td className="px-4 py-2.5 text-xs text-foreground">{r.revenue}</td>
                <td className="px-4 py-2.5 text-xs text-muted-foreground">{r.trips}</td>
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${r.efficiency}%` }} />
                    </div>
                    <span className="text-xs text-foreground">{r.efficiency}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
