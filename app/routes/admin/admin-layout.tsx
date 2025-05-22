import { Outlet } from "react-router"

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            Mobile Sidebar
            <aside className="w-full max-w-[270px] hidden lg:block">
                Sidebar
            </aside>

            <aside>
                <Outlet />
            </aside>
        </div>
    )
}

export default AdminLayout