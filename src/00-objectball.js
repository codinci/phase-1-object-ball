function gameObject() {
  return {
    home: {
      teamName:'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': { 'Number': 4, 'Shoe': 18, 'Points': 10, 'Rebounds': 1, 'Assists': 1, 'Steals': 2, 'Assists': 7, 'SlamDunks': 2},
        'Reggie Evans': { 'Number': 30, 'Shoe': 14, 'Points': 12, 'Rebounds': 12, 'Assists': 12, 'Steals': 12, 'Assists': 12, 'SlamDunks': 7 },
        'Brook Lopez': { 'Number': 11, 'Shoe': 17, 'Points': 17, 'Rebounds': 19, 'Assists': 10, 'Steals': 3, 'Assists': 1, 'SlamDunks': 15 },
        'Mason Plumlee': { 'Number': 1, 'Shoe': 19, 'Points': 26, 'Rebounds': 12, 'Assists': 6, 'Steals': 3, 'Assists': 8, 'SlamDunks': 5 },
        'Jason Terry': { 'Number': 31, 'Shoe': 15, 'Points': 19, 'Rebounds': 2, 'Assists': 2, 'Steals': 4, 'Assists': 11, 'SlamDunks': 1 }
      }
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': { 'Number': 4, 'Shoe': 18, 'Points': 10, 'Rebounds': 1, 'Assists': 1, 'Steals': 2, 'Assists': 7, 'SlamDunks': 2 },
        'Bismak Biyombo': { 'Number': 0, 'Shoe': 16, 'Points': 12, 'Rebounds': 4, 'Assists': 7, 'Steals': 7, 'Assists': 15, 'SlamDunks': 10 },
        'Desagna Diop': { 'Number': 2, 'Shoe': 14, 'Points': 24, 'Rebounds': 12, 'Assists': 12, 'Steals': 4, 'Assists': 5, 'SlamDunks': 5 },
        'Ben Gordon': { 'Number': 8, 'Shoe': 15, 'Points': 33, 'Rebounds': 3, 'Assists': 2, 'Steals': 1, 'Assists': 1, 'SlamDunks': 0 },
        'Brendan Haywood': { 'Number': 33, 'Shoe': 15, 'Points': 6, 'Rebounds': 12, 'Assists': 12, 'Steals': 22, 'Assists': 5, 'SlamDunks': 12 }
      }
    }
  }
}

function homeTeam() {
  return gameObject().home;
}

function awayTeam() {
  return gameObject().away;
}

function players() {
  return Object.assign(homeTeam().players, awayTeam().players);
}

function numPointsScored(playerInput) {
  return players()[playerInput].Points;
}
// console.log(numPointsScored('Brendan Haywood'));

function shoeSize(playerInput) {
  return players()[playerInput].Shoe;
}
// console.log(shoeSize('Brendan Haywood'));

function teamColors(teamInput) {
  return (homeTeam().teamName === teamInput) ? homeTeam().colors : awayTeam().colors;
}
// console.log(teamColors('Charlotte Hornets'));

function teamNames() {
  return [homeTeam().teamName, awayTeam().teamName]
}
// console.log(teamNames());

function playerNumbers(teamInput) {
  let numberArray = [];
  if(homeTeam().teamName === teamInput) {
    let playersNo = homeTeam().players;
    for (player in playersNo) {
      numberArray.push(playersNo[player].Number);
    }
  } else {
    let playersNo = awayTeam().players;
    for(player in playersNo) {
      numberArray.push(playersNo[player].Number);
    }
  }
  return numberArray;
}
// console.log(playerNumbers('Brooklyn Nets'));

function playerStats(playerInput) {
  return players()[playerInput];
}
// console.log(playerStats('Brendan Haywood'));

function bigShoeRebounds() {
  let biggestShoe = Object.keys(players()).reduce((a, b) => players()[a].Shoe > players()[b].Shoe ? a : b);
  return players()[biggestShoe].Rebounds;
}
// console.log(bigShoeRebounds());