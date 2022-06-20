import React, { useEffect, useState } from "react";
import "./App.css";
import Profiles from "./Profiles";
import load from "./Users";
import Paging from "./Paging";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  console.log(users, currentPage, totalPages);

  useEffect(() => {
    load(currentPage).then((result) => {
      setUsers(result.data);
      setCurrentPage(result.page)
      setTotalPage(result.total_pages)
    });
  }, [currentPage]);

  return (
    <div className="App">
      <Paging currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      <Profiles users={users} />
    </div>
  );
}

export default App;
