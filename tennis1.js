'use strict';

function getScore(m_score1, m_score2) {
    var score = "";
    if (m_score1 === m_score2) {
        switch (m_score1) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        score = getAdvantageOrWin(m_score1, m_score2) + " " + getWinner(m_score1, m_score2);

    } else {
        score = getScoreString(m_score1) + '-' + getScoreString(m_score2);
    }
    return score;
}

function getAdvantageOrWin(score1, score2) {
    const minusResult = score1 - score2;
    if( Math.abs(minusResult) >= 2) {
        return "Win for"
    } else {
        return "Advantage"
    }
}

function getWinner(score1, score2) {
    return score1 > score2 ? "player1" : "player2";
}

function getScoreString(tempScore) {
    var score = "";
    switch (tempScore) {
        case 0:
            score += "Love";
            break;
        case 1:
            score += "Fifteen";
            break;
        case 2:
            score += "Thirty";
            break;
        case 3:
            score += "Forty";
            break;
    }
    return score;
}

module.exports = getScore;
