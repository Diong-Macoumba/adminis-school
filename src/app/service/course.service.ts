import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {CourseResponseDto} from "../dto/course-response-dto";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseUrl = 'https://administration-school.herokuapp.com/Courses';
  constructor(private http : HttpClient) { }
  getAllCourse():Observable<Course[]>{
    return this.http.get<Course[]>(`${this.courseUrl}/All`);
  }
  getCourseById(id : number):Observable<Course>{
    return this.http.get<Course>(`${this.courseUrl}/${id}`);
  }
  createCourse(course: CourseResponseDto):Observable<object>{
    return this.http.post(`${this.courseUrl}`,course);
  }
  deleteCourse(id:  number):Observable<any>{
    return this.http.delete(`${this.courseUrl}/${id}`);
  }
  updateCourse(id: number, course: CourseResponseDto):Observable<object>{
    return this.http.put(`${this.courseUrl}/${id}`,course);
  }
}
