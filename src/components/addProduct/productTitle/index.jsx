import React from "react";
import { Description, IndutDiv, ProductName, ProductTitleCard, Texts } from "./styles";
import Files from '../../../asstets/images/files.png'

function ProductTitle() {
  return (
    <ProductTitleCard>
      <div>
        <ProductName>
          <input type="text" placeholder="Product Name" />
        </ProductName>
        <p>Description</p>
        <Description>
          <div></div>
          <textarea type="text" placeholder="Write something awesome..." />
        </Description>
        <p>Add Images</p>
        <Texts>
          <div>
            <img src={Files} alt="" />
          </div>
          <div className="text">
            <h3>Drop or Select file</h3>
            <p>
Drop or Select file

Drop files here or click <b><IndutDiv><label><input type="file" accept=".jpg, .jpeg, .png, .svg" /><p>browse</p></label></IndutDiv></b> thorough your machine</p>
          </div>
        </Texts>
      </div>
    </ProductTitleCard>
  );
}

export default ProductTitle;
