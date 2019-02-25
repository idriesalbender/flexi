import React from 'react';
import Paragraph from '../components/atoms/Paragraph';
import Phone from '../images/phone.svg';
import Tablet from '../images/tablet.svg';
import Image from '../components/atoms/Image';
import Heading from '../components/atoms/Heading';

export default () => (
  <>
    <Heading size={2}>Material Design specs</Heading>
    <Paragraph>
      The Flexi grid is based on Material Design guidelines. This means that gutter size will
      differ according to screen width.
    </Paragraph>
    <Paragraph>
      By default, a <code>1rem</code> (16px) gutter is used. At the <code>≥45em</code> (720px)
      breakpoint, gutter size becomes <code>1.5rem</code> (24px).
    </Paragraph>
    <Image description="On a mobile device (@411px), 1rem gutters are used.">
      <Phone width="100%" height="auto" />
    </Image>
    <Image description="On a larger tablet (@768px), 1.5rem gutters are used.">
      <Tablet width="100%" height="auto" />
    </Image>
  </>
);
