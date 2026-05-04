import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }) => {
    
    return (
        <div className="">
            <Header />
            <div className="container mx-auto space-y-4 mt-10 mb-20">

                <BreakingNews />
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default layout;