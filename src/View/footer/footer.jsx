import Container from "../../components/container/container"
import './footer.scss'
import { TbBrandFacebook } from "react-icons/tb";
import { LuLinkedin, LuYoutube } from "react-icons/lu";
import { FaHashtag, FaRegUser } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

import footerFon1 from '../../images/footerFon1.png'
import shepe1 from "../../images/Shape1.svg"
import shepe2 from '../../images/shepe.png'
import { CiMail } from "react-icons/ci";
import { useForm } from "react-hook-form";



const Footer = ({ active, setActive }) => {

    const { register, handleSubmit,  formState: {isDirty, isValid, errors }, reset} = useForm({ mode: "onBlur" })
    const sendInfo = (data) => {
        console.log(JSON.stringify(data));
        reset();
    }

    return (
        <>
            <Container>
                <div className="footer-wrapper">
                    <div className="left-footer">
                        <h6 className="title">follow us</h6>
                        <div className="icon-wrapper">
                            <ul>
                                <li>
                                    <div className="facebook">
                                        <TbBrandFacebook />
                                    </div>
                                </li>
                                <li>
                                    <LuLinkedin />
                                </li>
                                <li>
                                    <FaHashtag />
                                </li>
                                <li>
                                    <IoLogoTwitter />
                                </li>
                            </ul>
                        </div>
                        <h6 className="title">information</h6>
                        <div className="footer-list">
                            <div className="list1">
                                <ul>
                                    <li>About Fapster app</li>
                                    <li>Get in Touch</li>
                                    <li>Get in Touch</li>
                                </ul>
                            </div>
                            <div className="list2">
                                <ul>
                                    <li>Onhovered / Active</li>
                                    <li>Privacy Policy</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                            <div className="list3">
                                <ul>
                                    <li>We are hiring!</li>
                                    <li>Resources</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="right-footer">
                        <h6 className="title">follow us</h6>
                        <h5 className="mail">hello@fapsterapp.com</h5>
                        <h6 className="title title2">keep in touch</h6>
                        {/* footer form  */}
                        <form className="form-wrapper" onSubmit={handleSubmit(sendInfo)}>
                            <div className="form-top">
                                <div className="position_icon">
                                    <div>
                                        <input type="text" className="first-input" placeholder="Your name"
                                            {...register("yourName",
                                                {
                                                    required: "Enter Your Name",
                                                    pattern: {
                                                        value: /^[A-Z].*/,
                                                        message: "Start with a capital letter"
                                                    }
                                                }
                                            )}
                                        />
                                        <span className="errors">{errors?.yourName?.message}</span>
                                    </div>
                                    <span className="icon"><FaRegUser /></span>
                                </div>
                                <div className="position_icon">
                                    <div>
                                        <input type="text" className="second-input" placeholder="E-mail" 
                                            {
                                                ...register("email",
                                                    {
                                                        required: "Enter your Email",
                                                        pattern: {
                                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                            message: "Erorr Email"
                                                        }
                                                    }
                                                )
                                            }
                                        />
                                        <span className="errors">{errors?.email?.message}</span>
                                    </div>
                                    <span className="icon"><CiMail /></span>
                                </div>
                            </div>
                            <div className="form-bottom">
                                <textarea ></textarea>
                                <button disabled={!isValid}  onClick={() => setActive(true)}>SEND</button>
                            </div>
                        </form>
                        {/* form section end */}
                        
                    </div>
                </div>
                <div className="footer-wrapper2">
                    <h3>Copyright © 2018 • Your Company<br />
                        All rights reserved</h3>
                    <h4>Made in Setproduct.com<br />
                        One man digital agency</h4>
                    <h5>hello@setproduct.com</h5>
                    <div className="icons">
                        <ul>
                            <li><TbBrandFacebook /></li>
                            <li> <LuLinkedin /></li>
                            <li> <FaHashtag /></li>
                            <li><IoLogoTwitter /></li>
                            <li><LuYoutube /></li>
                        </ul>
                    </div>
                    <img src={shepe1} alt="firstimg" className="shepe1" />
                    <img src={shepe2} alt="secondimg" className="shepe2" />
                </div>

            </Container>
            <div className="footerFons">
                <img src={footerFon1} alt="footerFon1" className="footerFon1" />
            </div>
        </>
    )
}

export default Footer;