import { TrendingUp, TrendingDown, Truck, Package, DollarSign, Clock, Users, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 42000, expenses: 28000 },
  { month: "Feb", revenue: 48000, expenses: 31000 },
  { month: "Mar", revenue: 45000, expenses: 27000 },
  { month: "Apr", revenue: 53000, expenses: 33000 },
  { month: "May", revenue: 58000, expenses: 35000 },
  { month: "Jun", revenue: 62000, expenses: 37000 },
];

const fleetStatus = [
  { name: "Active", value: 24, color: "hsl(var(--primary))" },
  { name: "In Maintenance", value: 5, color: "hsl(var(--warning, 45 93% 47%))" },
  { name: "Idle", value: 3, color: "hsl(var(--muted-foreground))" },
];

const deliveryData = [
  { day: "Mon", deliveries: 18 },
  { day: "Tue", deliveries: 24 },
  { day: "Wed", deliveries: 21 },
  { day: "Thu", deliveries: 27 },
  { day: "Fri", deliveries: 32 },
  { day: "Sat", deliveries: 15 },
  { day: "Sun", deliveries: 8 },
];

const recentActivity = [
  { id: 1, event: "Truck #T-1042 completed delivery to Chicago", time: "12 min ago", type: "success" },
  { id: 2, event: "Driver Mike R. started route #RT-892", time: "34 min ago", type: "info" },
  { id: 3, event: "Maintenance alert for Truck #T-1018", time: "1 hr ago", type: "warning" },
  { id: 4, event: "New freight order #FO-2847 received", time: "2 hr ago", type: "info" },
  { id: 5, event: "Truck #T-1025 fuel level low", time: "3 hr ago", type: "warning" },
];

const stats = [
  { label: "Total Revenue", value: "$308,000", change: "+12.5%", up: true, icon: DollarSign },
  { label: "Active Trucks", value: "24", change: "+2", up: true, icon: Truck },
  { label: "Deliveries Today", value: "32", change: "+8%", up: true, icon: Package },
  { label: "Avg Delivery Time", value: "4.2h", change: "-15%", up: true, icon: Clock },
  { label: "Active Drivers", value: "28", change: "+3", up: true, icon: Users },
  { label: "Open Alerts", value: "7", change: "+2", up: false, icon: AlertTriangle },
];

const Dashboard = () => {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-lg sm:text-xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Real-time fleet performance and operations summary</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-4 h-4 text-muted-foreground" />
              <span className={`text-xs font-medium flex items-center gap-0.5 ${stat.up ? "text-emerald-500" : "text-red-400"}`}>
                {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold text-foreground">{stat.value}</p>
            <p className="text-[11px] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Revenue Chart */}
         <div className="lg:col-span-2 glass rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Revenue vs Expenses</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Fleet Status */}
         <div className="glass rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Fleet Status</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={fleetStatus} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" stroke="none">
                {fleetStatus.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {fleetStatus.map((s) => (
              <div key={s.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                  <span className="text-muted-foreground">{s.name}</span>
                </div>
                <span className="font-semibold text-foreground">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Deliveries */}
        <div className="lg:col-span-2 glass rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Weekly Deliveries</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={deliveryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="deliveries" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/0.15)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="glass rounded-xl p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((a) => (
              <div key={a.id} className="flex gap-3">
                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                  a.type === "success" ? "bg-emerald-500" : a.type === "warning" ? "bg-amber-500" : "bg-primary"
                }`} />
                <div>
                  <p className="text-xs text-foreground leading-relaxed">{a.event}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
