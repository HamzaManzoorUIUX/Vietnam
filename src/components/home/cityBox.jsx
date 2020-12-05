import React from 'react';
import Heading5 from './heading5';
import CardActionArea from '@material-ui/core/CardActionArea';
export default ({ img, title }) => {
    return (<CardActionArea><div className="containercity">
    <div className="centeredcityoverlayBox"></div>
    <img src={img} alt="cityImg" className="w-100" />
    <div className="centeredcitytextimg"><h5 className="centeredcitytext">
    {title}
        </h5></div>
</div></CardActionArea>)
}