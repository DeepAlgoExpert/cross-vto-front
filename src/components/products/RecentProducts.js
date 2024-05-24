import React, {Fragment} from 'react';
import Slider from "react-slick";
import ReactTooltip from 'react-tooltip';

import '../products/products.css';

/**
 * demo data
 */
import productsData from '../../data/products.json';
import lowerVtoData from '../../data/lower-vto.json';
import dressVtoData from '../../data/dress-vto.json';
import {Link} from "react-router-dom";

/**
 * Recent Products component
 * @param onQuickViewClick
 * @returns {*}
 * @constructor
 */
function RecentProducts({onQuickViewClick}) {

    /**
     * slider settings
     */
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Fragment>
            {/* start trendy-product-section */}
            <section className="trendy-product-section section-padding">

                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="section-title-s2">
                                <h2>Virtual Fitting</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="products-wrapper">
                                <ul className="products product-row-slider">
                                    <Slider {...settings}>
                                        {
                                            lowerVtoData.map((item, index) => (
                                                <li key={index} className="product">
                                                    <div className="product-holder">
                                                        <Link to="/single-slider-images">
                                                            <img loading="lazy" src={process.env.PUBLIC_URL + item.mainImg} alt=""/>
                                                        </Link>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </Slider>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end trendy-product-section */}
            <ReactTooltip className='tool-tip' effect='solid'/>
        </Fragment>
    );
}

export default RecentProducts;