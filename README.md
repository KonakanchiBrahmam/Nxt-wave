In this project, let's build a **Course Catalog** app by applying the concepts we have learned till now.

You'll be provided with pre-filled code, including the basic React Code and the CSS styles.

Your task is to read the given code carefully and then complete the missing parts to achieve the expected output shown in the reference image.

### Refer to the image below:

<br/>
<div style="text-align: center;">
<img src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_react_js/niat_coding_questions/course-catlog-cp-output.png" alt="course-catalog-output" style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm run dev`

<MultiLineNote>
- Use node version 20
</MultiLineNote>

</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- The `App` component should render a `CoursePage` component. This demonstrates **composability** — using one component inside another.

- The `CoursePage` component should import and render four `CourseCard` components, passing props to each one individually. This demonstrates **reusability** — reusing the same component with different props.

- Each `CourseCard` component receives the following props:

  |    Key     | Data Type |
  | :--------: | :-------: |
  | courseName |  String   |
  |  duration  |  String   |
  |  category  |  String   |

- The `CourseCard` component should accept props, destructure them, and display the course details.

**Courses Data:**

| Course Name               | Duration | Category        |
| :------------------------ | :------- | :-------------- |
| HTML & CSS Fundamentals   | 6 Weeks  | Web Development |
| JavaScript Essentials     | 8 Weeks  | Web Development |

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.jsx`
- `src/components/CoursePage/index.jsx`
- `src/components/CourseCard/index.jsx`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Each `CourseCard` should display the **courseName** using an HTML heading element
- Each `CourseCard` should display the duration text in the format: `Duration: {duration}`
- Each `CourseCard` should display the category text in the format: `Category: {category}`
- The `CoursePage` component must import and use the `CourseCard` component — this tests **composability**
</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: black">Hex: #94a3b8</div>
<div style="background-color: #6366f1; width: 150px; padding: 10px; color: white">Hex: #6366f1</div>
<div style="background-color: #818cf8; width: 150px; padding: 10px; color: black">Hex: #818cf8</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - This question tests **component composability** — using one component inside another, and **reusability** — using the same component multiple times with different props.
> - Want to quickly review some of the concepts you've been learning? Take a look at the Cheat Sheets.
