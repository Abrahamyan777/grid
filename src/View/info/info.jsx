import Container from '../../components/container/container';
import './info.scss'
import { BiPhoneCall } from "react-icons/bi";
import { FiPieChart } from "react-icons/fi";
import { GoZap } from "react-icons/go";
import { GoThumbsup } from "react-icons/go";

const Info = () => {
    return (
        <Container>
            <div className='info-wrapper'>
                <div className='info-title'>
                    <h2 className='delivering'>Delivering good designs since 1954 🚚💨</h2>
                    <p className='info-text'>
                        We’re the first multi-purpose design kit solutions for businesses. We help you bridge <br />
                        gaps between your layouts, templates and developers to empower all involved.
                    </p>
                </div>
                <div className='info-contant'>
                    <div className='block block1'>
                        <div className='div-icon1 div-icon'>
                            <BiPhoneCall />
                        </div>
                        <h5 className='title'>Support</h5>
                        <p className='text'>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>
                        <button>Learn more</button>
                    </div>
                    <div className='block block2'>
                        <div className='block block2'>
                            <div className='div-icon2 div-icon'>
                                <FiPieChart />
                            </div>
                            <h5 className='title'>Sales growth</h5>
                            <p className='text'>Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className='block block3'>
                        <div className='block block3'>
                            <div className='div-icon3 div-icon'>
                                <GoZap />
                            </div>
                            <h5 className='title'>Coponents-driven</h5>
                            <p className='text'>Delivering faster and more personalized support with shared screens and cool design systems for Figma</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <div className='block block4'>
                        <div className='block block4'>
                            <div className='div-icon4 div-icon'>
                                <GoThumbsup />
                            </div>
                            <h5 className='title'>Swap the icon</h5>
                            <p className='text'>You can toggle to any icon within Instances and customize outlined stroke to more bolder or lightera</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Info;
