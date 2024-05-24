import React, {Fragment} from 'react';
import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';
import FilePreview from "../../components/filepreview/filepreview.component";
import Measure from "../../components/measurement/measurement.component";
import { useState, useEffect } from 'react';



/**
 * ContactUs page
 * @param options
 * @returns {*}
 * @constructor
 */
function Measurement({ options }) {

    const onSubmitForm = (e)=> {
        e.preventDefault();
    };

    const [model, setModel] = useState(null);

    const [modelPreview, setModelPreview] = useState(null);

    // State to hold height
    const [height, setHeight] = useState('');

    const handleModelChange = (event) => {
        setModel(event.target.files[0]);
        setModelPreview(URL.createObjectURL(event.target.files[0]));
    };

    // Function to handle change in select model type
    const handleHeightChange = (event) => {
        setHeight(event.target.value);
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

            <PageTitle name="3D Body Measurements"/>
                       
            {/* start contact-section */}
            <section className="contact-section contact-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-lg-10 col-lg-offset-1">
                            <div className="contact-info">
                                <h3>Please upload your front photo captured by your phone or camera!</h3>
                                <br/>
                                <input type="text" name="name" id="name" value={height} placeholder="Height* for example:178" onChange={handleHeightChange} />
                                <br/><br/>
                                <input type="file" onChange={handleModelChange} />
                                <FilePreview previewImage={modelPreview}/>   
                            </div>
                            <div className="contact-form-col">
                                <h3>3D Body Preview</h3>
                                <Measure model={model}  height={height}/>
                            </div>
                        </div>
                        <div className="col col-lg-10 col-lg-offset-1">
                            
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

export default Measurement;