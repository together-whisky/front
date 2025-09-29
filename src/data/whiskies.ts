import { Whisky, PairingFood, Review } from '../types/whisky';

export const whiskies: Whisky[] = [
  {
    id: 1,
    name: "Macallan 18",
    brand: "Macallan",
    type: "Single Malt",
    age: 18,
    abv: 43,
    origin: "Scotland",
    description: "세계에서 가장 존경받는 싱글 몰트 위스키 중 하나로, 18년간 셰리 캐스크에서 숙성되어 깊고 복합적인 맛을 자랑합니다.",
    price: 450000,
    imageUrl: "/images/macallan18.jpg",
    tastingNotes: {
      nose: "건포도, 무화과, 오렌지 껍질의 향",
      palate: "진저, 계피, 견과류의 풍부한 맛",
      finish: "길고 따뜻한 여운"
    }
  },
  {
    id: 2,
    name: "Glenfiddich 12",
    brand: "Glenfiddich",
    type: "Single Malt",
    age: 12,
    abv: 40,
    origin: "Scotland",
    description: "세계에서 가장 많이 팔리는 싱글 몰트 위스키로, 부드럽고 균형잡힌 맛이 특징입니다.",
    price: 85000,
    imageUrl: "/images/glenfiddich12.jpg",
    tastingNotes: {
      nose: "사과, 배, 꿀의 달콤한 향",
      palate: "바닐라, 오크, 살짝의 스모키함",
      finish: "부드럽고 깔끔한 마무리"
    }
  },
  {
    id: 3,
    name: "Yamazaki 12",
    brand: "Suntory",
    type: "Single Malt",
    age: 12,
    abv: 43,
    origin: "Japan",
    description: "일본 위스키의 대표작으로, 섬세하고 우아한 맛이 일품입니다.",
    price: 380000,
    imageUrl: "/images/yamazaki12.jpg",
    tastingNotes: {
      nose: "꿀, 오렌지, 미즈나라 오크의 향",
      palate: "코코넛, 크랜베리, 버터 스카치",
      finish: "타닌과 화이트 후추의 긴 여운"
    }
  },
  {
    id: 4,
    name: "Jameson Irish Whiskey",
    brand: "Jameson",
    type: "Blended",
    abv: 40,
    origin: "Ireland",
    description: "아일랜드를 대표하는 위스키로, 부드럽고 마시기 쉬운 것이 특징입니다.",
    price: 45000,
    imageUrl: "/images/jameson.jpg",
    tastingNotes: {
      nose: "바닐라, 너트, 셰리의 향",
      palate: "부드러운 스파이스와 꿀의 단맛",
      finish: "부드럽고 따뜻한 마무리"
    }
  },
  {
    id: 5,
    name: "Laphroaig 10",
    brand: "Laphroaig",
    type: "Single Malt",
    age: 10,
    abv: 43,
    origin: "Scotland",
    description: "아일레이 위스키의 특징인 강한 피트향과 바다 냄새가 특징인 개성 강한 위스키입니다.",
    price: 95000,
    imageUrl: "/images/laphroaig10.jpg",
    tastingNotes: {
      nose: "바다 냄새, 피트, 아이오딘의 강한 향",
      palate: "스모키, 소금기, 바닐라",
      finish: "길고 따뜻한 스모키 피니시"
    }
  }
];

export const pairingFoods: PairingFood[] = [
  {
    id: 1,
    name: "다크 초콜릿",
    category: "디저트",
    description: "카카오 70% 이상의 다크 초콜릿은 위스키의 복합적인 맛을 더욱 돋보이게 합니다.",
    imageUrl: "/images/dark-chocolate.jpg",
    pairedWhiskyIds: [1, 3, 5]
  },
  {
    id: 2,
    name: "연어 스모크",
    category: "해산물",
    description: "스모키한 연어와 위스키의 조화는 완벽한 페어링을 만들어냅니다.",
    imageUrl: "/images/smoked-salmon.jpg",
    pairedWhiskyIds: [2, 5]
  },
  {
    id: 3,
    name: "치즈 플래터",
    category: "치즈",
    description: "숙성된 치즈는 위스키의 복잡한 풍미를 보완해줍니다.",
    imageUrl: "/images/cheese-platter.jpg",
    pairedWhiskyIds: [1, 2, 4]
  },
  {
    id: 4,
    name: "견과류 믹스",
    category: "견과류",
    description: "아몬드, 호두 등 다양한 견과류는 위스키의 고소한 맛을 강화시켜줍니다.",
    imageUrl: "/images/nuts-mix.jpg",
    pairedWhiskyIds: [1, 2, 3, 4]
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    whiskyId: 1,
    userName: "위스키러버",
    rating: 5,
    comment: "정말 최고의 위스키입니다. 18년의 숙성이 만들어낸 깊은 맛이 일품이에요.",
    date: "2024-01-15"
  },
  {
    id: 2,
    whiskyId: 1,
    userName: "스카치매니아",
    rating: 5,
    comment: "가격은 비싸지만 그만한 가치가 있는 위스키. 특별한 날에 마시기 좋아요.",
    date: "2024-01-20"
  },
  {
    id: 3,
    whiskyId: 2,
    userName: "초보위스키",
    rating: 4,
    comment: "위스키 입문자에게 추천합니다. 부드럽고 마시기 쉬워요.",
    date: "2024-01-22"
  },
  {
    id: 4,
    whiskyId: 3,
    userName: "일본위스키팬",
    rating: 5,
    comment: "일본 위스키의 섬세함이 돋보이는 작품. 미즈나라 오크의 향이 환상적입니다.",
    date: "2024-01-25"
  },
  {
    id: 5,
    whiskyId: 4,
    userName: "아이리쉬팬",
    rating: 4,
    comment: "부드럽고 달달한 맛이 좋아요. 칵테일 베이스로도 훌륭합니다.",
    date: "2024-01-28"
  },
  {
    id: 6,
    whiskyId: 5,
    userName: "피트머신",
    rating: 5,
    comment: "강한 피트향을 좋아하는 사람이라면 꼭 마셔봐야 할 위스키입니다. 중독성 있어요!",
    date: "2024-02-01"
  }
];