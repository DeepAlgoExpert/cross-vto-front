import React, {Fragment} from 'react';
import { useState, useEffect } from 'react';
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import Select from "react-dropdown-select";

import Footer from '../../components/global/Footer';
import Instagram from '../../components/global/Instagram';
import Header from '../../components/header/Header';
import PageTitle from '../../components/global/PageTitle';
import FilePreview from "../../components/filepreview/filepreview.component";
import TryOnImages from "../../components/tryon/tryon.component";
import TabButtons from "../../components/tryon/tabbutton.component";
import TabContent from "../../components/tryon/tabcontent.component";

import "./tryon.css";

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

    const config2 = {
        borderRadius: '8px',
        language: 'en',
        //width: '50%',
        width: '330px',
        aspectRatio: 0.75,
        objectFit: 'fill',
        compressInitial: null,
    };

    const garmentOptions = [
        {
          value: 1,
          label: 'Upper'
        },
        {
          value: 2,
          label: 'Lower'
        },
        {
          value: 3,
          label: 'Dress'
        }
    ];

    const vtoData = [
        {
          title: "User Image",
          fact: "Please upload your front photo captured phone or camera! User image should be 3:4 portion.",
          image: "/assets/images/try-on/1.jpg",
        },
        {
          title: "Garment Image",
          fact: "Please upload the garment image you are trying to wear! Garment image should be 3:4 portion.",
          image: "/assets/images/try-on/2.jpg",
        },
        {
          title: "Virtual Try On",
          fact: "Your virtual fitting result. Have fun!",
          image: "/assets/images/try-on/3.jpg",
          result: "/assets/images/try-on/3.jpg"
        },
      ];

    const [activeTab, setActiveTab] = useState(0);
    const [model, setModel] = useState('');
    const [garment, setGarment] = useState('');
    const [resultState, setResultState] = useState(null);

    const [modelPreview, setModelPreview] = useState('/assets/images/try-on/1.jpg');
    const [garmentPreview, setGarmentPreview] = useState('/assets/images/try-on/2.jpg');

    // State to hold the selected model type
    const [selectedModelType, setSelectedModelType] = useState('Half');
    // State to hold the selected garment type
    const [selectedGarmentType, setSelectedGarmentType] = useState('Upper');

    const handleVtoData = (imageData) => {
        setResultState(imageData);
      };

    /**
     * demo data
     */
    const contactUsData = {
        address: "Ailded frame showed a lady fitted out with fur hat and fur boa who sat upright",
        phone_1: "54875465-65741895-6547",
        phone_2: "2222-3333-4444-555",
        //email_1: "beaumarfdeep0821@gmail.com",
        //email_2: "beaumarfdeep0821@gmail.com",
        time: "10AM - 5 PM, Sunday closed"
    };

    return (
        <Fragment>
            <Header options={options} />

            <PageTitle name="VirtualFittingRoom"/>


            {/* start video-section */}
             <section className="contact-section contact-pg-section section-padding" id="tryon-video-section">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-lg-10 col-lg-offset-1">
                            <div className="video-info">
                                <ul>
                                    <li>
                                        <h1></h1>
                                        <h1>CREATE YOUR STYLE</h1>
                                        <h2>With a help of AI</h2>
                                    </li>
                                    <li>
                                        <p></p><p></p>
                                    </li>
                                    <li>
                                        <h3>The first AI-powered fashion photo editor app that allows  you to change clothes on pictures, tailored to your unique style or occasion with ease</h3>
                                    </li>
                                    <li>
                                        <h3>With our technology, and your unique taste, you can use your own picture to style the perfect look. Explore a wide range of styles with more versatility than ever before</h3>
                                    </li>
                                </ul>
                            </div>
                            <div className="video-form-col">
                                <video class="elementor-video" 
                                    width="440" height="660"
                                    src="https://styleshifter.app/wp-content/uploads/2024/03/IMG_9804.mov" 
                                    autoPlay loop muted="muted" playsinline="" controlslist="nodownload">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end video-section-s3 */}

            {/* start tryon-section */}
            <section className="contact-section contact-pg-section section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="main__container">
                            <h1>Virtual Fitting Process</h1>
                            <TabButtons
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                vtoData={vtoData}
                            />
                            <div className="tab__container ">
                                <div className="tab__content d-flex">
                                    <p> {vtoData[activeTab].fact}</p>
                                    { activeTab==0 &&
                                        <>
                                            < ReactImagePickerEditor
                                                config={config2}
                                                imageSrcProp={model}
                                                imageChanged={(newDataUri) => { setModel(newDataUri) }} 
                                                />
                                        </>
                                        
                                    }

                                    { activeTab==1 &&                                       
                                        <>
                                            <Select 
                                                options={garmentOptions}
                                                placeholder='Upper'
                                                onChange={(values) => setSelectedGarmentType(values[0].label)} />
                                            < ReactImagePickerEditor
                                                config={config2}
                                                imageSrcProp={garment}
                                                imageChanged={(newDataUri) => { setGarment(newDataUri) }} 
                                                />
                                        </>
                                    }
                                    { activeTab==2 && 
                                        <div className="d-flex flex-column text-center w-100">
                                            <TryOnImages 
                                                modelType={selectedModelType} 
                                                model={model} 
                                                garmentType={selectedGarmentType} 
                                                garment={garment}
                                                onData={handleVtoData} 
                                                vtoImage={resultState}
                                            />
                                            <div className="d-flex text-center w-100">
                                                <img src={model? model : "/assets/images/try-on/3.jpg"} alt="Pet" />
                                                <img src={resultState? `data:image/png;base64,${resultState}`: "/assets/images/try-on/3.jpg"} alt="Pet" />
                                            </div>
                                        </div>
                                    }
                                </div>
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