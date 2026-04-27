import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Navbar />
            {children}
        </div>
    );
};

export default layout;