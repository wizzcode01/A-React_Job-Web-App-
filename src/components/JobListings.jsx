import JobListing from './JobListing';
import Spinner from './Spinner';
import jobsData from '../jobs.json';

const JobListings = ({ isHome = false}) =>{
  // //  const [jobs, setJobs] = useState([])
  // const [loading, setLoading] = useState(true)

  const jobs = isHome ? jobsData.jobs.slice(0, 3) : jobsData.jobs

  //  useEffect(() => {
  //   const fetchJobs = async () => {
  //     const apiUrl = isHome ? '/api/jobs?_limit=3'
  //     : '/api/jobs'
  //     try {
  //         const res = await fetch(apiUrl)
  //         const data = await res.json()
  //         setJobs(data)
  //     }catch (error){
  //         console.log('Error fetching data', error)
  //     }finally{
  //       setLoading(false)
  //     }
    
  //   } 
  //   fetchJobs()
  //  }, [])
    return (
    <>
   <section className="bg-white px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-4xl font-bold text-[#03045e] mb-6 text-center">
         {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
              <JobListing key={job.id} job={job}/>
              ))}
            </div>
      </div>
    </section>
  </>
  )
} 
export default JobListings