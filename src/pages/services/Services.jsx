
import React, { useEffect, useState } from 'react'
import '../home/homePage.css'
import '../services/service.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Services() {
    const [services, sertServices] = useState([])

    useEffect(() => {
        const services_list = () => {
            const url = 'http://127.0.0.1:8000/services/services_list';
            axios.get(url)
            .then(
                res => {
                    const servicesList = res.data.data
                    sertServices(servicesList);
                }
            )
            .catch(error => {
                console.log(error);
            })
        };
        services_list();

    }, []);
  return (
    <div className="homePage">
        <div className="heroSection" style={{height:250}}>
            <div className="hero_info" style={{top:-200}}>
                <div className="info mb-auto" style={{marginTop:280}}>
                    <h1>Services</h1>
                </div>
            </div>

        </div>
        {/* ./ hero section  */}
        <div className="serviceSection">
            <div className="container">
                <div className="items mb-5">
                    {services.map(item => (
                        <div className="service">
                            <div className="icon">
                                {<img src={item.service_logo}  alt="" />}
                            </div>
                            <div className="serviceInfo">
                                <h3>{item.service_name}</h3>
                                <p>
                                    {item.service_bio}
                                </p>
                            </div>
                            <Link className="read-btn" to={`/service_detailes/${item.slug}`}>read more</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {/* ./service section */}
    </div>
  )
}
