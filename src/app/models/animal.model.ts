export class Animal {

  constructor(

    public id: string,
    public name: string,
    public tatoo: string,
    public age: number,
    public furColor: string,
    public eyesColor: string,
    public sick: boolean,
    public whenDoIEat: string,
    public whatDoIeat: string,
    public sicknesses: Sickness[]



  ) {

  }

}

export class Sickness {

  constructor(
    public id: string,
    public name: string,
    public description: string,
    public importance: string

  ) {

  }

}
