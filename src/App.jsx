import FilterBar from "./components/FilterBar";
import JobBoard from "./components/JobBoard";

export default function App() {
    return (
        <div className="bg-white min-h-screen p-5 ">
            <FilterBar />
            <JobBoard />
        </div>
    );
}
