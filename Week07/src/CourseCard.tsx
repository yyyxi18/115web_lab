interface CourseCardProps {
  title: string;
  description: string;
}

function CourseCard({
  title,
  description
}: CourseCardProps) {
  return (
    <article className="course-card">
      <span className="course-label">COURSE</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default CourseCard;

