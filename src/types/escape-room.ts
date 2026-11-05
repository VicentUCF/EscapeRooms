export type EscapeType = "Aventura" | "Terror";

export type RoomScores = {
  acting: number | null;
  ambience: number | null;
  entry: number | null;
  finale: number | null;
  puzzles: number | null;
  terror: number | null;
  history?: number | null;
};

export type RoomReview = {
  summary: string;
  experience: string;
  verdict: string;
};

export type RoomVisit = {
  date: string;
  note?: string;
};

/** The source shape may contain incomplete records. A valid final score is enough to publish a partial page. */
export type EscapeRoom = {
  id: string;
  slug: string;
  name: string;
  rankingName?: string;

  type: EscapeType | null;
  place: string | null;
  date: string | null;

  finalScore: number | null;

  /** Original editorial synopsis based on the operator's public premise. */
  description?: string | null;
  /** Exact operator page used for the synopsis, when one could be verified. */
  descriptionSource?: string | null;

  scores: RoomScores;
  review?: RoomReview | null;
  company?: string | null;
  website?: string | null;
  identityStatus?: "verified" | "pending";
  durationMinutes?: number | null;
  players?: string | null;
  image?: string | null;
  imageAlt?: string | null;
  visits?: RoomVisit[];
  notionUrl?: string;
};

export type PublishedEscapeRoom = EscapeRoom & {
  type: EscapeType;
  finalScore: number;
};
