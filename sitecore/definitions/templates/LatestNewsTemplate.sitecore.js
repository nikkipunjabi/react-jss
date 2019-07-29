// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the LatestNews component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function(manifest) {
  manifest.addRouteType({
    name: 'LatestNewsTemplate',
    displayName: 'Latest News Template',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'newsHeading', type: CommonFieldTypes.SingleLineText, displayName:"News Heading"  },
      { name: 'newDescription', type: CommonFieldTypes.RichText, displayName:"News Description" },
      { name: 'newsCategory', type: CommonFieldTypes.SingleLineText, displayName:"News Category" },
      { name: 'newsImage', type: CommonFieldTypes.Image, displayName:"News Image" },
      { name: 'newsDate', type: CommonFieldTypes.DateTime, displayName:"News Date"}
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
