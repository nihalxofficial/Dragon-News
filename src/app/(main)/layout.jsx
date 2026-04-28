import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }) => {
    
    return (
        <div className="container mx-auto space-y-4 mb-20">
            <Header />
            <BreakingNews />
            <Navbar />
            {children}
        </div>
    );
};

export default layout;