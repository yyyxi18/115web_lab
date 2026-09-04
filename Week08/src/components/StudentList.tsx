import { Student } from "../types/student";
import StudentCard from "./StudentCard";

interface StudentListProps {
  students: Student[];
  onDelete: (id: number) => void;
}

function StudentList({
  students,
  onDelete
}: StudentListProps) {
  if (students.length === 0) {
    return <p className="empty-message">目前沒有學生資料。</p>;
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;

