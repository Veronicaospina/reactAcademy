import Button from "./Button";
import './Banner.css';

function Banner({ ref, refB }){
    const scrollCursos = () => {
        refB.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return(
        <div ref={ref} className="banner">
            <h1 className="banner__title">Aprende <span className="banner__highlight">React</span> desde cero</h1>
            <p className="banner__text">Domina la librería más popular del frontend con proyectos <br /> prácticos y reales.</p>
            <Button className="button--round" texto="Ver Cursos" onClick={scrollCursos} />
        </div>
    );
}

export default Banner;
