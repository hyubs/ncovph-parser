import Sex from './Sex';
import Nationality from './Nationality';

interface PHMasterlistArcGISFeature extends Object {
  FID: number;
  PH_masterl: string;
  edad: number;
  kasarian: Sex;
  nationalit: Nationality;
  residence: string;
  travel_hx: string;
  symptoms: string;
  confirmed: string;
  facility: string;
  latitude: number;
  longitude: number;
  status: string;
  epi_link: string;
  petsa: string;

  // Additional properties
  date_deceased?: string;
  date_recovered?: string;
}

export default PHMasterlistArcGISFeature;
