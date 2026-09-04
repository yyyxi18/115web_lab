import {
  FormEvent,
  useState
} from "react";
import { Student } from "../types/student";

interface StudentFormProps {
  onAdd: (student: Student) => void;
  nextId: number;
}

function StudentForm({
  onAdd,
  nextId
}: StudentFormProps) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [grade, setGrade] = useState("3");

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): void {
    event.preventDefault();

    if (name.trim() === "" || department.trim() === "") {
      return;
    }

    onAdd({
      id: nextId,
      name: name.trim(),
      department: department.trim(),
      grade: Number(grade)
    });

    setName("");
    setDepartment("");
    setGrade("3");
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="student-name">姓名</label>
        <input
          id="student-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="例如：王小明"
        />
      </div>

      <div>
        <label htmlFor="student-department">系所</label>
        <input
          id="student-department"
          value={department}
          onChange={(event) =>
            setDepartment(event.target.value)
          }
          placeholder="例如：資訊管理學系"
        />
      </div>

      <div>
        <label htmlFor="student-grade">年級</label>
        <select
          id="student-grade"
          value={grade}
          onChange={(event) => setGrade(event.target.value)}
        >
          <option value="1">1 年級</option>
          <option value="2">2 年級</option>
          <option value="3">3 年級</option>
          <option value="4">4 年級</option>
        </select>
      </div>

      <button type="submit">新增學生</button>
    </form>
  );
}

export default StudentForm;

