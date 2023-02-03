const data = [
  {
    id: 1,
    home: 'Brasil',
    away: 'Urugway',
    score: [3, 3]
  },
  {
    id: 2,
    home: 'Paragway',
    away: 'Chile',
    score: [2, 3]
  },
  {
    id: 3,
    home: 'Ecuador',
    away: 'Bolivia',
    score: [2, 4]
  },
  {
    id: 4,
    home: 'Guatemala',
    away: 'Honduras',
    score: [5, 0]
  },
  {
    id: 5,
    home: 'Columbia',
    away: 'Venezuela',
    score: [6, 1]
  },
  {
    id: 6,
    home: 'Mexico',
    away: 'Belize',
    score: [8, 0]
  },
];

const getGameById = (id) => {
  const selected = data.filter((item) => {
    if (item.id === id) {
      return true; // stay in array
    }
    return false; // not included
  });
  
  if (selected[0]) {
    return selected[0]
  }
  return null; // not found by id
};



let lastReturnedStart = 0;

export const getGameStart = () => {
  lastReturnedStart++;
  const game = getGameById(lastReturnedStart);
  
  if (game) {
    const res = {
      ...game,
      score: [0, 0]
    };
    return res;
  } else {
    return false;
  }
};

export const getGameUpdate = (id) => {
  // lastReturnedStart++;
  const game = getGameById(id);
  if (game) {
    const res = {
      ...game,
      // score: [0, 0]
    };
    return res;
  } else {
    return false;
  }
};


