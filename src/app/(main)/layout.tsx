import Navbar from "@/components/NavBar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>);
}

export default MainLayout;