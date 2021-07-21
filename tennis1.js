'use strict';

function getScore(m_score1, m_score2) {
    let score;
    if (m_score1 === m_score2) {
        score = getSameScoreName(m_score1, m_score2);
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        score = getAdvantageOrWin(m_score1, m_score2) + " " + getWinner(m_score1, m_score2);

    } else {
        score = getScoreString(m_score1) + '-' + getScoreString(m_score2);
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
