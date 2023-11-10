const projectItemContainerDiv = document.getElementById(
  'project_item_container'
);
const loadMoreBtn = document.getElementById('load_more');

const projectItemCountElem = document.getElementById('project_item_count');

const projectItemTotalElem = document.getElementById('project_item_total');

const projectLimit = 100;
const projectIncrease = 9;

const pageCount = Math.ceil(projectLimit / projectIncrease);

let currentPage = 1;

projectItemTotalElem.innerHTML = projectLimit;

const pics = [
  'url("./images/Mountains16.jpg")',
  'url("./images/Mountains17.jpg")',
  'url("./images/Mountains18.jpg")',
  'url("./images/Mountains19.jpg")',
  'url("./images/Mountains20.jpg")',
  'url("./images/Mountains21.jpg")',
  'url("./images/Mountains22.jpg")',
  'url("./images/Mountains23.png")',
  'url("./images/Mountains24.jpg")',
  'url("./images/Mountains25.jpg")',
  'url("./images/Mountains26.png")',
  'url("./images/Mountains27.png")',
  'url("./images/Mountains28.jpg")',
  'url("./images/Mountains29.jpg")',
  'url("./images/Mountains30.jpg")',
  'url("./images/Mountains31.jpg")',
  'url("./images/Nature1.jpg")',
  'url("./images/Nature10.jpg")',
  'url("./images/Nature11.jpg")',
  'url("./images/Nature12.jpg")',
  'url("./images/Nature13.jpg")',
  'url("./images/Nature14.png")',
  'url("./images/Nature15.jpg")',
  'url("./images/Nature16.jpg")',
  'url("./images/Nature17.jpg")',
  'url("./images/Nature18.jpg")',
  'url("./images/Nature19.jpg")',
  'url("./images/Nature2.jpg")',
  'url("./images/Nature20.jpg")',
  'url("./images/Nature21.jpg")',
  'url("./images/Nature22.jpg")',
  'url("./images/Nature23.jpg")',
  'url("./images/Nature24.jpg")',
  'url("./images/Nature25.jpg")',
  'url("./images/Nature26.jpg")',
  'url("./images/Nature27.jpg")',
  'url("./images/Nature28.jpg")',
  'url("./images/Nature29.jpg")',
  'url("./images/Nature3.jpg")',
  'url("./images/Nature30.jpg")',
  'url("./images/Nature31.jpg")',
  'url("./images/Nature32.jpg")',
  'url("./images/Nature33.jpg")',
  'url("./images/Nature34.jpg")',
  'url("./images/Nature4.jpg")',
  'url("./images/Nature5.jpg")',
  'url("./images/Nature6.png")',
  'url("./images/Nature7.jpg")',
  'url("./images/Nature8.jpg")',
  'url("./images/Nature9.jpg")',
  'url("./images/Nature35.jpg")',
  'url("./images/Nature36.jpg")',
  'url("./images/Nature37.jpg")',
];

// load more button logic
const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360);

  return `hsl(${h}deg, 90%, 85%)`;
};

const handleButtonStatus = () => {
  if (pageCount === currentPage) {
    loadMoreBtn.classList.add('disabled');
    loadMoreBtn.setAttribute('disabled', true);
  }
};

// Projecrt card creation logic
const createProjectCard = (index) => {
  const projectCard = document.createElement('div');

  projectCard.className = 'card';
  projectCard.innerHTML = index;

  //   =====================
  // TO DO (not required for Project image)
  // projectCard.style.backgroundColor = getRandomColor();
  console.log(`index: ${index}`);
  projectCard.style.backgroundImage = pics[index];
  projectCard.style.backgroundSize = 'cover';
  projectCard.style.backgroundPosition = 'center';
  // =============================
  projectItemContainerDiv.appendChild(projectCard);
};

//  adding new project items
const addProjectCard = (pageIndex) => {
  currentPage = pageIndex;

  handleButtonStatus();

  const startRange = (pageIndex - 1) * projectIncrease;

  const endRange =
    pageIndex * projectIncrease > projectLimit
      ? projectLimit
      : pageIndex * projectIncrease;

  projectItemCountElem.innerHTML = endRange;

  //  creating card

  for (let i = startRange + 1; i <= endRange; i++) {
    createProjectCard(i);
  }
};

window.onload = function () {
  // TO Do filter based on project Category

  // Reassign projectLimit
  //    projectLimit = list of above category project

  addProjectCard(currentPage);

  loadMoreBtn.style.backgroundColor = getRandomColor();

  loadMoreBtn.addEventListener('click', () => {
    addProjectCard(currentPage + 1);
  });
};
