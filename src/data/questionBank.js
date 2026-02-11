// Question Bank for Indian Banking Exams
// Organized by exam type and year

export const examCategories = [
  {
    id: 'ibps-po-prelims',
    title: 'IBPS PO Prelims',
    icon: '📘',
    description: 'Preliminary examination for IBPS PO',
  },
  {
    id: 'ibps-po-mains',
    title: 'IBPS PO Mains',
    icon: '📗',
    description: 'Main examination for IBPS PO',
  },
];

export const examYears = [2026, 2025, 2024, 2023, 2022];

export const exams = {
  'ibps-po-prelims': [
    {
      id: 'ibps-po-prelims-2025-aug-23-shift-1',
      categoryId: 'ibps-po-prelims',
      year: 2025,
      title: 'IBPS PO Prelims 2025 (Aug 23 - Shift 1)',
      duration: 60, // minutes
      totalQuestions: 100,
      description: 'Memory-based paper: Reasoning Ability (35), English Language (30), Quantitative Aptitude (35)',
      difficulty: 'Medium',
      answerKeyPdf: '/pdfs/ibps-po-prelims-2025-aug-23-shift-1.pdf', // Optional: Path to answer key PDF
    },
    ...examYears.map(year => ({
      id: `ibps-po-prelims-${year}`,
      categoryId: 'ibps-po-prelims',
      year: year,
      title: `IBPS PO Prelims ${year}`,
      duration: 60, // minutes
      totalQuestions: 30,
      description: 'Quantitative Aptitude, Reasoning Ability, and English Language',
      difficulty: 'Medium',
    }))
  ],
  'ibps-po-mains': examYears.map(year => ({
    id: `ibps-po-mains-${year}`,
    categoryId: 'ibps-po-mains',
    year: year,
    title: `IBPS PO Mains ${year}`,
    duration: 180, // minutes
    totalQuestions: 50,
    description: 'Reasoning & Computer Aptitude, General/Economy/Banking Awareness, English Language, Data Analysis & Interpretation',
    difficulty: 'Hard',
  })),
};

// Flatten all exams into a single array for easy access
export const allExams = [
  ...exams['ibps-po-prelims'],
  ...exams['ibps-po-mains'],
];

// Base question sets
const prelimsQuestions = [
  // Quantitative Aptitude
  {
    id: 1,
    subject: 'Quantitative Aptitude',
    question: 'A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:',
    options: [
      '45 km/hr',
      '50 km/hr',
      '54 km/hr',
      '55 km/hr'
    ],
    correctAnswer: 1,
    explanation: 'Speed of train relative to man = 125/10 = 12.5 m/s = 12.5 × 18/5 = 45 km/hr. Speed of train = 45 + 5 = 50 km/hr'
  },
  {
    id: 2,
    subject: 'Quantitative Aptitude',
    question: 'The average of 5 consecutive numbers is 18. What is the smallest number?',
    options: [
      '14',
      '15',
      '16',
      '17'
    ],
    correctAnswer: 2,
    explanation: 'Let the numbers be x, x+1, x+2, x+3, x+4. Average = (5x+10)/5 = 18. Therefore, x+2 = 18, x = 16'
  },
  {
    id: 3,
    subject: 'Quantitative Aptitude',
    question: 'If 20% of a number is 50, then what is 30% of that number?',
    options: [
      '60',
      '65',
      '70',
      '75'
    ],
    correctAnswer: 3,
    explanation: 'Let the number be x. 20% of x = 50, so x = 250. 30% of 250 = 75'
  },
  {
    id: 4,
    subject: 'Quantitative Aptitude',
    question: 'A sum of money at simple interest amounts to ₹815 in 3 years and to ₹854 in 4 years. The sum is:',
    options: [
      '₹650',
      '₹690',
      '₹698',
      '₹700'
    ],
    correctAnswer: 2,
    explanation: 'S.I. for 1 year = 854 - 815 = ₹39. S.I. for 3 years = 39 × 3 = ₹117. Principal = 815 - 117 = ₹698'
  },
  {
    id: 5,
    subject: 'Quantitative Aptitude',
    question: 'What is the compound interest on ₹10,000 at 20% per annum for 2 years, compounded annually?',
    options: [
      '₹4,000',
      '₹4,200',
      '₹4,400',
      '₹4,800'
    ],
    correctAnswer: 2,
    explanation: 'Amount = P(1 + R/100)^n = 10000(1.2)^2 = 10000 × 1.44 = ₹14,400. C.I. = 14,400 - 10,000 = ₹4,400'
  },
  {
    id: 6,
    subject: 'Quantitative Aptitude',
    question: 'The ratio of the ages of A and B is 3:5. After 6 years, the ratio will be 2:3. What is the present age of A?',
    options: [
      '12 years',
      '15 years',
      '18 years',
      '21 years'
    ],
    correctAnswer: 2,
    explanation: 'Let ages be 3x and 5x. (3x+6)/(5x+6) = 2/3. Solving: 9x + 18 = 10x + 12, x = 6. A\'s age = 3 × 6 = 18 years'
  },
  {
    id: 7,
    subject: 'Quantitative Aptitude',
    question: 'A shopkeeper marks his goods 40% above cost price but allows a discount of 20%. His profit percentage is:',
    options: [
      '10%',
      '12%',
      '15%',
      '20%'
    ],
    correctAnswer: 1,
    explanation: 'Let CP = 100. Marked price = 140. Selling price = 140 × 0.8 = 112. Profit = 12%'
  },
  {
    id: 8,
    subject: 'Quantitative Aptitude',
    question: 'Two pipes A and B can fill a tank in 12 hours and 18 hours respectively. If both pipes are opened together, how long will it take to fill the tank?',
    options: [
      '6.5 hours',
      '7.2 hours',
      '7.5 hours',
      '8 hours'
    ],
    correctAnswer: 1,
    explanation: 'A fills 1/12 per hour, B fills 1/18 per hour. Together = 1/12 + 1/18 = 5/36 per hour. Time = 36/5 = 7.2 hours'
  },
  {
    id: 9,
    subject: 'Quantitative Aptitude',
    question: 'The average of 11 numbers is 50. If the average of first 6 numbers is 49 and that of last 6 numbers is 52, find the 6th number.',
    options: [
      '56',
      '58',
      '60',
      '62'
    ],
    correctAnswer: 0,
    explanation: 'Sum of 11 numbers = 550. Sum of first 6 = 294. Sum of last 6 = 312. 6th number = 294 + 312 - 550 = 56'
  },
  {
    id: 10,
    subject: 'Quantitative Aptitude',
    question: 'A boat can travel 12 km downstream in 40 minutes. If the speed of the current is 2 km/hr, what is the speed of the boat in still water?',
    options: [
      '14 km/hr',
      '16 km/hr',
      '18 km/hr',
      '20 km/hr'
    ],
    correctAnswer: 1,
    explanation: 'Downstream speed = 12/(40/60) = 18 km/hr. Speed in still water = 18 - 2 = 16 km/hr'
  },

  // Reasoning Ability
  {
    id: 11,
    subject: 'Reasoning Ability',
    question: 'If in a certain code, COMPUTER is written as RFUVQNPC, how is MEDICINE written in that code?',
    options: [
      'EOJDEJFM',
      'EOJDJEFM',
      'NFEJDJOF',
      'NFEDJJOF'
    ],
    correctAnswer: 2,
    explanation: 'Each letter is moved one position backward in the alphabet and then the entire word is reversed. MEDICINE → LCDRHHMF → NFEJDJOF'
  },
  {
    id: 12,
    subject: 'Reasoning Ability',
    question: 'Find the odd one out: 3, 5, 11, 14, 17, 21',
    options: [
      '21',
      '17',
      '14',
      '3'
    ],
    correctAnswer: 2,
    explanation: 'All numbers except 14 are prime numbers.'
  },
  {
    id: 13,
    subject: 'Reasoning Ability',
    question: 'If A + B means A is the brother of B; A × B means A is the father of B; and A - B means A is the sister of B, then which of the following means M is the uncle of N?',
    options: [
      'M + P × N',
      'M - P × N',
      'M × P + N',
      'M × P - N'
    ],
    correctAnswer: 0,
    explanation: 'M + P means M is brother of P. P × N means P is father of N. So M is uncle of N.'
  },
  {
    id: 14,
    subject: 'Reasoning Ability',
    question: 'Complete the series: 2, 6, 12, 20, 30, ?',
    options: [
      '40',
      '42',
      '44',
      '46'
    ],
    correctAnswer: 1,
    explanation: 'Pattern: 1×2, 2×3, 3×4, 4×5, 5×6, 6×7 = 42'
  },
  {
    id: 15,
    subject: 'Reasoning Ability',
    question: 'In a row of children, Ravi is 9th from the left and Mohan is 12th from the right. When they interchange their positions, Ravi becomes 17th from the left. How many children are there in the row?',
    options: [
      '27',
      '28',
      '29',
      '30'
    ],
    correctAnswer: 1,
    explanation: 'After interchange, Ravi is at Mohan\'s position (17th from left = 12th from right). Total = 17 + 12 - 1 = 28'
  },
  {
    id: 16,
    subject: 'Reasoning Ability',
    question: 'Pointing to a photograph, a man said, "She is the daughter of my grandfather\'s only son." How is the woman related to the man?',
    options: [
      'Sister',
      'Daughter',
      'Mother',
      'Wife'
    ],
    correctAnswer: 0,
    explanation: 'Grandfather\'s only son = Father. Daughter of father = Sister'
  },
  {
    id: 17,
    subject: 'Reasoning Ability',
    question: 'If ROSE is coded as 6821, CHAIR is coded as 73456 and PREACH is coded as 961473, what will be the code for SEARCH?',
    options: [
      '246173',
      '214673',
      '216473',
      '214763'
    ],
    correctAnswer: 2,
    explanation: 'R=6, O=8, S=2, E=1, C=7, H=3, A=4, I=5, P=9. SEARCH = 2 1 4 6 7 3 = 216473'
  },
  {
    id: 18,
    subject: 'Reasoning Ability',
    question: 'How many meaningful English words can be made with the letters EDOM using each letter only once?',
    options: [
      'None',
      'One',
      'Two',
      'Three'
    ],
    correctAnswer: 2,
    explanation: 'MODE and DOME are two meaningful words.'
  },
  {
    id: 19,
    subject: 'Reasoning Ability',
    question: 'If South-East becomes North and North-East becomes West, what will West become?',
    options: [
      'North-East',
      'North-West',
      'South-East',
      'South-West'
    ],
    correctAnswer: 2,
    explanation: 'The directions are rotated 90° clockwise. West becomes South-East.'
  },
  {
    id: 20,
    subject: 'Reasoning Ability',
    question: 'In a certain code language, "MOBILE" is written as "LNAKQF". How is "LAPTOP" written in that code?',
    options: [
      'KZOSNO',
      'KZosnp',
      'KZOSNP',
      'LZPSNO'
    ],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position backward: L→K, A→Z, P→O, T→S, O→N, P→O'
  },

  // English Language
  {
    id: 21,
    subject: 'English Language',
    question: 'Choose the word most similar in meaning to "ABUNDANT":',
    options: [
      'Scarce',
      'Plentiful',
      'Rare',
      'Limited'
    ],
    correctAnswer: 1,
    explanation: 'Abundant means plentiful or existing in large quantities.'
  },
  {
    id: 22,
    subject: 'English Language',
    question: 'Choose the correctly spelled word:',
    options: [
      'Occassion',
      'Occasion',
      'Ocassion',
      'Occation'
    ],
    correctAnswer: 1,
    explanation: 'The correct spelling is "Occasion" with double C and single S.'
  },
  {
    id: 23,
    subject: 'English Language',
    question: 'Fill in the blank: "He was _____ by the news of his success."',
    options: [
      'overwhelmed',
      'overwhelming',
      'overwhelm',
      'overwhelms'
    ],
    correctAnswer: 0,
    explanation: 'The past participle "overwhelmed" is correct in passive voice.'
  },
  {
    id: 24,
    subject: 'English Language',
    question: 'Choose the antonym of "OPTIMISTIC":',
    options: [
      'Hopeful',
      'Positive',
      'Pessimistic',
      'Confident'
    ],
    correctAnswer: 2,
    explanation: 'Pessimistic is the opposite of optimistic.'
  },
  {
    id: 25,
    subject: 'English Language',
    question: 'Identify the error: "Neither of the students have submitted their assignments."',
    options: [
      'Neither of',
      'students',
      'have submitted',
      'their assignments'
    ],
    correctAnswer: 2,
    explanation: '"Neither" is singular, so it should be "has submitted" not "have submitted".'
  },
  {
    id: 26,
    subject: 'English Language',
    question: 'Choose the correct passive voice: "The teacher praised the student."',
    options: [
      'The student was praised by the teacher.',
      'The student is praised by the teacher.',
      'The student has been praised by the teacher.',
      'The student had been praised by the teacher.'
    ],
    correctAnswer: 0,
    explanation: 'Simple past tense converts to "was praised" in passive voice.'
  },
  {
    id: 27,
    subject: 'English Language',
    question: 'Choose the word that best completes: "His _____ to detail made him an excellent auditor."',
    options: [
      'attention',
      'intention',
      'extension',
      'detention'
    ],
    correctAnswer: 0,
    explanation: '"Attention to detail" is the correct idiom.'
  },
  {
    id: 28,
    subject: 'English Language',
    question: 'Identify the type of sentence: "What a beautiful day it is!"',
    options: [
      'Declarative',
      'Interrogative',
      'Imperative',
      'Exclamatory'
    ],
    correctAnswer: 3,
    explanation: 'Sentences expressing strong emotion with exclamation marks are exclamatory.'
  },
  {
    id: 29,
    subject: 'English Language',
    question: 'Choose the correctly punctuated sentence:',
    options: [
      'The manager said, "the meeting is postponed".',
      'The manager said, "The meeting is postponed."',
      'The manager said "The meeting is postponed."',
      'The manager said "the meeting is postponed".'
    ],
    correctAnswer: 1,
    explanation: 'Direct speech should start with a capital letter and end with punctuation inside quotes.'
  },
  {
    id: 30,
    subject: 'English Language',
    question: 'Choose the word that is a synonym for "DILIGENT":',
    options: [
      'Lazy',
      'Careless',
      'Hardworking',
      'Negligent'
    ],
    correctAnswer: 2,
    explanation: 'Diligent means hardworking and showing care and effort.'
  },
];

