export type Stock = {
    id: number;
    puuid: string;
    leagueId: string;
    gameName: string;
    tagLine: string;
    delta8h: number | null;
    delta24h: number | null;
    delta72h: number | null;
  };
  