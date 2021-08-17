'use strict';

function getScore(P1point, P2point) {
    if (isSameScore(P1point, P2point)) return getSameScoreName(P1point, P2point);
    if (isNumberScore(P1point, P2point)) return scoreList[P1point] + "-" + scoreList[P2point];
    if (isAdvantage(P1point, P2point))  return "Advantage " + getWinner(P1point, P2point);
    return "Win for " + getWinner(P1point, P2point);
}

const scoreList = ["Love", "Fifteen", "Thirty", "Forty"];

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


function isSameScore (P1point, P2point) {
    return P1point === P2point;
}

function isNumberScore (P1point, P2point) {
    return P1point < 4 && P2point < 4;
}

function isAdvantage (P1point, P2point) {
    return Math.abs(P1point - P2point) === 1;
}

function getWinner(P1point, P2point) {
    return P1point > P2point ? "player1" : "player2"
}

module.exports = getScore;
