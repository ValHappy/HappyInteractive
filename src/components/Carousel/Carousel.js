import React, { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Carousel/Carousel.css"
import { MenuContext } from '../../containers/App/Provider';
import { imgsFront } from "../../const/projectInfo";


export const Carousel = ({ history }) => {

    const [, setIndex] = useContext(MenuContext)

    const handleClick = (e) => {
        const i = e.target.dataset.value;
        history.push("/project?id=" + i);
        setIndex(i);
    }

    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        cssEase: "linear"
    }
    return (
        <div className="container mt-5 carousel">
            <Slider {...settings}>
                {

                    imgsFront.map((img, i) =>
                        <div className="card-wrapper">
                            <div className="card" onClick={handleClick} >
                                <div className="card-image">
                                    <img src={img} data-value={i}/>
                                </div>
                            </div>
                        </div>
                    )
                }

            </Slider>
        </div>
    )
}