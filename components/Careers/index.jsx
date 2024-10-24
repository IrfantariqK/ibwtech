import Button from "../ui/Button";

const jobListings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    description: "Join our team to develop high-quality software solutions.",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    description: "Lead the product development process from start to finish.",
  },
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    description: "Create user-friendly interfaces and enhance user experience.",
  },
  {
    id: 4,
    title: "Data Scientist",
    department: "Analytics",
    location: "London, UK",
    description: "Analyze data and provide insights to drive decision-making.",
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
            <div
              key={job.id}
              className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
              role="button"
              aria-label={`Apply for ${job.title}`}
              tabIndex={0} // Allows keyboard navigation
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openApplyDialog(job);
                }
              }}
            >
              <h3 className="mb-2 text-xl font-semibold text-purple-800">
                {job.title}
              </h3>
              <p className="mb-2 text-gray-600">Department: {job.department}</p>
              <p className="mb-2 text-gray-600">Location: {job.location}</p>
              <p className="mb-4 text-gray-500">{job.description}</p>
              <Button onClick={() => openApplyDialog(job)}>Apply Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
