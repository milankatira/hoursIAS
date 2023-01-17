import { Iuser } from '../interface/user.interface';
import { Igenre } from '../interface/userPreference.interface';
export const passwordHandler = (data: Iuser, userPreferance: Igenre[]) => {

  const datacopy = JSON.parse(JSON.stringify(data));
  delete datacopy.password;
  datacopy.genre = userPreferance;
  return datacopy;

};
