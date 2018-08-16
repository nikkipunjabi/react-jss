import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const TheComponent = (props) => (
  <div>
    <p>TheComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default TheComponent;
