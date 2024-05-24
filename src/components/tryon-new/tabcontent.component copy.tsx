import { useState } from 'react';
import ReactImagePickerEditor, {
  ImagePickerConf,
} from 'react-image-picker-editor';

import 'react-image-picker-editor/dist/index.css';

export default function TabContent({ vtoData, activeTab }) {
  
  const config: ImagePickerConf = {
    borderRadius: '8px',
    language: 'en',
    width: '330px',
    height: '250px',
    objectFit: 'contain',
    // aspectRatio: 4 / 3,
    compressInitial: null,
  };

  const [imageSrc, setImageSrc] = useState<string | null | undefined>('');
  const initialImage = '';
  return (
    <div className="tab__container ">
      <div className="tab__content">
          <p> {vtoData[activeTab].fact}</p>
            { vtoData[activeTab].result && 
              <div className="d-flex justify-content-between text-center">
                <img src={vtoData[activeTab].image} alt="Pet" />
                <img src={vtoData[activeTab].result} alt="Pet" />
              </div>}
            { !vtoData[activeTab].result && 
            <img src={vtoData[activeTab].image} alt="Pet" />}
            <ReactImagePickerEditor
                config={config}
                imageSrcProp={initialImage}
                imageChanged={(newDataUri: any) => {
                  setImageSrc(newDataUri);
                }}
            />
      </div>
    </div>
  );
}