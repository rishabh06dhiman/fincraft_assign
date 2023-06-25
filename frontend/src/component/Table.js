import React, { Fragment, useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";
// import ace from "../images/ace.svg";
import ace from "../images/accending.svg";
import dec from "../images/decending.svg";

const API_BASE_URL = "http://localhost:5000";

const Table = () => {
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState("");
  //   const [sortedColumn, setSortedColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("ASC");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/list`);
      console.log(response.data);

      setRows(response.data.rows);
    } catch (error) {
      console.log("Error Fetching data:", error);
    }
  };

  const searchFunction = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/list?keyword=${searchText}`
      );
      setRows(response.data.rows);
    } catch (error) {
      console.log("Error Fetching data:", error);
    }
  };

  const asc_Sort = (column) => {
    if (sortOrder === "ASC") {
      const sorted = [...rows].sort((a, b) => (a[column] > b[column] ? 1 : -1));
      setRows(sorted);
      setSortOrder("DSC");
    }
  };

  const des_Sort = (column) => {
    if (sortOrder === "DSC") {
      const sorted = [...rows].sort((a, b) => (a[column] < b[column] ? 1 : -1));
      setRows(sorted);
      setSortOrder("ASC");
    }
  };

  return (
    // <div>Table</div>
    <Fragment>
      {/* search bar and number of enteries   */}

      <div className="search-bar">
        <div className="entries">
          <form>
            <label>Show</label>
            <select>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
            </select>
            <label>entries</label>
          </form>
        </div>

        <div className="form-box">
          <form onSubmit={searchFunction}>
            <label>Search:</label>
            <input
              type="text"
              title="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </div>
      </div>

      {/* table here */}

      <div className="table">
        <table>
          <thead>
            <tr>
              <th style={{ width: 100 }}>
                Name
                <div className="icons">
                  <img
                    className="ace"
                    src={ace}
                    alt="ascending"
                    onClick={() => asc_Sort("name")}
                  />
                  <img
                    className="dec"
                    src={dec}
                    alt="descending"
                    onClick={() => des_Sort("name")}
                  />
                </div>
              </th>
              <th style={{ width: 100 }}>
                Position
                <div className="icons">
                  <img
                    className="ace"
                    src={ace}
                    alt="ascending "
                    onClick={() => asc_Sort("position")}
                  />
                  <img
                    className="dec"
                    src={dec}
                    alt="descending"
                    onClick={() => des_Sort("position")}
                  />
                </div>
              </th>
              <th style={{ width: 100 }}>
                Office
                <div className="icons">
                  <img
                    className="ace"
                    src={ace}
                    alt="ascending"
                    onClick={() => asc_Sort("office")}
                  />
                  <img
                    className="dec"
                    src={dec}
                    alt="descending"
                    onClick={() => des_Sort("office")}
                  />
                </div>
              </th>
              <th style={{ width: 100 }}>
                Age
                <div className="icons">
                  <img
                    className="ace"
                    src={ace}
                    alt="ascending"
                    onClick={() => asc_Sort("age")}
                  />
                  <img
                    className="dec"
                    src={dec}
                    alt="descending"
                    onClick={() => des_Sort("age")}
                  />
                </div>
              </th>
              <th style={{ width: 100 }}>
                Start date
                <div className="icons">
                  <img
                    className="ace"
                    src={ace}
                    alt="ascending"
                    onClick={() => asc_Sort("start date")}
                  />
                  <img
                    className="dec"
                    src={dec}
                    alt="descending"
                    onClick={() => des_Sort("start date")}
                  />
                </div>
              </th>
              <th style={{ width: 100 }}>
                Salary
                <div className="icons">
                  <img
                    className="ace"
                    src={ace}
                    alt="ascending"
                    onClick={() => asc_Sort("salary")}
                  />
                  <img
                    className="dec"
                    src={dec}
                    alt="descending"
                    onClick={() => des_Sort("salary")}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.office}</td>
                <td>{item.age}</td>
                <td>{item.startdate.substring(0, 10)}</td>
                <td>${item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="pagination">
        <p>Showing 1 to 10 of {rows.length} enteries</p>
        <div>
          <a href="#">Previous</a>

          <a class="active" href="#">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">Next</a>
        </div>
      </div>
    </Fragment>
  );
};

export default Table;
