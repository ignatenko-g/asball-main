export interface IMatch {
  id: string;
  date: Date;
  channel: Channel;
  homeTeam: Team;
  awayTeam: Team;
  league: League;
}

interface Team {
  id: string;
  name: string;
  images: {
    small: string;
    medium: string;
    main: string;
  };
}

interface League {
  id: string;
  name: string;
}

interface Channel {
  id: string;
  link: string;
}
