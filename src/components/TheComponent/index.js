import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const TheComponent = (props) => (
  <React.Fragment>
    <p>custom para</p>
    <Text tag="h2" className="display-4"   field={props.fields.heading} />
    <RichText tag="h4" field={props.fields.content} /> 
  </React.Fragment>
);

export default TheComponent;
