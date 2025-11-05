import { Truck, Package, Hammer, Wrench } from "lucide-react";

const categories = [
  { key: "jcb", name: "JCB", icon: Hammer, desc: "Site work • Loading • Digging" },
  { key: "excavator", name: "Excavator", icon: Wrench, desc: "Excavation • Trenching • Demolition" },
  { key: "tipper", name: "Tipper", icon: Truck, desc: "Sand • Gravel • Debris" },
  { key: "crane", name: "Crane", icon: Wrench, desc: "Lifting • Erection • Maintenance" },
  { key: "tempo", name: "Tempo", icon: Package, desc: "Goods delivery • Local moves" },
];

export default function CategoryGrid() {
  return (
    <section id="fleet" className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Choose your vehicle</h2>
            <p className="text-gray-600 mt-1">Optimized for construction and logistics workflows</p>
          </div>
          <a href="#book" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-sm text-gray-700">Quick Book</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ key, name, icon: Icon, desc }) => (
            <div key={key} className="group rounded-xl border border-gray-200 p-5 hover:shadow-md transition bg-white">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-yellow-100 text-yellow-700 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-500 text-xs">Live tracking • UPI • GST</span>
                <a href="#book" className="text-sm font-medium text-gray-900 hover:underline">Book →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
