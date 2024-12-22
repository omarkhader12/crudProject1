const name = document.querySelector("#courseName");
const category = document.querySelector("#courseCategory");

const price = document.querySelector("#coursePrice");

const description = document.querySelector("#courseDescription");

const capacity = document.querySelector("#courseCapacity");
const addbtn=document.querySelector("#click");
let courses = [];

const displayProduct = () => {
  const result = courses
    .map((course, index) => {
      return `
    <tr>
    <td>${index} </td>
    <td>${course.name} </td>
    <td>${course.category} </td>
    <td>${course.price} </td>
    <td>${course.description} </td>
    <td>${course.capacity} </td>
    <td>
    <button class = "btn btn-danger" onclick = 'deleteCourse(${index})'>dellete </button>
    </td>

    </tr>
    `;
    })
    .join("");

  document.querySelector("#data").innerHTML = result;
};

if (localStorage.getItem("courses") != null) {
  courses = JSON.parse(localStorage.getItem("courses"));
  displayProduct();
}