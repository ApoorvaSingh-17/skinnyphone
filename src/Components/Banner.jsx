import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import skin1 from "../assets/skin1.jpg"
import skin2 from "../assets/skin2.jpg"
import skin3 from "../assets/skin3.jpg"
// import skin4 from "../assets/skin4.jpg"
// import skin5 from "../assets/skin5.jpg"
// import skin6 from "../assets/skin6.jpg"
// import skin7 from "../assets/skin7.jpg"

const FirstSlide = () => (
<div className="split-slide">
    <div className="img-container">
        <img src={skin1} alt="skinimg" />
    </div>
    <div className="info-container">
        <h1 className="title">Your Phone, Your Canvas.</h1>
        <p className="desc">Design your own skin</p>
        <button className="cta">Shop Now</button>

    </div>
 </div>
)

const Secondslide = () => (
    <div className="slide-center">
        <div className="img-content">
            <img src={skin2} alt="skinimg"/>
        </div>
        <div className="info-content">
            <h1>Design Your Own Skin</h1>
            <p className="desc">Mix, preview and order — it’s that easy.</p>
        </div>
        <div className="img-content">
            <img src={skin3} alt="skinimg"/>
        </div>
    </div>

)

const ThirdSlide = () => (
    <div className="slide-bg">
        <div className="banner-bg"></div>
        <div className="info-text">
            <h1 >Style, Our Quality</h1>

            <p className="desc">High-quality wraps with precise cutouts.</p>
               <button className="cta">Explore Collection</button>
        </div>
     </div>

)


const Banner = () => {

    const slides = [FirstSlide, Secondslide, ThirdSlide];
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        const lastIndex = slides.length - 1;

        if(direction === "left") {
            setSlideIndex((prev) => (prev > 0 ? prev - 1 : lastIndex))
        } else {
            setSlideIndex((prev) => (prev < lastIndex ? prev + 1 : 0))
        }

    };

    return (
        <div className="banner-container">
            <div className="left-arrow" onClick={() => handleClick("left")}>
                <div className="arrow">
                    <ArrowLeftOutlined />
                </div>
            </div>
            <div className="wrapper">
                <div className="slides"
                style={{transform: `translateX(${slideIndex * -100}vw)`}}
                >
                    {slides.map((SlideComp,index) => (
                        <div className="slide-wrap" key={index}>
                        <SlideComp />
                        </div>
                    ))}
                    
                </div>
             
            </div>
            <div className="right-arrow" onClick={() => handleClick("right")}>
                <div className="arrow">
                    <ArrowRightOutlined />
                </div>
            </div>
        </div>
    )
}

export default Banner

// // File: Banner.jsx
// import React, { useState } from "react";
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
// import skin1 from "../assets/skin1.jpg";
// import skin2 from "../assets/skin2.jpg";
// import skin3 from "../assets/skin3.jpg";


// const FirstSlide = () => (
//   <div className="split-slide">
//     <div className="img-container">
//       <img src={skin1} alt="skin 1" />
//     </div>
//     <div className="info-container">
//       <h1 className="title">Your Phone, Your Canvas.</h1>
//       <p className="desc">Design your own skin</p>
//       <button className="cta">Shop Now</button>
//     </div>
//   </div>
// );

// const SecondSlide = () => (
//   <div className="slide-center">
//     <div className="img-content">
//       <img src={skin2} alt="skin 2" />
//     </div>
//     <div className="info-content">
//       <h1>Design Your Own Skin</h1>
//       <p className="desc">Mix, preview and order — it’s that easy.</p>
//     </div>
//     <div className="img-content">
//       <img src={skin3} alt="skin 3" />
//     </div>
//   </div>
// );

// const ThirdSlide = () => (
//   <div className="slide-bg">
//     <div className="banner-bg" aria-hidden="true" />
//     <div className="info-text">
//       <h1>Style, Our Quality</h1>
//       <p className="desc">High-quality wraps with precise cutouts.</p>
//       <button className="cta">Explore Collection</button>
//     </div>
//   </div>
// );

// const Banner = () => {
//   const slideComponents = [FirstSlide, SecondSlide, ThirdSlide];
//   const [slideIndex, setSlideIndex] = useState(0);

//   const handleClick = (direction) => {
//     const lastIndex = slideComponents.length - 1;
//     if (direction === "left") {
//       setSlideIndex((prev) => (prev > 0 ? prev - 1 : lastIndex));
//     } else {
//       setSlideIndex((prev) => (prev < lastIndex ? prev + 1 : 0));
//     }
//   };

//   return (
//     <div className="banner-container">
//       <div
//         className="left-arrow"
//         role="button"
//         aria-label="Previous slide"
//         onClick={() => handleClick("left")}
//       >
//         <div className="arrow">
//           <ArrowLeftOutlined />
//         </div>
//       </div>

//       <div className="wrapper">
//         {/* slides is the element that translates */}
//         <div
//           className="slides"
//           style={{ transform: `translateX(${slideIndex * -100}vw)` }}
//         >
//           {slideComponents.map((SlideComp, index) => (
//             <div className="slide-wrap" key={index}>
//               <SlideComp />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div
//         className="right-arrow"
//         role="button"
//         aria-label="Next slide"
//         onClick={() => handleClick("right")}
//       >
//         <div className="arrow">
//           <ArrowRightOutlined />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