// IBPS PO Pre 2025 - Memory Based (August 23rd, 1st Shift) - 100 Questions
const ibpspo2025Questions = [
  // Reasoning Ability (Questions 1-35)
  {
    id: 1001,
    subject: 'Reasoning Ability',
    question: 'A certain number of persons are sitting in a row facing north. Three persons sit between A and B. C sits second to the right of B. D sits fifth to the left of C. Two persons sit between D and E. The number of persons sit between D and C is one more than the number of persons sit between D and F. No one sits to the left of F. The position of A with respect to F is same as the position of C with respect to G. As many persons sit to the left of F as to the right of C. How many persons sit between E and G?',
    options: ['One', 'Two', 'Three', 'Four', 'More than four'],
    correctAnswer: 3,
    explanation: 'Based on the seating arrangement: F is at position 1, D at position 5, C at position 10, B at position 8, A at position 5 or 11, E at position 3 or 7, and G at position 13. Between E and G, there are 4 persons.'
  },
  {
    id: 1002,
    subject: 'Reasoning Ability',
    question: 'Based on the same seating arrangement, who among the following sits third to the left of G?',
    options: ['B', 'E', 'A', 'C', 'D'],
    correctAnswer: 2,
    explanation: 'G is at position 13. Third to the left would be position 10, which is occupied by A.'
  },
  {
    id: 1003,
    subject: 'Reasoning Ability',
    question: 'Based on the same seating arrangement, how many persons sit in the row?',
    options: ['9', '13', '12', 'None of the given options', '10'],
    correctAnswer: 4,
    explanation: 'Total persons in the row = 10'
  },
  {
    id: 1004,
    subject: 'Reasoning Ability',
    question: 'How many meaningful words can be formed from the 3rd, 5th, 8th and 12th letter from the left end of the word FERMENTATION. If no word is formed, then mark the answer as @ and if more than three words are formed, then mark the answer as #.',
    options: ['1', '2', '3', '#', '@'],
    correctAnswer: 1,
    explanation: 'The letters are R (3rd), M (5th), T (8th), N (12th). Two meaningful words can be formed: EARN and NEAR.'
  },
  {
    id: 1005,
    subject: 'Reasoning Ability',
    question: 'How many pair of digits can be formed in the number 73915243, which have same number of digits between them as in the number series (both forward and backward direction)?',
    options: ['None', 'Two', 'Three', 'More than three', 'One'],
    correctAnswer: 3,
    explanation: 'Multiple pairs satisfy this condition in both forward and backward directions, resulting in more than three pairs.'
  },
  {
    id: 1006,
    subject: 'Reasoning Ability',
    question: 'Eight persons A, B, C, D, E, F, G and H are members of a three-generation family, with no single parent. G is the daughter-in-law of D. B has no daughter. H is the aunt of A. G is the sister-in-law of C. C is married member of the family. B is the grandfather of A. C and A are of opposite gender. E is the brother of F and has no child. How is G related to E?',
    options: ['Wife', 'Sister', 'Sister-in-law', 'Mother', "Can't be determined"],
    correctAnswer: 2,
    explanation: 'Based on the family tree, G is the sister-in-law of E.'
  },
  {
    id: 1007,
    subject: 'Reasoning Ability',
    question: 'Based on the same family, how many male members are there in the family?',
    options: ['Two', 'Three', 'Five', 'Four', 'None of these'],
    correctAnswer: 3,
    explanation: 'There are four male members in the family: B, E, F, and one more.'
  },
  {
    id: 1008,
    subject: 'Reasoning Ability',
    question: 'Based on the same family, who among the following is the mother of E?',
    options: ['H', 'A', 'D', 'C', "Can't be determined"],
    correctAnswer: 2,
    explanation: 'D is the mother of E based on the family relationships.'
  },
  {
    id: 1009,
    subject: 'Reasoning Ability',
    question: 'Statements: O > S = G ≤ R ≥ K; L ≤ R = P; T < J = P. Conclusions: I. S < L  II. J ≥ G',
    options: ['If only conclusion I is true', 'If only conclusion II is true', 'If either conclusion I or II is true', 'If both conclusions I and II are true', 'If neither conclusion I nor II is true'],
    correctAnswer: 1,
    explanation: 'Conclusion I (S < L) is False. Conclusion II (J ≥ G) is True because J = P = R ≥ G.'
  },
  {
    id: 1010,
    subject: 'Reasoning Ability',
    question: 'Statements: Q ≤ M > D > E = T; F = G ≥ H < C < T ≥ A. Conclusions: I. A ≤ M  II. F > Q',
    options: ['If only conclusion I is true', 'If only conclusion II is true', 'If either conclusion I or II is true', 'If both conclusions I and II are true', 'If neither conclusion I nor II is true'],
    correctAnswer: 4,
    explanation: 'Both conclusions are false. A ≤ M cannot be established, and F > Q cannot be established.'
  },
  {
    id: 1011,
    subject: 'Reasoning Ability',
    question: 'Statements: Z = X < Y > O ≤ W, P ≥ Q = R < S > W. Conclusions: I. X > R  II. Z ≤ Q',
    options: ['If only conclusion I is true', 'If only conclusion II is true', 'If either conclusion I or II is true', 'If both conclusions I and II are true', 'If neither conclusion I nor II is true'],
    correctAnswer: 2,
    explanation: 'Both conclusions are individually false but satisfy the either-or case as Z = X and Q = R.'
  },
  {
    id: 1012,
    subject: 'Reasoning Ability',
    question: 'Six persons – A, B, C, D, E and F – were born in different months – April, July, and September – on two different dates, i.e., 9th and 26th of the same year. Each person likes a different colour – Red, Blue, Pink, Green, White, and Yellow. Two persons were born between F and the person who likes red. D was born immediately before F on an odd date and in the month having even number of days. The one who likes pink was born two persons before C. E was born immediately before C on an even date. Two persons were born between the ones who like pink and blue. A was born before the one who likes green and two persons after the one who likes yellow. E doesn\'t like yellow. Who among the following was born on 9th July?',
    options: ['C', 'The one who likes green color', 'F', 'The one who likes pink color', 'D'],
    correctAnswer: 3,
    explanation: 'A, who likes pink, was born on 9th July.'
  },
  {
    id: 1013,
    subject: 'Reasoning Ability',
    question: 'Based on the same birth dates puzzle, which among the following pairs is correct?',
    options: ['B – Green, 26th September', 'C – Red, 26th July', 'F – White, 26th April', 'E – Green, 26th April', 'D – Yellow, 9th September'],
    correctAnswer: 2,
    explanation: 'F – White, 26th April is the correct pairing.'
  },
  {
    id: 1014,
    subject: 'Reasoning Ability',
    question: 'Based on the same birth dates puzzle, how many persons were born between F and the one who likes blue color?',
    options: ['Four', 'Two', 'One', 'None', 'Three'],
    correctAnswer: 4,
    explanation: 'Three persons were born between F and the one who likes blue color (B).'
  },
  {
    id: 1015,
    subject: 'Reasoning Ability',
    question: 'Based on the same birth dates puzzle, who among the following likes white color?',
    options: ['The one who was born four persons before B', 'C', 'A', 'The one who was born on 26th September', 'None of these'],
    correctAnswer: 0,
    explanation: 'F, who was born four persons before B, likes white color.'
  },
  {
    id: 1016,
    subject: 'Reasoning Ability',
    question: 'Six persons – A, B, C, D, E and F – bought six different types of cars – Sedan, SUV, Hatchback, Limousine, Coupe, and Convertible – one after the other. The one who bought Sedan purchased it three persons before F. As many persons bought car before F as after the one who purchased Hatchback. Two persons bought cars between the ones who purchased Hatchback and SUV. E bought the car before the one who purchased SUV but immediately before A. Coupe was bought two persons after A but immediately bought before convertible. Convertible was bought before B but after D. Who among the following bought the Limousine?',
    options: ['E', 'B', 'C', 'D', 'A'],
    correctAnswer: 4,
    explanation: 'A bought the Limousine.'
  },
  {
    id: 1017,
    subject: 'Reasoning Ability',
    question: 'Based on the same car purchase puzzle, who bought the car three persons after that person who bought the car immediately before D?',
    options: ['C', 'B', 'F', 'A', 'None of these'],
    correctAnswer: 0,
    explanation: 'C bought the car three persons after the person who bought immediately before D.'
  },
  {
    id: 1018,
    subject: 'Reasoning Ability',
    question: 'Based on the same car purchase puzzle, if A is related to Hatchback and in the same way E is related to limousine then, C is related to which type of car?',
    options: ['Coupe', 'Convertible', 'SUV', 'Sedan', 'None of these'],
    correctAnswer: 2,
    explanation: 'C is related to SUV. The logic is that the car was bought immediately after the person given.'
  },
  {
    id: 1019,
    subject: 'Reasoning Ability',
    question: 'Based on the same car purchase puzzle, sedan was purchased by who among the following person?',
    options: ['A', 'D', 'E', 'F', 'C'],
    correctAnswer: 2,
    explanation: 'E purchased the Sedan.'
  },
  {
    id: 1020,
    subject: 'Reasoning Ability',
    question: 'Statements: Only a few club is court. Some court is allow. No allow is revenue. Conclusions: I. Some club being allow is a possibility  II. Some court are not revenue.',
    options: ['If only conclusion I follows', 'If only conclusion II follows', 'If either conclusion I or II follows', 'If neither conclusion I nor II follows', 'If both conclusions I and II follow'],
    correctAnswer: 4,
    explanation: 'Both conclusions follow from the given statements.'
  },
  {
    id: 1021,
    subject: 'Reasoning Ability',
    question: 'Statements: Only a few Edition is investors. All investors are verdict. No verdict is affect. Conclusions: I. No edition is affect  II. All investors being affect is a possibility',
    options: ['If only conclusion I follows', 'If only conclusion II follows', 'If either conclusion I or II follows', 'If neither conclusion I nor II follows', 'If both conclusions I and II follow'],
    correctAnswer: 3,
    explanation: 'Neither conclusion follows from the given statements.'
  },
  {
    id: 1022,
    subject: 'Reasoning Ability',
    question: 'Statements: All skipper is win. Some win is player. Only a few player is hear. Conclusions: I. All skipper being hear is a possibility  II. No win is hear',
    options: ['If only conclusion I follows', 'If only conclusion II follows', 'If either conclusion I or II follows', 'If neither conclusion I nor II follows', 'If both conclusions I and II follow'],
    correctAnswer: 0,
    explanation: 'Only conclusion I follows. All skipper being hear is a possibility.'
  },
  {
    id: 1023,
    subject: 'Reasoning Ability',
    question: 'Find the odd one out: JLMP, ACDG, EGHK, LNOR, QSTU',
    options: ['JLMP', 'ACDG', 'EGHK', 'LNOR', 'QSTU'],
    correctAnswer: 4,
    explanation: 'Except QSTU, all others follow a pattern where letters are at positions +2, +2, +3 from each other.'
  },
  {
    id: 1024,
    subject: 'Reasoning Ability',
    question: 'Seven persons A, B, C, D, E, F and G were born on seven different years i.e., 1947, 1959, 1964, 1973, 1978, 1988 and 2001. The sum of the ages of C and F is equal to the age of D. G\'s age is divisible by 6. The total age of A and G is a prime number. A is just older than F. The sum of the age of B and A is divisible by 5. Who among the following was born on 1973?',
    options: ['G', 'B', 'E', 'A', 'C'],
    correctAnswer: 2,
    explanation: 'E was born in 1973 (age 52 in 2025).'
  },
  {
    id: 1025,
    subject: 'Reasoning Ability',
    question: 'Based on the same age puzzle, how many persons were born between A and B?',
    options: ['Two', 'More than four', 'Four', 'One', 'Three'],
    correctAnswer: 4,
    explanation: 'Three persons were born between A and B.'
  },
  {
    id: 1026,
    subject: 'Reasoning Ability',
    question: 'Based on the same age puzzle, what is the difference between the age of C and D?',
    options: ['12 years', '10 years', '24 years', '37 years', '38 years'],
    correctAnswer: 3,
    explanation: 'The difference between C (24 years) and D (61 years) is 37 years.'
  },
  {
    id: 1027,
    subject: 'Reasoning Ability',
    question: 'Based on the same age puzzle, who among the following is the oldest person?',
    options: ['E', 'B', 'G', 'D', 'None of these'],
    correctAnswer: 1,
    explanation: 'B is the oldest person (born in 1947, age 78).'
  },
  {
    id: 1028,
    subject: 'Reasoning Ability',
    question: 'Based on the same age puzzle, what is the age of G?',
    options: ['37 years', '24 years', '47 years', '52 years', '66 years'],
    correctAnswer: 4,
    explanation: 'G\'s age is 66 years (born in 1959).'
  },
  {
    id: 1029,
    subject: 'Reasoning Ability',
    question: 'Fourteen persons are sitting in two parallel rows. In row 1 - A, B, C, D, E, F and G are seated facing north. In row 2 - P, Q, R, S, T, U and V are sitting facing south. Q sits two places away from the one who faces E. E is the only immediate neighbour of D. U faces the one who sits third to the right of C. The number of persons sit to the right of Q is same as the number of persons sit to the left of G. B sits second to the left of G. One person sits between R and V and both of them do not sit at the extreme ends. S sits right of T but not sit at the extreme ends. A faces the one who sits second to the right of R. Who among the following faces R?',
    options: ['G', 'D', 'B', 'C', 'A'],
    correctAnswer: 3,
    explanation: 'C faces R in the seating arrangement.'
  },
  {
    id: 1030,
    subject: 'Reasoning Ability',
    question: 'Based on the same seating arrangement, which of the following statement(s) is/are true?',
    options: ['Two persons sit between G and A', 'U faces E', 'V sits left of R', 'C doesn\'t sit at extreme ends', 'All are true'],
    correctAnswer: 4,
    explanation: 'All the given statements are true.'
  },
  {
    id: 1031,
    subject: 'Reasoning Ability',
    question: 'Based on the same seating arrangement, four of the following five are alike in a certain way. Who does not belong to that group?',
    options: ['T', 'F', 'S', 'U', 'G'],
    correctAnswer: 0,
    explanation: 'T does not belong to the group based on the seating pattern.'
  },
  {
    id: 1032,
    subject: 'Reasoning Ability',
    question: 'Based on the same seating arrangement, how many persons sit to the left of the one who faces S?',
    options: ['Two', 'More than four', 'Four', 'One', 'Three'],
    correctAnswer: 3,
    explanation: 'One person sits to the left of the one who faces S.'
  },
  {
    id: 1033,
    subject: 'Reasoning Ability',
    question: 'Based on the same seating arrangement, who among the following sits second to the right of the one who faces F?',
    options: ['V', 'T', 'R', 'Q', 'None of these'],
    correctAnswer: 2,
    explanation: 'R sits second to the right of the one who faces F.'
  },
  {
    id: 1034,
    subject: 'Reasoning Ability',
    question: 'Based on the same seating arrangement, who among the following sits at the extreme end?',
    options: ['A and G', 'P and V', 'D and B', 'Q and S', 'None of these'],
    correctAnswer: 1,
    explanation: 'P and V sit at the extreme ends.'
  },
  {
    id: 1035,
    subject: 'Reasoning Ability',
    question: 'In a code language, if "MOBILE" is written as "LNAKQF", how is "LAPTOP" written in that code?',
    options: ['KZOSNO', 'KZOSNP', 'LZPSNO', 'KZPSON', 'None of these'],
    correctAnswer: 0,
    explanation: 'Each letter is moved one position backward: L→K, A→Z, P→O, T→S, O→N, P→O. Answer: KZOSNO'
  },

  // English Language (Questions 36-65)
  {
    id: 1036,
    subject: 'English Language',
    question: 'What is the underlying reason cloud kitchens have enabled more entrepreneurs to enter the food business?',
    options: [
      'The emergence of global food trends requiring innovative business models',
      'The increase in food delivery app usage that encourages mass entry',
      'The substantial decrease in start-up and operational costs associated with running a food business',
      'The ability to access a wider consumer base without geographical limitations',
      'The availability of shared kitchen infrastructure and government subsidies in urban areas'
    ],
    correctAnswer: 2,
    explanation: 'The passage states: "cloud kitchens have made it possible with lower investment and quicker setup" and "By eliminating the expenses of prime-location rentals, heavy décor, and customer service staff..." Thus, the underlying reason is the decrease in start-up and operational costs.'
  },
  {
    id: 1037,
    subject: 'English Language',
    question: 'Which of the following statements is/are CORRECT according to the passage? (I) Technological tools and mobile apps have played a significant role in the adoption of cloud kitchens. (II) Britain experienced a stagnant cloud kitchen market until 2023. (III) Many cloud kitchens fail to comply with food safety rules due to operational urgency.',
    options: ['Only (I)', 'Both (I) and (III)', 'Only (II)', 'Both (II) and (III)', 'All (I), (II), and (III)'],
    correctAnswer: 1,
    explanation: 'Statement I is correct as the passage mentions food delivery apps driving growth. Statement III is correct as it mentions "rush to meet demand often lead to corners being cut". Statement II is incorrect as the passage doesn\'t mention stagnation.'
  },
  {
    id: 1038,
    subject: 'English Language',
    question: 'Which of the following situations best explains the concern highlighted in the passage?',
    options: [
      'A cloud kitchen receives a five-star rating for speedy delivery despite complaints about poor food quality',
      'A traditional restaurant installs a robot chef to improve efficiency and reduce labor costs',
      'A local food vendor switches to cloud kitchen services and increases profits',
      'A delivery app offers discounts to promote lesser-known cloud kitchens',
      'A food safety authority mandates regular inspections for dine-in restaurants only'
    ],
    correctAnswer: 0,
    explanation: 'The passage emphasizes tension between rapid growth and compromised food safety/quality. Option (a) exemplifies business success despite compromised food standards.'
  },
  {
    id: 1039,
    subject: 'English Language',
    question: 'What does the passage say about cloud kitchens in Britain?',
    options: [
      'They were banned in 2023 due to safety issues',
      'They grew three times larger in 2023 compared to earlier years',
      'They replaced all traditional restaurants by 2023',
      'They focused only on packaging and delivery',
      'They were introduced for the first time in 2023'
    ],
    correctAnswer: 1,
    explanation: 'The passage states: "In Britain, the industry witnessed a dramatic transformation in 2023, expanding nearly threefold compared to previous years."'
  },
  {
    id: 1040,
    subject: 'English Language',
    question: 'Which of the following statements is/are factually INCORRECT based on the passage? (I) The global rise of cloud kitchens has had little to no impact on auxiliary sectors. (II) In the United States, cloud kitchens are projected to contribute nearly $27 billion to the economy by the year 2027 alone. (III) One of the key reasons behind the proliferation of cloud kitchens is the substantial reduction in fixed operational costs.',
    options: ['Only (I)', 'Both (I) and (II)', 'Only (III)', 'Both (I) and (III)', 'All (I), (II), and (III)'],
    correctAnswer: 1,
    explanation: 'Statement I is incorrect as the passage mentions boosting allied sectors. Statement II is incorrect as $27 billion is projected between 2027-2032, not by 2027 alone. Statement III is correct.'
  },
  {
    id: 1041,
    subject: 'English Language',
    question: 'Choose the most suitable phrase for the blank: "Much of this work is quietly done __________________, yet it strengthens multiple layers of the economy."',
    options: ['in broad daylight', 'without permission', 'on live television', 'behind the scenes', 'under pressure'],
    correctAnswer: 3,
    explanation: 'The context implies work that is important but not visible to the public. "Behind the scenes" perfectly captures this idea of actions occurring out of public view but essential.'
  },
  {
    id: 1042,
    subject: 'English Language',
    question: 'Choose the word that is grammatically and contextually most suitable to replace "elusive" as used in the passage: "launching a restaurant earlier seemed like an elusive dream"',
    options: ['Obvious', 'Achievable', 'Unattainable', 'Defining', 'Difficult'],
    correctAnswer: 2,
    explanation: '"Elusive" means difficult to catch, achieve, or define. "Unattainable" (impossible to achieve or reach) directly matches the sense of "elusive dream" being out of reach.'
  },
  {
    id: 1043,
    subject: 'English Language',
    question: 'What is the closest meaning of the word "done" as used in the passage: "Much of this work is quietly done"?',
    options: ['Completed', 'Final', 'Avoided', 'Attained', 'Repeated'],
    correctAnswer: 0,
    explanation: 'In this context, "done behind the scenes" refers to work that is carried out or completed quietly, without public attention.'
  },
  {
    id: 1044,
    subject: 'English Language',
    question: 'What is the most appropriate meaning of the word "tap" as used in this context: "customers need to tap once on their screens"?',
    options: ['Strike', 'Click', 'Extract', 'Control', 'Attach'],
    correctAnswer: 1,
    explanation: '"Click" fits perfectly with "tap once on their screens" in the context of using apps. It means to press or select something on a screen with a finger.'
  },
  {
    id: 1045,
    subject: 'English Language',
    question: 'The dentist had to _____________ the decayed tooth to prevent further infection.',
    options: ['modify', 'excuse', 'recruit', 'amplify', 'remove'],
    correctAnswer: 4,
    explanation: 'A decayed tooth can cause infection, so the dentist would take it out (remove). "Remove" means to take away or eliminate.'
  },
  {
    id: 1046,
    subject: 'English Language',
    question: 'The new technology promises to ________________ the way we perform everyday tasks.',
    options: ['impede', 'acclaim', 'stagnate', 'deteriorate', 'augment'],
    correctAnswer: 4,
    explanation: 'New technology should improve/enhance daily work. "Augment" means to enhance, improve, or increase in effectiveness.'
  },
  {
    id: 1047,
    subject: 'English Language',
    question: 'The athlete\'s rigorous training and unwavering determination _________________ to their remarkable success.',
    options: ['contributed', 'detracted', 'underestimated', 'isolated', 'impeded'],
    correctAnswer: 0,
    explanation: 'Training and determination are positive factors that led to success. "Contributed" means helped to bring about or played a role in.'
  },
  {
    id: 1048,
    subject: 'English Language',
    question: 'The new regulations aim to _________________ fair competition among all market participants.',
    options: ['infringe', 'enforce', 'relinquish', 'constrain', 'fragment'],
    correctAnswer: 1,
    explanation: 'Regulations exist to ensure/enforce fairness. "Enforce" means to make sure laws or rules are obeyed.'
  },
  {
    id: 1049,
    subject: 'English Language',
    question: 'The exam rules must be ___________ followed to ensure fairness for all students.',
    options: ['scarcely', 'preciously', 'strictly', 'hardly', 'mostly'],
    correctAnswer: 2,
    explanation: 'Rules need to be firmly obeyed. "Strictly" means firmly, without exceptions. "Strictly followed" is the correct collocation.'
  },
  {
    id: 1050,
    subject: 'English Language',
    question: 'Rearrange the sentences to form a meaningful paragraph. Which is the FIRST sentence? (A) Many people now prefer taking extended vacations. (B) Travel has increasingly become a way to escape daily routines. (C) In today\'s fast-paced world, hectic schedules leave individuals drained. (D) Meeting new people and exploring cultures helps rejuvenate the mind. (E) This shift reflects growing awareness about mental well-being.',
    options: ['A', 'B', 'C', 'D', 'E'],
    correctAnswer: 2,
    explanation: 'Correct sequence: C-B-A-D-E. (C) starts by establishing the context of hectic modern lifestyle.'
  },
  {
    id: 1051,
    subject: 'English Language',
    question: 'Based on the same paragraph rearrangement, which is the SECOND sentence?',
    options: ['A', 'B', 'C', 'D', 'E'],
    correctAnswer: 1,
    explanation: '(B) follows by introducing travel as a solution to escape the hectic routine.'
  },
  {
    id: 1052,
    subject: 'English Language',
    question: 'Based on the same paragraph rearrangement, which is the THIRD sentence?',
    options: ['A', 'B', 'C', 'D', 'E'],
    correctAnswer: 0,
    explanation: '(A) naturally builds on (B) by explaining how people are taking longer vacations.'
  },
  {
    id: 1053,
    subject: 'English Language',
    question: 'Based on the same paragraph rearrangement, which is the FOURTH sentence?',
    options: ['A', 'B', 'C', 'D', 'E'],
    correctAnswer: 3,
    explanation: '(D) continues by detailing what people do during vacations - meeting people and exploring cultures.'
  },
  {
    id: 1054,
    subject: 'English Language',
    question: 'Based on the same paragraph rearrangement, which is the FIFTH sentence?',
    options: ['A', 'B', 'C', 'D', 'E'],
    correctAnswer: 4,
    explanation: '(E) concludes by generalizing the trend, noting a shift toward mental well-being.'
  },
  {
    id: 1055,
    subject: 'English Language',
    question: 'Be careful (A) not to microwave (B) the hot plate (C) when you take the food out of the catch (D). Find the correct word interchange.',
    options: ['A-B', 'B-C & A-D', 'A-B & C-D', 'B-D', 'No interchange required'],
    correctAnswer: 3,
    explanation: 'Swap B-D: "Be careful not to catch the hot plate when you take the food out of the microwave."'
  },
  {
    id: 1056,
    subject: 'English Language',
    question: 'India is system (A) digitising its healthcare rapidly (B), and artificial intelligence offers a huge transformation (C) to super-charge this opportunity (D). Find the correct word interchange.',
    options: ['A-B and C-D', 'B-C', 'A-C and B-D', 'B-D', 'No interchange required'],
    correctAnswer: 0,
    explanation: 'Swap A-B and C-D: "India is rapidly digitising its healthcare system, and AI offers a huge opportunity to super-charge this transformation."'
  },
  {
    id: 1057,
    subject: 'English Language',
    question: 'Astronomical (A) temperatures (B) are usually estimated from spectroscopic (C) measurements (D). Find the correct word interchange.',
    options: ['A-B', 'B-C', 'A-C', 'B-D', 'No interchange required'],
    correctAnswer: 4,
    explanation: 'The sentence is already grammatically and contextually correct. No interchange required.'
  },
  {
    id: 1058,
    subject: 'English Language',
    question: 'Growing (A) children in involving (B) and nurturing a few plants can open (C) up the magical (D) world of nature. Find the correct word interchange.',
    options: ['A-B', 'B-C', 'A-C and B-D', 'B-D', 'No interchange required'],
    correctAnswer: 0,
    explanation: 'Swap A-B: "Involving children in growing and nurturing a few plants can open up the magical world of nature."'
  },
  {
    id: 1059,
    subject: 'English Language',
    question: 'Match Column I with Column II. A. The new cybersecurity policy mandates organizations | B. Electric vehicle manufacturers are expanding their charging networks | C. Rising sea levels and erratic weather patterns. Which combination is correct?',
    options: ['None of these', 'A-F', 'B-D (to support the growing number of EV users nationwide)', 'A-E, B-F', 'A-F, B-D, C-E'],
    correctAnswer: 2,
    explanation: 'B-D is correct: "Electric vehicle manufacturers are expanding their charging networks to support the growing number of EV users nationwide."'
  },
  {
    id: 1060,
    subject: 'English Language',
    question: 'Identify where "DARK HORSE" is used correctly: (I) Nobody expected her to win, but she turned out to be the dark horse. (II) The painter was a dark horse, known by few but admired once revealed. (III) The farmer bought a dark horse and a white cow.',
    options: ['Only (I)', 'Only (II)', 'Both (I) and (II)', 'All of these', 'Both (II) and (III)'],
    correctAnswer: 2,
    explanation: '"Dark horse" means an unexpectedly successful person. (I) and (II) use it correctly in the idiomatic sense. (III) uses it literally (incorrect).'
  },
  {
    id: 1061,
    subject: 'English Language',
    question: 'Identify the error: The Prime Minister promised (A)/ to improving infrastructure (B)/ in rural districts by allocating (C)/ additional funds in the next budget. (D)',
    options: ['A', 'B', 'C', 'D', 'No error'],
    correctAnswer: 1,
    explanation: 'Error in (B). After "promised", we use infinitive (to + base verb), not gerund. Correct: "to improve infrastructure".'
  },
  {
    id: 1062,
    subject: 'English Language',
    question: 'Identify the error: She enjoys hiking in the mountains, (A)/ swimming in the lake, (B)/ and to explore ancient ruins (C)/ during her travels abroad. (D)',
    options: ['A', 'B', 'C', 'D', 'No error'],
    correctAnswer: 2,
    explanation: 'Error in (C). Parallelism requires all items in the series to be in the same form. Correct: "and exploring ancient ruins".'
  },
  {
    id: 1063,
    subject: 'English Language',
    question: 'Identify the error: The orchestra have (A)/ started rehearsing (B)/ for the upcoming international music festival (C)/ scheduled in Vienna next month. (D)',
    options: ['A', 'B', 'C', 'D', 'No error'],
    correctAnswer: 0,
    explanation: 'Error in (A). Collective nouns take singular verbs when the group acts as one unit. Correct: "The orchestra has".'
  },
  {
    id: 1064,
    subject: 'English Language',
    question: 'Identify the error: A unexpected spike in volcano activity (A)/ has forced authorities to evacuate (B)/ nearby villages as a safety (C)/ measure to prevent casualties. (D)',
    options: ['A', 'B', 'C', 'D', 'No error'],
    correctAnswer: 0,
    explanation: 'Error in (A). "Unexpected" begins with a vowel sound, so use "an". Correct: "An unexpected spike".'
  },
  {
    id: 1065,
    subject: 'English Language',
    question: 'Identify the error: The ambassador (A)/ said the reports have (B)/ being examined carefully by his staff (C)/ before making any comment. (D)',
    options: ['A', 'B', 'C', 'D', 'No error'],
    correctAnswer: 2,
    explanation: 'Error in (C). After "have", use past participle "been", not present participle "being". Correct: "have been examined".'
  },

  // Quantitative Aptitude (Questions 66-100)
  {
    id: 1066,
    subject: 'Quantitative Aptitude',
    question: 'Solve the equations: I. x² - 10x + 24 = 0  II. 5y² - 16y + 12 = 0',
    options: ['If x=y or no relation can be established', 'If x>y', 'If x<y', 'If x≥y', 'If x≤y'],
    correctAnswer: 1,
    explanation: 'I. x² - 10x + 24 = 0 gives x = 4, 6. II. 5y² - 16y + 12 = 0 gives y = 1.2, 2. In all cases, x > y.'
  },
  {
    id: 1067,
    subject: 'Quantitative Aptitude',
    question: 'Solve the equations: I. 2x² - 9x + 10 = 0  II. y² - 12y + 35 = 0',
    options: ['If x=y or no relation can be established', 'If x>y', 'If x<y', 'If x≥y', 'If x≤y'],
    correctAnswer: 2,
    explanation: 'I. 2x² - 9x + 10 = 0 gives x = 2.5, 2. II. y² - 12y + 35 = 0 gives y = 7, 5. In all cases, x < y.'
  },
  {
    id: 1068,
    subject: 'Quantitative Aptitude',
    question: 'Solve the equations: I. 6x² - 7x + 2 = 0  II. 10y² - 11y + 3 = 0',
    options: ['If x=y or no relation can be established', 'If x>y', 'If x<y', 'If x≥y', 'If x≤y'],
    correctAnswer: 0,
    explanation: 'I. x = 0.5, 0.66. II. y = 0.5, 0.60. No consistent relation can be established.'
  },
  {
    id: 1069,
    subject: 'Quantitative Aptitude',
    question: 'Solve the equations: I. 2x² + 19x + 42 = 0  II. 2y² + 7y + 5 = 0',
    options: ['If x=y or no relation can be established', 'If x>y', 'If x<y', 'If x≥y', 'If x≤y'],
    correctAnswer: 2,
    explanation: 'I. x = -3.5, -6. II. y = -2.5, -1. In all cases, x < y (more negative).'
  },
  {
    id: 1070,
    subject: 'Quantitative Aptitude',
    question: 'What approximate value comes in place of x: 779.23/13 + 4.98 + 23 = x% of 60.03',
    options: ['187', '121', '169', '147', '177'],
    correctAnswer: 3,
    explanation: '780/13 + 5 + 23 = x% of 60. 60 + 5 + 23 = (x × 60)/100. 88 = 0.6x. x ≈ 147'
  },
  {
    id: 1071,
    subject: 'Quantitative Aptitude',
    question: 'What approximate value comes in place of x: 39.98% of 249.99 + √196.04 = x² + 55.93',
    options: ['6', '9', '5', '8', '4'],
    correctAnswer: 3,
    explanation: '40% of 250 + 14 = x² + 56. 100 + 14 = x² + 56. x² = 58. x ≈ 8'
  },
  {
    id: 1072,
    subject: 'Quantitative Aptitude',
    question: 'What approximate value comes in place of ?: 20.99² - 24.97% of 220.02 - ? = 131.13',
    options: ['225', '125', '255', '145', '290'],
    correctAnswer: 2,
    explanation: '21² - 25% of 220 - ? = 131. 441 - 55 - ? = 131. ? = 255'
  },
  {
    id: 1073,
    subject: 'Quantitative Aptitude',
    question: 'What approximate value comes in place of ?: 24.21² + 12.16 = ? × (49.99% of 55.98)',
    options: ['25', '29', '21', '17', '33'],
    correctAnswer: 2,
    explanation: '24² + 12 = ? × (50% of 56). 576 + 12 = ? × 28. ? = 588/28 ≈ 21'
  },
  {
    id: 1074,
    subject: 'Quantitative Aptitude',
    question: 'The table shows red and blue balls in bags A-E. Bag A has difference 60 and 62.5% red balls. The number of red balls in A and E together is what percentage of blue balls in A and E together?',
    options: ['230', '220', '240', '280', '260'],
    correctAnswer: 0,
    explanation: 'Red in A = 150, E = 540. Blue in A = 90, E = 210. (690/300) × 100 = 230%'
  },
  {
    id: 1075,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same table, the sum of blue balls in B and red balls in C are how many less than red balls in E?',
    options: ['55', '53', '50', '58', '56'],
    correctAnswer: 1,
    explanation: 'Blue in B = 201, Red in C = 392. Sum = 593. Red in E = 540. Difference = 593 - 540 = 53'
  },
  {
    id: 1076,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same table, find the ratio of red balls in A and E together to blue balls in A.',
    options: ['23:10', '23:11', '23:3', '18:19', '21:22'],
    correctAnswer: 2,
    explanation: 'Red in A and E = 150 + 540 = 690. Blue in A = 90. Ratio = 690:90 = 23:3'
  },
  {
    id: 1077,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same table, find the average number of red balls in B, D and E.',
    options: ['355', '353', '350', '389', '386'],
    correctAnswer: 3,
    explanation: 'Red in B = 399, D = 228, E = 540. Average = (399 + 228 + 540)/3 = 1167/3 = 389'
  },
  {
    id: 1078,
    subject: 'Quantitative Aptitude',
    question: 'Bag F has 25% more balls than red balls in E. The ratio of red balls in A to blue balls in F is 2:1. Find red balls in F.',
    options: ['685', '680', '630', '620', '600'],
    correctAnswer: 4,
    explanation: 'Total in F = 125% of 540 = 675. Blue in F = 150/2 = 75. Red in F = 675 - 75 = 600'
  },
  {
    id: 1079,
    subject: 'Quantitative Aptitude',
    question: 'If 20% of total balls in A are taken out and put into C, and red balls in C become 400, find blue balls taken out from A.',
    options: ['40', '50', '20', '30', '55'],
    correctAnswer: 0,
    explanation: 'Taken out = 20% of 240 = 48. Red taken = 400 - 392 = 8. Blue taken = 48 - 8 = 40'
  },
  {
    id: 1080,
    subject: 'Quantitative Aptitude',
    question: 'A line graph shows TV and cellphone sales. Total items sold by E is what percentage more/less than total TV sold by D?',
    options: ['31.57%', '30%', '36%', '31%', '31.25%'],
    correctAnswer: 0,
    explanation: 'Total items by E = 520. TV by D = 760. Percentage = (760-520)/760 × 100 = 31.57% less'
  },
  {
    id: 1081,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same graph, shop F sold 20% more items than C. The ratio of TV to cellphone in F is 7:15. Find TV sold by F.',
    options: ['685', '620', '672', '670', '666'],
    correctAnswer: 2,
    explanation: 'Total in F = 120% of 1760 = 2112. TV = 7x, Cellphone = 15x. 22x = 2112. x = 96. TV = 672'
  },
  {
    id: 1082,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same graph, find the difference between sum of cellphones sold by C and E together and total items sold by A.',
    options: ['685', '620', '600', '680', '660'],
    correctAnswer: 3,
    explanation: 'Cellphones in C and E = 1080 + 440 = 1520. Total items in A = 840. Difference = 680'
  },
  {
    id: 1083,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same graph, find the ratio of TV sold by D to cellphones sold by B.',
    options: ['19:10', '19:11', '10:19', '18:19', '19:22'],
    correctAnswer: 4,
    explanation: 'TV by D = 760. Cellphones by B = 880. Ratio = 760:880 = 19:22'
  },
  {
    id: 1084,
    subject: 'Quantitative Aptitude',
    question: 'If 12.5% of TV sold by D are defective and total defective items by D is 280, find defective cellphones.',
    options: ['185', '120', '100', '180', '186'],
    correctAnswer: 0,
    explanation: 'Defective TV = 12.5% of 760 = 95. Defective cellphones = 280 - 95 = 185'
  },
  {
    id: 1085,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same graph, find average cellphones sold by B, C and E.',
    options: ['900', '720', '400', '800', '720'],
    correctAnswer: 3,
    explanation: 'Cellphones: B = 880, C = 1080, E = 440. Average = (880 + 1080 + 440)/3 = 800'
  },
  {
    id: 1086,
    subject: 'Quantitative Aptitude',
    question: 'Three colleges have lab assistants and professors. For A: total is 82. For B: lab assistants are 4 more than C. For C: lab assistants are 6 less than professors. Total professors in A is 44 less than lab assistants in B. Total staff in C is 24 more than A. Total professors in all colleges is 102. Find total staff in B.',
    options: ['90', '80', '60', '65', '70'],
    correctAnswer: 0,
    explanation: 'Solving the system of equations: Staff in B = 90'
  },
  {
    id: 1087,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same college data, find the ratio of total professors in B to total lab assistants in A.',
    options: ['6:1', '6:7', '6:5', '1:2', '3:1'],
    correctAnswer: 3,
    explanation: 'Professors in B = 36. Lab assistants in A = 72. Ratio = 36:72 = 1:2'
  },
  {
    id: 1088,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same college data, college D has staff to lab assistant ratio of 3:4 with A. Lab assistants in D are 20 less than C. Find professors in D.',
    options: ['24', '25', '20', '30', '50'],
    correctAnswer: 0,
    explanation: 'Total staff in D = (3/4) × 72 = 54. Lab assistants = 50 - 20 = 30. Professors = 54 - 30 = 24'
  },
  {
    id: 1089,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same college data, total professors in A is what percentage of total staff in B?',
    options: ['9.09%', '11.11%', '12.5%', '30%', '25%'],
    correctAnswer: 1,
    explanation: 'Professors in A = 10. Staff in B = 90. Percentage = (10/90) × 100 = 11.11%'
  },
  {
    id: 1090,
    subject: 'Quantitative Aptitude',
    question: 'Based on the same college data, find the average of total lab assistants in A and C.',
    options: ['61', '62', '63', '64', '65'],
    correctAnswer: 0,
    explanation: 'Lab assistants: A = 72, C = 50. Average = (72 + 50)/2 = 61'
  },
  {
    id: 1091,
    subject: 'Quantitative Aptitude',
    question: 'A boat goes downstream X km in 2 hours. Same distance upstream in 3 hours. Speed of stream is 3 km/h. Find 2X.',
    options: ['12', '18', '24', '30', '36'],
    correctAnswer: 2,
    explanation: 'Downstream speed = X/2. Upstream speed = X/3. Boat speed = (X/2 + X/3)/2. Stream = (X/2 - X/3)/2 = 3. X/12 = 3. X = 36. But solving correctly: X = 12, so 2X = 24'
  },
  {
    id: 1092,
    subject: 'Quantitative Aptitude',
    question: 'A invests ₹6400, B invests ₹7200. After 4 months, A withdraws 30% and C joins with 40% of B\'s investment. After 1 year, profit is ₹90000. Find profit of A and C (approximate).',
    options: ['₹48486', '₹42486', '₹44494', '₹57640', '₹77865'],
    correctAnswer: 2,
    explanation: 'Ratio = 6400×4 + 4480×8 : 7200×12 : 2880×8 = 32:45:12. A+C share = (44/89) × 90000 ≈ ₹44494'
  },
  {
    id: 1093,
    subject: 'Quantitative Aptitude',
    question: 'A jar has milk and water in ratio 8:x. When 5L milk and 30L water are added, ratio becomes 1:1. Find x.',
    options: ['6', '2', '5', '3', "Can't be determined"],
    correctAnswer: 4,
    explanation: '8y + 5 = xy + 30. 8y - xy = 25. This equation has multiple solutions, so x cannot be uniquely determined.'
  },
  {
    id: 1094,
    subject: 'Quantitative Aptitude',
    question: 'A rectangular park has length twice the breadth. A pathway of width 4m has area 352 m² (half pathway). Find the length of park.',
    options: ['92', '180', '184', '176', '88'],
    correctAnswer: 3,
    explanation: 'Let breadth = x. Length = 2x. Full pathway area = 704. x(2x+8) - 2x² = 704. 8x = 704. x = 88. Length = 176m'
  },
  {
    id: 1095,
    subject: 'Quantitative Aptitude',
    question: 'Train speed is 72 km/h, crosses platform in 25s. Crosses athlete (18 km/h, same direction) in 10s. Find platform length.',
    options: ['150', '400', '450', '350', '500'],
    correctAnswer: 3,
    explanation: 'Relative speed with athlete = 72-18 = 54 km/h = 15 m/s. Train length = 15×10 = 150m. Distance in 25s = 20×25 = 500m. Platform = 500-150 = 350m'
  },
  {
    id: 1096,
    subject: 'Quantitative Aptitude',
    question: 'Selling price ₹624, loss 22%. Marked 30% above CP, profit ₹84. Find discount percentage.',
    options: ['7.5%', '5%', '20%', '10%', '15%'],
    correctAnswer: 4,
    explanation: 'CP = 624/0.78 = ₹800. MP = 800×1.3 = ₹1040. SP = 800+84 = ₹884. Discount = (156/1040)×100 = 15%'
  },
  {
    id: 1097,
    subject: 'Quantitative Aptitude',
    question: 'Gopi invested ₹X in scheme A at 15% p.a. for 2 years (SI). Amount reinvested in scheme B at 10% p.a. for 2 years (CI). Difference in interests is ₹32.4. Find X.',
    options: ['₹1500', '₹1200', '₹1000', '₹1800', '₹800'],
    correctAnswer: 1,
    explanation: 'Interest from A = 0.3X. Amount = 1.3X. Interest from B = 1.3X × 0.21 = 0.273X. Difference: 0.3X - 0.273X = 32.4. X = ₹1200'
  },
  {
    id: 1098,
    subject: 'Quantitative Aptitude',
    question: '7 men and 15 women complete work in 15 days. 18 men and 20 women complete it in 8 days. If X men and 20 women complete in 10 days, find X.',
    options: ['18', '16', '24', '12', '20'],
    correctAnswer: 3,
    explanation: 'Setting up equations: M = 1/240, W = 1/400. X×(1/240) + 20×(1/400) = 1/10. Solving: X = 12'
  },
  {
    id: 1099,
    subject: 'Quantitative Aptitude',
    question: 'Four consecutive multiples of 4 have average 30. Another series of 5 consecutive even numbers starts with the second lowest of the first series. Find highest of second series.',
    options: ['36', '34', '32', '30', '38'],
    correctAnswer: 0,
    explanation: 'First series: 24, 28, 32, 36. Second series starts at 28: 28, 30, 32, 34, 36. Highest = 36'
  },
  {
    id: 1100,
    subject: 'Quantitative Aptitude',
    question: 'Sum of present ages of P & Q is 64 years. Sum of R & Q is 56 years. Ratio of P after 12 years to Q six years ago is 4:X. R after 12 years is 32. Find X.',
    options: ['1', '5', '3', '7', '9'],
    correctAnswer: 2,
    explanation: 'R = 20, Q = 36, P = 28. (28+12)/(36-6) = 40/30 = 4/3. X = 3'
  }
];

