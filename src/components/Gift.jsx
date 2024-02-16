import React, { useEffect, useState } from 'react'
import './Gift.css'
import { Link, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoLinkExternal } from "react-icons/go";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Gift() {
  const [data, setdata] = useState([])
  const [containerClass, setContainerClass] = useState('container');
  const location = useLocation();

  useEffect(() => {

    const hasMenu = window.location.pathname.includes('/menu') || window.location.pathname.includes('/gift');

    setContainerClass(hasMenu ? '' : 'container');

  }, [location]);
  useEffect(() => {
    fetch('https://faridmsta.github.io/starbucksjson/db.json')
      .then(res => res.json())
      .then(res => setdata(res.gift))
  }, [])

  return (
    <div>
      <section className="gift">
        <div className={`${containerClass}`}>

          <div className="giftWrapper">
            <div className="line feartured">
              <div className="headOfLine">
                <h2>Featured</h2><Link>See all</Link>
              </div>
              <div className="cards">
                <Swiper
                  slidesPerView={(screen.width < 480) ? 2 : (screen.width < 1024) ? 3 : 4}
                  spaceBetween={30}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {data?.featured?.map((item) =>
                    <SwiperSlide><Link><img src={`${item.img}`} alt="" /></Link></SwiperSlide>
                  )}

                </Swiper>
              </div>
            </div>
            <div className="instantNews">
              <img src="https://www.starbucks.com/weblx/images/gift/group-gift-cards.png" alt="" />
              <p class="text-xs pl3">New! Effortlessly send up to 10 eGifts per purchase. Select a design to start!</p>
            </div>
            <div className="question">
              <div className="questionWrap">
                <div className="top">
                  <div className='topstart'>
                    <h2 class="sb-heading text-md pr3 text-semibold" tabindex="-1">Received a gift card?</h2>
                    <p>Earns 2 X  per $1</p>
                  </div>
                  <div className="register">
                    <Link>Add or Reload</Link>
                    <Link>Check balance</Link>
                  </div>
                </div>
                <div className="bottom">
                  <Link><span>Card Terms & Conditions</span><GoLinkExternal /></Link>
                </div>

              </div>
            </div>
            <div className="line feartured">
              <div className="headOfLine">
                <h2>Lunar New Year | 2/10</h2>
              </div>
              <div className="cards">
                <Swiper
                  slidesPerView={(screen.width < 480) ? 2 : (screen.width < 1024) ? 3 : 4}
                  spaceBetween={30}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {data?.lunaryear?.map((item) =>
                    <SwiperSlide ><Link ><img src={`${item.img}`} alt="" /></Link></SwiperSlide>
                  )}

                </Swiper>
              </div>
            </div>
            <div className="line feartured">
              <div className="headOfLine">
                <h2>Winter | 2/14</h2><Link>See all</Link>
              </div>
              <div className="cards">
                <Swiper
                  slidesPerView={(screen.width < 480) ? 2 : (screen.width < 1024) ? 3 : 4}
                  spaceBetween={30}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {data?.winter?.map((item) =>
                    <SwiperSlide><Link><img src={`${item.img}`} alt="" /></Link></SwiperSlide>
                  )}

                </Swiper>
              </div>
            </div>
            <div className="line feartured">
              <div className="headOfLine">
                <h2>Celebration</h2><Link>See all</Link>
              </div>
              <div className="cards">
                <Swiper
                  slidesPerView={(screen.width < 480) ? 2 : (screen.width < 1024) ? 3 : 4}
                  spaceBetween={30}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {data?.celebration?.map((item) =>
                    <SwiperSlide><Link><img src={`${item.img}`} alt="" /></Link></SwiperSlide>
                  )}

                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gift