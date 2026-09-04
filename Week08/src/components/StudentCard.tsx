import { Student } from "../types/student";

interface StudentCardProps {
  student: Student;
  onDelete: (id: number) => void;
}

function StudentCard({
  student,
  onDelete
}: StudentCardProps) {
  return (
    <article className="student-card">
      <div>
        <span className="student-id">#{student.id}</span>
        <h3>{student.name}</h3>
        <p>{student.department}</p>
        <p>{student.grade} 年級</p>
      </div>

      <button
        type="button"
        className="danger-button"
        onClick={() => onDelete(student.id)}
      >
        刪除
      </button>
    </article>
  );
}

export default StudentCard;

