import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let HttpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AppService);
    HttpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    expect(service.addNumber(4, 3)).toEqual(7);
  });

  it('should be called Http Tests', () => {
    service.getData().subscribe((response) => {
      expect(response).toBeTruthy('No data returned');
      expect(response).toEqual({ payload: { name: 'saif' } });
    });

    const req = HttpController.expectOne(
      'https://ap.unsplash.com/photos?page=1&query=random&client_id=Wodf-s3S_rzzMqYGrFLhqunWZMOEDAqvSqX3Gci6DVM'
    );

    expect(req.request.method).toEqual('GET');
    req.flush({
      payload: { name: 'saif' },
    });
  });

  afterEach(()=>{
    HttpController.verify();
  });
});
