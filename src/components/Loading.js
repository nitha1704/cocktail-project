import React from 'react'
import loadingIMG from "../images/loading.gif";

const Loading = () => {
    return (
      <div className="loading">
        <img src={loadingIMG} alt="" className="img-fit" />
      </div>
    );
}

export default Loading
