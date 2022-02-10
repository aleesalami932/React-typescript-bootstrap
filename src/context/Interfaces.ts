export interface LearningMethode {
  methodeId: string;
  methodeName: string;
  methodeImg: string;
  methodeDescription: string;
}
export interface ILearningMethodePros {
  items: LearningMethode[];
}

export interface Fqa {
  questionId: string;
  fqaQuestion: string;
  fqaAnswer: string;
}

export interface InstructorInfo {
  instructorId: string;
  instructorName: string;
  instructorBio: string;
  instructorImg: string;
}

export interface ContactInfo {
  mainLocation: string;
  enrollmentPhone: string;
  studentPhone: string;
  EnrollmentEmail: string;
  studentEmail: string;
}
