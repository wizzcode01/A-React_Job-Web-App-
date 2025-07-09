import { useNavigate, useParams } from "react-router-dom"; 
import { useState } from "react"; 
import { toast } from "react-toastify"; 

const ApplyJobPage = () => {
    const { jobId } = useParams()
    console.log("jobId:", jobId);
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        email:"",
        message: "",
        file: null,
    })
    
    // handle input changes for all fields
    const handleChange = (e) => {
        const { name, value, files } = e.target 
        setForm((prev) => ({ 
            ...prev,
            [name]: files ? files[0] : value,
        }))
    }
    
    //handle form submission
    const handleSubmit = (e) => {
    e.preventDefault()
    //send form data to backend or email service
    toast.success("Application sent!")
    navigate("/jobs")
    }

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* Center the form vertically and horizontally */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        encType="multipart/form-data"
      >
         <h2 className="text-2xl font-bold mb-6 text-center text-[#0077b6]">
          Apply for Job
        </h2>
        {/* Name input */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border rounded w-full py-2 px-3 mb-4"
          value={form.name}
          onChange={handleChange}
          required
        />
          {/* Email input */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border rounded w-full py-2 px-3 mb-4"
          value={form.email}
          onChange={handleChange}
          required
        />
          {/* Message textarea */}
        <textarea
          name="message"
          placeholder="Cover Letter / Message"
          className="border rounded w-full py-2 px-3 mb-4"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
          {/* File upload */}
        <label className="block mb-2 font-semibold">Upload Resume/CV</label>
        <input
          type="file"
          name="file"
          accept=".pdf,.doc,.docx"
          className="mb-4"
          onChange={handleChange}
          required
        />
          {/* Submit button */}
        <button
          type="submit"
          className="bg-[#0077b6] hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Send Application
        </button>
      </form>
    </section>
    )
}
export default ApplyJobPage