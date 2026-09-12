import Button from "./Button";

function Header(){
    const handleCargando = () => alert('Cargando');
    return(
        <div className="header">
            <h3>ReactAcademy</h3>
            <div>
                <Button className="menu" texto="Inicio" onClick={handleCargando} />
                <Button className="menu" texto="Cursos" onClick={handleCargando} />
                <Button className="menu" texto="Nosotros" onClick={handleCargando} />
            </div>
            
        </div>
    );
}

export default Header;