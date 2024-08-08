import React, { useState } from 'react';
import CommonSidebar from '../components/CommonSidebar';
import ManageATSContent from './ManageJobs';
import CandidateView from './CandidateView';

const MainPage: React.FC = () => {
  const [showManageATS, setShowManageATS] = useState(true);
  const [showApplyForJobs, setShowApplyForJobs] = useState(false);

  return (
    <div className="flex">
      <CommonSidebar
        showManageATS={showManageATS}
        setShowManageATS={setShowManageATS}
        showApplyForJobs={showApplyForJobs}
        setShowApplyForJobs={setShowApplyForJobs}
      />
      <div className="flex-1 ml-1/7 bg-white">
        {showApplyForJobs ? (
          <div className="p-6 rounded-lg shadow-md">
            <CandidateView/>
          </div>
        ) : showManageATS ? (
          <ManageATSContent />
        ) : (
          <div className="p-6 rounded-lg shadow-md">
            {/* Content for other states */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
