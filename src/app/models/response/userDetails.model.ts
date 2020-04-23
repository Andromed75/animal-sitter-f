import { Animal } from '../animal.model';
import { Disponibility } from '../disponibility.model';

export class UserDetails {

  constructor(

    public id: string,
    public pseudo: string,
    public email: string,
    public animals: Animal[],
    public disponibility: Disponibility[]



  ) {

  }

}

