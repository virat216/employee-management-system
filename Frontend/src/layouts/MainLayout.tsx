import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

interface MainLayoutProps {

    children: React.ReactNode;

}

function MainLayout({

    children,

}: MainLayoutProps) {

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <main className="p-8 bg-slate-100 min-h-screen">

                    {children}

                </main>

            </div>

        </div>

    );

}

export default MainLayout;