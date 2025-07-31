import Links from "@/components/Admin/AdminProfile/Links";
import Logout from "@/components/Admin/AdminProfile/Logout";
import ResetPassword from "@/components/Admin/AdminProfile/ResetPassword";
import Cards from "@/components/Admin/Overview/Cards";
import PageTitle from "@/components/ui/PageTitle";

export default function AdminProfile() {
    return (
        <div className="space-y-10">
            <PageTitle title="Admin" />
            <Cards />
            <Links />
            <Logout />
            <ResetPassword />
        </div>
    )
}