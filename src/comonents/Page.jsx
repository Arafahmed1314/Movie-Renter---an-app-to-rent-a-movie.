import { useContext } from "react";
import Footer from "../comonents/Footer";
import Header from "../comonents/Header";
import Sidebar from "../comonents/Sidebar";
import MovieList from "../comonents/cine/MovieList";
import { ThemeContext } from "../Context";
export default function Page() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`h-full w-full rounded-md ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
