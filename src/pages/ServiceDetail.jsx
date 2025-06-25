import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';
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

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find(item => item.id === id);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="service-detail">
      <img src={service.image} alt={service.title} />
      <h2>{service.title}</h2>
      <p><strong>Category:</strong> {service.category}</p>
      <p><strong>Duration:</strong> {service.duration}</p>
      <p><strong>Price:</strong> {service.price}</p>
      <p>{service.description}</p>
    </div>
  );
}

export default ServiceDetail;
