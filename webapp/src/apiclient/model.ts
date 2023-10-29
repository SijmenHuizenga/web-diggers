export type Piece = {
  id: string;
  name: string;
  context: string;
  year: number;
  hide: boolean;
  source: string;
  screenshot: string;
  embed: string;
  "type of embed": "IMAGE" | "IFRAME" | "VIDEO" | "MUSIC" | "";
  updated: string;
  playing: boolean;
};
