import Fab from '../Fab';

function CommonFab() {
  return (
    <Fab.Group trigger='click' type='primary' style={{ left: '90px' }}>
      <Fab iconName='intro-poll' tooltip='Go to polls' />
      <Fab iconName='clipboard' tooltip='Copy channel link' />
      <Fab iconName='fullscreen' tooltip='Fullscreen' />
      <Fab iconName='disabled' tooltip='Disable participant Q&A' />
      <Fab iconName='door-back' tooltip='Back to main' />
    </Fab.Group>
  );
}

export default CommonFab;
