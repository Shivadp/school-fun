export interface Student {
  id: string;
  name: string;
  grade: number;
  class: string;
  email: string;
  attendance: number;
  parentContact: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  email: string;
  classes: string[];
}

export interface Class {
  id: string;
  name: string;
  teacher: string;
  schedule: string;
  room: string;
  students: number;
}