import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { AdminMovieAddSection } from "./components/AdminMovieAddSection";
import { AdminShowtimesAddSection } from "./components/AdminShowtimesAddSection";
import { AdminShownInModifySection } from "./components/AdminShownInModifySection";
import { AdminDashboardPrimary } from "./components/AdminDashboardPrimary";
import { MovieWiseTicket } from "./components/MovieWiseTicket";


const AdminPage = () => {
    // State quản lý ngày chiê ược chọn
    const [selectedShowDate, setSelectedShowDate] = useState("");

    const handleSelectedDate = (e) => {
        setSelectedShowDate(e.target.value);
    };

    return (
        <>
            <Navbar />
            <AdminDashboardPrimary />
            <MovieWiseTicket />
            {/* 12.1.7 Khởi tạo component AdminMovieAddSection/ (trong AdminPage) */}
            <AdminMovieAddSection />
            <AdminShowtimesAddSection
                selectedShowDate={selectedShowDate}
                setSelectedShowDate={setSelectedShowDate}
                handleSelectedDate={handleSelectedDate}
            />
            <AdminShownInModifySection selectedDate={selectedShowDate} />
            <Footer />
        </>
    );
};

export default AdminPage;
