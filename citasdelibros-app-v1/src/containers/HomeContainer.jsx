
import React from 'react';
//import PropTypes from 'prop-types';
import { useHistory, withRouter} from "react-router-dom";
import AppFrame from '../components/AppFrame';
import BooksAccions from '../components/BooksAccions';

const HomeContainer = () => {

    

    let history = useHistory();
    const handleOnClick = () => {
        
        console.log("clickeando");
        
        
        history.push('/books');
        
    }

    return (
        <div>
            
            <AppFrame 
                header='Home'
                body={
                    <div>
                        Pantalla Inicial
                        <BooksAccions>
                            <button onClick={handleOnClick}>Listado de Libros</button>
                            
                        </BooksAccions>
                    </div>
                }
            >
                
                
            </AppFrame>
        </div>
    );
};



export default withRouter(HomeContainer); 


