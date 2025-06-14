export type ReviewType = {
  id: string;
  createAt: string;
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

export type ReviewInitialState = {
  review: ReviewType[] | undefined;
  isReviewLoading: boolean;
}
