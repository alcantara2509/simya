import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cardTexts } from "../../components/Carousel/cardTexts";
import { Cards } from "../../components/Carousel/Cards";
import {
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
  CarouselImage6,
  CarouselImage7,
  CarouselImage8,
} from "../../assets/svg/carousel";
import BGGradientLeft from "../../assets/images/BlurLeft.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export function CarouselComponent() {
  return (
    <div
      className="w-full flex justify-center items-center mt-40 mb-10"
      id="occupation"
    >
      <div className="w-full max-w-[1400px] bg-white ">
        <div className="w-full flex items-center justify-center mb-10">
          <h2 className="text-4xl font-bold text-blue-200">Nossa Atuação</h2>
        </div>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={false}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          showDots={false}
          itemClass="carousel-item-padding-40-px"
        >
          <Cards texts={cardTexts.carousel1} image={CarouselImage1} />
          <Cards texts={cardTexts.carousel2} image={CarouselImage2} />
          <Cards texts={cardTexts.carousel3} image={CarouselImage3} />
          <Cards texts={cardTexts.carousel4} image={CarouselImage4} />
          <Cards texts={cardTexts.carousel5} image={CarouselImage5} />
          <Cards texts={cardTexts.carousel6} image={CarouselImage6} />
          <Cards texts={cardTexts.carousel7} image={CarouselImage7} />
          <Cards texts={cardTexts.carousel8} image={CarouselImage8} />
        </Carousel>
      </div>
      <img
        src={BGGradientLeft}
        alt="gradiente"
        className="absolute left-0 object-cover"
      />
    </div>
  );
}
