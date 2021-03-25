**3/25 Completely rebuidling project while keeping existing elements**

Turning Traffic Webiste. 
https://turningtraffic.vercel.app/

Main Colors of the traffic light
Red: AA1E24 Yellow: F1EF70 Green: 268540

**Changes made => using Next JS and typescript**

important notes about typescript for my future reference. 

Generics i.e. 

type StringArray = Array<string>;
  
type NumberArray = Array<number>;
  
type ObjectWithNameArray = Array<{ name: string }>;

**you can also add a type check to the contents of the arry as shown above**

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
Argument of type 'number' is not assignable to parameter of type 'string'.
