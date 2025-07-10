import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import './firebase';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ApplyJobPage from './pages/ApplyJobPage';

const App = () => {
  // Add new job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return
};

// Delete job
  const deleteJob = async (id) => {
     const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    });
    return
  }

//update job  
const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`,{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
};

const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>

      {/* Protected routes */}
      <Route element={<PrivateRoute/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} />
        <Route path='/job/:id' element={<JobPage deleteJob={deleteJob}/>}/>
        <Route path='/apply/:jobId' element={<ApplyJobPage/>}/>
      </Route>
       <Route path='*' element={<NotFoundPage/>}/>
       {/* Public routes */}
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/registration' element={<RegistrationPage/>}/>
    </Route>
  )
)
  return (
    <AuthProvider>
       <RouterProvider router={router}/>
    </AuthProvider>
  )
  
}
export default App