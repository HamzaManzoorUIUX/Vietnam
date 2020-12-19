
import React, { useEffect, useState } from 'react';
import Heading5 from '../components/home/heading5';
import { Form } from 'react-bootstrap'
import Footer from '../components/home/footer'
import Nav from '../components/navbar';
// import newsimg1 from '../images/news/4.jpg';
// import newsimg2 from '../images/news/5.jpg';
// import newsimg3 from '../images/news/6.jpg';
// import News from '../components/home/newscard';
// import { Layer, Feature } from 'react-mapbox-gl';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import 'mapbox-gl/dist/mapbox-gl.css';
import { BiCurrentLocation } from 'react-icons/bi';
// import PropertyImg1 from '../images/property/property1.jpg'
import PropertyCard from '../components/home/propertyCard';
// import { useLocation } from 'react-router-dom'
import { repository } from '../utiles/repository';
// import _ from 'lodash';
// import ImageUploader from 'react-images-upload';
import LoadingOverlay from 'react-loading-overlay';

const GetFilters = (feature, handleFilter) => {

    if (feature.input_type)
        switch (feature.input_type) {
            case 'dropdown': {
                return <div className="col-md-3" >
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>{feature.name}</Form.Label>
                    <Form.Control as="select" onChange={(e) => handleFilter({
                        feature_id: feature.id,
                        value: e.target.value,
                        type: feature.input_type,
                    })}>
                        {
                            feature.options ? feature.options.map(x => <option value={x} >{x}</option>) : <></>
                        }

                    </Form.Control>

                </Form.Group>
                {/* <DropdownButton id="category-discovery" title="Real Estate sdas">
                    {
                        feature.options ? feature.options.map(x => <Dropdown.Item onClick={() => handleFilter({
                            feature_id: feature.id,
                            value: x,
                            type: feature.input_type,
                        })}>{x}</Dropdown.Item>) : <></>
                    }
                </DropdownButton> */}
            </div>
            }
            case 'range': {
                return <div className="col-md-3">
                    <Form.Group>
                        <Form.Label>{feature.name}</Form.Label>
                        <div className="dsp-flex align-cntr">

                            <input className="form-control mr-2" onChange={e => handleFilter({
                                feature_id: feature.id,
                                value: e.target.value,
                                type: feature.input_type,
                            }, 0)} min={feature.options[0] ? feature.options[0] : 0} placeholder="Min" />
                            <input className="form-control" onChange={e => handleFilter({
                                feature_id: feature.id,
                                value: e.target.value,
                                type: feature.input_type,
                            }, 1)} max={feature.options[1] ? feature.options[1] : 0} placeholder="Max" />
                        </div>
                    </Form.Group>

                </div>

            }
            case 'radio': {
                return <div className="col-md-3">
                    
                <Form.Group>
                <Form.Label>{feature.name}</Form.Label>
                {
                        feature.options ? feature.options.map(x =>
                            <Form.Check
                                onChange={() => handleFilter({
                                    feature_id: feature.id,
                                    value: x,
                                    type: feature.input_type,
                                })}
                                type="radio"
                                label={x}
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />) : <></>
                    }
                </Form.Group>

                </div>

            }
            case 'checkbox': {
                return <div className="col-md-3">
                    <Form.Group>
                <Form.Label>{feature.name}</Form.Label>
                {
                        feature.options ? feature.options.map(x =>
                            <Form.Check
                            onClick={() => handleFilter({
                                feature_id: feature.id,
                                value: x,
                                type: feature.input_type,
                            }, "check")}
                            type="checkbox"
                            label={x}
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />) : <></>
                    }
                </Form.Group>

                    

                </div>
            }
            default:
                return 0;
        }
}
const MarketPlace = () => {

    // const location = useLocation();
    let [mapData, setMapData] = useState({
        
    });
    let [listings, setlistings] = useState([]);
    let [datalistings, setdatalistings] = useState([]);
    // let [filters, setfilters] = useState([]);
    let [attributes, setattributes] = useState([]);
    let [statesC, setstatesC] = useState([]);
    let [cityC, setcityC] = useState([]);
    let [display,setdisplay]=useState(true);

    useEffect(() => {

        const getData = async () => {
            setdisplay(true);
            const { status, data } = await repository.productsFilter(mapData).then(x => x).then(x => x);
            if (status === 200 && data.status === 200 && data.success === true) {
                if (data.response && data.response.products && data.response.attributes) {
                    setlistings(data.response.products);
                    setdatalistings(data.response.products);
                    setattributes([...data.response.attributes]);
                    setstatesC(data.response.states);

                }
            }
            setdisplay(false);

        }
        getData();

    });
    const handleStateChange = (id) => {
        const stateFound = statesC.find(x => x.id === id);
        if (stateFound) {
            if (stateFound.cities)
                setcityC(stateFound.cities)

        }
    }
    

    const handleFilter = (filterObj, range) => {

        let oldFilters = mapData.attributes;
        let foundFilter = oldFilters.find(x => x.feature_id === filterObj.feature_id);

        if (foundFilter) {
            if (foundFilter.type === "checkbox") {
                let checkBoxValueExsist = foundFilter.value.find(x => x === filterObj.value)
                if (checkBoxValueExsist) {
                    foundFilter.value = foundFilter.value.filter(x => x !== checkBoxValueExsist)
                }
                else {
                    foundFilter.value.push(filterObj.value);
                }

            }
            else if (foundFilter.type === "range") {
                if (range === 0)//minimum
                {
                    foundFilter.value[0] = parseInt(filterObj.value);
                }
                else if (range === 1) {
                    foundFilter.value[1] = parseInt(filterObj.value);
                }
            }
            else
                foundFilter.value = filterObj.value;
        }
        else {
            if (range === 0 || range === 1) {
                if (range === 0) {
                    oldFilters.push({ ...filterObj, value: [parseInt(filterObj.value), mapData.max] });

                }
                else if (range === 1)
                    oldFilters.push({ ...filterObj, value: [0, parseInt(filterObj.value)] });
            }
            else if (range === "check") {
                oldFilters.push({ ...filterObj, value: [filterObj.value] });
            }

            else
                oldFilters.push(filterObj);
        }
        setMapData({ ...mapData, attributes: oldFilters });


        // let newdatalistings = datalistings;
        let findProducts = [];


        // _.forEach(newdatalistings,x=>{
        //     let found=false;

        //     for(let i=0;i<mapData.attributes.length; ++i)
        //     {
        //         _.forEach(x.attributes,y=>{
        //             if()
        //         })
        //     }
        //     _.forEach(x.attributes,y=>{
        //         for(let i=0;i<mapData.attributes.length; ++i)
        //         {
        //             if(mapData.attributes[i].type=="dropdown")
        //             {

        //             }
        //         }
        //     })


        //     for(let i=0;i< mapData.attributes.length; ++i)
        //     {
        //         _.forEach(x.attributes,y=>{
        //                 if(y.feature_id==mapData.attributes[i].feature_id && y.feature.input_type==mapData.attributes[i].type)
        //                 {
        //                     if(mapData.attributes[i].type=="dropdown")
        //                     {
        //                         if(y.value==mapData.attributes[i].value)
        //                         {
        //                             found=true;
        //                            return true;
        //                         }
        //                         else
        //                         {
        //                             found=false;

        //                         }

        //                     }  
        //                     if(mapData.attributes[i].value[0]<=y.value && mapData.attributes[i].value[1]>=y.value   )
        //                     {
        //                         alert()
        //                         if(y.value==mapData.attributes[i].value)
        //                         {
        //                             found=true;
        //                            return true;
        //                         }
        //                         else
        //                         {
        //                             found=false;

        //                         }

        //                     }  
        //                 }
        //         })
        //     }

        //     // _.forEach(x.attributes,y=>{
        //     //     for(let i=0;i< mapData.attributes.length; ++i)
        //     //     {
        //     //         if()
        //     //         {
        //     //             if(mapData.attributes[i].type=="dropdown")
        //     //             {
        //     //                 if(y.value==mapData.attributes[i].value)
        //     //                 {
        //     //                     found=true;
        //     //                     break;
        //     //                 }
        //     //                 else
        //     //                 {
        //     //                     found=false;
        //     //                     break;
        //     //                 }

        //     //             }
        //     //             else if(mapData.attributes[i].type=="range")
        //     //             {
        //     //                 if(parseInt(y.feature_id) == mapData.attributes[i].feature_id && y.value >= mapData.attributes[i].value[0] && y.value <= mapData.attributes[i].value[1])
        //     //                 {
        //     //                     found=true;
        //     //                     break;
        //     //                 }
        //     //                 else
        //     //                 {
        //     //                     found=false;
        //     //                     break;
        //     //                 }

        //     //             }
        //     //         }
        //     //         if(found==false)
        //     //         return false;
        //     //     }

        //     //     }) 
        //     // for(let i=0;i< mapData.attributes.length; ++i)
        //     // {
        //     //     if(mapData.attributes[i].type=="dropdown")
        //     //     {

        //     //     }

        //     // }

        //     // for(let i=0;i< mapData.attributes.length; ++i)
        //     // {

        //     //     if (mapData.attributes[i].type == "range") {
        //     //         if(parseInt(y.feature_id) == mapData.attributes[i].feature_id && parseInt(y.value) >= mapData.attributes[i].value[0] && parseInt(y.value) <= mapData.attributes[i].value[1])
        //     //         {
        //     //             found=true;

        //     //         }

        //     //     } 

        //     // }





        //     console.log(found);
        //     if(found)
        //     {
        //         findProducts.push(x);
        //     }
        // })


        // for (let i = 0; i < mapData.attributes.length; ++i) {

        //     if (mapData.attributes[i].type == "range") {
        //         let filterx = newdatalistings.filter(x => {
        //             let found=false;
        //          x.attributes.forEach(y =>{
        //              if(parseInt(y.feature_id) == mapData.attributes[i].feature_id && y.value >= mapData.attributes[i].value[0] && y.value <= mapData.attributes[i].value[1])
        //              {
        //                  found=true;
        //              }
        //          } )
        //             if (found);
        //             return x;
        //         });

        //         // findProducts.concat(filterx)
        //     }
        //     else if (mapData.attributes[i].type == "checkbox") {
        //         let filterx = newdatalistings.filter(x => {
        //             let found=false;
        //             x.attributes.forEach(y => {
        //                 if( parseInt(y.feature_id) == mapData.attributes[i].feature_id && _.find(mapData.attributes[i].value, x => y.value == x))
        //                 {
        //                     found=true;
        //                 }
        //             })
        //             if(found==true)
        //             return x;

        //         });
        //         // findProducts=findProducts.concat(filterx)
        //     }
        //     else {

        //         let filterx = newdatalistings.filter(x => {
        //                 let found=false;
        //             x.attributes.forEach(y => {
        //                 // console.log(y,"sdsd");
        //                 // console.log(mapData.attributes[i].value,"sdsd1");
        //                 if (y.feature_id == mapData.attributes[i].feature_id && y.value == mapData.attributes[i].value) {
        //                         found=true;
        //                 }
        //             });
        //             if(found==true)
        //             return x;
        //         });

        //     //    findProducts=findProducts.concat(filterx)
        //     }


        // }
        console.log(mapData.attributes, "Sdsd");
        console.log(datalistings, "oldListing");
        console.log(findProducts, "finalprd");


    }

    return <LoadingOverlay
    active={display}
    spinner
    text='Loading...'
    ><div className="bgimgcovermarketPlace">



        {//Top Section
        }
        <div className="pd6p navback-color" >
            <Nav hasback={true} />
        </div>
        <div className="pd6p">
            <div className="pb-8p">
                <h1 className="headtext">Marketplace</h1>
                <h5 className="headtextchild mt-3 ">Home/Marketplace</h5>
            </div>
        </div>

    </div>

        <div className="mt-5 pt-3 pd6p">
            <div className="flex-main flx-none flex-mainback pl-4  pd-custm-25 brd ">
                <div className="flex-main flex-width-55 pt-2 pb-2 wd-md100 brdb-737" ><p className="margin-auto font-weight-600">What</p><input placeholder="For Example Food, Service, Barber, hotel" className="form-control no-border searchBarText" /></div>
                <div className="flex-main flex-width-22 brdleft brd-cstm-737 pl-5rem hbtn-54 wd-md100 brdb-737 " ><p className="margin-auto font-weight-600">Where</p><input placeholder="Your City" className="form-control no-border searchBarText" /><button className="btn"><BiCurrentLocation /></button></div>
                <div className="flex-main flex-width-20 wd-md100 " ><button className="btn btn-info themeBackgroundColor listingbtn w-100 brdleftbtnnone hbtn-54 br-serch-10">Search</button></div>
            </div>
        </div>
        <div className="footer-root mt-5 pb-4 pd6p">
            <p className="ft-size-125"> Search Result for<span className="font-weight-600"> Real Estate</span></p>


        </div>
        <div className="footer-root pd6p">
            <div className="dsp-flex align-cntr dsp-flex-wrap">
                <p className=""> <span className="font-weight-600"> Advance Filters</span></p>
                <DropdownButton id="category-discoverydst" title="State">
                    {statesC.map(x => <Dropdown.Item onClick={() => handleStateChange(x.id ? x.id : 0)}>{x.name ? x.name : ""}</Dropdown.Item>)}

                </DropdownButton>
                <DropdownButton id="category-discoverydst" title="City">
                    {cityC.map(x => <Dropdown.Item onClick={() => alert()}>{x.name ? x.name : ""}</Dropdown.Item>)}

                </DropdownButton>

                {

                    attributes.map(x => GetFilters(x.features.feature, handleFilter))
                }
            </div>

        </div>

        <div className="row m-0">
            <div className="col-12 col-md-8 col-lg-8">

                <div className="mt-5 pb-5 ">
                    <div className="revcardss mt-5">

                        {listings.map(x => <div className="col-md-6 col-lg-5">

                            <PropertyCard item={x} img={x.images[0] ? x.images[0].image : "https://globalimpactnetwork.org/wp-content/themes/globalimpact/images/no-image-found-360x250.png"} title={x.title ? x.title : ""} location={`${x.address ? x.address : ""}`} fetures={x.attributes ? x.attributes : []} price={x.price ? x.price : ""} type={0} />

                        </div>)}

                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
                <div className="mt-5 p-2 p-lg-4 border-simple">
                    <Heading5 classes="form-head-main-center" title="Search Properties" />
                    <input className="form-control" placeholder="Search" />
                </div>
                <div className="mt-5 p-2 p-lg-4 border-simple">
                    <Heading5 classes="form-head-main-center" title="Suggesions" />
                    <div className="dsp-flex dsp-flex-wrap">
                        <button className="btn btn-info themeBackgroundColor listingbtn mr-2 mt-2">Appartments</button>
                        <button className="btn btn-info themeBackgroundColor listingbtn mr-2 mt-2">Residencial</button>
                        <button className="btn btn-info themeBackgroundColor listingbtn mr-2 mt-2">Lifestyle</button>
                        <button className="btn btn-info themeBackgroundColor listingbtn mr-2 mt-2">Commercial</button>
                        <button className="btn btn-info themeBackgroundColor listingbtn mr-2 mt-2">Luxary</button>
                    </div>
                </div>
            </div>
        </div>


        <div className="pd6p mt-5 pt-5">
            <Footer />
        </div>

        </LoadingOverlay>
}
export default MarketPlace