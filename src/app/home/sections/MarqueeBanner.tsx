'use client';
import MarqueeBanner from '@/components/Transition/MarqueeBanner';
import React from 'react';
import _map from 'lodash/map';
import { SportsList } from '@/utils/mockData';

const MarqueeBannerSection = () => {
  const sportsText = _map(
    SportsList,
    (sport: any) => `${sport.name} ${sport.emoji}`
  ).join(' | ');

  return <MarqueeBanner text={sportsText} textColor={'#fff'} />;
};

export default MarqueeBannerSection;
