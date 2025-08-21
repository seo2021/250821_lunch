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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUoWXVuJOIh_sv8xy4OpFfNjZZy5XPdu5OiQ&s",
    },
    {
      name: "시원~한 냉면! 🍜",
      description:
        "무더운 여름, 살얼음 동동 시원한 냉면으로 더위를 날려보세요!",
      image:
        "https://i.namu.wiki/i/s78uFdtqEXALYdRSA1HJtoubiO-Y_mfHMo7IftA2dJ6Kz8XmQFLop9qGzHSKdooKXhibh6BCedG-kAoye6y1OQ.webp",
    },
    {
      name: "든든한 된장찌개! 🍲",
      description:
        "구수하고 깊은 맛의 된장찌개로 편안하고 든든한 점심을 즐겨보세요.",
      image:
        "https://i.namu.wiki/i/i6xznN10ARKDTeZ8oe1RgsO3WjqlJuOHBeM8iouRewkHX7UPthwCCo-ZYd0THeG1MwyRW0OvfYgCAG-dAk3tHg.gif",
    },
    {
      name: "바삭 촉촉 돈까스! 🍽️",
      description:
        "겉바속촉 돈까스와 달콤한 소스의 환상 조합! 남녀노소 누구나 좋아하는 메뉴.",
      image:
        "https://i.namu.wiki/i/aN7eMJzy4XAy1yqpL3kHb41MBsSdfPjt1ZqMfDXYk6J3-je6M8dNVOMldpbxhZ-IlO9IfHXMzpZc1tVvat5IjQ.webp",
    },
    {
      name: "상큼한 샐러드 파스타! 🥗",
      description:
        "가볍고 신선하게 즐기고 싶을 때! 상큼한 드레싱의 샐러드 파스타.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Pasta_salad_closeup.JPG",
    },
    {
      name: "고소한 비빔밥! 🥣",
      description:
        "다채로운 채소와 고기, 고추장이 어우러진 건강하고 맛있는 한 끼!",
      image:
        "https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg",
    },
    {
      name: "뜨끈한 순대국밥! 🥘",
      description:
        "속이 든든하고 뜨끈한 순대국밥으로 얼어붙은 몸을 녹여보세요.",
      image:
        "https://i.namu.wiki/i/w4fN6GjXus8MSVxfYNDBtsBQZeArMnz0GrRLzftISNw_woXS3Z5KIJqFSG1GfLFGKQ97LxNGmNwHo19j1cWBOg.webp",
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
