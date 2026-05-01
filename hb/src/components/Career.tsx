import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE – AI & Data Science</h4>
                <h5>Graphic Era Hill University</h5>
              </div>
              <h3>2023–Present</h3>
            </div>
            <p>
              CGPA: 7.4. Relevant Coursework: Data Science, Big Data, Operating Systems, DBMS. <br />
              Vice Student Coordinator, NSS GEHU. Managed over 30,000 participants at Grafest.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary – CBSE</h4>
                <h5>Venkateshwar International School</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>Scored 78% in Senior Secondary examinations.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Finalist – 10+ National Hackathons</h4>
                <h5>Multiple Institutions</h5>
              </div>
              <h3>2023–Present</h3>
            </div>
            <p>
              Consistently recognized as a top team across more than 10 national-level hackathons,
              building AI systems, SaaS platforms, and full-stack web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Deloitte Australia & Others</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Deloitte Australia – Data Analytics Certification. <br />
              Python Programming Certification with strong understanding of core concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
