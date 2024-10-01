import React, { useState } from 'react';
import './App.css';

const ProjectsList = () => {
  // Sample data for projects
  const projects = [
    { 
      id: 1, 
      name: 'Pipeline Design and DAG Verfication for Efficient Data Processing', 
      description: 'The Pipeline Design and DAG Verification System is a comprehensive project aimed at ensuring the integrity and reliability of data connections represented as Directed Acyclic Graphs (DAGs). I took on the challenge of implementing robust backend functionalities using FastAPI in Python, allowing for the rigorous validation of these connections through Depth-First Search (DFS) algorithms. This approach ensured that all nodes and connections were validated accurately, significantly reducing the risk of errors during data processing.On the frontend, I utilized ReactFlow to create an intuitive application that enables users to visually manage input nodes and their connections. This feature not only streamlined the parameter collection process but also provided a user-friendly interface for managing complex graph structures. By allowing users to visualize their inputs and connections, the application became a powerful tool for managing data flow effectively.The impact of this project was substantial, as it enhanced system reliability by reducing errors by 58%. This improvement not only optimized performance but also bolstered confidence in the accuracy of data processing. The architecture supports future scalability and maintainability, ensuring that the system can adapt to evolving requirements while maintaining high performance. Overall, this project significantly contributes to improved data integrity and operational efficiency.', 
      link : 'https://main--tangerine-granita-4aa944.netlify.app/',
      readLink : 'https://medium.com/@muskanrathor1702/streamlining-data-processing-building-an-efficient-pipeline-system-with-dag-verification-b94a21b01b3b',
      imageUrl: '/images/dag.png', // Use a relative URL
    },
    { 
      id: 2, 
      name: 'Comprehensive Song Streaming App Analytics: Engagement, Performance, and Popularity KPIs', 
      description: 'The dashboard effectively showcases the conversion rate of users through various parameters, providing critical insights into user engagement and behavior. By analyzing metrics such as user acquisition sources, session duration, and interaction patterns, stakeholders can identify the most effective channels driving user conversions. Engagement metrics, including the frequency of app usage, click-through rates on promotional content, and completion rates for playlists, further illuminate how users interact with the platform. This data allows for a nuanced understanding of user journeys, highlighting touchpoints that contribute to successful conversions. By focusing on these parameters, the dashboard enables teams to optimize marketing strategies, enhance user experience, and ultimately improve conversion rates, fostering increased loyalty and revenue for the streaming app.', 
      link: 'https://app.amplitude.com/analytics/demo/dashboard/0d5z8lsq',
      imageUrl: '/images/kpi.png', 
    },
    { 
      id: 3, 
      name: 'GitBook Review and New Feature Proposals', 
      description: 'GitBook has established itself as a powerful platform for creating and managing documentation, offering users a seamless experience in organizing information. The user-friendly interface, robust collaboration tools, and integration capabilities have made it a preferred choice for teams looking to streamline their documentation processes. However, as users increasingly rely on GitBook for their documentation needs, there is room for improvement to enhance engagement and usability further.To address these needs, we propose two key features: a Glossary and Tooltip System and a Voting System. The Glossary and Tooltip System would provide users with easy access to definitions and explanations of technical terms directly within the documentation. Tooltips appearing on hover would ensure that users can quickly understand complex jargon without losing their place in the text. Meanwhile, a Voting System would enable users to provide feedback on documentation content by upvoting or downvoting sections or pages. This feature would allow authors to identify which areas are most helpful or require improvement, fostering a collaborative atmosphere that prioritizes user needs.', 
      link: 'https://drive.google.com/file/u/1/d/1cJMHgLbuQ1eSHv9pTeYWkmbBYq8kZ9VX/view?usp=drivesdk',
      imageUrl: '/images/gitbook.png', 
    },
    { 
      id: 4, 
      name: 'Flight Status and Notification System', 
      description: 'The Flight Status and Notification System is a comprehensive solution for real-time flight tracking and notifications, built with React.js for the frontend and Python for the backend. This application provides users with instant updates on flight statuses, including delays, cancellations, and gate changes. To manage notifications effectively, RabbitMQ is integrated, enabling reliable message handling and timely delivery based on user preferences.The system architecture employs Docker for containerization, ensuring consistent development and production environments, which simplifies scaling and dependency management. This approach allows for efficient deployment and maintenance across various platforms.', 
      link: 'https://github.com/Smilaayyyy/Flight-Status-and-Notifications-Hack-to-hire-2024-',
      imageUrl: '/images/flight.png', 
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-box" onClick={() => handleProjectClick(project)}>
          <img src={project.imageUrl} alt={project.name} className="project-image" />
          <div className="project-info">
            <h2>{project.name}</h2>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              Try It Here
            </a>
           {/* Show Read It Here link only for Project A */}
           {project.id === 1 && (
              <a href={project.readLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Read It Here
              </a>
            )}
          </div>
        </div>
      ))}


      {selectedProject && (
        <div className="project-details">
          <div className="project-details-content">
            <button className="close-btn" onClick={handleCloseDetails}>Close</button>
            <h2>{selectedProject.name}</h2>
            <img src={selectedProject.imageUrl} alt={selectedProject.name} className="project-image-large" />
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
