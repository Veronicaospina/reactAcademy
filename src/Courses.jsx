function Courses({ ref }){
    
    return(
        <div ref={ref} className="courses">
            <h3>Nuestros Cursos</h3>
            <p>Elige el camino que mejor se adapte a tí</p>
            <div className="cursos">
                <div className="uncurso">
                    <p>⚛️</p>
                    <p>React Básico</p>
                    <p>Componentes, props, estado y eventos. Todo lo que necesitas para empezar.</p>
                    <div className="oval">Principiante</div>
                </div>
                <div className="uncurso">
                    <p>🔁</p>
                    <p>React Hooks</p>
                    <p>Profundiza en useState, useEffect y crea tus propios custom hooks.</p>
                    <div className="oval">Intermedio</div>
                </div>
                <div className="uncurso">
                    <p>🗂️</p>
                    <p>Estado Global</p>
                    <p>Gestiona el estado con Context API y aprende cuándo usarlo.</p>
                    <div className="oval">Intermedio</div>
                </div>
                <div className="uncurso">
                    <p>🚀</p>
                    <p>React Avanzado</p>
                    <p>Rendimiento, patrones avanzados y arquitectura para proyectos grandes.</p>
                    <div className="oval">Avanzado</div>
                </div>
            </div>
        </div>
    );
}

export default Courses;