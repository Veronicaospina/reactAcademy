import Button from "./Button";


function Header({refA,refB,refC}){
    const scrollInicio = () => {
        refA.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollCursos = () => {
        refB.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollNosotros = () => {
        refC.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return(
        <div className="header">
            <h3>ReactAcademy</h3>
            <div className="navegacion">
                <Button className="menu" texto="Inicio" onClick={scrollInicio} />
                <Button className="menu" texto="Cursos" onClick={scrollCursos} />
                <Button className="menu" texto="Nosotros" onClick={scrollNosotros} />
            </div>
            
        </div>
    );
}

export default Header;