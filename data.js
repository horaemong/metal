const qnaList = [
  {
    q: '1. 평소에는 아무렇지도 않던 일들이 괴롭고 귀찮게 느껴졌다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '2. 먹고 싶지 않고 식욕이 없다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '3. 어느 누가 도와준다 하더라도 나의 울적한 기분을 떨쳐 버릴 수 없을 것 같다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '4. 무슨 일을 하든 정신을 집중하기가 힘들었다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '5. 비교적 잘 지내지 못했다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '6. 상당히 우울했다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '7. 모든 일들이 힘들게 느껴졌다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '8. 앞일이 암담하게 느껴졌다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '9. 지금까지의 내 인생은 실패작이라는 생각이 들었다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '10. 적어도 보통 사람들 만큼의 능력은 있었다고 생각 못한다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '11. 잠을 설쳤다. 잠을 잘 이루지 못했다',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '12. 두려움을 느꼈다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '13. 평소에 비해 말수가 적었다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '14. 세상에 홀로 있는 듯한 외로움을 느꼈다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '15. 큰 불만 없이 생활하지 못했다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '16. 사람들이 나에게 차갑게 대하는 것 같았다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '17. 갑자기 울음이 나왔다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '18. 마음이 슬펐다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '19. 사람들이 나를 싫어하는 것 같았다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
  {
    q: '20. 도무지 뭘 해 나갈 엄두가 나지 않았다.',
    a: [
      { answer: 'a. 전혀 그렇지 않다.', type: [0] },
      { answer: 'b. 가끔 그렇다.', type: [1] },
      { answer: 'c. 자주 그렇다.', type: [2] },
      { answer: 'd. 항상 그렇다.', type: [3]}
    ]
  },
]

const infoList = [
  {
    name: '정말 건강해요',
    desc: '현재 특별한 정서적 불편을 느끼지 않는 상태에요.'
  },
  {
    name: '아플지도 몰라요',
    desc: '약간의 스트레스를 받는듯 하며 예방책이 필요할거 같아요.'
  },
  {
    name: '조금 아픈거 같아요',
    desc: '많은 스트레스를 받는 듯 하며 주변 지인에게 도움을 청하면 좋을거 같아요.'
  },
  {
    name: '많이 아픈거 같아요',
    desc: '심각할 정도의 스트레스를 받는듯 하며 가까운 심리치료센터나 정신과 진료를 받아 보시길 추천드려요.'
  },

]
