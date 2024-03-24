import './error.scss'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function ErrorPage() {

    const navigate = useNavigate();

    useEffect(() => {
      navigate("/");
    }, [navigate]);

    return(
        <div className='404Container'>
            <span>404</span>
        </div>
    ) 
}

export default ErrorPage;