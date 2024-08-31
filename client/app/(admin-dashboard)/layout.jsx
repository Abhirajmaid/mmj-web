import { Header, NotificationContainer, SideNavbar } from "@/src/components";
import { adminNavLinks } from "@/src/lib/navLinks";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-[80px] min-h-screen max-h-screen w-full overflow-hidden bg-white flex">
        <SideNavbar links={adminNavLinks} />
        <div className="w-[82%] md:p-8 p-4 ">{children}</div>
        <NotificationContainer />
      </div>
    </>
  );
};

export default DashboardLayout;
