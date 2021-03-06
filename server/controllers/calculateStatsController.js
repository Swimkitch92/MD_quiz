'use strict';
const moment = require('moment');

const calculateStats = {

  questionResultsPerDay(req, res, next) {
    // Keep in mind: If nobody takes a quiz for the day, then we won't have the questions by date
    // Currently missing 7-10 and 7-6
    const allResponses = req.dataResults.allResponseData;
    const releasedQuestionsByDay = {};

    // Look through each response
    allResponses.forEach(function (response) {
      // Adjust the date to be in Los Angeles time by subtracting 7 hours from UTC time
      const dateTimeZoneAdjusted = moment(response.createdAt).utcOffset(-5);
      const formattedDate = moment(dateTimeZoneAdjusted).format('YYYY-MM-DD');
      const questionResults = {
        questionid: response.questionid,
        num_of_people_correct: response.respondedCorrectly ? 1 : 0,
        num_of_people_incorrect: response.respondedCorrectly ? 0 : 1,
        date: formattedDate,
        a_count: response.submittedAnswer === 'A' ? 1 : 0,
        b_count: response.submittedAnswer === 'B' ? 1 : 0,
        c_count: response.submittedAnswer === 'C' ? 1 : 0,
        d_count: response.submittedAnswer === 'D' ? 1 : 0,
        e_count: response.submittedAnswer === 'E' ? 1 : 0,
        n_count: response.submittedAnswer === 'N' ? 1 : 0,
      };

      // Check only for responses from the aspirus residents
      if (response.email.indexOf('@aspirus.org') > -1) {
        // If the date already exists...
        if (formattedDate in releasedQuestionsByDay) {
          // If the question id is not yet in the array, push question results object into array
          if (!calculateStats.isIdInArrayOfObjs(releasedQuestionsByDay[formattedDate], response.questionid)) {
            releasedQuestionsByDay[formattedDate].push(questionResults);
            // If question id is in the array, increment it
          } else {
            // Find object with correct question id and increment if user got question true, false and their answer
            const arrayLocation = calculateStats.objectLocation(releasedQuestionsByDay[formattedDate], response.questionid);
            const singleDailyQuestion = releasedQuestionsByDay[formattedDate][arrayLocation];
            if (response.respondedCorrectly) {
              ++singleDailyQuestion.num_of_people_correct;
            } else {
              ++singleDailyQuestion.num_of_people_incorrect;
            }
            ++singleDailyQuestion[response.submittedAnswer.toLowerCase() + '_count'];
          }
          // Else add date and start new array
        } else {
          releasedQuestionsByDay[formattedDate] = [questionResults];
        }
      }
    });
    req.dataResults.questionResultsPerDay = releasedQuestionsByDay;
    //console.log('released questions ', releasedQuestionsByDay);
    next();
  },

  isIdInArrayOfObjs(array, idNum) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].questionid === idNum) {
        return true;
      }
    }
    return false;
  },

  objectLocation(array, idNum) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].questionid === idNum) {
        return i;
      }
    }
    return undefined;
  },

};

module.exports = calculateStats;

  // With chosen questions, when questions get reset we won't be able
  // to have historical data and the chosen questions updatedAt date
  // might get changed is the table is dropped

  // const chosenQs = req.dataResults.chosenQuestions;
  // const questionDays = {};
  // chosenQs.forEach(function (question) {
  //   const formattedDate = moment(question.updatedAt).format('MM-DD-YYYY');
  //   console.log('formatted date', formattedDate);
  //   if (formattedDate in questionDays) {
  //     questionDays[formattedDate].push(question.id);
  //   } else {
  //     questionDays[formattedDate] = [question.id];
  //   }
  // });
  // console.log('question days ', questionDays);
  // next();
