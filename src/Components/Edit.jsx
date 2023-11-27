import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateEmployee } from '../redux/slice';


function Edit() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams();

    const data = useSelector((state) => state.employee);
    const existingUser = data.filter(f => f.id === id);
    const { names, address,number } = existingUser[0];

        const [eid, setId] = useState(id);
        const [enames, setNames] = useState(names);
        const [eaddress, setAddress] = useState(address);
        const [enumber, setNumber] = useState(number);
        
        const handleUpdate = (event) => {
            event.preventDefault()
            dispatch((updateEmployee({
                id: id,
                names: enames,
                address:eaddress,
                number:enumber,
                
            })))
            navigate('/')
        }

  return (
    <div>
         <form onSubmit={handleUpdate}>
           <div className="container mt-5 p-5 border shadow">
                 <h2>Update the details</h2>
                 <input value={eid} onChange={(e) => setId(e.target.value)} type="text" placeholder='Id' className='mb-2 mt-3' /> <br />
                 <input value={enames} onChange={(e) => setNames(e.target.value)} type="text" placeholder='Name' className='mb-2' /> <br />
               <input value={eaddress} onChange={(e) => setAddress(e.target.value)} type="text" placeholder='Address' className='mb-2' /> <br />
                <input value={enumber} onChange={(e) => setNumber(e.target.value)} type="text" placeholder='Number' className='mb-2' /> <br />
                
                 <MDBBtn color='primary' >Update</MDBBtn>
            
             </div>
            </form>
    </div>
  )
}

export default Edit