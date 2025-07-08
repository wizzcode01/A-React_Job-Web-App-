import { useState } from "react"
import { FaMapMarker } from "react-icons/fa"
import { Link } from "react-router-dom"

const JobListing = ({job}) => {
const [showFullDescription, setShowFullDescription] = useState(false)
  
let description = job.description

if(!showFullDescription){
    description = description.substring(0, 90) + '...'
}
   return (
      <div className="bg-[#f1f1f8] text-[#03045e] rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                 <div className="text-gray-600 my-2">{job.type}</div>
                 <h3 className="text-xl font-bold">{job.title}</h3>
              </div>

              <div className="mb-5">
                 {description}
              </div>
              <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-[#03045e] hover:underline font-medium mt-2 mb-5 inline-block">
                {showFullDescription ? 'Less' : 'More'}
              </button>

              <h3 className="text-[#03045e] mb-2">{job.salary} / Year</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <FaMapMarker className="inline text-lg text-sm mb-1 mr-1"/>
                  {job.location}
                </div>
                <Link
                  to={`/job/${job.id}`}
                  className="h-[36px] bg-[#0077b6] hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </Link>
              </div>
            </div>
          </div>
   )
}
export default JobListing