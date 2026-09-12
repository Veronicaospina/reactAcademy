import Header from "./Header";
import Banner from "./Banner";
import Courses from "./Courses";
import Students from "./Students";
import Footer from "./Footer";
import { useRef } from 'react';

function Pagina(){
    const inicioRef = useRef(null);
    
    const cursosRef = useRef(null);
    
    const nosotrosRef = useRef(null);
    
    return(
        <div>
            <Header refA={inicioRef} refB={cursosRef} refC={nosotrosRef}/>
            <Banner ref={inicioRef} refB={cursosRef} />
            <Courses ref={cursosRef}/>
            <Students ref={nosotrosRef}/>
            <Footer />
        </div>
    );
}

export default Pagina;