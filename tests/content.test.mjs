import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import projects from '../src/data/projects.js';
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const es = read('src/translation/es/global.json');
const en = read('src/translation/en/global.json');
test('translations cover the same keys and every experience field', () => {
  assert.deepEqual(Object.keys(es).sort(), Object.keys(en).sort());
  assert.equal(es.events.length, en.events.length);
  for (const locale of [es,en]) {
    assert.equal(locale.nav.length, 5);
    assert.equal(locale.projectDescriptions.length, projects.length);
    for (const event of locale.events) for (const key of ['date','title','description','place']) assert.ok(event[key]?.trim());
  }
});
test('confirmed employment and TanStack knowledge are published without client names', () => {
  for (const locale of [es,en]) {
    assert.equal(locale.events.at(-1).place, 'Mantu');
    assert.match(locale.events.at(-1).date, /2026/);
    assert.match(locale.events.find(e=>e.place.includes('Scotiabank')).date, /2026/);
    assert.doesNotMatch(JSON.stringify(locale), /Esmax|Aramco|Ranko/);
  }
});
test('project assets exist and unrelated copied destinations are removed', () => {
  for (const p of projects) if(p.image) assert.ok(existsSync(`public${p.image}`));
  assert.equal(projects.filter(p=>p.url).length, 1);
});
