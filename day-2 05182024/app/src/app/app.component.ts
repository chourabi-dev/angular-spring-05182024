import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  today = new Date();


  email="tchourabi@gmail.com" // =>  t*************@gmail.com


  email2="test@yahoo.fr"




  articles = [
    {
        title: "Introduction to JavaScript",
        description: "A beginner's guide to JavaScript programming.",
        id: 1,
        likes: 120
    },
    {
        title: "Advanced CSS Techniques",
        description: "Explore advanced CSS techniques for modern web design.",
        id: 2,
        likes: 85
    },
    {
        title: "React for Beginners",
        description: "Learn the basics of React and build dynamic web applications.",
        id: 3,
        likes: 200
    },
    {
        title: "Understanding Node.js",
        description: "A comprehensive guide to backend development with Node.js.",
        id: 4,
        likes: 95
    },
    {
        title: "Mastering Python",
        description: "An in-depth course on Python programming for all levels.",
        id: 5,
        likes: 150
    }
];








}
