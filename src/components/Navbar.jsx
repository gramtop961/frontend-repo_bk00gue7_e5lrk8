import { Truck, MapPin, Phone, User, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-yellow-400 flex items-center justify-center shadow-sm">
            <Truck className="h-5 w-5 text-gray-900" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900">StrongWheels</p>
            <p className="text-xs text-gray-500">Heavy Transport • Karnataka</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#book" className="hover:text-gray-900 transition">Book</a>
          <a href="#fleet" className="hover:text-gray-900 transition">Fleet</a>
          <a href="#coverage" className="hover:text-gray-900 transition">Coverage</a>
          <a href="#support" className="hover:text-gray-900 transition">Support</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Use GPS</span>
          </button>
          <a href="tel:+919999999999" className="hidden lg:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
            <Phone className="h-4 w-4" />
            <span className="text-sm">Call</span>
          </a>
          <button className="inline-flex items-center p-2 rounded-md border border-gray-200 hover:bg-gray-50" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
}
