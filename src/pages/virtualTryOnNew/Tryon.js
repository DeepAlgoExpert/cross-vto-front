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
import TryOnImages from "../../components/tryon-new/tryon.component";
import TabButtons from "../../components/tryon/tabbutton.component";
import TabContent from "../../components/tryon/tabcontent.component";
import FeaturedProducts from '../../components/products/FeaturedProducts';
import VtoBlock from '../../components/vto-block/vto-block';
import RecentProducts from '../../components/products/RecentProducts';

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
            
            <VtoBlock/>
            
            <RecentProducts />
        </Fragment>
    );
}

export default VirtualFittingRoom;