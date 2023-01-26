import React from 'react';
import Title from "./Title";
import {tours} from "../data";

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title1='featured' title2='tours' />

            <div className="section-center featured-center">
                {tours.map(({id, image, date, title, text, location, duration, price}) => {
                    return (
                        <article className="tour-card" key={id}>
                            <div className="tour-img-container">
                                <img src={image} className="tour-img" alt=""/>
                                <p className="tour-date">{date}</p>
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{title}</h4>
                                </div>
                                <p>
                                    {text}
                                </p>
                                <div className="tour-footer">
                                    <p>
                                        <span><i className="fas fa-map"></i></span> {location}
                                    </p>
                                    <p>{duration}</p>
                                    <p>from ${price}</p>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    );
}

export default Tours;