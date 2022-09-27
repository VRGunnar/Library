import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Moment from "moment";

export const LoanList = () => {
  const [loanList, setLoanList] = useState([]);
  const id = useParams().id;
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get(`http://localhost:3001/libraries/${id}/references`).then(
      (res) => {
        setLoanList(res.data);
      }
    );
  }, []);

  let today = Moment().format("YYYY-MM-DD");
  today = new Date(today).getTime();

  const deleteLoan = async (id) => {
    const ref_data = await Axios.get(`http://localhost:3001/reference/${id}`);
    await Axios.post(`http://localhost:3001/create/history_reference`, {
      student_id: ref_data.data.student_id,
      book_id: ref_data.data.book_id,
      library_id: ref_data.data.library_id,
      reference_code: ref_data.data.reference_code,
      due_date: ref_data.data.due_date,
    });
    Axios.delete(`http://localhost:3001/delete/reference/${id}`);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="mt-3">
        <div className="d-flex flex-col justify-content-between">
          <h3>Loans</h3>
          <Link
            className="btn btn-dark text-white p-2 text-black text-decoration-none"
            to={`history`}
          >
            History
          </Link>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-evenly g-3">
            {loanList.length <= 0 && (
              <h5 className="m-0 p-0">
                There are currently no students available.
              </h5>
            )}
            {loanList.map((loan, key) => (
              <div
                key={key}
              >
                {today <= new Date(loan.due_date.slice(0, -14)).getTime() && (
                  <div className="col-lg-3 col-md-6 border border-dark d-flex flex-column text-center justify-content-center p-2 position-relative">
                    <h5 className="mb-3">{loan.reference_code}</h5>
                    <p className="blockquote-footer text-center font-weight-light">
                      {loan.due_date.slice(0, -14)}
                    </p>
                    <button
                      onClick={() => deleteLoan(loan._id)}
                      className="btn btn-primary text-white text-decoration-none"
                    >
                      Return book
                    </button>
                  </div>
                )}
                {today > new Date(loan.due_date.slice(0, -14)).getTime() && (
                  <div className="col-lg-3 col-md-6 border border-danger text-danger d-flex flex-column text-center justify-content-center p-2 position-relative">
                    <h5 className="mb-3">{loan.reference_code}</h5>
                    <p className="blockquote-footer text-center text-danger font-weight-light">
                      {loan.due_date.slice(0, -14)}
                    </p>
                    <p className="text-uppercase">This book is not returned yet! Passed due date!</p>
                    <button
                      onClick={() => deleteLoan(loan._id)}
                      className="btn btn-danger text-white text-decoration-none"
                    >
                      Return book
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
