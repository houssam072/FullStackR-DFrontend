import React, { useContext, useEffect, useState } from 'react'
import './homePage.css'
import sidebarHeroImage from '../images/slider-hero.png.webp';
import axios from 'axios';
import { Link } from 'react-router-dom';
import titlt_icon from '../images/title-icon.png.webp';
import iphone from '../images/iphone4.png.webp';
import {User} from '../auth/context';

export default function HomePage() {
    const [services, sertServices] = useState([]);
    const [design , setDesign] = useState([]);
    // const [designId, setDesignId] = useState([]);
    
    const context = useContext(User);
    const token = context.token;


        const services_list = () => {
            const url = 'http://127.0.0.1:8000/services/services_list';
            axios.get(url,{headers:{
                Accept:"application/json",
                Authorization: 'Bearer '+ token,
            },})
            .then(
                res => {
                    const servicesList = res.data.data.slice(-3)
                    sertServices(servicesList);
                }
            )
            .catch(error => {
                console.log(error);
            })
        };

        const design_list = () => {
            const url = 'http://127.0.0.1:8000/design/design_list/';
            axios.get(url,{headers:{
                Accept:"application/json",
                Authorization: 'Bearer '+ token,
            },})
            .then(
                res => {
                    const designList = res.data.data.slice(-6)
                    let idList = []
                    designList.map(
                        item => {
                            const id = item.id;
                            idList.push(id)
                        }
                    )
                    // setDesignId(idList);
                    setDesign(designList);
                }
            )
            .catch(error => {
                console.log(error);
            })
        };

        useEffect(() => {
        services_list();
        design_list();
    
        

    }, []);
    


        return (
            <div className="homePage">
                <div className="heroSection">
                    <div className="hero_info">
                        <div className="info mt-auto mb-auto">
                            <h1>Save Your Money And Make Your Name</h1>
                            <p>Get the cheapest advertisement</p>
                        </div>
                        <img className='hero_image' src={sidebarHeroImage}  alt="" />
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
                        <Link className="read-btn" to="/services">and more ...</Link>
                        
                        
                    </div>
                </div>
                {/* ./service section */}

                <div className="vision_section d-flex">
                    <div className="bio">
                        <div className="info">
                            <h5>"Less is More ..."</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Minima quas cupiditate asperiores? 
                                Minus aspernatur architecto harum cum doloremque amet veniam nihil earum 
                                eaque fugit illo sed id mollitia ut.
                            </p>
                        </div>
                    </div>
                    <div className='right_side w-50 d-flex justify-content-between'>
                        <div className="disc w-50">
                            <div className="header-disc">
                                <img src={titlt_icon} alt="" />
                                <span>DISCOVER THE FEATURES</span>
                            </div>

                            <h2>
                            We don’t hide, we stand tall in front of chalenge
                            </h2>
                            <p>
                            Etiam nec odio vestibulum est mattis effic iturut magna. 
                            Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.
                            Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. 
                            Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra a eget nisi. 
                            Aenean pellentesque elit vitae eros dignissim ultrices.
                            </p>

                        </div>
                        <div className="vision_img w-25">
                            <img width={220} src={iphone} alt="" />
                        </div>
                    </div>

                </div>
                {/* ./ vision section */}

                <div className="disign_section">
                    <div className="container d-flex flex-wrap w-50">
                        {design.map(
                            item => (
                                <div className="disign-images">
                                    {<img src={item.image_bio} alt="" />}
                                </div>
                            )
                        )}
                    </div>
                    <div>
                    </div>
                </div>

                <div className="contact_section">
                    <div className="contact">
                        <div className="form">
                            
                        </div>
                        <div className="info">

                        </div>
                    </div>
                    <div className="location">

                    </div>
                </div>
                {/* ./ cintact section  */}

            </div>
        )
}













// const design_show = setInterval(() => {
//     let randomId = Math.floor(Math.random()*designId.length);
//     const id = designId[randomId];
//     console.log('hi', id);
//     const element = document.getElementById(randomId)
//     if (element){
//     element.classList.add("selected");

//     }
//     setSelectedDesign(randomId);
// }, 2000);

// {
//     let list = [];
//     designId.map(
//     item => {
//         list.push(item);
//         }
//     )
//     let randomId = Math.floor(Math.random()*list.length);
//     const element = document.getElementById(randomId);
//     if (element){
//             element.classList.add("selected");
//             console.log(element);
//         }
// }

