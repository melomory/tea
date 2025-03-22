import { RestrictTextLengthPipe } from './restrict-text-length.pipe';

describe('RestrictTextLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new RestrictTextLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
