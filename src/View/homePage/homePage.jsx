import Container from '../../components/container/container';
import './homePage.scss';
import img from '../../images/homePage-fon1.png'
import svg from '../../images/homePage-fonSvg.svg'
import icon from '../../images/Icon.png'
import wap from '../../images/Wave.png'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';



const HomePage = ({ footerRef }) => {
    const [screenWith, setScreenWith] = useState(window.innerWidth)

    useEffect(() => {
        const changWidth = () => {
            setScreenWith(window.innerWidth)
        }
        window.addEventListener("resize", changWidth);
        return (
            window.addEventListener("resize", changWidth)
        )
    }, [screenWith])

    const handlClick = () => {
        footerRef.current?.scrollIntoView({ behavior: "smooth" })
    }


    return (
        <div className={(screenWith > 1024) ? "home-page-wrapper" : 'home-page-wrapper home-page-wrapper-back'}>
            <div className='backround-img'>
                <img src={img} className='img' alt='img' />
                {(screenWith < 1024) && (
                    <>
                        <img src={wap} className='wap' alt='wap' />
                    </>
                )}
            </div>
            <img src={svg} className='svg' alt='svg' />

            <Container>
                <div className='combine'>
                    <div className='combine-inner'>

                        {(screenWith > 1024) ? (
                            <>

                                Combine <span> fine
                                    <div className='borderBottom'></div></span> images
                                <h2>To represent a product</h2>
                            </>
                        )
                            :
                            <>

                                Combine  <br></br><span > Cool
                                    <div className='borderBottom borderBottom1'></div>
                                </span> images
                                <h2 className='resizing'>To create any grid by scaling and resizing</h2>
                                <div className='arrowDown'>
                                    <img src={icon} alt='icon' />
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className='images'>
                    <div className='first-title'>
                        <p>Use mixed grid with imagery, replace with your own photos and descriptions</p>
                    </div>
                    <div className='second-img'> </div>
                    <div className='third-img'> </div>
                    <div className='fourth-img'> </div>
                    <div className='img5'> </div>
                    <div className='img6'> </div>
                    <div className='img7'> </div>
                    <div className='img8'> </div>
                    <div className='last-section'>
                        <p>This is multipurpose grid, it fits for portfolio, services or agency web site</p>
                    </div>
                    <button className='bnt-section' onClick={() => handlClick()}>Learn more</button>
                </div>
            </Container>
        </div>
    )
}

export default HomePage;