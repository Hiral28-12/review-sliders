let reviews=[
    {
        id:1,
        title:"John",
        job:"Front-end Devloper",
        img:"./images/bg-1.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse eum nemo exercitationem praesentium hic voluptates omnis officia expedita. Laudantium quas saepe odit quisquam magni repudiandae corrupti perspiciatis labore perferendis aperiam ratione ea quaerat, cupiditate soluta fuga nobis. Labore doloremque quam ex nesciunt, error ratione nisi ipsum quisquam fugiat iste reiciendis explicabo. Perferendis, cumque sapiente?",   
    },
    {
        id:2,
        title:"Henry",
        job:"Brand Devloper",
        img:"./images/bg-2.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse eum nemo exercitationem praesentium hic voluptates omnis officia expedita. Laudantium quas saepe odit quisquam magni repudiandae corrupti perspiciatis labore perferendis aperiam ratione ea quaerat, cupiditate soluta fuga nobis. Labore doloremque quam ex nesciunt, error ratione nisi ipsum quisquam fugiat iste reiciendis explicabo. Perferendis, cumque sapiente?",   
    }, {
        id:3,
        title:"Nik",
        job:"Paython Devloper",
        img:"./images/bg-3.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse eum nemo exercitationem praesentium hic voluptates omnis officia expedita. Laudantium quas saepe odit quisquam magni repudiandae corrupti perspiciatis labore perferendis aperiam ratione ea quaerat, cupiditate soluta fuga nobis. Labore doloremque quam ex nesciunt, error ratione nisi ipsum quisquam fugiat iste reiciendis explicabo. Perferendis, cumque sapiente?",   
    }, {
        id:4,
        title:"Lara",
        job:"Web Devloper",
        img:"./images/bg-4.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse eum nemo exercitationem praesentium hic voluptates omnis officia expedita. Laudantium quas saepe odit quisquam magni repudiandae corrupti perspiciatis labore perferendis aperiam ratione ea quaerat, cupiditate soluta fuga nobis. Labore doloremque quam ex nesciunt, error ratione nisi ipsum quisquam fugiat iste reiciendis explicabo. Perferendis, cumque sapiente?",   
    }, {
        id:5,
        title:"Jinkal",
        job:"App Devloper",
        img:"./images/bg-5.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse eum nemo exercitationem praesentium hic voluptates omnis officia expedita. Laudantium quas saepe odit quisquam magni repudiandae corrupti perspiciatis labore perferendis aperiam ratione ea quaerat, cupiditate soluta fuga nobis. Labore doloremque quam ex nesciunt, error ratione nisi ipsum quisquam fugiat iste reiciendis explicabo. Perferendis, cumque sapiente?",   
    },
];    

// variables to accses DOM elements

const personImg =document.querySelector(".person_img");
const personName =document.querySelector(".person_name");
const personDesignation =document.querySelector(".person_designation");
const personReview =document.querySelector(".person_review");

const prevBtn =document.querySelector(".prev__btn");
const nextBtn =document.querySelector(".next__btn");

let currentItem = 0;

// function to display current review
function showPerson() {
    const item = reviews[currentItem];
    personImg.src = item.img;
    personName.textContent = item.title;
    personDesignation.textContent = item.job;
    personReview.textContent = item.text;
}
//event listners for navigation buttons
nextBtn.addEventListener("click", function () {
    currentItem++ ;
    if (currentItem >reviews.length-1 ) {
        currentItem  = 0
    }
    showPerson();
});
prevBtn.addEventListener("click", function () {
    currentItem-- ;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});