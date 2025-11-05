import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import BookingForm from "./components/BookingForm";
import CategoryGrid from "./components/CategoryGrid";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero3D />
      <BookingForm />
      <CategoryGrid />

      <footer id="support" className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} StrongWheels • Built for Karnataka</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-700 hover:text-gray-900">Privacy</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Terms</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
