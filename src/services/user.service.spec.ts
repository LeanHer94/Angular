import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { Observable, of } from 'rxjs';

import { User } from 'src/models/user';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should call http client', () => {
    //setup
    const httpClient = jasmine.createSpyObj('HttpClient', ['get']);

    const stubObservable = of<User>();

    httpClient.getValue.and.returnValue(stubObservable);

    //act
    userService.getGitUser('lala');

    //assert
  });
  
});
