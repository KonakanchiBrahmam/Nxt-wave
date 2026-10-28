import './index.css'
const CourseCard = props => {
  const {CoursesList} = props
  const {name, Duration, Category} = CoursesList
  return (
    <>
      <div className="course-banner">
        <div className="course-banner-info">
          <h1 className="course-banner-name">{name}</h1>
          <p className="course-banner-duration">Duration: {Duration}</p>
          <p className="course-banner-category">Category: {Category}</p>
        </div>
      </div>
    </>
  )
}
export default CourseCard
