import React, { FC, useEffect, useState } from 'react';

interface Props{
    image: string[];
}


const DetailImage: FC<Props> = (props) => {
    const { image } = props;
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        if(image){
            setCurrentImage("http://127.0.0.1:8000/media/" + image[0]);
        }
        
    }, [image]);

    return (
        <section className="detail-product-images">
            <ul className="detail-product-image-list">
                {   
                    image
                    ?
                    image.map((item) =>{
                        return <li key={item} className="detail-product-image-list-item" 
                                onClick={ () => setCurrentImage("http://127.0.0.1:8000/media/" + item)}>
                                    <img src={"http://127.0.0.1:8000/media/" + item} alt="" />
                                </li>
                    })
                    :
                    <></>
                }
                
            </ul>

            <div className="detail-product-image-main">
                <div className="image-main"><img src={currentImage} alt="" /></div>
            </div>
        </section>
    );
};

export default DetailImage;