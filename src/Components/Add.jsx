import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Form } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddEmployee } from '../redux/slice';




function Add() {


    const dispatch = useDispatch()

    const [id,setId] = useState('')
    const [names,setNames] = useState('')
    const [address,setAddress] = useState('')
    const [number,setNumber] = useState('')
    

    const AddData = () => {
        const body = {
            id,
            names,
            address,
            number
            
        }
        dispatch(AddEmployee(body))
    }

        useEffect(() => {
            
        },[])
    
  return (


    <div>
        <h2 className='m-3 text-primary'>Add contact details</h2>
            <div className="container border shadow">
            <MDBInput className='m-2' onChange={(e) => setId(e.target.value)} label='Id' type='text'/> <br />
            <MDBInput onChange={(e) => setNames(e.target.value)} label='Name' type='text'/> <br />
            <MDBInput onChange={(e) => setAddress(e.target.value)} label='Address' type='text'/> <br />
            <MDBInput onChange={(e) => setNumber(e.target.value)} label='Contact Number' type='text'/> <br />
            
        <MDBBtn onClick={() => AddData()} color='primary' className='m-3' >Add Data</MDBBtn>
        </div>
    </div>
  )
}

export default Add