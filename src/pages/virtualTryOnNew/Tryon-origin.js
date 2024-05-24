import React, {Fragment} from 'react';
import { useState } from 'react';
import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';
import FilePreview from "../../components/filepreview/filepreview.component";
import TryOnImages from "../../components/tryon/tryon.component";


/**
 * ContactUs page
 * @param options
 * @returns {*}
 * @constructor
 */
function VirtualFittingRoom({ options }) {

    const onSubmitForm = (e)=> {
        e.preventDefault();
    };

    const [model, setModel] = useState(null);
    const [garment, setGarment] = useState(null);

    const [modelPreview, setModelPreview] = useState(null);
    const [garmentPreview, setGarmentPreview] = useState(null);

    // State to hold the selected model type
    const [selectedModelType, setSelectedModelType] = useState('Half');
    // State to hold the selected garment type
    const [selectedGarmentType, setSelectedGarmentType] = useState('Upper');

    const handleModelChange = (event) => {
        setModel(event.target.files[0]);
        setModelPreview(URL.createObjectURL(event.target.files[0]));
    };

    const handleGarmentChange = (event) => {
        setGarment(event.target.files[0]);
        setGarmentPreview(URL.createObjectURL(event.target.files[0]));
    };
    
    // Function to handle change in select model type
    const handleSelectChangeModelType = (event) => {
        setSelectedModelType(event.target.value);
    };

    // Function to handle change in select model type
     const handleSelectChangeGarmentType = (event) => {
        setSelectedGarmentType(event.target.value);
    };

    /**
     * demo data
     */
    const contactUsData = {
        address: "Ailded frame showed a lady fitted out with fur hat and fur boa who sat upright",
        phone_1: "54875465-65741895-6547",
        phone_2: "2222-3333-4444-555",
        email_1: "beaumarfdeep0821@gmail.com",
        email_2: "beaumarfdeep0821@gmail.com",
        time: "10AM - 5 PM, Sunday closed"
    };

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="VirtualFittingRoom"/>

            {/* start contact-section */}
            <section className="contact-section contact-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-lg-10 col-lg-offset-1">
                            <div className="contact-info">
                                <ul>
                                    <li>
                                        <i className="pe-7s-mail"/>
                                        <h4>Email us</h4>
                                        <p>{contactUsData.email_1} <br/>{contactUsData.email_2}</p>
                                    </li>
                                    <li>
                                        <i className="pe-7s-alarm"/>
                                        <h4>Office time</h4>
                                        <p>{contactUsData.time}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact-form-col">
                                <h2>Let’s choose garment type</h2>
                                <div className="contact-form">
                                    <form method="post" className="contact-validation-active" id="contact-form-main">
                                        <div className="fullwidth hidden">
                                            <select name="model-type" value={selectedModelType} onChange={handleSelectChangeModelType}>
                                                <option disabled="disabled">Model type</option>
                                                <option>Half</option>
                                                <option>Full</option>
                                            </select>
                                        </div>
                                        <div className="fullwidth">
                                            <select name="garment type" value={selectedGarmentType} onChange={handleSelectChangeGarmentType}>
                                                <option disabled="disabled">Garment type</option>
                                                <option>Upper</option>
                                                <option>Lower</option>
                                                <option>Dress</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact-section-s3 */}



            {/* start contact-section */}
            <section className="contact-section contact-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-lg-16 col-lg-offset-1">
                            <div className="contact-info">
                                <input type="file" onChange={handleModelChange} />
                                <FilePreview previewImage={modelPreview} />   
                            </div>
                            <div className="contact-info">
                                <input type="file" onChange={handleGarmentChange} /> 
                                <FilePreview previewImage={garmentPreview} />
                            </div>
                            <div className="contact-info">
                                <TryOnImages modelType={selectedModelType} model={model} garmentType={selectedGarmentType} garment={garment}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact-section-s3 */}
            <Instagram/>
            <Footer/>
        </Fragment>
    );
}

export default VirtualFittingRoom;