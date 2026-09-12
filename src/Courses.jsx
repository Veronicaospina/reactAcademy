import './Courses.css';

const cursos = [
  {
    id: 1,
    icono: '⚛️',
    titulo: 'React Básico',
    texto: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.',
    nivel: 'Principiante',
  },
  {
    id: 2,
    icono: '🔁',
    titulo: 'React Hooks',
    texto: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',
    nivel: 'Intermedio',
  },
  {
    id: 3,
    icono: '🗂️',
    titulo: 'Estado Global',
    texto: 'Gestiona el estado con Context API y aprende cuándo usarlo.',
    nivel: 'Intermedio',
  },
  {
    id: 4,
    icono: '🚀',
    titulo: 'React Avanzado',
    texto: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
    nivel: 'Avanzado',
  },
];

function Courses({ ref }){
    return(
        <div ref={ref} className="courses">
            <h3 className="courses__title">Nuestros Cursos</h3>
            <p className="courses__subtitle">Elige el camino que mejor se adapte a tí</p>
            <div className="courses__list">
                {cursos.map(c => (
                    <div className="course-card" key={c.id}>
                        <h5 className="course-card__icon">{c.icono}</h5>
                        <h4 className="course-card__title">{c.titulo}</h4>
                        <p className="course-card__text">{c.texto}</p>
                        <div className="course-card__level">{c.nivel}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;
