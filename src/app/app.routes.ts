import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BooksComponent } from './pages/books/books.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path:'books', component: BooksComponent, title: 'Books'},
    {path:'**', component:NotFoundComponent, title: '404 Not Found' }
];
