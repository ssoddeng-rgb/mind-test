// English translations for questions (same IDs as questions.ts)
export interface QuestionTranslation {
  id: number;
  text: string;
  options: [string, string, string, string];
}

export const questionsEn: QuestionTranslation[] = [
  // ── MBTI (16) ─────────────────────────────────────────────────────────────
  {
    id: 1,
    text: 'At a party full of new people, you tend to:',
    options: [
      'Chat actively with many people and feel energized',
      'Prefer deep conversations with a few people',
      'Stay near someone you know and keep to yourself',
      'Think about leaving as soon as possible',
    ],
  },
  {
    id: 2,
    text: 'When planning your weekend, you usually:',
    options: [
      'Love spontaneously meeting up with friends',
      'Plan a detailed schedule in advance',
      'Make sure to reserve alone time',
      'Decide on the day based on your mood',
    ],
  },
  {
    id: 3,
    text: 'When you encounter new information, the first thing you do is:',
    options: [
      'Check the concrete facts and data',
      'Imagine the patterns and possibilities it implies',
      'Think about how to apply it in real life',
      'Connect it to other concepts and see the big picture',
    ],
  },
  {
    id: 4,
    text: "When a friend needs to make a difficult decision, you:",
    options: [
      'Logically analyze pros and cons to find the best choice',
      'Empathize with their feelings and think it through together',
      'Give honest advice based on your own experience',
      'Ask questions to help them reach their own conclusion',
    ],
  },
  {
    id: 5,
    text: 'When starting a project, your approach is:',
    options: [
      'Create a step-by-step plan and follow it systematically',
      'Set the general direction and stay flexible',
      'Gather as much information as possible first',
      'Just start and solve problems as they come',
    ],
  },
  {
    id: 6,
    text: 'In a conflict situation, you tend to:',
    options: [
      'Focus on facts over emotions to find a solution',
      'Prioritize the other person\'s feelings above all',
      'Speak directly and resolve it quickly',
      'Step back and give everyone time to calm down',
    ],
  },
  {
    id: 7,
    text: 'When you think about the future, you:',
    options: [
      'Set specific goals with deadlines',
      'Keep many possibilities open and think flexibly',
      'Vividly imagine your ideal future',
      'Focus on the present and let the future flow naturally',
    ],
  },
  {
    id: 8,
    text: 'What do you usually do with your alone time?',
    options: [
      'Explore new ideas or concepts',
      'Enjoy hobbies like reading or watching films',
      'Organize your to-do list and make plans',
      'Listen to music and sort through your feelings',
    ],
  },
  {
    id: 9,
    text: 'Which type of problem gives you the most satisfaction to solve?',
    options: [
      'Complex logical puzzles or math problems',
      'Conflicts or emotional issues between people',
      'Practical, hands-on real-world problems',
      'Creative problems that require innovative ideas',
    ],
  },
  {
    id: 10,
    text: 'In a team project, the role you naturally take on is:',
    options: [
      'A leader who sets clear goals and direction',
      'A communicator who lifts team morale',
      'An executor who carefully handles the details',
      'A creative contributor who proposes new ideas',
    ],
  },
  {
    id: 11,
    text: 'When it comes to deadlines, you:',
    options: [
      'Finish early with plenty of time to spare',
      'Produce your best work right before the deadline',
      'Make steady progress with regular check-ins',
      'Start late but never compromise on quality',
    ],
  },
  {
    id: 12,
    text: 'When making decisions, you mainly rely on:',
    options: [
      'Objective data and logical analysis',
      'Intuition and gut feeling',
      'Others\' opinions and emotional impact on people',
      'Past experience and proven methods',
    ],
  },
  {
    id: 13,
    text: 'What interests you most in learning?',
    options: [
      'Detailed facts and specific information',
      'Theories and abstract concepts',
      'Real applications and practical examples',
      'New connections and insights across existing knowledge',
    ],
  },
  {
    id: 14,
    text: 'When you\'re stressed, what helps you most?',
    options: [
      'Analyzing the problem and making a resolution plan',
      'Talking freely with someone close to you',
      'Having alone time to recharge',
      'Switching gears with an activity you enjoy',
    ],
  },
  {
    id: 15,
    text: 'When an unexpected change occurs, your reaction is:',
    options: [
      'Welcome it as a new possibility and adapt quickly',
      'Feel flustered but adjust your plan as best you can',
      'Try to understand the cause of the change first',
      'Feel uncomfortable and want to return to the original plan',
    ],
  },
  {
    id: 16,
    text: 'Your ideal work environment is:',
    options: [
      'An energetic environment with active team collaboration',
      'A quiet space where you can focus alone',
      'A structured process with clear role definitions',
      'A free, creative environment overflowing with ideas',
    ],
  },

  // ── Big Five (10) ──────────────────────────────────────────────────────────
  {
    id: 17,
    text: 'When you encounter a new piece of art or music:',
    options: [
      'You appreciate it deeply and feel inspired',
      'You find it interesting but prefer familiar things',
      'You\'re not particularly interested',
      'You think it\'s meaningless without practical value',
    ],
  },
  {
    id: 18,
    text: 'How do you feel about to-do lists and scheduling?',
    options: [
      'You manage them thoroughly and check everything off',
      'You only note the important things',
      'You just keep it all in your head',
      'You prefer going with the flow over planning',
    ],
  },
  {
    id: 19,
    text: 'When you\'re with a group of strangers:',
    options: [
      'You quickly warm up and lead the conversation',
      'You adapt depending on the situation',
      'You only talk when necessary and stay quiet',
      'You feel uncomfortable and want to leave quickly',
    ],
  },
  {
    id: 20,
    text: 'When someone asks you for a favor:',
    options: [
      'It\'s hard to say no and you try to help as much as possible',
      'You assess the situation and help when you can',
      'Your own work comes first; you help only when you have time',
      'If it\'s outside your role, you politely decline',
    ],
  },
  {
    id: 21,
    text: 'How often do you experience mood swings in daily life?',
    options: [
      'Frequently, and they affect you strongly',
      'Occasionally you go through emotionally tough times',
      'Generally stable but big stressors throw you off',
      'You stay emotionally steady in most situations',
    ],
  },
  {
    id: 22,
    text: 'What are you best at?',
    options: [
      'Inventing and creating new ideas',
      'Building relationships and cooperating with people',
      'Making plans and executing them',
      'Analyzing and solving complex problems',
    ],
  },
  {
    id: 23,
    text: 'How do you feel psychologically in uncertain situations?',
    options: [
      'Anxious and constantly imagining worst-case scenarios',
      'Worried, but you tell yourself it\'ll work out',
      'You calmly think about how to handle it',
      'You find it exciting and see it as a challenge',
    ],
  },
  {
    id: 24,
    text: 'Your attitude toward rules and procedures:',
    options: [
      'Rules are important and must always be followed',
      'You generally follow them but need flexibility',
      'Depending on the situation, goals matter more than rules',
      'Creative approaches are more effective than rules',
    ],
  },
  {
    id: 25,
    text: 'Your fundamental view of other people:',
    options: [
      'People are basically good and trustworthy',
      'Cautious at first, but you trust more as you get to know them',
      'People vary; you reserve judgment',
      'People tend to look out for themselves first',
    ],
  },
  {
    id: 26,
    text: 'How do you see your own imagination and creativity?',
    options: [
      'Very rich — it\'s one of my greatest strengths',
      'Average, but I can tap into it when needed',
      'Practicality matters more than creativity to me',
      'I\'m more analytical than creative',
    ],
  },

  // ── Enneagram (8) ─────────────────────────────────────────────────────────
  {
    id: 27,
    text: 'What do you fear most deeply?',
    options: [
      'Being wrong or acting immorally',
      'Not being loved or being abandoned',
      'Failing and being seen as worthless',
      'Losing your individuality and becoming ordinary',
    ],
  },
  {
    id: 28,
    text: 'What is your core motivation?',
    options: [
      'Making the world safer and more predictable',
      'Achieving success and gaining recognition',
      'Helping others and being loved',
      'Pursuing freedom and joyful experiences',
    ],
  },
  {
    id: 29,
    text: 'In relationships, the role you naturally play is:',
    options: [
      'The mediator who resolves conflict and keeps the peace',
      'The leader who takes charge and sets direction',
      'The analyst who solves problems with knowledge',
      'The connector who builds bonds through emotional depth',
    ],
  },
  {
    id: 30,
    text: 'Your typical reaction when stressed is:',
    options: [
      'Trying to control more and be more perfect',
      'Becoming anxious and worrying about worst-case scenarios',
      'Withdrawing and shutting down emotionally',
      'Becoming more active and seeking fun distractions',
    ],
  },
  {
    id: 31,
    text: 'Your greatest strength is:',
    options: [
      'Moral principles and a sense of responsibility',
      'Warm care and empathy',
      'Strength and the ability to take action',
      'Originality and deep emotional sensitivity',
    ],
  },
  {
    id: 32,
    text: 'What would a perfect day look like for you?',
    options: [
      'A productive day where you achieve your goals',
      'A day where you feel deeply connected with loved ones',
      'A day of learning and exploring something new',
      'A peaceful, worry-free day',
    ],
  },
  {
    id: 33,
    text: 'The feedback you receive from others most often is:',
    options: [
      'You\'re too critical and perfectionistic',
      'You\'re too ambitious and competitive',
      'You\'re too dependent or emotional',
      'You\'re too passive or indecisive',
    ],
  },
  {
    id: 34,
    text: 'If you were to honestly express your inner world:',
    options: [
      'The world feels unsafe and I\'m afraid of making mistakes',
      'I worry that I\'m not loved enough',
      'I feel special and misunderstood',
      'I don\'t want to depend on anyone',
    ],
  },

  // ── Attachment (6) ────────────────────────────────────────────────────────
  {
    id: 35,
    text: 'In an intimate relationship, the situation that makes you most uncomfortable is:',
    options: [
      'When the other person tries to rely on me too much',
      'When the other person becomes less responsive',
      'When an unexpected conflict arises in the relationship',
      'There\'s no situation that really makes me uncomfortable',
    ],
  },
  {
    id: 36,
    text: "When your partner or close friend seems to be in a bad mood, you:",
    options: [
      'Approach them first and offer to help',
      'Worry that you might have done something wrong',
      'Wait for them to bring it up themselves',
      'Feel awkward and unsure of how to respond',
    ],
  },
  {
    id: 37,
    text: 'When a conflict arises in a relationship, your typical pattern is:',
    options: [
      'Trying to resolve it calmly through conversation',
      'Feeling anxious about reconciliation and tending to cling',
      'Needing to create distance and process things alone',
      'Reacting with intense emotion or in unpredictable ways',
    ],
  },
  {
    id: 38,
    text: 'Your honest thoughts about intimacy with others:',
    options: [
      'Intimacy is a source of happiness and forms naturally',
      'I want to be close, but I fear the other person will leave',
      'I\'m comfortable keeping a certain distance; too close feels uncomfortable',
      'I want to be close, but I also feel afraid at the same time',
    ],
  },
  {
    id: 39,
    text: 'When you think back on your childhood relationship with a parent or primary caregiver:',
    options: [
      'It was generally warm and stable',
      'I was loved, but it felt anxious or unpredictable',
      'There was emotional distance or indifference',
      'It was warm sometimes, but also frightening or confusing',
    ],
  },
  {
    id: 40,
    text: 'What do you want most in a relationship right now?',
    options: [
      'A deep connection where you understand and support each other',
      'Someone who is always there and makes you feel safe',
      'A relationship that respects your autonomy',
      'Someone who responds in a predictable and consistent way',
    ],
  },
];
