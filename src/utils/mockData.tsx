import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import SportsRugbyIcon from '@mui/icons-material/SportsRugby';
import SportsHockeyIcon from '@mui/icons-material/SportsHockey';
import { getRandomColor } from './common';

export const TurfOwnerFeatuer = [
  {
    key: '01',
    title: 'List Your Turf',
    desc: 'Get discovered by thousands of players in your city and increase bookings effortlessly.',
  },
  {
    key: '02',
    title: 'Online Booking & Payments',
    desc: 'Accept bookings 24/7 with real-time slot availability and secure payment integration.',
  },
  {
    key: '03',
    title: 'Manage Slots & Pricing',
    desc: 'Customize pricing, set peak hours, and offer discounts to attract more players.',
  },
  {
    key: '04',
    title: 'Player Reviews & Ratings',
    desc: 'Build trust with user-generated ratings and feedback, boosting your credibility.',
  },
  {
    key: '05',
    title: 'Admin Dashboard',
    desc: 'Track earnings, monitor bookings, and get valuable insights about your turf performance.',
  },
];

export const PlayerFeatures = [
  {
    key: '01',
    title: 'Find the Best Turfs',
    desc: 'Search for nearby turfs based on location, sport type, and pricing.',
  },
  {
    key: '02',
    title: 'Instant Online Booking',
    desc: 'Book your preferred slots quickly without the hassle of calls or wait times.',
  },
  {
    key: '03',
    title: 'Secure Payments',
    desc: 'Make easy and secure payments using trusted payment gateways.',
  },
  {
    key: '04',
    title: 'Reviews & Ratings',
    desc: 'Read feedback from other players before booking a turf.',
  },
  {
    key: '05',
    title: 'Exclusive Offers & Discounts',
    desc: 'Unlock special deals and discounts when booking through the platform.',
  },
  {
    key: '06',
    title: 'Referral System',
    desc: 'Invite your friends and earn rewards for every successful referral.',
  },
];

export const SportsList = [
  {
    key: '01',
    name: 'Cricket',
    emoji: '🏏',
    icon: <SportsCricketIcon />,
    color: getRandomColor(),
  },
  {
    key: '02',
    name: 'Badminton',
    emoji: '🏸',
    icon: <SportsTennisIcon />,
    color: getRandomColor(),
  },
  {
    key: '03',
    name: 'Football',
    emoji: '⚽',
    icon: <SportsSoccerIcon />,
    color: getRandomColor(),
  },
  {
    key: '04',
    name: 'Basketball',
    emoji: '🏀',
    icon: <SportsBasketballIcon />,
    color: getRandomColor(),
  },
  {
    key: '05',
    name: 'Volleyball',
    emoji: '🏐',
    icon: <SportsVolleyballIcon />,
    color: getRandomColor(),
  },
  {
    key: '06',
    name: 'Kabaddi',
    emoji: '🤼',
    icon: <SportsKabaddiIcon />,
    color: getRandomColor(),
  },
  {
    key: '07',
    name: 'Rugby',
    emoji: '🏉',
    icon: <SportsRugbyIcon />,
    color: getRandomColor(),
  },
  {
    key: '08',
    name: 'Hockey',
    emoji: '🏒',
    icon: <SportsHockeyIcon />,
    color: getRandomColor(),
  },
];

export const turfsData = [
  {
    id: 1,
    name: 'City Sports Arena',
    image: '/images/turf1.jpeg',
    rating: 4.8,
    price: '₹500/hr',
    location: 'Mumbai',
  },
  {
    id: 2,
    name: 'GreenField Turf',
    image: '/images/turf2.jpeg',
    rating: 4.7,
    price: '₹600/hr',
    location: 'Pune',
  },
  {
    id: 3,
    name: 'Elite Sports Zone',
    image: '/images/turf3.jpeg',
    rating: 4.9,
    price: '₹700/hr',
    location: 'Delhi',
  },
  {
    id: 4,
    name: 'Victory Sports Ground',
    image: '/images/turf4.jpeg',
    rating: 4.6,
    price: '₹550/hr',
    location: 'Bangalore',
  },
  {
    id: 5,
    name: 'All Stars Arena',
    image: '/images/turf4.jpeg',
    rating: 4.5,
    price: '₹650/hr',
    location: 'Hyderabad',
  },
  {
    id: 6,
    name: 'Champion Turf',
    image: '/images/turf4.jpeg',
    rating: 4.9,
    price: '₹750/hr',
    location: 'Chennai',
  },
  {
    id: 7,
    name: 'Ultimate PlayZone',
    image: '/images/turf4.jpeg',
    rating: 4.7,
    price: '₹720/hr',
    location: 'Ahmedabad',
  },
  {
    id: 8,
    name: 'Sunshine Sports Arena',
    image: '/images/turf4.jpeg',
    rating: 4.8,
    price: '₹480/hr',
    location: 'Kolkata',
  },
  {
    id: 9,
    name: 'Mega Turf Hub',
    image: '/images/turf4.jpeg',
    rating: 5.0,
    price: '₹800/hr',
    location: 'Jaipur',
  },
  {
    id: 10,
    name: 'Sports City Ground',
    image: '/images/turf4.jpeg',
    rating: 4.6,
    price: '₹550/hr',
    location: 'Lucknow',
  },
];
