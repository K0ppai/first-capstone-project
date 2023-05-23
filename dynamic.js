const speakerData = [{
  name: 'Joe Dispenza',
  about: 'British-born American author and inspirational speaker',
  achivements: 'Joe Dispenza has visited over 33 countries to teach people to create a happier and healthier life.He is also a bestselling author; his books include "You Are The Placebo" and "Breaking The Habit of Being Yourself."',
  img: 'img/Dr+Joe.jpg',
},
{
  name: 'Simon Sinek',
  about: 'Doctor of chiropractic, international speaker, and writer',
  achivements: 'Sinek has written five books. "Start With Why", his first book, was published October 2009. His second book, titled "Leaders Eat Last", appeared on the bestseller lists of the Wall Street Journal and The New York Times',
  img: 'img/simon-sinek.jpg',
},
{
  name: 'Tony Robbins',
  about: 'American author, coach, speaker, and philanthropist',
  achivements: 'Robbins is known for his infomercials, seminars, and self-help books including the books "Unlimited Power" and "Awaken the Giant Within".',
  img: 'img/Tony_Robbins.jpg',
},
{
  name: 'Lewis Howes',
  about: 'Entrepreneur, performance business coach, YouTuber and keynote speaker',
  achivements: 'Lewis Howes hosts a top 100 iTunes ranked podcast, "The School of Greatness", is a New York Times bestselling author of "The School of Greatness" and "The Mask of Masculinity".Details magazine called him one of “5 Internet Guru’s that can Make You Rich.”',
  img: 'img/lewis-howesjpg.jpg',
},
{
  name: 'Jay Shetty',
  about: 'British podcaster, author, and life coach',
  achivements: 'Shetty is a co-founder of Sama Tea.He has written "Think Like a Monk".The book was a bestseller in 2023.He published “8 Rules of Love: How to Find It, Keep It and Let It Go” which made the New York Times best-seller list.',
  img: 'img/jayshetty.jpg',
},
{
  name: 'Robert Greene',
  about: 'American author of books on strategy, power, and seduction',
  achivements: 'Greene has written six international bestsellers, including "The 48 Laws of Power", "The Art of Seduction", "The 33 Strategies of War", "The 50th Law", "Mastery", and "The Laws of Human Nature".',
  img: 'img/robert-greene.jpg',
},
];

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const speakerHtml = (i) => {
  const html = `
  <div class="col" id="speaker">
          <div class="row p-4  speaker-img">
            <div class="col-4 p-0">
              <img src="${speakerData[i].img}" alt="image" class="w-100">
            </div>
            <div class="col-8 pe-0">
              <h5 class="speaker-name mb-1">${speakerData[i].name}</h5>
              <p class="fw-bold speaker-desc w-100 mb-1">${speakerData[i].about}</>
              <div class="gray-line border-top border-2"></div>
              <p class="fw-bold speaker-work mt-2 mb-0">${speakerData[i].achivements}</>
            </div>
          </div>
        </div>
  `;
  return html;
};

const parentElement = document.getElementById('feature-speaker');
const div = document.createElement('div');
div.className = 'row row-cols-1 row-cols-md-2 mt-md-3 ms-md-5 ps-md-5 me-md-5 pe-md-5 justify-content-md-center';
insertAfter(div, parentElement.lastElementChild);

const addSpeakerSec = (i) => {
  div.innerHTML += speakerHtml(i);
};

// const removeSpeakerSec = (i) => {
//   div.innerHTML -= speakerHtml(i);
// };

const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
  speakerData.length = 6;
  for (let i = 0; i < speakerData.length; i += 1) {
    addSpeakerSec(i);
  }
} else {
  speakerData.length = 6;
  for (let i = 0; i < speakerData.length; i += 1) {
    addSpeakerSec(i);
  }
}

const box = [...document.querySelectorAll('#speaker')];
// console.log(box);

const moreSpeakerSec = () => {
  for (let i = 2; i < speakerData.length; i += 1) {
    box[i].style.display = 'block';
  }
};
const lessSpeakerSec = () => {
  for (let i = 2; i < speakerData.length; i += 1) {
    box[i].style.display = 'none';
  }
};

const changeMoreText = () => {
  const moreText = document.querySelector('.more-text');
  const angleDown = document.querySelector('.fa-angle-down');
  const angleUp = document.querySelector('.fa-angle-up');
  if (moreText.innerHTML === 'MORE') {
    moreText.innerHTML = 'LESS';
    angleDown.style.display = 'none';
    angleUp.style.display = 'block';
    moreSpeakerSec();
  } else {
    moreText.innerHTML = 'MORE';
    angleDown.style.display = 'block';
    angleUp.style.display = 'none';
    lessSpeakerSec();
  }
};

const moreBtn = document.querySelector('.more-container');
moreBtn.addEventListener('click', changeMoreText);