import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {StudentResponseDto} from "../dto/student-response-dto";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl = 'https://administration-school.herokuapp.com/Students';
  constructor( private http: HttpClient) { }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.studentUrl}`);
  }
  createStudent(studentDto: StudentResponseDto):Observable<object>{
    return this.http.post(`${this.studentUrl}`,studentDto);  }

  updateStudent(studentDto: StudentResponseDto, id: number):Observable<object>{
    return this.http.put(`${this.studentUrl}/${id}`,studentDto);
  }
 getStudentById(id : number):Observable<Student>{
    return this.http.get<Student>(`${this.studentUrl}/${id}`);
 }
 deleteStudent(id: number):Observable<object>{
    return this.http.delete(`${this.studentUrl}/${id}`);
 }
}
