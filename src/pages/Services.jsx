import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
const servicesData = [
  {
    id: '1',
    title: 'Custom Calligraphy',
    category: 'Traditional',
    description: 'Beautiful personalized calligraphy designs.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1k_ezBbWSM_Xw_-edTBH82iVT3aRcg_uuHg&s',
    price: '$50',
    duration: '3 Days'
  },
  {
    id: '2',
    title: 'Acrylic Painting Commission',
    category: 'Traditional',
    description: 'Get a portrait or scene painted on canvas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9xQMvWBNktZqOTgsQqkcCMaSWRCeHlS75A&s',
    price: '$150',
    duration: '7 Days'
  },
  {
    id: '3',
    title: 'Logo Design',
    category: 'Digital',
    description: 'Professional art-based logo for your brand.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnO63rOmfbloH6FEeVBAQEhD1RMOlVgBhcA&s',
    price: '$100',
    duration: '2 Days'
  },
  {
    id: '4',
    title: 'Online Art Workshop',
    category: 'Workshops',
    description: 'Join live sessions and learn my techniques!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNSJBvt-ivHwDmr0qf0sTRm-__3o6K6TnzQ&s',
    price: '$30',
    duration: '1 Day'
  },
  // Same as Services.jsx
];

function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(servicesData.map(s => s.category))];
  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  return (
    <div className="services-page">
      <h1>My Services</h1>
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

      <div className="services-grid">
        {filteredServices.map(service => (
          <Link to={`/services/${service.id}`} key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.category}</p>
            <p className="price">{service.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
