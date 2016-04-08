import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  iconUrl: attr('string'),
  repositories: hasMany('repository')
});
