import { Circles } from 'react-loader-spinner';
import './loader.scss';


const LoaderSpinner = () => {
    return (
        <div className="loaderContainer">
       
            <Circles
                height="140"
                width="140"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default LoaderSpinner;