import React, {Fragment} from 'react';
import { useState, useEffect } from 'react';
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'
import Select from "react-dropdown-select";
import featuredProductsData from '../../data/featured-products.json';
import {Link} from "react-router-dom";
import '../vto-block/style.css';
import TryOnImages from "../../components/vto-block/tryon.component";

/**
 * Featured Products Component
 * @returns {*}
 * @constructor
 */
function FeaturedProducts() {

    const config2 = {
        borderRadius: '8px',
        language: 'en',
        //width: '50%',
        width: '100%',
        aspectRatio: 0.75,
        objectFit: 'fill',
        compressInitial: null,
        hideDeleteBtn: true,
        hideDownloadBtn: true,
        hideEditBtn: true,
        hideAddBtn: true
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

    const lowerSubOptions = [
        {
          value: 1,
          label: 'Shorts'
        },
        {
          value: 2,
          label: 'Bermuda shorts'
        },
        {
          value: 3,
          label: 'Ankle-Length Pants'
        },
        {
          value: 4,
          label: 'Mini Skirts'
        },
        {
          value: 5,
          label: 'Knee-Length Skirts'
        },
        {
          value: 6,
          label: 'Midi Skirts'
        },
        {
          value: 7,
          label: 'Maxi Skirts'
        }
    ];

    const dressSubOptions = [
        {
          value: 1,
          label: 'Mini Dress'
        },
        {
          value: 2,
          label: 'Knee-Length Dress'
        },
        {
          value: 3,
          label: 'Midi Dress'
        },
        {
          value: 4,
          label: 'Maxi Dress'
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
    // State to hold the selected garment sub category
    const [selectedSubGarmentType, setSelectedSubGarmentType] = useState('');

    const handleVtoData = (imageData) => {
        setResultState(imageData);
      };

    return (
        <Fragment>
            {/* start featured-proeducts-section-s2 */}
            <section className="featured-proeducts-section-s2 section-padding">
                <div className="container-1410">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="product-grids clearfix">
                                <div className="grid">
                                    <div className="img-holder">
                                        < ReactImagePickerEditor
                                            config={config2}
                                            className="img-picker"
                                            imageSrcProp={model}
                                            imageChanged={(newDataUri) => { setModel(newDataUri) }} 
                                            />
                                    </div>
                                    <div className="caption">
                                        <h3>Before</h3>
                                        <Select 
                                            options={garmentOptions}
                                            placeholder='Please select cloth category...'
                                            onChange={(values) => setSelectedGarmentType(values[0].label)} />
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="img-holder">
                                        < ReactImagePickerEditor
                                            config={config2}
                                            className="img-picker"
                                            imageSrcProp={garment}
                                            imageChanged={(newDataUri) => { setGarment(newDataUri) }} 
                                            />
                                    </div>
                                    <div className="caption">
                                        <h3>Cloth</h3>
                                        { selectedGarmentType=="Lower" &&
                                                <>
                                                    <Select 
                                                    options={lowerSubOptions}
                                                    placeholder='Select SubCategoryLower...'
                                                    className='sub-select'
                                                    required='True'
                                                    onChange={(values) => setSelectedSubGarmentType(values[0].label)} />
                                                </>
                                        }
                                        { selectedGarmentType=="Dress" &&
                                            <>
                                                <Select 
                                                options={dressSubOptions}
                                                placeholder='Select SubCategoryDress...'
                                                className='sub-select'
                                                onChange={(values) => setSelectedSubGarmentType(values[0].label)} />
                                            </>
                                        }
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="img-holder">
                                        <img src={resultState? `data:image/png;base64,${resultState}`: "/assets/images/vto/lower/3.jpg"} alt="" />
                                    </div>
                                    <div className="caption">
                                        <h3>After</h3>
                                        <TryOnImages 
                                                modelType={selectedModelType} 
                                                model={model} 
                                                garmentType={selectedGarmentType}
                                                subgarmentType={selectedSubGarmentType} 
                                                garment={garment}
                                                onData={handleVtoData} 
                                                vtoImage={resultState}
                                            />
                                    </div>
                                </div>
     
                            </div>
                        </div>
                    </div>
                </div>
                {/* end container-1410 */}
            </section>
            {/* end featured-proeducts-section-s2 */}
        </Fragment>
    );
}


export default FeaturedProducts;