import { useMemo, useState } from "react";
import { MapPin, Clock, Truck, Calendar, Calculator } from "lucide-react";

const VEHICLE_PRICING = {
  jcb: { label: "JCB", base: 350, perKm: 42, loadFactor: 90 },
  excavator: { label: "Excavator", base: 420, perKm: 48, loadFactor: 110 },
  tipper: { label: "Tipper", base: 300, perKm: 32, loadFactor: 70 },
  crane: { label: "Crane", base: 600, perKm: 55, loadFactor: 150 },
  tempo: { label: "Tempo", base: 180, perKm: 20, loadFactor: 40 },
};

export default function BookingForm() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [vehicle, setVehicle] = useState("tempo");
  const [distance, setDistance] = useState(10);
  const [load, setLoad] = useState(1); // tonnes
  const [mode, setMode] = useState("immediate");
  const [scheduleAt, setScheduleAt] = useState("");

  const estimate = useMemo(() => {
    const conf = VEHICLE_PRICING[vehicle];
    const base = conf.base;
    const km = distance * conf.perKm;
    const loadCost = load * conf.loadFactor;
    const modeMult = mode === "immediate" ? 1.0 : 0.95; // small discount for scheduled
    const total = Math.max(150, Math.round((base + km + loadCost) * modeMult));
    return { total, breakdown: { base, km: Math.round(km), load: Math.round(loadCost), modeMult } };
  }, [vehicle, distance, load, mode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Booking requested\nVehicle: ${VEHICLE_PRICING[vehicle].label}\nPickup: ${pickup || "(GPS)"}\nDrop: ${drop || "TBD"}\nDistance: ${distance} km\nLoad: ${load} t\nMode: ${mode}${mode === "scheduled" ? ` @ ${scheduleAt}` : ""}\nEstimated Fare: ₹${estimate.total}`;
    alert(msg);
  };

  return (
    <section id="book" className="py-12 sm:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Quick booking</h2>
          <p className="text-gray-600 mt-1">Get an instant fare estimate and request a driver</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><MapPin className="h-4 w-4" /> Pickup</label>
                <input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="District / Landmark"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div className="relative">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><MapPin className="h-4 w-4" /> Drop</label>
                <input value={drop} onChange={(e) => setDrop(e.target.value)} placeholder="District / Landmark"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Truck className="h-4 w-4" /> Vehicle type</label>
                <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  {Object.entries(VEHICLE_PRICING).map(([key, v]) => (
                    <option key={key} value={key}>{v.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Load (tonnes)</label>
                <input type="number" min={0} step={0.5} value={load} onChange={(e) => setLoad(Number(e.target.value))}
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Calculator className="h-4 w-4" /> Distance (km)</label>
                <input type="number" min={1} step={1} value={distance} onChange={(e) => setDistance(Number(e.target.value))}
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2"><Clock className="h-4 w-4" /> Time</label>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <button type="button" onClick={() => setMode("immediate")} className={`px-3 py-2 rounded-md border ${mode === "immediate" ? "bg-yellow-400 border-yellow-400 text-gray-900" : "border-gray-200 text-gray-700 hover:bg-gray-50"}`}>Immediate</button>
                  <button type="button" onClick={() => setMode("scheduled")} className={`px-3 py-2 rounded-md border ${mode === "scheduled" ? "bg-yellow-400 border-yellow-400 text-gray-900" : "border-gray-200 text-gray-700 hover:bg-gray-50"}`}>Schedule</button>
                </div>
                {mode === "scheduled" && (
                  <div className="mt-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-700" />
                    <input type="datetime-local" value={scheduleAt} onChange={(e) => setScheduleAt(e.target.value)} className="w-full rounded-md border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-lg bg-white border border-gray-200 p-4">
              <div>
                <p className="text-sm text-gray-600">Fare estimate</p>
                <p className="text-2xl font-bold text-gray-900">₹{estimate.total}
                  <span className="ml-2 text-sm font-medium text-gray-500">(est.)</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Base ₹{estimate.breakdown.base} + Distance ₹{estimate.breakdown.km} + Load ₹{estimate.breakdown.load}
                </p>
              </div>
              <button type="submit" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800">
                Request Booking
              </button>
            </div>
          </div>

          <aside className="lg:col-span-1 space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <h4 className="font-semibold text-gray-900">Why StrongWheels?</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Trusted operators across all districts</li>
                <li>Live GPS tracking & status updates</li>
                <li>UPI payments with instant receipts</li>
                <li>Kannada + English support</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <h4 className="font-semibold text-gray-900">Coverage</h4>
              <p className="mt-2 text-sm text-gray-600">Full Karnataka with district-wise dispatch. Rural-friendly with offline support at job sites.</p>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}
