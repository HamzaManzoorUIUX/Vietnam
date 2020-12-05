import React from 'react';
import Footer from '../components/home/footer'
import Nav from '../components/navbar'
import { makeStyles } from "@material-ui/core";
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaInstagram } from 'react-icons/fa';

const useStyles = makeStyles(() => ({

}))
function BlogDetail(props) {
    const classes = useStyles();
    return (
        <div>
            <div className="bgimgcoverBlogDetail">
                {//Top Section
                }
                <div className="pd6p navback-color zIndex3" >
                    <Nav hasback={true} />
                </div>
                <div className="pd6p zIndex3">
                    <div className="py-5 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="h-headtext pt-md-5">Retail banks wake up to digital<br /> lending this year</h1>
                        <div className='writerInfo d-md-flex'>
                            <div className='mr-3 mr-md-5'>
                                <b>
                                    Authot:
                               </b>
                       Ali Tufan
                        </div>
                            <div>
                                <b>
                                    Published:
</b>
Oct 16th,2020
</div>
                        </div>
                        <div className='socialMedia-Icons mt-3 pb-md-5'>
                            <FaFacebookF />
                            <FaTwitter />
                            <GrLinkedinOption />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
<div className='container text-left'>
<div className='detaildecrip'>
<p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. MaioresLorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores nostrum quo ex, temporibus alias recusandae voluptates beatae inventore repudiandae ea pariatur laborum praesentium quis molestiae, nulla quae. Inventore, recusandae vero?
</p>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequuntur quos tenetur quod, ipsa maxime, repudiandae odio totam tempora blanditiis, beatae omnis harum eum in dolores quas mollitia. Quasi, provident!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores nostrum quo ex, temporibus alias recusandae voluptates beatae inventore repudiandae ea pariatur laborum praesentium quis molestiae, nulla quae. Inventore, recusandae vero?
</p>
<p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores nostrum quo ex, temporibus alias recusandae voluptates beatae inventore repudiandae ea pariatur laborum praesentium quis molestiae, nulla quae. Inventore, recusandae vero?
</p>
</div>
<div className='detailquote'>
<h3 className='font-weight-bold'>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quod odit quaerat optio repellendus asperiores doloremque neque laboriosam eaque voluptates maxime excepturi, a illum similique alias eveniet reiciendis, magnam incidunt.
</h3>
<h3 className='font-weight-normal'>
SAID POLITO
</h3>
</div>
<div>
    <p className='columTwo'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo eaque mollitia reprehenderit consequatur blanditiis nam ratione harum, adipisci sint ab est similique eos incidunt saepe fugiat quia odio maxime!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo eaque mollitia reprehenderit consequatur blanditiis nam ratione harum, adipisci sint ab est similique eos incidunt saepe fugiat quia odio maxime!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo eaque mollitia reprehenderit consequatur blanditiis nam ratione harum, adipisci sint ab est similique eos incidunt saepe fugiat quia odio maxime!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo eaque mollitia reprehenderit consequatur blanditiis nam ratione harum, adipisci sint ab est similique eos incidunt saepe fugiat quia odio maxime!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo eaque mollitia reprehenderit consequatur blanditiis nam ratione harum, adipisci sint ab est similique eos incidunt saepe fugiat quia odio maxime!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo eaque mollitia reprehenderit consequatur blanditiis nam ratione harum, adipisci sint ab est similique eos incidunt saepe fugiat quia odio maxime!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo eaque mollitia reprehenderit consequatur blanditiis nam ratione harum, adipisci sint ab est similique eos incidunt saepe fugiat quia odio maxime!
    </p>
    <p className='mb-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate laudantium voluptates unde amet repellat quisquam tenetur minus? Magnam quos non inventore qui natus enim veritatis aliquid, praesentium nesciunt alias!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate laudantium voluptates unde amet repellat quisquam tenetur minus? Magnam quos non inventore qui natus enim veritatis aliquid, praesentium nesciunt alias!
    </p>
</div>
<div className='blogDetailsImages'>
<div className='img60'></div>
<div className='img40'></div>
</div>
<Footer />
</div>
        </div>
    );
}

export default BlogDetail;