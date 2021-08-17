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
    let score;
    let P1res;
    let P2res;
    if (P1point < 4 && P2point < 4) {
        P1res = scoreList[P1point];
        P2res = scoreList[P2point];
        score = P1res + "-" + P2res;
    }

    if (P1point > P2point && P2point >= 3) {
        score = "Advantage player1";
    }

    if (P2point > P1point && P1point >= 3) {
        score = "Advantage player2";
    }

    if (P1point >= 4 && P2point >= 0 && (P1point - P2point) >= 2) {
        score = "Win for player1";
    }
    if (P2point >= 4 && P1point >= 0 && (P2point - P1point) >= 2) {
        score = "Win for player2";
    }
    return score;
}


module.exports = getScore;
