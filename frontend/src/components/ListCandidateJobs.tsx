import React, { useState, useEffect } from 'react';
import { fetchJobsForAllAccounts } from '../http/listcandidatejobs';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import arrowDownIcon from '../resources/Icons/arrowdown.svg';
import location from '../resources/Icons/location.svg';
import parse from 'html-react-parser';
import '../resources/Content.css';

interface Location {
  id: string;
  name: string;
  remote_id: string;
}

interface Status {
  value: string;
  source_value: string;
}

interface Content {
  html: string;
}

interface JobPosting {
  id: string;
  title: string;
  locations: Location[];
  internal: string;
  status: Status;
  job_id: string;
  content: Content;
  external_url: string;
  updated_at: string;
  created_at: string;
  remote_id: string;
  remote_job_id: string;
}

const ListJobsPostingsButton: React.FC = () => {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [visibleJobs, setVisibleJobs] = useState<number>(2);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

  const handleFetchJobs = async () => {
    try {
      const jobsData = await fetchJobsForAllAccounts();
      setJobs(jobsData);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    }
  };

  useEffect(() => {
    handleFetchJobs();
  }, []);

  const truncateText = (text: string | undefined, maxLength: number = 50) => {
    if (!text) return '';
    return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
  };

  const handleShowMore = () => {
    setVisibleJobs((prev) => Math.min(prev + 2, jobs.length));
  };

  const handleShowLess = () => {
    setVisibleJobs((prev) => Math.max(prev - 2, 2));
  };

  const handleJobClick = (job: JobPosting) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="relative z-1">
      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        All Job Postings
      </h2>
      {jobs.length === 0 ? (
        <div className="flex items-center justify-center min-h-[200px] bg-[#E3FFF2] border-2 border-[#05C168] rounded-lg p-4 text-[#A8D5BA]">
          <h2 className="text-xl font-bold">Job postings data is not available</h2>
        </div>
      ) : (
        <TransitionGroup className="sliding-content">
          {jobs.slice(0, visibleJobs).map((job, index) => (
            <CSSTransition key={job.id} timeout={300} classNames="slide">
              <div
                id={`job-card-${index}`}
                className="job-card clickable-job-card"
                onClick={() => handleJobClick(job)}
              >
                <h2 className="job-title">{job.title}</h2>
                <div className="text-[#05C168] text-sm font-medium space-y-1">
                  <div className="flex flex-col">
                    <strong>Job ID:</strong>
                    <span id={`truncated-text-${index}`} className="truncated-text">
                      {truncateText(job.remote_job_id)}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <img src={location} alt="Location Icon" className="w-5 h-5 text-[#05C168] flex-shrink-0" />
                      <strong className="flex-shrink-0">Location:</strong>
                      <span className="font-normal">
                        {truncateText(job.locations.map(location => location.name).join(', '))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
      <div className="flex justify-between mt-4">
        {jobs.length > 0 && visibleJobs < jobs.length && (
          <button className="show-more-button" onClick={handleShowMore}>
            <img src={arrowDownIcon} alt="Show more" className="icon-size" />
          </button>
        )}
        {jobs.length > 0 && visibleJobs > 2 && (
          <button className="show-more-button" onClick={handleShowLess}>
            <img src={arrowDownIcon} alt="Show less" className="icon-size rotate-180" />
          </button>
        )}
      </div>

      {selectedJob && (
        <div className="job-modal">
          <div className="job-modal-content">
            <span className="job-modal-close" onClick={handleCloseModal}>
              Close
            </span>
            <h2 className="job-title">{selectedJob.title}</h2>
            <div className="text-[#05C168] text-sm font-medium space-y-1">
              <div className="flex flex-col">
                <strong>Job ID:</strong>
                <span>{selectedJob.remote_job_id}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <img src={location} alt="Location Icon" className="w-5 h-5 text-[#05C168] flex-shrink-0" />
                  <strong className="flex-shrink-0">Location:</strong>
                  <span className="font-normal">
                    {selectedJob.locations.map(location => location.name).join(', ')}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <strong>Description:</strong>
                <span>
                  {parse(selectedJob.content.html)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListJobsPostingsButton;
