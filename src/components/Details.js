import React, { useEffect, useState } from 'react';

const Details = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('loginData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header text-center bg-info text-white">
          <h2>User Details</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Email:</th>
                <td>{userData?.email}</td>
              </tr>
              <tr>
                <th>Password:</th>
                <td>{userData?.password}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Details;
