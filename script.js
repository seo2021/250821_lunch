// script.js

document.addEventListener("DOMContentLoaded", function () {
  const recommendButton = document.querySelector(".btn-secondary-custom"); // '다른 거 보여줘!' 버튼
  const dishName = document.querySelector(".dish-name");
  const dishDescription = document.querySelector(".dish-description");
  const dishImage = document.querySelector(".recommended-dish-img");

  // 추천될 메뉴 데이터 (추가하거나 변경해보세요!)
  const menuItems = [
    {
      name: "매콤달콤 제육볶음! 🥓",
      description:
        "매콤한 양념에 볶아낸 돼지고기가 밥도둑! 스트레스 해소에도 최고예요.",
      image:
        "https://i.namu.wiki/i/B613q7uJbDvfak1cr5Huu1ngGhL8Gm1sk-qY9EGopEPAo2D44IXKb9kcPWv565Lu4RZUxBasSxu2m99-4MwpB9tmgzPMCQA1L7--ArSJOpY1cirLojyeuikLEJjXAgTVA89ConRwxnZNCWshmktqBw.webp",
    },
    {
      name: "시원~한 냉면! 🍜",
      description:
        "무더운 여름, 살얼음 동동 시원한 냉면으로 더위를 날려보세요!",
      image:
        "https://i.namu.wiki/i/FSPVJKx1242CyhhCcMbN4SIbIknXuLva9gbmjQumGluv-241E-euz2kxkpIx-CuyUHYpdrZiGoDLALYWU95am2AQXIt7W87OZdfERuq9GIaTRtozHzNMyAAs_IJieJS--sRgge-SArdcHv_1UoDMyQ.webp",
    },
    {
      name: "든든한 된장찌개! 🍲",
      description:
        "구수하고 깊은 맛의 된장찌개로 편안하고 든든한 점심을 즐겨보세요.",
      image:
        "https://i.namu.wiki/i/iLgAmOrR4zdDhshghfjFbuqnxXs1UsfrBfaJ40mviiAlgZLhuWguCd-x8lvvfclHtMb_DkyNBu1CjYLgiE0FXmWcGJnVsr8PSgiLyOT6tRxpEX1lw-pyPjC0Y7Z5Z12DDOsVpgBO-DmRcc1aT9Fg9Q.webp",
    },
    {
      name: "바삭 촉촉 돈까스! 🍽️",
      description:
        "겉바속촉 돈까스와 달콤한 소스의 환상 조합! 남녀노소 누구나 좋아하는 메뉴.",
      image:
        "https://i.namu.wiki/i/bmpxH3Ns7WOwmFLNeijKBo1fWoYdYUakLPPnNjOqdqtURIvNNUjecsoKAv5A4FiBXOewmUMoYMvOWTM9gmiQFTFXjJZbirAmjJwf7ym0rFn6rIfpfMWP_ccRWtvavJSzd4tjGvndV1DQV5oSQGBYBQ.webp",
    },
    {
      name: "상큼한 샐러드 파스타! 🥗",
      description:
        "가볍고 신선하게 즐기고 싶을 때! 상큼한 드레싱의 샐러드 파스타.",
      image:
        "https://mblogthumb-phinf.pstatic.net/MjAyMzEwMTFfMTM1/MDAxNjk2OTgwOTMyMjg1._2VaXiWyZdJfEBJapxFJxmU53V5ljzy71kMr_9_tEBYg.NelEeMXOpWWFEBtAdvrytdjf2zL0jzIM6f0Sr5THt6Qg.JPEG.nuribomlife/%EC%83%90%EB%9F%AC%EB%93%9C%ED%8C%8C%EC%8A%A4%ED%83%8001.jpg?type=w800",
    },
    {
      name: "고소한 비빔밥! 🥣",
      description:
        "다채로운 채소와 고기, 고추장이 어우러진 건강하고 맛있는 한 끼!",
      image:
        "https://source.unsplash.com/400x250/?korean-food,bibimbaphttps://i.namu.wiki/i/oOQRBGMYkoY5IjBTFsYyECRMRpnNJpBzRHh-tRcwJ7vfzJzPkG1Y6srcuJo5rwm7B-DKUcPB6_WDvP64ucQMkhUJG2klEevModuO8n-lwCr-JPmSsU-sntj6a_BMSa-NEY_UW2GOwjS6xfZgCm1HSA.jpg",
    },
    {
      name: "뜨끈한 순대국밥! 🥘",
      description:
        "속이 든든하고 뜨끈한 순대국밥으로 얼어붙은 몸을 녹여보세요.",
      image:
        "https://i.namu.wiki/i/WXAi16g5cSOna-NSg1pU4UylWm2wccmrs6ETXu68YD7avs9H-Sxlo24nqtV4jAEdzHMusc_5XiU2TapTkkeQDr_V9gXX3PZD4jnMGF5X-YOQVIy-ukWluZTQl7O3TCSD6gMVBcMvCB1XTnv_0lxVMw.webp",
    },
  ];

  function getRandomMenuItem() {
    const randomIndex = Math.floor(Math.random() * menuItems.length);
    return menuItems[randomIndex];
  }

  recommendButton.addEventListener("click", function () {
    let randomMenu = getRandomMenuItem();
    // 현재 메뉴와 다른 메뉴가 나올 때까지 다시 뽑기 (선택 사항)
    // 무한 루프 방지를 위해 메뉴가 1개 이상일 때만 작동
    if (menuItems.length > 1) {
      while (dishName.textContent.includes(randomMenu.name.split("!")[0])) {
        // '!' 이전 텍스트로 비교
        randomMenu = getRandomMenuItem();
      }
    }
    dishName.textContent = randomMenu.name;
    dishDescription.textContent = randomMenu.description;
    dishImage.src = randomMenu.image;
  });

  // 카테고리 카드 클릭 이벤트 (예시)
  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const categoryText = this.querySelector("p").textContent;
      alert(
        `"${categoryText}" 카테고리를 선택하셨네요! (이곳에 해당 카테고리 메뉴를 보여주는 로직 추가)`
      );
      // 실제 구현 시, 이 alert 대신 해당 카테고리에 맞는 메뉴를 필터링하여 보여주는 로직을 넣습니다.
    });
  });
});
