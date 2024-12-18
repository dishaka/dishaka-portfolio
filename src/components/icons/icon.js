import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconMedium,
  IconSpotify,
  IconLoader,
  IconLocation,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconZap,
  IconBehance,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Medium':
      return <IconMedium />;
    case 'Spotify':
      return <IconSpotify />
    case 'Loader':
      return <IconLoader />;
    case 'Location':
      return <IconLocation />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Zap':
      return <IconZap />;
    case 'Youtube':
      return <IconBehance/>;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
