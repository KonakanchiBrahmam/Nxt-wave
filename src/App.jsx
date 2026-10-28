import CourseCard from './components/CourseCard'

import './App.css'
const CoursesList = [
  {
    id: 1,
    name: 'HTML & CSS Fundamentals',
    Duration: '6 Weeks',
    Category: 'Web Development',
  },
  {
    id: 2,
    name: 'JavaScript Essentials',
    Duration: '8 Weeks',
    Category: 'Web Development',
  },
]

const App = () => (
  <div className="catalog-app-container">
    <div className="catalog-content-container">
      <h1 className="catalog-heading">Course Catalog</h1>
      <p className="catalog-description">
        Browse our wide range of courses across different categories. Find the
        perfect course to enhance your skills and advance your career.
      </p>
      {CoursesList.map(eachitem => (
        <CourseCard CoursesList={eachitem} key={eachitem.id} />
      ))}
    </div>
  </div>
)

export default App
