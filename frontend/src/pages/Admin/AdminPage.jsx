import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { AdminMovieAddSection } from "./components/AdminMovieAddSection";
import { AdminShowtimesAddSection } from "./components/AdminShowtimesAddSection";
import { AdminShownInModifySection } from "./components/AdminShownInModifySection";
import { AdminDashboardPrimary } from "./components/AdminDashboardPrimary";
import { MovieWiseTicket } from "./components/MovieWiseTicket";

// 12.1.6 Hệ thống điều hướng  đến trang Quản lý phim (AdminPage).
const AdminPage = () => {
    const [selectedShowDate, setSelectedShowDate] = useState("");

    const handleSelectedDate = (e) => {
        setSelectedShowDate(e.target.value);
    };

    return (
        <>
            <Navbar />
            <AdminDashboardPrimary />
            <MovieWiseTicket />
            {/* 12.1.7Hệ thống khởi tạo state và ánh xạ các giá trị form thêm phim (trong AdminMovieAddSection). */}
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
