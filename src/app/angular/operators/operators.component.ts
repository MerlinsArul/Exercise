import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, concat, concatMap, debounce, debounceTime, delay, filter, from, fromEvent, interval, map, mergeMap, Observable, of, startWith, Subject, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  // of Operator and Filter

  emp: any
  employeeList = ['Merlins', 'Maha', 'Arthi', 'Pavi', 'Sharmila'];
  employee: Observable<string[]> = of(this.employeeList);
  employeeObj = from([{
    id: 6,
    name: 'sathi'
  },
  {
    id: 7,
    name: 'divish'
  },
  {
    id: 8,
    name: 'dhanush'
  }])

  employeename: Observable<any> = of(this.employeeObj)


  // from Operator

  courseArr = ['React', 'Angular', 'NodeJs', 'HTML', 'JavaScript'];
  course: Observable<any> = from(this.courseArr)
  courseName: string;

  //fromEvent

  @ViewChild('btn', { static: true }) button: ElementRef;
  buttonSubscription: any;

  //combinelatest and concat

  weight = of(70, 72, 76, 79, 75);
  height = of(1.76, 1.77, 1.78);


  //startswith

  text1 = of('Merlins', 'Sherlin');

  //debouncetime
  searchForm: FormGroup;

  //interval and take

  interval$ = interval(1000);
  source = of(45, 67, 87, 34, 56)

  //takeUntil
  notifier = new Subject();


  // map , tap 

  num = of(34, 56, 87, 30, 67)

  // concatmap and mergemap

  delaytime = of(2000, 1000)


  constructor() { }


  ngOnInit(): void {
    this.ofOperator();
    this.fromOperator();
    this.combineOperator();
    this.concatOperator();
    this.startOperator();
    this.formcontrol();
    this.filterOperator();
    this.takeOperator();
    this.takeUntilOperator();
    this.mapTapOperator();
    this.concatMergeOperator();
  }

  buttonClick() {
    this.buttonSubscription = fromEvent(this.button.nativeElement, 'click')
      .subscribe(res => console.log(res));
    const click$ = fromEvent(this.button.nativeElement, 'click');

    const mouseOver$ = fromEvent(this.button.nativeElement, 'mouseover');

    click$.subscribe(val => console.log('Button Clicked'));

    mouseOver$.subscribe(val => console.log('Mouse over button'));

  }

  ngAfterViewInit() {
    this.buttonClick();
  }


  ofOperator() {
    this.employee.subscribe(data => {
      this.emp = data;
      console.log(data);

    })


    this.employeename.subscribe(res => console.log(res))
  }


  fromOperator() {
    this.course.subscribe(data =>
      console.log(data))
  }

  combineOperator() {

    const bmi = combineLatest([this.weight, this.height], (w, h) => {
      console.log('project values: w = ', w, ', h = ', h);
      return w / (h * h);
    });
    bmi.subscribe(res => console.log('BMI is ' + res));

  }


  concatOperator() {
    concat(this.weight, this.height).
      subscribe(res => console.log(res))
  }

  startOperator() {
    this.text1.pipe(startWith('Hello')).
      subscribe(res => console.log('Startswith text:', res))

  }
  formcontrol() {
    this.searchForm = new FormGroup({
      name: new FormControl('')
    });
    this.searchForm.get('name').valueChanges.pipe(debounceTime(3000))
      .subscribe(data => {
        console.log('Debounce Time', data);


      })
  }

  filterOperator() {
    this.employeeObj.pipe(filter(stud => stud.id > 6))
      .subscribe(data => (console.log('The Filter Operator', data)
      ))
  }
  mapTapOperator() {
    console.log('mapping');

    this.num.pipe(tap(val => console.log('Before mapping', val)),
      map(val => val + 2),
      tap(val => console.log('After Mapping', val))).subscribe(val => console.log(val))
  }
  takeOperator() {
    this.source.pipe(take(2)).subscribe(data => (console.log('Take value from source', data)));
    this.interval$.pipe(take(5)).subscribe(val => (console.log('Take from interval', val)))
  }

  takeUntilOperator() {
    const obs = interval(1000).pipe(takeUntil(this.notifier));
    obs.subscribe(data => (console.log('Take data until stop', data)))
  }

  stopObs() {
    this.notifier.next(0);
    this.notifier.complete();
  }

  concatMergeOperator() {
    this.delaytime.pipe(concatMap(val => of(`Delayed by : ${val}ms`).pipe(delay(val)))).subscribe(val =>
      console.log('This is for concat map', val));
    this.delaytime.pipe(mergeMap(val => of(`Delayed by : ${val}ms`).pipe(delay(val)))).subscribe(val =>
      console.log('This is for Merge map', val))
  }


}


