import { describe, it, expect } from 'vite-plus/test';
import { fetchUser } from '../../src/resources/user';

describe('Resources', () => {
  it('creates a resource for fetching user data', () => {
    expect(fetchUser).toBeDefined();
    expect(typeof fetchUser).toBe('function');
  });
});