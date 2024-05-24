import React, { Component } from "react";

const FilePreview = ({ previewImage }) => {
  return (
    <div>
        {previewImage && (
            <img className="preview" src={previewImage} alt="" />
        )}

      </div>
  );
}

export default FilePreview;