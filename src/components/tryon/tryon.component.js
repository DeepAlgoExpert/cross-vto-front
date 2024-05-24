import React, { Component } from "react";
import UploadService from "../../services/file-upload.service";
import RiseLoader from "react-spinners/RiseLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default class TryOnImages extends Component  {

  constructor(props) {
    super(props);

    this.state = {
      resultImage: undefined,
      progress: 0,
      message: "",
      error: null,
      imageInfos: [],
      clicked:null,
      imageData: null,
      loading: false,
    };
    const {model} = this.props;
    this.setState({ modelPreview: model });

    const {vtoImage} = this.props;
    this.setState({ imageData: vtoImage });

    this.upload = this.upload.bind(this)
  }
  
  upload() {
    this.setState({
      progress: 0,
      imageData: null,
      loading: true,
    });

    this.props.onData(null);

    const { modelType, model, garmentType, garment } = this.props;

    UploadService.tryon(modelType, model, garmentType, garment, (event) => {
      //event.preventDefault(); // Prevent default form submission
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        this.setState({ imageData: response.data });
        this.setState({
            progress: 0, clicked: 1, loading: false,
          });
        this.props.onData(response.data);
      })
      .catch((err) => {
        this.setState({
          progress: 0,
        });
      });
   }

   componentDidMount() {
        const {model } = this.props;
        this.setState({ modelPreview: model });
        UploadService.getFiles().then((response) => {
        this.setState({
            imageInfos: response.data,
        });
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
      modelPreview,
      loading,
    } = this.state;
    
    return (
      <>
        {!loading && (<button
            type = "button"
            className="btn btn-success btn-sm"
            onClick={this.upload}
            >
            TryOn
          </button>)
        }

        <div className="sweet-loading">
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

        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div> 
        )}
      </>
    );
  }
}