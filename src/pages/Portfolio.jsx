import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Portfolio.css';
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


function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(portfolioData.map(item => item.category))];
  const filteredData = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === selectedCategory);

  return (
    <div className="portfolio-page">
      <h1>My Portfolio</h1>
      <div className="category-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredData.map(item => (
          <Link to={`/portfolio/${item.id}`} key={item.id} className="portfolio-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;