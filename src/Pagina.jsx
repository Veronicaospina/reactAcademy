import Header from "./Header";
import Banner from "./Banner";
import Courses from "./Courses";
import Students from "./Students";
import Footer from "./Footer";

function Pagina(){
    return(
        <div>
            <Header />
            <Banner />
            <Courses />
            <Students />
            <Footer />
        </div>
    );
}

export default Pagina;