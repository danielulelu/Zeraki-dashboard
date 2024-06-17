import { useState, useEffect } from 'react';

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch collections from an API or use hardcoded data
    const fetchCollections = async () => {
      // Replace this with an actual API call
      const data = [
        { id: 1, invoiceNumber: 'INV001', collectionNumber: 'COL001', date: '2023-01-10', status: 'Valid', amount: 50 },
        { id: 2, invoiceNumber: 'INV002', collectionNumber: 'COL002', date: '2023-02-05', status: 'Bounced', amount: 100 }
      ];
      setCollections(data);
    };

    const fetchInvoices = async () => {
      // Replace this with an actual API call
      const data = [
        { id: 1, number: 'INV001', amount: 100, paidAmount: 50, status: 'pending' },
        { id: 2, number: 'INV002', amount: 200, paidAmount: 200, status: 'completed' }
      ];
      setInvoices(data);
    };

    fetchCollections();
    fetchInvoices();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setCollections(collections.map(collection => 
      collection.id === id ? { ...collection, status: newStatus } : collection
    ));

    if (newStatus === 'Bounced') {
      const collection = collections.find(collection => collection.id === id);
      setInvoices(invoices.map(invoice => 
        invoice.number === collection.invoiceNumber ? { ...invoice, status: 'incomplete' } : invoice
      ));
    }
  };

  return (
    <div>
      <h1>Collections</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Collection Number</th>
            <th>Date of Collection</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {collections.map(collection => (
            <tr key={collection.id}>
              <td>{collection.invoiceNumber}</td>
              <td>{collection.collectionNumber}</td>
              <td>{collection.date}</td>
              <td>{collection.status}</td>
              <td>{collection.amount}</td>
              <td>
                <button onClick={() => handleStatusChange(collection.id, 'Valid')}>Mark Valid</button>
                <button onClick={() => handleStatusChange(collection.id, 'Bounced')}>Mark Bounced</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Collections;