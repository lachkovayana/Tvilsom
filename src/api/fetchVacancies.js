import { instance } from "./Api"

export const fetchVacancies = async () => {
   const res =  await instance.get('Vacancies');
   return res.data;
}
