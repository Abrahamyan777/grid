import Container from "../../components/container/container";
import './price.scss';
import { FaCheck } from "react-icons/fa";



const Price = ({footerRef}) => {
    return (
        <Container>
            <div className="price-wrapper"  ref={footerRef}>
                <div className="price-title">
                    <h2 className="price-title-1">Affordable pricing</h2>
                    <div className="price-title-2">Bill me &nbsp;
                        <span>monthly &nbsp;
                            <div className="borderBottom"></div>
                        </span>
                        • yearly
                    </div>
                </div>
                <div className="price-inner-blocks">
                    <div className="first-block priceBlock">
                        <div className="student">
                            <span>Student</span>
                        </div>
                        <div className="price">
                            <h2 className="free">Free </h2>
                            <span>/ forever</span>
                        </div>
                        <div className="list-container">
                            <ul>
                                <li>
                                    <div className="leftSvg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Components-driven system</p>
                                </li>
                                <li>
                                    <div className="leftSvg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Sales-boosting landing pages</p>
                                </li>
                                <li>
                                    <div className="leftSvg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Awesome Feather icons pack</p>
                                </li>
                            </ul>
                            <div className="btn-container">
                                <button>Try for free</button>
                            </div>
                        </div>
                    </div>
                    <div className="second-block priceBlock">
                        <div className="fonposition"></div>
                        <div className="student individual">
                            <span>👤 Individual</span>
                            <button>best!</button>
                        </div>
                        <div className="price">
                            <h2 className="free">$24  </h2>
                            <span>/ month</span>
                        </div>
                        <div className="list-container">
                            <ul >
                                <li>
                                    <div className="leftSvg second-svg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Components-driven system</p>
                                </li>
                                <li>
                                    <div className="leftSvg second-svg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Sales-boosting landing pages</p>
                                </li>
                                <li>
                                    <div className="leftSvg second-svg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Awesome Feather icons pack</p>
                                </li>
                                <li>
                                    <div className="leftSvg second-svg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Themed into 3 different styles</p>
                                </li>
                                <li>
                                    <div className="leftSvg second-svg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Will help to learn Figma</p>
                                </li>
                            </ul>
                            <div className="btn-container second-btn">
                                <button>Regular license</button>
                            </div>
                        </div>
                    </div>
                    <div className="third-block priceBlock">
                        <div className="student">
                            <span>👥 Corporate</span>
                        </div>
                        <div className="price">
                            <h2 className="free">$12  </h2>
                            <span>/ editor</span>
                        </div>
                        <div className="list-container">
                            <ul>
                                <li>
                                    <div className="leftSvg thirdSvg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Components-driven system</p>
                                </li>
                                <li>
                                    <div className="leftSvg thirdSvg ">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Sales-boosting landing pages</p>
                                </li>
                                <li>
                                    <div className="leftSvg thirdSvg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Awesome Feather icons pack</p>
                                </li>
                                <li>
                                    <div className="leftSvg thirdSvg">
                                        <FaCheck />
                                    </div>
                                    <p className="text">Themed into 3 different styles</p>
                                </li>
                            </ul>
                            <div className="btn-container">
                                <button>Extended license</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Price;