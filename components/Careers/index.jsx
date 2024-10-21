import Button from "../ui/Button";

const jobListings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
  },
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
  },
  {
    id: 4,
    title: "Data Scientist",
    department: "Analytics",
    location: "London, UK",
  },
];

export default function Careers({ openApplyDialog }) {
  return (
    <section id="careers" className="py-40 bg-purple-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-5xl font-bold text-center text-purple-800">
          Career Opportunities
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {jobListings.map((job) => (
            <div key={job.id} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-purple-800">
                {job.title}
              </h3>
              <p className="mb-4 text-gray-600">Department: {job.department}</p>
              <p className="mb-4 text-gray-600">Location: {job.location}</p>
              <Button onClick={() => openApplyDialog(job)}>Apply Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
