
import React from 'react';
//import PropTypes from 'prop-types';
import { useHistory, withRouter} from "react-router-dom";
import AppFrame from '../components/AppFrame';
import BooksAccions from '../components/BooksAccions';
//import { apiUnplash } from './../api/unplash';
import book from "../img/book.png"

const HomeContainer = () => {

    
    /*let changuebg = () => {
        document.querySelector("body").style.backgroundImage = `url("image.urls.thumb")` 
    }*/


    let history = useHistory();
    const handleOnClick = () => {
        
        console.log("clickeando");
        
        //apiUnplash();
        
        history.push('/books');
        
        //document.querySelector('.app-frame').style.background="white";
        
    }

    return (
        <div>
            
            <AppFrame 
                header='¡Bienvenid@!'
                body={

                    
                    <div>
                        <img src={book} alt="libro"/>
                        <p className="tutorial">Te invitamos a explorar las citas subidas por los usuarios, y si lo deseas puedes aportar una nueva.</p>
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


