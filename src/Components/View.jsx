import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { DeleteEmployee } from '../redux/slice';



function View() {

    const data = useSelector((state) => state.employee)
    const dispatch = useDispatch()
    const navigate = useNavigate()

  return (
    <div>
        <h2 className='m-3 text-primary'>Contact details</h2>


       

        <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Number</th>

              
                <th scope="col">Activity</th>
              </tr>
            </thead>
         
       
      
        
        <tbody>
            {
        data.length > 0 ? data.map((item) => (
                
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.names}</td>
                    <td>{item.address}</td>
                    <td>{item.number}</td>
                  
                    <td>
                    <MDBBtn className='btn btn-primary m-2'onClick={() => navigate(`/edit/${item.id}`)}>Edit</MDBBtn> 
                      <MDBBtn
                        
                        onClick={() => dispatch(DeleteEmployee(item.id)) }
                        className="btn btn-danger m-2"
                      >
                        Delete
                      </MDBBtn>
                    </td>
                  </tr>
                ))
              : "No data found"
                
        }
            </tbody>
            </table>
   
    
       
      

    </div>


  )
}

export default View