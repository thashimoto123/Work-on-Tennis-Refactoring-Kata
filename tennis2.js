'use strict';

function getSameScoreName(P1point, P2point) {
    if (P1point !== P2point) return;
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

function getScore(P1point, P2point) {
    let score = getSameScoreName(P1point, P2point);

    let P1res;
    let P2res;
    if (P1point > 0 && P2point === 0) {
        if (P1point === 1) {
            P1res = "Fifteen";
        }
        if (P1point === 2) {
            P1res = "Thirty";
        }
        if (P1point === 3) {
            P1res = "Forty";
        }

        P2res = "Love";
        score = P1res + "-" + P2res;
    }
    if (P2point > 0 && P1point === 0) {
        if (P2point === 1) {
            P2res = "Fifteen";
        }
        if (P2point === 2) {
            P2res = "Thirty";
        }
        if (P2point === 3) {
            P2res = "Forty";
        }

        P1res = "Love";
        score = P1res + "-" + P2res;
    }

    if (P1point > P2point && P1point < 4) {
        if (P1point === 2) {
            P1res = "Thirty";
        }
        if (P1point === 3) {
            P1res = "Forty";
        }
        if (P2point === 1) {
            P2res = "Fifteen";
        }
        if (P2point === 2) {
            P2res = "Thirty";
        }
        score = P1res + "-" + P2res;
    }
    if (P2point > P1point && P2point < 4) {
        if (P2point === 2) {
            P2res = "Thirty";
        }
        if (P2point === 3) {
            P2res = "Forty";
        }
        if (P1point === 1) {
            P1res = "Fifteen";
        }
        if (P1point === 2) {
            P1res = "Thirty";
        }
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
