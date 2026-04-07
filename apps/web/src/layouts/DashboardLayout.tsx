import { Link, Outlet } from "react-router"

export const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <nav className="w-64 bg-white border-r p-4">
                <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="text-blue-600">
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="text-blue-600">
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
            <main className="flex-1 p-8">
                <Outlet />{" "}
                {/* This is where nested routes (Home/Settings) render */}
            </main>
        </div>
    )
}
