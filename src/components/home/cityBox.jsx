import React from 'react';
// import Heading5 from './heading5';
import CardActionArea from '@material-ui/core/CardActionArea';
export default function CityBox ({ img, title,onClick }){
    return (<CardActionArea onClick={()=>onClick()} ><div className="containercity">
    <div className="centeredcityoverlayBox"></div>
    <div className='cardActionImg'>
    <img src={img} alt="cityImg" className="w-100" />
    </div>
    <div className="centeredcitytextimg"><h5 className="centeredcitytext">
    {title}
        </h5></div>
</div></CardActionArea>)
}