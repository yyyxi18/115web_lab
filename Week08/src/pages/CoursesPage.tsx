import { useState } from "react";
import CourseCard from "../components/CourseCard";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import { Course } from "../types/course";
import { Student } from "../types/student";

const initialCourses: Course[] = [
  {
    id: 1,
    title: "HTML",
    description: "學習網頁的基本結構。",
    level: "基礎"
  },
  {
    id: 2,
    title: "CSS",
    description: "學習網頁樣式與版面。",
    level: "基礎"
  },
  {
    id: 3,
    title: "React",
    description: "學習 Component、Props 與 State。",
    level: "進階"
  }
];

const initialStudents: Student[] = [
  {
    id: 1,
    name: "王小明",
    department: "資訊管理學系",
    grade: 3
  },
  {
    id: 2,
    name: "陳小華",
    department: "資訊工程學系",
    grade: 3
  },
  {
    id: 3,
    name: "林小美",
    department: "企業管理學系",
    grade: 2
  }
];

function CoursesPage() {
  const [students, setStudents] =
    useState<Student[]>(initialStudents);

  function handleAddStudent(student: Student): void {
    setStudents((currentStudents) => [
      ...currentStudents,
      student
    ]);
  }

  function handleDeleteStudent(id: number): void {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id)
    );
  }

  const nextStudentId =
    students.length === 0
      ? 1
      : Math.max(...students.map((student) => student.id)) + 1;

  return (
    <main className="container page">
      <section className="panel">
        <h2>課程清單</h2>

        <div className="course-list">
          {initialCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>學生名單</h2>
        <p>目前共有 {students.length} 位學生。</p>

        <StudentForm
          onAdd={handleAddStudent}
          nextId={nextStudentId}
        />

        <StudentList
          students={students}
          onDelete={handleDeleteStudent}
        />
      </section>
    </main>
  );
}

export default CoursesPage;

