// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

// 변수 선언
// 1. 인물 정보
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// 2. 버튼
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');



// 초기 값 세팅 => 값에 따라 직원 정보 변경
let currentItem = 0;

// 사람 정보 보여주기
window.addEventListener('DOMContentLoaded', function(){

  showPerson(currentItem);

});


// 사람 정보 함수
function showPerson(person) {
  
  const item = reviews[person];
  
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}


// 다음 사람 보여주기
nextBtn.addEventListener("click", function() {
  currentItem++;

  // 끝까지 클릭 시 처음 사람으로 다시 돌아감
  if(currentItem > reviews.length - 1)
  {
    currentItem = 0;
  }

  showPerson(currentItem);
})


// 이전 사람 보여주기
prevBtn.addEventListener("click", function() {
  currentItem--;

  // (처음 사람 - 1) 일시 마지막 사람 보여주기
  if(currentItem < 0)
  {
    currentItem = reviews.length - 1;
  }

  showPerson(currentItem);
})


// 사람 랜덤으로 보여주기
randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  
  showPerson(currentItem);
})