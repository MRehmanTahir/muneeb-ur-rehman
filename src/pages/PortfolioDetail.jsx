import React from 'react';
import { useParams } from 'react-router-dom';

const portfolioData = [
  {
    id: '1',
    title: 'Elegant Arabic Calligraphy',
    category: 'Calligraphy',
    image: 'https://media.istockphoto.com/id/543465140/photo/oil-painting-of-eiffel-tower-france-art-work.jpg?s=612x612&w=0&k=20&c=jorVhJXuNMwX2lChQAch57r_gFWibTG-TQEtcHtrHKU=',
    description: 'A modern take on classical Arabic script.',
    date: '2024-01-05',
    details: 'This piece reflects deep spiritual connection with art...'
  },
  {
    id: '2',
    title: 'Oil Painting - Sunset',
    category: 'Painting',
    image: 'https://img.freepik.com/premium-vector/creative-art-hand-drawn-illustration_98292-43548.jpg?semt=ais_hybrid&w=740',
    description: 'Sunset view using oil paints.',
    date: '2024-02-15',
    details: 'This canvas work was created using palette knives...'
  },
  
];

function PortfolioDetail() {
  const { id } = useParams();
  const project = portfolioData.find(item => item.id === id);

  if (!project) {
    return <h2>Portfolio item not found.</h2>;
  }

  return (
    <div className="portfolio-detail">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p><strong>Category:</strong> {project.category}</p>
      <p><strong>Date:</strong> {project.date}</p>
      <p>{project.description}</p>
    </div>
  );
}

export default PortfolioDetail;
