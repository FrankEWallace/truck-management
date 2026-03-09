const orders = [
  { id: "USA-142785", from: "Chicago, IL", to: "Denver, CO", status: "In Transit", date: "Mar 05", amount: "$3,240" },
  { id: "USA-142786", from: "Denver, CO", to: "Phoenix, AZ", status: "Pending", date: "Mar 07", amount: "$2,890" },
  { id: "USA-142787", from: "Phoenix, AZ", to: "LA, CA", status: "Delivered", date: "Mar 02", amount: "$4,120" },
  { id: "USA-142788", from: "LA, CA", to: "Portland, OR", status: "In Transit", date: "Mar 06", amount: "$3,670" },
];

const statusStyles: Record<string, string> = {
  "In Transit": "bg-info/15 text-info",
  "Pending": "bg-warning/15 text-warning",
  "Delivered": "bg-success/15 text-success",
};

const FreightOrders = () => {
  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-foreground">Freight Orders</h3>
        <button className="text-xs text-primary font-medium hover:underline">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 font-medium text-muted-foreground">Order ID</th>
              <th className="text-left py-2 font-medium text-muted-foreground">From</th>
              <th className="text-left py-2 font-medium text-muted-foreground">To</th>
              <th className="text-left py-2 font-medium text-muted-foreground">Status</th>
              <th className="text-left py-2 font-medium text-muted-foreground">Date</th>
              <th className="text-right py-2 font-medium text-muted-foreground">Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                <td className="py-2.5 font-semibold text-foreground">{order.id}</td>
                <td className="py-2.5 text-muted-foreground">{order.from}</td>
                <td className="py-2.5 text-muted-foreground">{order.to}</td>
                <td className="py-2.5">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-2.5 text-muted-foreground">{order.date}</td>
                <td className="py-2.5 text-right font-semibold text-foreground">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FreightOrders;
