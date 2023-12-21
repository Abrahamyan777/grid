import './modalMenu.scss'
import { MdClose } from "react-icons/md";




const ModalMenu = ({ active1, setActive1 }) => {


    return (
        <div className={active1 ? 'modal1 active' : 'modal1'} onClick={() => setActive1(false)}>
            <div className={active1 ? 'modal_contant act ' : 'modal_contant'} onClick={(e) => e.stopPropagation()}>
                <div className='modal_title'>
                    <h2>Menu</h2>
                    <MdClose onClick={() => setActive1(false)} />
                </div>
                <div className='modal-menu-list'>
                    <ul>
                        <li>Who we are</li>
                        <li>What we do</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ModalMenu;