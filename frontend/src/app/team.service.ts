import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TeamMember } from './team-member';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

/* Create an object like being the response of the server for testing */
const teamMembers: TeamMember[] = [
  {
    id: 0,
    name: 'Athanasios',
    lastName: 'Markou',
    fullName: 'Athanasios Markou',
    occupation: 'Front-End Developer',
    avatar: 'https://avatars0.githubusercontent.com/u/35178536?s=460&v=4',
    email: 'thanasismarko@gmail.com',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/markoboy',
        icon: {
          type: 'fab',
          url: 'fa-github',
          color: '#000'
        }
      },
      {
        title: 'LinkedIn',
        url: 'https://github.com/markoboy',
        icon: {
          type: 'fab',
          url: 'fa-linkedin-in',
          color: '#00d'
        }
      }
    ]
  },
  {
    id: 1,
    name: 'Esly',
    lastName: 'Lescano',
    fullName: 'Esly Lescano',
    occupation: 'Web Developer',
    avatar: 'https://avatars3.githubusercontent.com/u/11892083?s=460&v=4',
    email: 'test@email.com',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/eslylescano',
        icon: {
          type: 'fab',
          url: 'fa-github',
          color: '#000'
        }
      }
    ]
  },
  {
    id: 2,
    name: 'Jennifer',
    lastName: 'Mwen',
    fullName: 'Jennifer Mwen',
    occupation: 'Web Developer',
    avatar: 'https://avatars2.githubusercontent.com/u/45672207?s=460&v=4',
    email: 'test@email.com',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com/Mwen-A',
        icon: {
          type: 'fab',
          url: 'fa-github',
          color: '#000'
        }
      }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  // TODO: Add the url from where we fetch the team data.
  private url = '';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // For test purpose
  getMembers(): TeamMember[] {
    return teamMembers;
  }

  /* Get all team members and return an observable */
  getTeamMembers(): Observable<TeamMember[]> {
    return this.http.get<TeamMember[]>(this.url)
      .pipe(
        // Log the results on the console
        tap(_ => console.log('Fetched members: ', _)),
        // Handle any error occured
        catchError(this.handleError)
      );
  }

  /**
   * Get a team member by their ID
   * @param id The id of the member
   * @returns An observable of type TeamMember
   */
  getTeamMember(id: number): Observable<TeamMember> {
    return this.http.get<TeamMember>(`${this.url}/${id}`)
      .pipe(
        // Log the results on the console
        tap(_ => console.log('Fetched member: ', _)),
        // Handle any error occured
        catchError(this.handleError)
      );
  }

  /**
   * Update a team member's values
   * @param member The member to update
   */
  updateTeamMember(member: TeamMember): Observable<any> {
    return this.http.put(this.url, member, this.httpOptions)
      .pipe(
        // Log the results on the console
        tap(_ => console.log('Updated member: ', _)),
        // Handle any error occured
        catchError(this.handleError)
      );
  }

  /**
   * Add a new team member
   * @param member The member to add
   */
  addTeamMember(member: TeamMember): Observable<TeamMember> {
    return this.http.post<TeamMember>(this.url, member, this.httpOptions)
      .pipe(
        // Log the results on the console
        tap(_ => console.log('Added member: ', _)),
        // Handle any error occured
        catchError(this.handleError)
      );
  }

  /**
   * Delete a team member
   * @param member The member or the member id to delete
   */
  deleteTeamMember(member: TeamMember | number): Observable<TeamMember> {
    // Get the id of the member and create the url
    const id = typeof member === 'number' ? member : member.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<TeamMember>(url, this.httpOptions)
      .pipe(
        // Log the results on the console
        tap(_ => console.log('Deleted member: ', _)),
        // Handle any error occured
        catchError(this.handleError)
      );
  }

  /* Handle errors by loggin on the console */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      /* If a client error occured */
      console.error('An error occured:', error.error.message);
    } else {
      /* If a backend error occured */
      console.error(
        `Error code: ${error.status}
        Error body: ${error.error}`
      );
    }
    /* Return an observable with a user-facing message */
    return throwError(
      'An error occured when getting team members; please try again later.'
    );
  }
}
