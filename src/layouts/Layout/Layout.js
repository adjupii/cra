import React from 'react';
import PropTypes from 'prop-types';

export function Layout({
  children
}) {
  return (
    <div>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};