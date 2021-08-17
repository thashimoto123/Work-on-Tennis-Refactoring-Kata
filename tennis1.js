'use strict';

function getScore(score1, score2) {
    let score;
    if (score1 === score2) {
        score = getSameScoreName(score1, score2);
    } else if (score1 >= 4 || score2 >= 4) {
        score = getAdvantageOrWin(score1, score2) + " " + getWinner(score1, score2);

    } else {
        score = getScoreString(score1) + '-' + getScoreString(score2);
    }
    return score;
}

function getSameScoreName(score1, score2) {
    if (score1 < 3) {
        return getScoreString(score2) + "-All";
    } else {
        return "Deuce";
    }
}

function getAdvantageOrWin(score1, score2) {
    const minusResult = Math.abs(score1 - score2);
    return minusResult >= 2 ? "Win for" : "Advantage";
}

function getWinner(score1, score2) {
    return score1 > score2 ? "player1" : "player2";
}

function getScoreString(score) {
    switch (score) {
        case 0:
            return "Love";
        case 1:
            return "Fifteen";
        case 2:
            return "Thirty";
        case 3:
            return "Forty";
    }
}

module.exports = getScore;
