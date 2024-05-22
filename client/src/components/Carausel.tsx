import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Carausel() {
    return(
        <div className="mt-12">
            <Slider {...{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            }}>
                <div>
                    <img src="./banner1.jpg" alt="banner1" />
                </div>
                <div>
                    <img src="./banner2.jpg" alt="banner2" />
                </div>
                <div>
                    <img src="./banner3.jpg" alt="banner3" />
                </div>
            </Slider>
        </div>
    )
}

export default Carausel