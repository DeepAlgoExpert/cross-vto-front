import React, { Component } from "react";
import UploadService from "../../services/file-upload.service";
import {OBJModel, AmbientLight, DirectionLight, OBJLoader} from 'react-3d-viewer';
import ResponseTable from './responseTable'; // Import the ResponseTable component
import RiseLoader from "react-spinners/RiseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default class Measurement extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      resultImage: undefined,
      progress: 0,
      message: "",
      error: null,
      obj_url: null,
      clicked:null,
      measurements: null,
      loading: false,
    };

    const { objUrl } = this.props;

    this.setState({
      obj_url: objUrl
    });
    
    this.upload = this.upload.bind(this)
  }
  
  upload() {
    this.setState({
      progress: 0,
      imageData: null,
      obj_url: null,
      measurements: null,
      message: "",
      error: null,
      loading: true,
    });

    this.props.onData(null, null);
    
    const { model, height, objUrl } = this.props;

    UploadService.measure(model, height, (event) => {
      //event.preventDefault(); // Prevent default form submission
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({ message: response.data.message, 
                        measurements: response.data.measurements,
                        obj_url: response.data.obj_url,
                        loading: false,
                        progress: 0, clicked: 1 });
        // Call the callback function to send data to parent
        this.props.onData(response.data.measurements, response.data.obj_url);
      })
      .catch((err) => {
        this.setState({
          progress: 0,
        });
      });
   }

   componentDidMount() {
        UploadService.getFiles().then((response) => {
        
        });
   }
   render() {
    const {
      currentFile,
      previewImage,
      progress,
      message,
      clicked,
      imageData,
      imageInfos,
      obj_url,
      measurements,
      loading,
    } = this.state;
    
    

    return (
      <div className="w-100">
        <div className="text-center">
          {!loading && (<button
              type = "button"
              className="btn btn-success btn-sm"
              onClick={this.upload}
              >
              TryOn
            </button>)
          }
        </div>
        
        <div className="sweet-loading text-center">
          <RiseLoader
            cssOverride={override}
            size={20}
            color={"#9eb25d"}
            loading={this.state.loading}
            speedMultiplier={1.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }
}