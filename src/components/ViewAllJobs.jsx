import { Link } from "react-router-dom"

const ViewAllJobs = () =>{
    return (
        <section className="m-auto max-w-lg my-10 px-6">
          <Link
            to="/jobs"
            className="block bg-[#0077b6] text-white text-center py-4 px-6 rounded-xl hover:bg-blue-800"
            >
            View All Jobs</Link>
        </section>
    )
}
export default ViewAllJobs