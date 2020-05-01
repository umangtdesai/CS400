import { TestBed } from '@angular/core/testing';

import { ArtistGeneratorService } from './artist-generator.service';

describe('LyricsGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistGeneratorService = TestBed.get(ArtistGeneratorService);
    expect(service).toBeTruthy();
  });
});
