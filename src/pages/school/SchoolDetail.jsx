import { useState, useEffect } from 'react';
import './school.scss'

const SchoolDetail = ({ school }) => {
  const [invoices, setInvoices] = useState([]);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Simulating fetching invoices and collections for the selected school
    setInvoices([
      { id: 1, amount: 100, date: '2024-01-01' },
      { id: 2, amount: 200, date: '2024-02-01' }
    ]);
    setCollections([
      { id: 1, amount: 50, date: '2024-01-15' },
      { id: 2, amount: 150, date: '2024-02-15' }
    ]);
  }, [school]);

  return (
    <div className="school-detail">
      <h2>{school.name} Details</h2>
      <div className="details-section">
        <h3>Invoices</h3>
        <ul>
          {invoices.map((invoice) => (
            <li key={invoice.id}>
              {invoice.date}: ${invoice.amount}
            </li>
          ))}
        </ul>
      </div>
      <div className="details-section">
        <h3>Collections</h3>
        <ul>
          {collections.map((collection) => (
            <li key={collection.id}>
              {collection.date}: ${collection.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SchoolDetail;
