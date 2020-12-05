import React from 'react';
export default ({title,classes})=>{
return classes?<h5 className={classes}>{title}</h5>:<h5 className="heading-child1">{title}</h5>
}