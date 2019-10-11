import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class DBConnect{

    registerToDB(users: any){
        console.log("user added!!");
        
        
        this.http.post('http://localhost:3000/posts/postCardHolderInfo', users).subscribe(mydata =>{
            console.log(mydata);
        },
        (err) => {
            console.log("ERRORERRORERRORERRORERRORERRORERROR");
            console.error(err);
        },
        () => {
            console.log("success");
        })

    }

    cardApptoDB(users: any){
        console.log("data added!!");

        this.http.post('http://localhost:3000/posts/SubmitApplication', users).subscribe(mydata => {
            console.log(mydata);
        },
        (err) => {
            console.log("not added cardapp");
            console.log(err);
        },
        ()=>{
            console.log("succeessss!!!!!!");
        })
    }

    getAppsBySSN(ssn:string){
        
        console.log('http://localhost:3000/get/getStatus/0123456')
        return this.http
            .get(
                'http://localhost:3000/get/getApplicationbySSN/1472583639'
            )
            .pipe(
                map(responseData => {
                    const appsArray: any[] = [];
                    for(const key in responseData) {
                        if(responseData.hasOwnProperty(key)){
                            appsArray.push({ ...responseData[key], id: key});
                        }
                    }
                    console.log(appsArray);
                    return appsArray;
                }    
            )
        );
    }


    constructor(private http:HttpClient){}
}