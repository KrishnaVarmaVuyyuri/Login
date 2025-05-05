import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Details = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('loginData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <><div className="container mt-5">
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
    <div className="d-flex justify-content-center ">
      <button onClick={(e)=>{
          e.preventDefault();
          navigate('/');
      }} className="btn btn-secondary mt-5">Logout</button>
    </div>
    
    </>
    
  );
};

export default Details;
