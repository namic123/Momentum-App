const quotesList = [
    {

        korean: "무지를 아는 것이 곧 앎의 시작이다.",
        author: "-Socrates, BC 469~399"
    },
    {

        korean: "인간사에는 안정된 것이 하나도 없음을 기억하라. 그러므로 성공에 들뜨거나 역경에 지나치게 의기소침하지 마라.",
        author: "-Socrates, BC 469~399"
    },
    {

        korean: "행복의 비결은 포기해야 할 것을 포기하는 것이다.",
        author: "-Andrew Camegie, 1835~1919"
    },
    {

        korean: "나의 좌우명은 집중이다. 첫째는 정직, 그 다음은 열심히 일하며, 그 다음은 집중이다.",
        author: "-Andrew Camegie, 1835~1919"
    },
    {

        korean: "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다.",
        author: "-Albert Einstein, 1879~1955"
    },
    {

        korean: "너 자신의 무지를 절대 과소평가 하지 마라.",
        author: "-Albert Einstein, 1879~1955"
    },
    {

        korean: "살아보기 전까진 인생이 어떤 것인지 알 수 없다.",
        author: "-Marilyn Monroe, 1926~1962"
    },
    {

        korean: "우리는 너무 늙기 전에 우리의 삶을 시작해야 한다. 두려움은 멍청한 감정이다. 후회 또한 그렇다.",
        author: "-Marilyn Monroe, 1926~1962"
    }
]


const korean = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");
const todaysQuotes = quotesList[Math.floor(Math.random() * quotesList.length)];

korean.innerText = todaysQuotes.korean;
author.innerText = todaysQuotes.author;