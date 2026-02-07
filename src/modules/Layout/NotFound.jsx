import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-blue-100">
          <AlertCircle className="w-12 h-12 text-blue-500" />
        </div>
        
        <h1 className="mb-2 text-8xl font-bold text-gray-800">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-gray-600 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
        >
          <Home className="w-5 h-5" />
          Return to Home
        </Link>
        
        <p className="mt-6 text-sm text-gray-500">
          Path: <code className="bg-gray-200 px-2 py-1 rounded">{location.pathname}</code>
        </p>
      </div>
    </div>
  );
}