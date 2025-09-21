import itopApp from "./cases/fullstack/itop-app";
import tinderDb from "./cases/fullstack/tinder-db";
import codify from "./cases/uiux/codify";
import teacherRating from "./cases/uiux/teacher-rating";
import evCharging from "./cases/hackathons/ev-charging";
import lillyAI from "./cases/hackathons/lilly-ai-onboarding";

export const CASES = [itopApp, tinderDb, codify, teacherRating, evCharging, lillyAI];

export const CASES_BY_ID = Object.fromEntries(CASES.map(c => [c.id, c]));

export const CASES_BY_CATEGORY = CASES.reduce((acc, c) => {
  (acc[c.category] ||= []).push(c);
  return acc;
}, {});
