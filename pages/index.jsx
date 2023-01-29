import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var $ = require('jquery');
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
// const inter = Inter({ subsets: ['latin'] })

const Responsive = {
  0: {
    items: 1.5,
    margin: 5
  },
  768: {
    items: 1.5,
    margin: 10
  },
  1024: {
    items: 2.5,
    margin: 10
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>PlayFlix</title>
        <meta name="description" content="A movie info website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container-fluid'>
        {/* Nav bar  */}
        {/* <nav className='navbar navbar-expand-lg d-sm-flex p-0 m-0'>
          <ul className='navbar-nav col-3'>
            <li className='navbar-brand text-white'>LOGO</li>
          </ul>
         <div className='d-flex justify-content-between col-9'>
          <ul className='d-flex navbar-nav'>
            <li className='nav-link text-white fs-5'>Home</li>
            <li className='nav-link text-white fs-5'>Series</li>
            <li className='nav-link text-white fs-5'>TV shows</li>
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-link text-white fs-5'>NOTI</li>
          </ul>
         </div>
        </nav> */}
        {/* Nav bar ends  */}

        {/* Main content  */}
        <div className='d-sm-flex'>
          <div className='col-2 bg-secondary p-3'>  
            <p className='p-0 m-0 mb-2'>Menu</p>
            <div>
               <p>
                  <button className='btn btn'>
                    <a href="">Home</a>
                  </button>
               </p>
               <p>
                  <button className='btn btn'>
                    <a href="">Discovery</a>
                  </button>
               </p>
               <p>
                  <button className='btn btn'>
                    <a href="">Community</a>
                  </button>
               </p>
               <p>
                  <button className='btn btn'>
                    <a href="">Search</a>
                  </button>
               </p>
            </div>

            <div className='border-top'>
               <p>
                  <button className='btn btn'>
                    <a href="">Setting</a>
                  </button>
               </p>
               <p>
                  <button className='btn btn'>
                    <a href="">Help</a>
                  </button>
               </p>
               <p>
                  <button className='btn btn'>
                    <a href="">Exit</a>
                  </button>
               </p>
            </div>

          </div>

          <div className='col-7'>
            <p className='m-1'>
              Trending Movies 🔥
            </p>
            {/* Carousel */}
            <div>
              <OwlCarousel responsive={Responsive} className='ms-2 me-2'>
                <div className=' d-flex bg-secondary p-1 rounded-3'>
                  <div className='col-4'>
                    bsj
                  </div>
                  <div className='col-8'>
                    dff
                  </div>
                </div>
                <div className='bg-secondary p-1 rounded-3'>
                  <h4>2</h4>
                  <h4>2</h4>
                  <h4>2</h4>
                </div>
                <div className='bg-secondary p-1 rounded-3'>
                  <h4>3</h4>
                  <h4>3</h4>
                  <h4>3</h4>
                </div>
                <div className='bg-secondary p-1 rounded-3'>
                  <h4>4</h4>
                  <h4>4</h4>
                  <h4>4</h4>
                </div>
                <div className='bg-secondary p-1 rounded-3'>
                  <h4>5</h4>
                  <h4>5</h4>
                  <h4>5</h4>
                </div>
              </OwlCarousel>
            </div>
          </div>

          <div className='col-3 bg-danger' style={{zIndex: '1'}}>
            Right
          </div>
        </div>
      </main>
    </>
  )
}
