import React from 'react';
import { Text, RichText, DateField, Image } from '@sitecore-jss/sitecore-jss-react';

const LatestNews: React.FunctionComponent<Props> = (props) => {

  const { latestNewsListing } = props.fields;

  return (
    <div>
      <ul>
        {latestNewsListing &&
          latestNewsListing.map((listItem, index) => (
            <li key={index}>
              <Text field={listItem.fields.pageTitle} tag="h3" />
              <Text field={listItem.fields.newsHeading} tag="h4" />
              <RichText field={listItem.fields.newsDescription} />
              <Text field={listItem.fields.newsCategory} tag="h5" />
              <DateField field={listItem.fields.newsDate} render={date => date.toLocaleDateString()} tag="div" />
              <Image field={listItem.fields.newsImage}></Image>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LatestNews;