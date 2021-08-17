'use strict';

function getSameScoreName(P1point, P2point) {
    switch (P1point){
        case 0:
            return "Love-All";
        case 1:
            return "Fifteen-All";
        case 2:
            return "Thirty-All";
        default:
            return "Deuce";
    }
}

const scoreList = ["Love", "Fifteen", "Thirty", "Forty"];

function getScore(P1point, P2point) {
    if (P1point === P2point) return getSameScoreName(P1point, P2point);
    if (P1point < 4 && P2point < 4) return scoreList[P1point] + "-" + scoreList[P2point];
    if (Math.abs(P1point - P2point) === 1)  return P1point > P2point ? "Advantage player1" : "Advantage player2";
    return P1point > P2point ? "Win for player1" : "Win for player2";
}

module.exports = getScore;
