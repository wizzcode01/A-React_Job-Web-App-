import { Link } from "react-router-dom"
import Card from "./Card"
const HomeCards = () => {
    return (
        
    <section className="py-4">
      <div className="container-xl lg:container m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg mb-10">
          <Card bg="bg-gray-100 shadow-lg">
            <h2 className="text-2xl font-bold text-[#03045e]">Find your perfect job</h2>
            <p className="mt-2 mb-4">
              Browse through our extensive list of job openings to find the one that suits you best.
            </p>
            <Link
              href="/jobs"
              className="inline-block bg-[#0077b6] text-white rounded-lg px-4 py-2  hover:bg-blue-800"
            >
              Browse Jobs
            </Link>
          </Card>
          <Card bg='bg-gray-100 shadow-lg'>
            <h2 className="text-2xl font-bold text-[#03045e]">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-[#0077b6]  hover:bg-blue-800 text-white rounded-lg px-4 py-2"
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
    )
}
export default HomeCards