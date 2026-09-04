import { Course } from "../types/course";

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="course-card">
      <span className="tag">{course.level}</span>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </article>
  );
}

export default CourseCard;

