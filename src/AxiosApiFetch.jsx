import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'


function AxiosApiFetch() {
    const [data,setData]=useState([])
    const [randomId,setRandomId]=useState(Math.floor(Math.random() * (30 - 1 + 1)) + 1)
    useEffect(()=>{
        axios.get("https://dummyjson.com/users").then((res)=>{
           setData(res.data.users)
        })
    },[])
  return (
    <div>
        {data.filter((detail)=>detail.id==randomId).map(detail=>(<Row>
        <Col  className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <img width={200} height={200} style={{borderRadius:'100px'}} className='border border-2 ' src={detail.image} alt="" />
            <h3>{detail.lastName}</h3>
            <p>{detail.gender}</p>
            <div className='row'>
                <div className='col-6 text-center mb-3'>
                        <h5>Birth Date</h5>
                        <p>{detail.birthDate}</p>
                </div>
                <div className='col-6 text-center mb-3'>
                        <h5>Age</h5>
                        <p>{detail.age}</p>
                </div>
                <div className='col-6 text-center '>
                        <h5>Weight</h5>
                        <p>{detail.weight}</p>
                </div>
                <div className='col-6 text-center '>
                        <h5>Height</h5>
                        <p>{detail.height}</p>
                </div>
            </div>
            <Button onClick={()=>setRandomId(Math.floor(Math.random() * (30 - 1 + 1)) + 1)} variant="success">Get New User</Button>
        </Col>
        <Col className='d-flex flex-column    mt-3 '>
            <div className='mb-5'>
                <h3>Home Address</h3>
                <h5>{detail.address.address}</h5>
            </div>
            <div className='mb-5'>
                <h3>Mobile Phone</h3>
                <h5>{detail.phone}</h5>
            </div>
            <div className='mb-5'>
                <h3>Company</h3>
                <h5>{detail.company.name}</h5>
            </div>
            <div className='mb-5'>
                <h3>Job Title</h3>
                <h5>{detail.company.title}</h5>
            </div>
            <div className=''>
                <h3>E-mail</h3>
                <h5>{detail.email}</h5>
            </div>
        </Col>
      </Row>))}
    </div>
  )
}

export default AxiosApiFetch