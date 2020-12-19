import React, { useEffect, useState } from 'react';
import Heading5 from '../components/home/heading5';
import { Form } from 'react-bootstrap'
import Footer from '../components/home/footer'
import Nav from '../components/navbar'
import { setCategories } from '../redux/actionMethodes/listings';
import { useSelector, useDispatch } from 'react-redux'
import { repository } from '../utiles/repository'
// import { Dropdown, DropdownButton } from 'react-bootstrap'
import ImageUploader from 'react-images-upload';


// const feat = [{ name: "Bed", val: "4" }, { name: "Bath", val: "1" }, { name: "Sqft", val: "200" }];


const GetFilters = (feature, handleFilter) => {

    if (feature.input_type)
        switch (feature.input_type) {
            case 'dropdown': {
                return <div className="col-md-6" >
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
                return <div className="col-md-6">
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
                return <div className="col-md-6">
                    
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
                return <div className="col-md-6">
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
            return 0
        }
}


export default function AddListings () {
    const categories = useSelector(x => x.categories);
    const dispatch = useDispatch();
    const [subCategory, setsubCategory] = useState([]);
    const [filters, setfilters] = useState([]);
    const user=useSelector(x=>x.User);
    const [pictures,setpictures]=useState([]);

    let [mapData, setMapData] = useState({
        name: '',
        city: '',
        latitude: 51.505,
        longitude: -0.09,
        type: 0,
        state: '',
        price: [0, 0],
        attributes: [],
        category_id: '',
        max: 10000
    });
    const handleCategoryChange = (id) => {
        let subCate = categories.find(x => x.id === id);
        if (subCate) {
            setsubCategory(subCate.sub_categories ? subCate.sub_categories : []);
            setfilters(subCate.attributes ? subCate.attributes : []);
        }
    }

    useEffect(() => {

        console.log(categories, "categories")
        const getData = async () => {
            if (categories.length <= 0) {
                const { data, status } = await repository.getCategories().then(x => x).then(x => x);
                if (status === 200) {
                    console.log(data.response.categories);
                    dispatch(setCategories(data.response.categories));
                    setsubCategory(data.response.categories[0].sub_categories ? data.response.categories[0].sub_categories : []);
                    setfilters(data.response.categories[0].attributes ? data.response.categories[0].attributes : []);
                }

            }

        }
        getData();
        if (categories.length > 0) {
            setsubCategory(categories[0].sub_categories ? categories[0].sub_categories : []);
            setfilters(categories[0].attributes ? categories[0].attributes : []);
        }
    }, []);

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

        console.log(mapData.attributes, "Sdsd");

    }
    return <><div className="bgimgcoverlisting">
        {//Top Section
        }



        <div className="pd6p navback-color zIndex3" >
            <Nav hasback={true} />
        </div>
        <div className="pd6p zIndex3">
            <div className="pb-8p">
                <h1 className="headtext">Add Listing</h1>
                <h5 className="headtextchild mt-3 ">Home/Add Listing</h5>
            </div>
        </div>
    </div>
        {
            //happing Cities
        }

        <div className="container mt-5" >
            <Heading5 title="Detailed Information" classes="form-head-main" />
            <div className="row">
                <div className="col-md-8">
                    <Form>
                        <Form.Group className="mt-3" controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control as="select" onChange={(e) => handleCategoryChange(e.target.value)} >
                                        {categories.map(x => <option value={x.id} key={x.id}>{x.name}</option>)}
                                    </Form.Control>

                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Sub Category</Form.Label>
                                    <Form.Control as="select" onChange={(e) => alert(e.target.value)} >
                                        {subCategory.map(x => <option value={x.id} key={x.id}>{x.name}</option>)}
                                    </Form.Control>

                                </Form.Group>
                            </div>






                        </div>

                        <div >
                            <p className="form-group">Features</p>

                        </div>
                        <div className="dsp-flex dsp-flex-wrap ml-n3 mt-4">

                            {
                                filters.map(x => GetFilters(x, handleFilter))

                            }
                            {/* {['Central Airconditioned', 'Window Covering', 'Swimming Pool', 'Heating System', 'Security System'].map((type) => (
                                <div key={`default-${type}`} className="mb-3 mr-4">
                                    <Form.Check
                                        type="checkbox"
                                        id={`default-${type}`}
                                        label={`${type}`}
                                    />


                                </div>
                            ))} */}
                        </div>
                        <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={(x)=>setpictures(pictures.concat(x))}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
            />
                        <Heading5 title="Contact Details" classes="form-head-main mt-4" />
                        <Form.Group className="mt-4" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" readOnly={true} value={user.name} placeholder="Enter Name" />

                        </Form.Group>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" readOnly={true} value={user.email} placeholder="Enter email" />

                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Phone(optional)</Form.Label>
                                    <Form.Control type="text" readOnly={true} value={user.phone} placeholder="Enter Phone number" />

                                </Form.Group>
                            </div>

                        </div>
                        <div className="dsp-flex mt-3">
                            <button className="btn btn-info themeBackgroundColor listingbtn">
                                Publish
                        </button>
                        </div>
                    </Form>
                </div>
            </div>

        </div>
        <Footer />

    </>
}