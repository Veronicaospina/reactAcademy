import Counter from "./Counter";
import './Students.css';

function Students({ ref }){
    return(
        <div ref={ref} className="students">
            <h3 className="students__title">Cuántos estudiantes van a inscribirse?</h3>
            <p className="students__text">Usa los botones para ajustar el número</p>
            <div className="students__panel">
                <Counter />
            </div>
            <p className="students__text">estudiantes inscritos</p>
        </div>
    );
}

export default Students;
