import { Type } from "./genre";
import { User } from "./user";

export class Song {
     title : string ;
     description : string  ;
     coverpicture : string  ;
     downloadable : string  ;
     explicit : boolean  ;
     dateupload : Date  ;
     datecreation : Date  ;
     duration : number  ;
     enable : boolean  ;
     nblike : number  ;
     nbplayed : number  ;
     nbdownloaded : number  ;
     idgenre : Type;
     iduser : User;
    }