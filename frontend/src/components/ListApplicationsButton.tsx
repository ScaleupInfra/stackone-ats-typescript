import React, { useState, useEffect } from "react";
import { listApplications } from "../http/listApplications";
import { useNavigate } from "react-router-dom";
import "../resources/Content.css";

interface Application {
  id: string;
  job_id: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ListApplicationsButtonProps {
  provider: string;
  originOwnerId: string;
}

const ListApplicationsButton: React.FC<ListApplicationsButtonProps> = ({ provider, originOwnerId }) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [visibleApplications, setVisibleApplications] = useState<number>(4);
  const navigate = useNavigate();

  const fetchApplications = async () => {
    try {
      const applicationsData = await listApplications(provider, originOwnerId);
      setApplications(applicationsData);
    } catch (err) {
      console.error("Error fetching applications:", err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [provider, originOwnerId]);

  const showMore = () => {
    setVisibleApplications((prev) => Math.min(prev + 2, applications.length));
  };

  const showLess = () => {
    setVisibleApplications(4);
  };

  const viewApplicationClick = (applicationId: string) => {
    navigate(`/view-application/${applicationId}`);
  };

  return (
    <div className="relative z-1">
      <h2 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
        All Applications
      </h2>
      {applications.length === 0 ? (
        <div className="flex items-center justify-center min-h-[200px] bg-[#E3FFF2] border-2 border-[#05C168] rounded-lg p-4 text-[#A8D5BA]">
          <h2 className="text-xl font-bold">No applications data is available</h2>
        </div>
      ) : (
        <div className="applications-list">
          {applications.slice(0, visibleApplications).map((app) => (
            <div key={app.id} className="application-card">
              <h3 className="application-title">Application ID: {app.id}</h3>
              <p>Status: {app.status}</p>
              <button
                className="bg-[#E3FFF2] text-[#05C168] border-2 border-[#05C168] px-4 py-2 rounded-md mt-4"
                onClick={() => viewApplicationClick(app.id)}
              >
                View Application
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            {applications.length > 0 && visibleApplications < applications.length && (
              <button className="show-more-button" onClick={showMore}>+ See More</button>
            )}
            {applications.length > 0 && visibleApplications > 4 && (
              <button className="show-more-button" onClick={showLess}>See Less</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListApplicationsButton;
