import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list-rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async assert => {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about the company', async assert => {
    await visit('/');
    await click('.menu-about');
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information', async assert => {
  });

  test('should list available rentals', async assert => {
  });

  test('should filter the list of rentals by city', async assert => {
  });

  test('should show details for a selected rental', async assert => {
  });

});
