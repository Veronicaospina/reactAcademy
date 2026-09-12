import Counter from "./Counter";

function Students({ ref }){
    return(
        <div ref={ref} className="students">
            <h3>Cuántos estudiantes van a inscribirse?</h3>
            <p>Usa los botones para ajustar el número</p>
            <div className="control">
                <Counter />
            </div>
            <p>estudiantes inscritos</p>
        </div>
    );
}

export default Students;