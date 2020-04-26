import { Animal } from '../animal.model';
import { Disponibility } from '../disponibility.model';
import { Address } from '../address.model';

export class UserDetails {

  constructor(

    public id: string,
    public pseudo: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public address: Address,
    public animals: Animal[],
    public disponibility: Disponibility[]



  ) {

  }

}

