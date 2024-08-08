import React from 'react';

import Contact from './Contact'; 
import ListCandidateJobsButton from './ListCandidateJobs'

const CandidateView: React.FC = () => {
   
  
    return (
      <div>
        <ListCandidateJobsButton />
       
        <Contact />
      </div>
    );
  };

export default CandidateView;
