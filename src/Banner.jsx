import Button from "./Button";

function Banner(){
    const handleCargando = () => alert('Cargando');
    return(
        <div className="banner">
            <h1>Aprende React desde cero</h1>
            <p>Domina la librería más popular del frontend con proyectos prácticos y reales.</p>
            <Button texto="Ver Cursos" onClick={handleCargando} />
        </div>
    );
}

export default Banner;