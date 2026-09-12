import Button from "./Button";
import './Header.css';

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
            <h3 className="header__logo">ReactAcademy</h3>
            <div className="header__nav">
                <Button className="button--menu" texto="Inicio" onClick={scrollInicio} />
                <Button className="button--menu" texto="Cursos" onClick={scrollCursos} />
                <Button className="button--menu" texto="Nosotros" onClick={scrollNosotros} />
            </div>
        </div>
    );
}

export default Header;
