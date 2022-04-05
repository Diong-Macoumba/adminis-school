import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teacher} from "../model/teacher";
import {TeacherResponseDto} from "../dto/teacher-response-dto";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teacherUrl = 'https://administration-school.herokuapp.com/Teachers';
  constructor(private http: HttpClient) { }
  getTeachers():Observable<Teacher[]>{
    return this.http.get<Teacher[]>(`${this.teacherUrl}`);
  }
  getTeacherById(id : number):Observable<Teacher>{
    return this.http.get<Teacher>(`${this.teacherUrl}/${id}`);
  }
  create(teacher: TeacherResponseDto):Observable<object>{
    return this.http.post(`${this.teacherUrl}`,teacher);
  }
  update(teacherDto: TeacherResponseDto, id: number):Observable<object>{
    return this.http.put(`${this.teacherUrl}/${id}`,teacherDto);
  }
  delete(id: number):Observable<object>{
  return   this.http.delete(`${this.teacherUrl}/${id}`)
  }
}
