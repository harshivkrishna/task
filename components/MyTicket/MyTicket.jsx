import React, { useState } from "react";
import "./MyTicket.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const MyTicket = () => {
  const rows = [
    { ticketNo: "1234", subject: "Login issue", status: "In Progress", supportBy: "Tech support", date: "13/08/21", rate: "★★★★★" },
    { ticketNo: "1124", subject: "New ticket issue", status: "On hold", supportBy: "Operation Team", date: "14/08/21", rate: "☆☆☆☆☆" },
    { ticketNo: "1224", subject: "New request", status: "Closed", supportBy: "Tech support", date: "13/08/21", rate: "★★★★☆" },
    { ticketNo: "1244", subject: "Ticket submission", status: "In Progress", supportBy: "Operation Team", date: "14/08/21", rate: "☆☆☆☆☆" },
    { ticketNo: "1114", subject: "Login issue", status: "In Progress", supportBy: "Tech support", date: "3/08/21", rate: "☆☆☆☆☆" },
    { ticketNo: "1254", subject: "Server issue", status: "On hold", supportBy: "Tech support", date: "15/08/21", rate: "☆☆☆☆☆" },
    { ticketNo: "1264", subject: "New request", status: "Closed", supportBy: "Operation Team", date: "16/08/21", rate: "★★★★☆" },
    { ticketNo: "1454", subject: "Server issue", status: "On hold", supportBy: "Tech support", date: "15/08/21", rate: "☆☆☆☆☆" },
    { ticketNo: "1154", subject: "Server issue", status: "On hold", supportBy: "Tech support", date: "15/08/21", rate: "☆☆☆☆☆" },
    { ticketNo: "1211", subject: "Server issue", status: "On hold", supportBy: "Tech support", date: "15/08/21", rate: "☆☆☆☆☆" },
    { ticketNo: "1994", subject: "Server issue", status: "On hold", supportBy: "Tech support", date: "15/08/21", rate: "☆☆☆☆☆" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); 
  const rowsPerPage = 5;

  const filteredRows = rows.filter((row) =>
    row.ticketNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredRows.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };
  
  const [popupData, setPopupData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTicketClick = (ticket) => {
    setPopupData(ticket); 
    setIsPopupOpen(true); 
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupData(null);
    document.body.style.overflow = "visible";
  };


  return (
    <div>
      <Navbar></Navbar>
      <div className="myticket-section">
        <Sidebar value={3}></Sidebar>
        <div className="myticket-container">
          <h1>List of Tickets</h1>
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Find Ticket"
              value={searchQuery}
              onChange={handleSearch} 
            />
            <i className="bx bx-search"></i>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Ticket No.</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Support by</th>
                  <th>Date</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((row, index) => (
                  <tr key={index}>
                    <td>
                    <a className="ticketNumber" onClick={() => handleTicketClick(row)}>
                        {row.ticketNo}
                      </a>
                    </td>
                    <td>{row.subject}</td>
                    <td>
                      <span
                        className={`status ${row.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td>{row.supportBy}</td>
                    <td>{row.date}</td>
                    <td>
                      <span className="stars">{row.rate}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          {isPopupOpen && (
            <div className="popup-overlay">
              <div className="popup-content">
                <h2>Ticket Details</h2>
                <p><strong>Ticket No:</strong> {popupData.ticketNo}</p>
                <p><strong>Subject:</strong> {popupData.subject}</p>
                <p><strong>Status:</strong> {popupData.status}</p>
                <p><strong>Support By:</strong> {popupData.supportBy}</p>
                <p><strong>Date:</strong> {popupData.date}</p>
                <p><strong>Rate:</strong> {popupData.rate}</p>
                <button onClick={closePopup}>Close</button>
              </div>
            </div>
          )}
            <div className="pagination">
              <button onClick={handlePrev} disabled={currentPage === 1}>
                &laquo;
              </button>
              <span>
                {indexOfFirstRow + 1} to{" "}
                {Math.min(indexOfLastRow, filteredRows.length)} of {" "}
                {filteredRows.length} entries
              </span>
              <button onClick={handleNext} disabled={currentPage === totalPages}>
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTicket;
