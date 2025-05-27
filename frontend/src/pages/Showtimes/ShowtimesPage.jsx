import { Navbar } from "../../components/Navbar";
import { ShowTimesHeader } from "./components/ShowTimesHeader";
import { ShowTimesCollection } from "./components/ShowTimesCollection";
import { Footer } from "../../components/Footer";

//6.1.2. Hệ thống chuyển đến trang ds phim này và trang nay cũng được gộp bởi các trang thành phần khác
const ShowtimesPage = () => {
  return (
    <>
      <Navbar />
        {/* 6.1.3. Hệ thống sẽ dán component ShowTimesHeader vào ShowtimesPage. Nó là phần header của trang và tại đây người dùng cũng sẽ dùng để chọn thể loại phim*/}
      <ShowTimesHeader />

        {/* 6.1.5. Hệ thống sẽ dán component ShowTimesCollection vào ShowtimesPage. Nó là phần chứa nội dung hiển thị danh sách phim*/}
      <ShowTimesCollection />
      <Footer />
    </>
  );
};

export default ShowtimesPage;
