import { useState } from "react";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";
import './invoicelist.scss'

const InvoiceList = ({ invoices }) => {
  const [open, setOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleOpen = (invoice) => {
    setSelectedInvoice(invoice);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedInvoice(null);
  };

  const handleCollectPayment = (invoice) => {
    // implement logic to collect payment
    console.log("Collecting payment for invoice: ", selectedInvoice);
    handleClose();
  };
  return (
    <div className="invoice-list">
      <h2>Upcoming invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <span>{invoice.schoolName}</span>
            <span>{invoice.amountDue}</span>
            <span>{invoice.dueDate}</span>

            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpen(invoice)}
            >
              Collect Payment
            </Button>
          </li>
        ))}
      </ul>
      <Modal open={open} onClose={handleClose}>
        <>
          <Box
            sx={{
              width: 400,
              position: "absolute",
              top: "50%",
              left: "50%",
              bgColor: "background.paper",
              boxShadow: 24,
              p: 4,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Collect Payment
            </Typography>
            <Typography sx={{ mt: 2 }}>
              School: {selectedInvoice?.schoolName}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Amount Due: {selectedInvoice?.amountDue}
            </Typography>
            <TextField
              required
              id="amount"
              label="Amount"
              name="amount"
              autoComplete="amount"
              sx={{ mt: 1 }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCollectPayment}
          >
            Confirm Payment
          </Button>
        </>
      </Modal>
    </div>
  );
};
export default InvoiceList;
