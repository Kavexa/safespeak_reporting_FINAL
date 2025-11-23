// Rule-based keyword detection for teacher/staff involvement

const TEACHER_KEYWORDS = [
  'teacher', 'sir', 'maam', "ma'am", 'miss', 'mr', 'mrs', 'ms',
  'staff', 'principal', 'headmaster', 'headmistress', 'instructor',
  'professor', 'educator', 'faculty', 'coach', 'counselor', 'counsellor',
  'tutor', 'mentor', 'guard', 'warden', 'administrator', 'supervisor',
  'pt sir', 'pt maam', 'class teacher', 'coordinator', 'driver', 'conductor',
  'peon', 'helper', 'security', 'librarian', 'lab assistant'
];

const HARMFUL_KEYWORDS = [
  // Physical Abuse
  'hit', 'hitting', 'slap', 'slapped', 'beat', 'beaten', 'punch', 'punched',
  'kick', 'kicked', 'pinch', 'pinched', 'push', 'pushed', 'shove', 'shoved',
  'pull', 'pulled', 'hair', 'ear', 'twist', 'twisted', 'throw', 'threw',
  'stick', 'ruler', 'duster', 'chalk', 'book', 'object', 'hurt', 'hurting',
  'pain', 'painful', 'injury', 'injured', 'bleed', 'bleeding', 'bruise', 'bruised',
  'burn', 'burned', 'cut', 'scratch', 'scratched',

  // Verbal & Emotional Abuse
  'yell', 'yelled', 'yelling', 'shout', 'shouted', 'shouting', 'scream', 'screamed',
  'scold', 'scolded', 'insult', 'insulted', 'stupid', 'idiot', 'dumb', 'useless',
  'worthless', 'fat', 'ugly', 'shame', 'shamed', 'ashamed', 'humiliate', 'humiliated',
  'embarrass', 'embarrassed', 'mock', 'mocked', 'tease', 'teased', 'laugh', 'laughed',
  'threaten', 'threatened', 'scare', 'scared', 'afraid', 'fear', 'terror',
  'bully', 'bullied', 'bullying', 'harass', 'harassed', 'harassment',
  'ignore', 'ignored', 'isolate', 'isolated', 'corner', 'cornered',

  // Inappropriate / Sexual Behavior
  'touch', 'touched', 'touching', 'bad touch', 'good touch', 'private', 'privates',
  'body', 'chest', 'leg', 'legs', 'lap', 'sit', 'sat', 'hug', 'hugged', 'kiss', 'kissed',
  'stare', 'staring', 'look', 'looking', 'wink', 'winked', 'undress', 'clothes',
  'dress', 'skirt', 'shirt', 'pant', 'pants', 'bathroom', 'toilet', 'washroom',
  'alone', 'secret', 'room', 'office', 'cabin', 'home', 'house', 'car', 'ride',
  'photo', 'video', 'camera', 'phone', 'message', 'text', 'whatsapp', 'call',
  'uncomfortable', 'weird', 'dirty', 'nasty', 'vulgar',

  // Academic / Power Abuse
  'fail', 'failed', 'failing', 'marks', 'grades', 'score', 'exam', 'test',
  'tuition', 'class', 'private class', 'money', 'fee', 'fees', 'pay', 'paid',
  'bribe', 'gift', 'favor', 'favour', 'favoritism', 'partial', 'partiality',
  'punish', 'punishment', 'kneel', 'stand', 'outside', 'sun', 'run', 'rounds',
  'homework', 'assignment', 'project', 'unfair', 'discriminate', 'discrimination',
  'caste', 'religion', 'color', 'colour', 'gender', 'rich', 'poor'
];

const HIGH_RISK_CATEGORIES = [
  'bullying', 'abuse', 'safety'
];

interface DetectionResult {
  isTeacherInvolved: boolean;
  requiresHigherAuthority: boolean;
  detectedKeywords: {
    teacher: string[];
    harmful: string[];
  };
  confidenceScore: number;
}

export const detectTeacherInvolvement = (
  description: string,
  category: string
): DetectionResult => {
  const lowerDesc = description.toLowerCase();

  // Find matching keywords
  const detectedTeacherKeywords = TEACHER_KEYWORDS.filter(keyword =>
    lowerDesc.includes(keyword)
  );

  const detectedHarmfulKeywords = HARMFUL_KEYWORDS.filter(keyword =>
    lowerDesc.includes(keyword)
  );

  const isTeacherInvolved = detectedTeacherKeywords.length > 0;
  const hasHarmfulContent = detectedHarmfulKeywords.length > 0;
  const isHighRiskCategory = HIGH_RISK_CATEGORIES.includes(category);

  // Calculate confidence score (0-100)
  let confidenceScore = 0;
  if (isTeacherInvolved) confidenceScore += 40;
  if (hasHarmfulContent) confidenceScore += 30;
  if (isHighRiskCategory) confidenceScore += 30;

  // Requires higher authority if teacher involved AND (harmful content OR high-risk category)
  const requiresHigherAuthority = isTeacherInvolved && (hasHarmfulContent || isHighRiskCategory);

  return {
    isTeacherInvolved,
    requiresHigherAuthority,
    detectedKeywords: {
      teacher: detectedTeacherKeywords,
      harmful: detectedHarmfulKeywords
    },
    confidenceScore
  };
};
