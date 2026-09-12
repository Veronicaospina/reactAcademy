import Button from "./Button";

function Banner({ ref, refB }){
    const scrollCursos = () => {
        refB.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return(
        <div ref={ref} className="banner">
            <h1>Aprende <span style={{ color: "#e94560" }}>React</span> desde cero</h1>
            <p>Domina la librería más popular del frontend con proyectos <br /> prácticos y reales.</p>
            <Button className="round" texto="Ver Cursos" onClick={scrollCursos} />
        </div>
    );
}

export default Banner;