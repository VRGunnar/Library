import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

export const HistoryLoans = () => {
  const [historyList, setHistoryList] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    Axios.get(`http://localhost:3001/libraries/${id}/loans/history_references`).then(
      (res) => {
        setHistoryList(res.data);
      }
    );
  }, []);

  return (
    <div className="container">
      <div className="mt-3">
        <h3>History of loans</h3>
        <div className="container mt-5">
          <div className="row justify-content-evenly g-3">
            {historyList.length <= 0 && (
              <h5 className="m-0 p-0">
                There is currently no loan history available.
              </h5>
            )}
            {historyList.map((history, key) => (
              <div
                key={key}
                className="col-lg-3 col-md-6 border border-dark d-flex flex-column text-center justify-content-center p-2 position-relative"
              >
                <h5 className="mb-3">{history.reference_code}</h5>
                <p className="blockquote-footer text-center font-weight-light">
                  {history.due_date.slice(0, -14)}
                </p>
                <div className="d-flex flex-column">
                    <p>student: {history.student_id}</p>
                    <p>book: {history.book_id}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
