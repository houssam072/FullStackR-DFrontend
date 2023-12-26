import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './service.css'

export default function Services_detailes() {
    const [serviceDetailes, setServiceDetailes] = useState([]);
    const {slug} = useParams();

    useEffect(() => {
        const service_detailes = () => {
            const url = `http://127.0.0.1:8000/services/service_detailes/${slug}`;
            axios.get(url)
            .then(res => {
                setServiceDetailes(res.data.data);
            })
        }
        service_detailes();
    }, [])

  return (
    <div className="homePage">
        <div className="heroSection" style={{height:250}}>
            <div className="hero_info" style={{top:-200}}>
                <div className="info mb-auto" style={{marginTop:280}}>
                    <h1>{serviceDetailes.service_name}</h1>
                </div>
            </div>

        </div>
        {/* ./ hero section  */}
        <div className="serviceSection">
            <div className="container">
                <img  src={serviceDetailes.service_logo} alt="" />
                <p className='service_bio'>{serviceDetailes.service_bio}</p>
                <p className='w-75'>{serviceDetailes.service_disc}</p>
            </div>
        </div>
        {/* ./service section */}
    </div>
  )
}
