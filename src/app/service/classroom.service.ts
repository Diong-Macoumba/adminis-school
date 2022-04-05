import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classroom} from "../model/classroom";


@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private classroomUrl = 'https://administration-school.herokuapp.com/Classroom';
  constructor(private http: HttpClient) { }

  getAllClassroom():Observable<Classroom[]>{
    return this.http.get<Classroom[]>(`${this.classroomUrl}`);
  }
  create(classroom: Classroom):Observable<object>{
    return this.http.post(`${this.classroomUrl}`,classroom);
  }
  getClassroomById(id: number):Observable<Classroom>{
    return this.http.get<Classroom>(`${this.classroomUrl}/${id}`);
  }
  updateClassroom(id : number, classroom :Classroom):Observable<Classroom>{
    return this.http.put<Classroom>(`${this.classroomUrl}/${id}`,classroom);
  }
  deleteClassroom(id : number):Observable<object>{
    return this.http.delete(`${this.classroomUrl}/${id}`);
  }
}
