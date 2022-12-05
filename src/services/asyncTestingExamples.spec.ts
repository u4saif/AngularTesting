import { fakeAsync, flush, tick, flushMicrotasks } from "@angular/core/testing";
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';
describe("AsyncTesting Examples",()=>{

    it("should show example with Jasmine Done",(done:DoneFn)=>{

        let actionValue=false;
        setTimeout(()=>{
            actionValue=true;
            expect(actionValue).toBeTruthy();
            done();
        },1000);
    });

    it("should show example of FakeAsync with tickFunction",fakeAsync(()=>{
        let fakeActionValue=false;
        setTimeout(()=>{
            console.warn("Running fakeAsync assertion");
            fakeActionValue=true;
            expect(fakeActionValue).toBeTruthy();
        },1000);
        tick(999);
        tick(1);
    }));

    it("should show example of FakeAsync with flushFunction",fakeAsync(()=>{
        let fakeActionValue=false;
        setTimeout(()=>{
            console.warn("Running fakeAsync assertion");
            fakeActionValue=true;
        },1000);
        flush();
        expect(fakeActionValue).toBeTruthy();
    }));

    it("should show example of Plain Promise",fakeAsync(()=>{

        let promosAction=false;
        setTimeout(()=>{
            console.log("settimeOut in promise specification");
        });
        Promise.resolve().then(()=>{
            console.log("first promise run successfully");
            
            return Promise

        }).then(
            ()=>{
                console.log("second promise ran..");
                promosAction=true;
            }
        );
        console.log("promise assertion run successfully");
        flushMicrotasks();
        flush();
        expect(promosAction).toBeTruthy();


    }));

    it('Realworld example of promise and setTimeout with' , fakeAsync(()=>{

        let counter=0;
        Promise.resolve().then(()=>{
            counter+=10
            setTimeout(()=>{
                counter+=1;
            },1000);
        });

        expect(counter).toEqual(0);
        flushMicrotasks();
        expect(counter).toEqual(10);
        tick(1000);
        expect(counter).toEqual(11);
    }));

    it('should show Observable example',fakeAsync(()=>{
        let value=false;

        console.log("creating Observable");
        let ObservableStream$=of(value).pipe(delay(1000));

        ObservableStream$.subscribe(()=>{
            value=true;
            console.log("observable assertion ran");
            expect(value).toBeTruthy();
        });

        tick(1000);
    }));
});