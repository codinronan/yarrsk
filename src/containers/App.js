import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

function AppView(props = {}) {
  const { children } = props;

  return (
    <App>
      {children}
    </App>
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