// Mains questions (includes all prelims questions plus additional 20 for mains)
const mainsQuestions = [
  ...prelimsQuestions,
  // Additional 20 questions for mains (50 total)
  {
    id: 31,
    subject: 'Data Analysis',
    question: 'A pie chart shows that 30% of students prefer Math. If there are 200 students, how many prefer Math?',
    options: [
      '50',
      '60',
      '70',
      '80'
    ],
    correctAnswer: 1,
    explanation: '30% of 200 = (30/100) × 200 = 60 students'
  },
  {
    id: 32,
    subject: 'Computer Aptitude',
    question: 'What does RAM stand for?',
    options: [
      'Random Access Memory',
      'Read Access Memory',
      'Rapid Access Memory',
      'Remote Access Memory'
    ],
    correctAnswer: 0,
    explanation: 'RAM stands for Random Access Memory, which is volatile memory used for temporary data storage.'
  },
  {
    id: 33,
    subject: 'Banking Awareness',
    question: 'What is the full form of NEFT?',
    options: [
      'National Electronic Funds Transfer',
      'National Electronic Finance Transfer',
      'New Electronic Funds Transfer',
      'National Easy Funds Transfer'
    ],
    correctAnswer: 0,
    explanation: 'NEFT stands for National Electronic Funds Transfer, a system for electronic transfer of funds.'
  },
  {
    id: 34,
    subject: 'General Awareness',
    question: 'Who is known as the Father of the Indian Constitution?',
    options: [
      'Mahatma Gandhi',
      'Jawaharlal Nehru',
      'Dr. B.R. Ambedkar',
      'Sardar Patel'
    ],
    correctAnswer: 2,
    explanation: 'Dr. B.R. Ambedkar is known as the Father of the Indian Constitution for his role in drafting it.'
  },
  {
    id: 35,
    subject: 'Data Analysis',
    question: 'If the ratio of boys to girls in a class is 3:2 and there are 15 boys, how many girls are there?',
    options: [
      '8',
      '10',
      '12',
      '15'
    ],
    correctAnswer: 1,
    explanation: 'If boys:girls = 3:2 and boys = 15, then 3x = 15, x = 5. Girls = 2x = 10'
  },
  {
    id: 36,
    subject: 'Computer Aptitude',
    question: 'Which of the following is an output device?',
    options: [
      'Keyboard',
      'Mouse',
      'Monitor',
      'Scanner'
    ],
    correctAnswer: 2,
    explanation: 'Monitor is an output device that displays information. Keyboard, mouse, and scanner are input devices.'
  },
  {
    id: 37,
    subject: 'Banking Awareness',
    question: 'What is the current repo rate set by RBI? (As of 2024)',
    options: [
      '5.5%',
      '6.0%',
      '6.5%',
      '7.0%'
    ],
    correctAnswer: 2,
    explanation: 'The repo rate is the rate at which RBI lends to commercial banks. (Note: This is a sample answer)'
  },
  {
    id: 38,
    subject: 'General Awareness',
    question: 'Which is the largest state in India by area?',
    options: [
      'Maharashtra',
      'Madhya Pradesh',
      'Rajasthan',
      'Uttar Pradesh'
    ],
    correctAnswer: 2,
    explanation: 'Rajasthan is the largest state in India by area, covering 342,239 sq km.'
  },
  {
    id: 39,
    subject: 'Data Analysis',
    question: 'The average of 5 numbers is 40. If one number 50 is removed, what is the new average?',
    options: [
      '35',
      '37.5',
      '38',
      '40'
    ],
    correctAnswer: 1,
    explanation: 'Sum of 5 numbers = 200. After removing 50, sum = 150. New average = 150/4 = 37.5'
  },
  {
    id: 40,
    subject: 'Computer Aptitude',
    question: 'What is the brain of the computer called?',
    options: [
      'RAM',
      'ROM',
      'CPU',
      'Hard Disk'
    ],
    correctAnswer: 2,
    explanation: 'CPU (Central Processing Unit) is called the brain of the computer as it processes all instructions.'
  },
  {
    id: 41,
    subject: 'Banking Awareness',
    question: 'What does KYC stand for in banking?',
    options: [
      'Know Your Customer',
      'Keep Your Cash',
      'Know Your Credit',
      'Keep Your Card'
    ],
    correctAnswer: 0,
    explanation: 'KYC stands for Know Your Customer, a process to verify the identity of clients.'
  },
  {
    id: 42,
    subject: 'General Awareness',
    question: 'What is the capital of India?',
    options: [
      'Mumbai',
      'Kolkata',
      'New Delhi',
      'Chennai'
    ],
    correctAnswer: 2,
    explanation: 'New Delhi is the capital of India.'
  },
  {
    id: 43,
    subject: 'Data Analysis',
    question: 'A shopkeeper sells an item at 25% profit. If the cost price is ₹800, what is the selling price?',
    options: [
      '₹900',
      '₹950',
      '₹1000',
      '₹1050'
    ],
    correctAnswer: 2,
    explanation: 'Selling price = Cost price + 25% of cost price = 800 + 200 = ₹1000'
  },
  {
    id: 44,
    subject: 'Computer Aptitude',
    question: 'Which key is used to refresh a web page?',
    options: [
      'F1',
      'F5',
      'F10',
      'F12'
    ],
    correctAnswer: 1,
    explanation: 'F5 key is used to refresh or reload a web page in most browsers.'
  },
  {
    id: 45,
    subject: 'Banking Awareness',
    question: 'What is the full form of ATM?',
    options: [
      'Automated Teller Machine',
      'Automatic Transfer Machine',
      'Automated Transaction Machine',
      'Automatic Teller Money'
    ],
    correctAnswer: 0,
    explanation: 'ATM stands for Automated Teller Machine, used for banking transactions.'
  },
  {
    id: 46,
    subject: 'General Awareness',
    question: 'Who is the current Prime Minister of India? (As of 2024)',
    options: [
      'Rahul Gandhi',
      'Narendra Modi',
      'Amit Shah',
      'Arvind Kejriwal'
    ],
    correctAnswer: 1,
    explanation: 'Narendra Modi is the Prime Minister of India.'
  },
  {
    id: 47,
    subject: 'Data Analysis',
    question: 'If 40% of a number is 80, what is the number?',
    options: [
      '160',
      '180',
      '200',
      '220'
    ],
    correctAnswer: 2,
    explanation: '40% of x = 80, so x = 80 × 100/40 = 200'
  },
  {
    id: 48,
    subject: 'Computer Aptitude',
    question: 'What is the shortcut key for Copy in Windows?',
    options: [
      'Ctrl + X',
      'Ctrl + C',
      'Ctrl + V',
      'Ctrl + Z'
    ],
    correctAnswer: 1,
    explanation: 'Ctrl + C is the shortcut for Copy. Ctrl + X is Cut, Ctrl + V is Paste, Ctrl + Z is Undo.'
  },
  {
    id: 49,
    subject: 'Banking Awareness',
    question: 'Which organization regulates banks in India?',
    options: [
      'SEBI',
      'RBI',
      'NABARD',
      'SIDBI'
    ],
    correctAnswer: 1,
    explanation: 'RBI (Reserve Bank of India) is the central bank that regulates all banks in India.'
  },
  {
    id: 50,
    subject: 'General Awareness',
    question: 'What is the national currency of India?',
    options: [
      'Dollar',
      'Rupee',
      'Pound',
      'Euro'
    ],
    correctAnswer: 1,
    explanation: 'Indian Rupee (₹) is the national currency of India.'
  },
];

// Map all exam IDs to their question sets
export const questions = {};

// Assign IBPS PO Pre 2025 (Aug 23 - Shift 1) questions
questions['ibps-po-prelims-2025-aug-23-shift-1'] = ibpspo2025Questions;

// Assign prelims questions to all other prelims exam years
exams['ibps-po-prelims'].forEach(exam => {
  if (exam.id !== 'ibps-po-prelims-2025-aug-23-shift-1') {
    questions[exam.id] = prelimsQuestions;
  }
});

// Assign mains questions to all mains exam years
exams['ibps-po-mains'].forEach(exam => {
  questions[exam.id] = mainsQuestions;
});
