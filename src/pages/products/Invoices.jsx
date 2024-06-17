import { useState, useEffect } from 'react';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState('all');
  const [form, setForm] = useState({ item: '', amount: '', dueDate: '', paidAmount: '', status: '' });
  const [editingInvoice, setEditingInvoice] = useState(null);

  useEffect(() => {
    // Fetch invoices from an API or use hardcoded data
    const fetchInvoices = async () => {
      // Replace this with an actual API call
      const data = [
        { id: 1, number: 'INV001', item: 'Zeraki Analytics', creationDate: '2023-01-01', dueDate: '2023-01-15', amount: 100, paidAmount: 50, status: 'pending', daysUntilDue: 2 },
        { id: 2, number: 'INV002', item: 'Zeraki Finance', creationDate: '2023-02-01', dueDate: '2023-02-15', amount: 200, paidAmount: 200, status: 'completed', daysUntilDue: -10 }
      ];
      setInvoices(data);
    };

    fetchInvoices();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredInvoices = invoices.filter(invoice => {
    if (filter === 'completed') return invoice.status === 'completed';
    if (filter === 'pending') return invoice.status === 'pending';
    return true;
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingInvoice) {
      // Update existing invoice
      setInvoices(invoices.map(inv => inv.id === editingInvoice.id ? { ...inv, ...form } : inv));
    } else {
      // Create new invoice
      const newInvoice = {
        id: invoices.length + 1,
        number: `INV00${invoices.length + 1}`,
        ...form,
        creationDate: new Date().toISOString().split('T')[0],
        status: 'pending',
        daysUntilDue: Math.ceil((new Date(form.dueDate) - new Date()) / (1000 * 60 * 60 * 24))
      };
      setInvoices([...invoices, newInvoice]);
    }
    setForm({ item: '', amount: '', dueDate: '', paidAmount: '', status: '' });
    setEditingInvoice(null);
  };
 
  const handleEdit = (invoice) => {
    setForm(invoice);
    setEditingInvoice(invoice);
  };

  const handleDelete = (id) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  const handlePayment = (id, amount) => {
    setInvoices(invoices.map(inv => inv.id === id ? { ...inv, paidAmount: inv.paidAmount + amount, status: inv.paidAmount + amount >= inv.amount ? 'completed' : 'pending' } : inv));
  };

  return (
    <div>
      <h1>Invoices</h1>

      <div>
        <label>Filter: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Item</th>
            <th>Creation Date</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Paid Amount</th>
            <th>Balance</th>
            <th>Status</th>
            <th>Days Until Due</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.number}</td>
              <td>{invoice.item}</td>
              <td>{invoice.creationDate}</td>
              <td>{invoice.dueDate}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.paidAmount}</td>
              <td>{invoice.amount - invoice.paidAmount}</td>
              <td>{invoice.status}</td>
              <td>{invoice.daysUntilDue}</td>
              <td>
                <button onClick={() => handleEdit(invoice)}>Edit</button>
                <button onClick={() => handleDelete(invoice.id)}>Delete</button>
                <button onClick={() => handlePayment(invoice.id, 50)}>Add Payment</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{editingInvoice ? 'Edit Invoice' : 'Add Invoice'}</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Item:</label>
          <input type="text" name="item" value={form.item} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" value={form.amount} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date" name="dueDate" value={form.dueDate} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Paid Amount:</label>
          <input type="number" name="paidAmount" value={form.paidAmount} onChange={handleInputChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Invoices;
