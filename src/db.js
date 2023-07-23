import Dexie from 'dexie';

export const db = new Dexie('shortlyDB');
db.version(1).stores({
  shorturls: '++id, oriUrl, longUrl, shortUrl', // Primary key and indexed props
});
