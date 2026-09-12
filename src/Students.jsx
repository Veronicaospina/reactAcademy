import Counter from "./Counter";

function Students(){
    return(
        <div className="students">
            <h3>Cuántos estudiantes van a inscribirse?</h3>
            <p>Usa los botones para ajustar el número</p>
            <div className="control">
                <Counter />
            </div>
        </div>
    );
}

export default Students;