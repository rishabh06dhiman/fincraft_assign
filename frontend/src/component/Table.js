import React, { Fragment, useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

const Table = () => {
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState('');
//   const [sortedColumn, setSortedColumn] = useState(null);
//   const [sortOrder, setSortOrder] = useState(null);

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

  const searchFunction = async (e)=>{
    e.preventDefault();
    try {
        const response = await axios.get(`${API_BASE_URL}/api/v1/list?keyword=${searchText}`);
        setRows(response.data.rows);
    } catch (error) {
        console.log("Error Fetching data:", error);
    }
  }

//   const handleSort = (column) => {
//     let order = 'asc';
//     if (sortedColumn === column && sortOrder === 'asc') {
//       order = 'desc';
//     }
//     const sortedData = row.sort((a, b) => {
//       if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
//       if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
//       return 0;
//     });
//     setRows([...sortedData]);
//     setSortedColumn(column);
//     setSortOrder(order);
//   };

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
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.office}</td>
                <td>{item.age}</td>
                <td>{item.startdate}</td>
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
