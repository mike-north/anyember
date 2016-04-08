export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('org'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('org.repos'),
    this.toRoute('org.repo'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
