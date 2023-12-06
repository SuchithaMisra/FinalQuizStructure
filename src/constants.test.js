// constants.test.js

import { jsQuizz } from './constants';

describe('jsQuizz object structure', () => {
  test('jsQuizz should have an array of questions', () => {
    expect(jsQuizz).toHaveProperty('questions');
    expect(Array.isArray(jsQuizz.questions)).toBe(true);
    expect(jsQuizz.questions).toHaveLength(10); // Assuming there are 10 questions
  });

  test('Each question should have required properties', () => {
    jsQuizz.questions.forEach(questionObj => {
      expect(questionObj).toHaveProperty('question');
      expect(questionObj).toHaveProperty('choices');
      expect(questionObj).toHaveProperty('type');
      expect(questionObj).toHaveProperty('correctAnswer');

      expect(typeof questionObj.question).toBe('string');
      expect(Array.isArray(questionObj.choices)).toBe(true);
      expect(questionObj.choices.length).toBeGreaterThan(1);
      expect(typeof questionObj.type).toBe('string');
      expect(typeof questionObj.correctAnswer).toBe('string');
    });
  });

});
