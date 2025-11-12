export interface LaunchData {
  id: string;
  mission: string;
  rocket: string;
  launchSite: string;
  date: string;
  success: boolean | null;
}

export interface TableViewProps {
  launches: LaunchData[];
}

// Meu SchemaTypes baseado na API do SpaceX
export interface LaunchResponse {
  id: string;
  mission_name: string;
  rocket?: { rocket_name: string };
  launch_site?: { site_name_long: string };
  launch_date_utc: string;
  launch_year: string;
  launch_success: boolean | null;
}
