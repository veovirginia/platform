export interface OnboardStepOneValues {
  name: string;
  phone: string;
  graduation: string;
  major: string;
  idea: string;
}

export interface UserProfile extends OnboardStepOneValues {
  email: string;
  bio: string;
  avatar: string;
}
