export const EMPTY_STRING = '';
export const EMPTY_ARRAY = [];
export const EMPTY_OBJECT = {};
export const UNDEFINED = undefined;
export const NULL = null;
export const EMPTY_FIELD = '--';
export const LIMIT = 10;
export const INPUT_SIZE = 45;
export const DATA_NOT_FOUND = 'No Record Found';

export const ERROR_CODE_1 = 'Error: Authorization Expired, try login again .';
export const ERROR_CODE_2 = 'ERR_EXPIRED_AUTHORIZATION';
export const SERVER_ERROR =
  'Oops! Something went wrong on our end. Please try again later or contact support if the issue persists.';
export const RESET_STORE = 'RESET_STORE';

export const SCREEN_SOLUTION = {
  MOBILE_TO_TABLET: '@media (min-width: 320px) and (max-width: 899px)',
  TABLET_TO_LAPTOP: '@media (min-width: 640px) and (max-width: 1199px)',
  MOBILE: '@media (min-width: 320px) and (max-width: 639px)',
  TABLET: '@media (min-width: 640px) and (max-width: 899px)',
  LAPTOP: '@media (min-width: 900px) and (max-width: 1199px)',
  MINIMUM_DESKTOP: '@media (min-width: 1200px)',
  DESKTOP: '@media (min-width: 1200px) and (max-width: 1599px)',
  LARGE_DESKTOP: '@media (min-width: 1600px)',
};

export const validEmail =
  /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.?)+\.[a-zA-Z]{2,}$/;
export const validPasswordMin8 = /^.{8,}$/;
export const validPassword =
  /^(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])((?=.*[0-9])|(?=.*[!@#$%^&*]))(?=.{8,})/;
export const validPhoneNumber = /^[1-9]{1}[0-9]{9}/;
export const validContactNumber = /^[0-9()+\- ]*$/; //allow special characters like +, -, (, )
export const validNumber = /^[0-9]*[.]?[1-9]{0,2}$/;

export const ACCESS_TOKEN_KEY: any =
  process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || EMPTY_STRING;
export const REFRESH_TOKEN_KEY: any =
  process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY || EMPTY_STRING;
// export const ACCESS_USER_META_KEY: any =
//   process.env.NEXT_PUBLIC_ACCESS_USER_META_KEY || EMPTY_STRING;

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ORDER_TYPE = {
  ASC: 'asc',
  DESC: 'desc',
};
export const BUTTON_TYPE = {
  SUBMIT: 'submit',
  BUTTON: 'button',
  COLOR: 'link',
  PRIMARY: 'primary',
  DANGER: 'danger',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
};
export const BUTTON_VARIANT_TYPE = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
};
export const DATE_FORMATE = {
  MM_DD_YYYY: 'MM-DD-YYYY',
  YYYY_MM_DD: 'YYYY-MM-DD',
  DD_MMMM_YYYY_h_mm: 'DD MMMM YYYY h:mm',
  MMMM_Do_YYYY: 'MMM Do YYYY',
  MMM_Do_YYYY_h_mm: 'MMM Do YYYY h:mm',
  MMM_D_YYYY: 'MMM D, YYYY',
};
export const TIME_FORMATE = {
  HH_MM_A: 'hh:mm A',
  HH_MM_SS: 'HH:mm:ss',
};

export const HrFormate = [
  { id: 'am', value: 'AM' },
  { id: 'pm', value: 'PM' },
];

export const GENDER_LIST = ['Male', 'Female', 'Other'];

export const POSSIBLE_TYPE = {
  YES: 'Yes',
  NO: 'No',
};

export const IMAGE_EXTENSIONS = [
  '.heif',
  '.heic',
  '.apng',
  '.avif',
  '.gif',
  '.jpg',
  '.jpeg',
  '.jfif',
  '.pjpeg',
  '.pjp',
  '.png',
  '.svg',
  '.webp',
];

export const ROLE_ADD_TYPE = ['Role', 'Parent Role'];

export const HEIGHT_FOOT = [
  {
    id: '0',
    title: '0 ft',
  },
  {
    id: '1',
    title: '1 ft',
  },
  {
    id: '2',
    title: '2 ft',
  },
  {
    id: '3',
    title: '3 ft',
  },
  {
    id: '4',
    title: '4 ft',
  },
  {
    id: '5',
    title: '5 ft',
  },
  {
    id: '6',
    title: '6 ft',
  },
  {
    id: '7',
    title: '7 ft',
  },
  {
    id: '8',
    title: '8 ft',
  },
];

export const TEXT_TYPE = [
  {
    id: '1',
    title: 'Random',
  },
  {
    id: '2',
    title: 'Fasting',
  },
];

export const HEIGHT_INCH = [
  {
    id: '0.00',
    title: '0.00 in',
  },
  {
    id: '0.25',
    title: '0.25 in',
  },
  {
    id: '0.50',
    title: '0.50 in',
  },
  {
    id: '0.75',
    title: '0.75 in',
  },
  {
    id: '1.00',
    title: '1.00 in',
  },
  {
    id: '1.25',
    title: '1.25 in',
  },
  {
    id: '1.50',
    title: '1.50 in',
  },
  {
    id: '1.75',
    title: '1.75 in',
  },
  {
    id: '2.00',
    title: '2.00 in',
  },
  {
    id: '2.25',
    title: '2.25 in',
  },
  {
    id: '2.50',
    title: '2.50 in',
  },
  {
    id: '2.75',
    title: '2.75 in',
  },
  {
    id: '3.00',
    title: '3.00 in',
  },
  {
    id: '3.25',
    title: '3.25 in',
  },
  {
    id: '3.50',
    title: '3.50 in',
  },
  {
    id: '3.75',
    title: '3.75 in',
  },
  {
    id: '4.00',
    title: '4.00 in',
  },
  {
    id: '4.25',
    title: '4.25 in',
  },
  {
    id: '4.50',
    title: '4.50 in',
  },
  {
    id: '4.75',
    title: '4.75 in',
  },
  {
    id: '5.00',
    title: '5.00 in',
  },
  {
    id: '5.25',
    title: '5.25 in',
  },
  {
    id: '5.50',
    title: '5.50 in',
  },
  {
    id: '5.75',
    title: '5.75 in',
  },
  {
    id: '6.00',
    title: '6.00 in',
  },
  {
    id: '6.25',
    title: '6.25 in',
  },
  {
    id: '6.50',
    title: '6.50 in',
  },
  {
    id: '6.75',
    title: '6.75 in',
  },
  {
    id: '7.00',
    title: '7.00 in',
  },
  {
    id: '7.25',
    title: '7.25 in',
  },
  {
    id: '7.50',
    title: '7.50 in',
  },
  {
    id: '7.75',
    title: '7.75 in',
  },
  {
    id: '8.00',
    title: '8.00 in',
  },
  {
    id: '8.25',
    title: '8.25 in',
  },
  {
    id: '8.50',
    title: '8.50 in',
  },
  {
    id: '8.75',
    title: '8.75 in',
  },
  {
    id: '9.00',
    title: '9.00 in',
  },
  {
    id: '9.25',
    title: '9.25 in',
  },
  {
    id: '9.50',
    title: '9.50 in',
  },
  {
    id: '9.75',
    title: '9.75 in',
  },
  {
    id: '10.00',
    title: '10.00 in',
  },
  {
    id: '10.25',
    title: '10.25 in',
  },
  {
    id: '10.50',
    title: '10.50 in',
  },
  {
    id: '10.75',
    title: '10.75 in',
  },
  {
    id: '11.00',
    title: '11.00 in',
  },
  {
    id: '11.25',
    title: '11.25 in',
  },
  {
    id: '11.50',
    title: '11.50 in',
  },
  {
    id: '11.75',
    title: '11.75 in',
  },
];

export const Time_Hr = Array.from({ length: 24 }, (v, k) => ({
  id: k.toString(),
  title: k.toString().padStart(2, '0'),
}));

export const Time_Min = Array.from({ length: 60 }, (v, k) => ({
  id: k.toString(),
  title: k.toString().padStart(2, '0'),
}));

export const Time_Period = [
  { id: 'AM', title: 'AM' },
  { id: 'PM', title: 'PM' },
];
export const TrackersBgrf = [
  { value: 1, name: 'Random' },
  { value: 2, name: 'Fasting' },
];
export const MONTH_TYPE = [
  { id: 1, title: 'January' },
  { id: 2, title: 'February' },
  { id: 3, title: 'March' },
  { id: 4, title: 'April' },
  { id: 5, title: 'May' },
  { id: 6, title: 'June' },
  { id: 7, title: 'July' },
  { id: 8, title: 'August' },
  { id: 9, title: 'September' },
  { id: 10, title: 'October' },
  { id: 11, title: 'November' },
  { id: 12, title: 'December' },
];

export const MONTH_SLOT_TYPE = [
  { id: 1, title: 'First' },
  { id: 2, title: 'Second' },
  { id: 3, title: 'Third' },
  { id: 4, title: 'Fourth' },
  { id: 5, title: 'Fifth' },
  { id: 6, title: 'Last' },
];

export const DATE_TYPE = Array.from({ length: 31 }, (v, k) => ({
  id: k + 1,
  title: (k + 1).toString(),
}));

export const DAYS_TYPE = [
  { id: 'monday', title: 'Monday', nId: 1 },
  { id: 'tuesday', title: 'Tuesday', nId: 2 },
  { id: 'wednesday', title: 'Wednesday', nId: 3 },
  { id: 'thursday', title: 'Thursday', nId: 4 },
  { id: 'friday', title: 'Friday', nId: 5 },
  { id: 'saturday', title: 'Saturday', nId: 6 },
  { id: 'sunday', title: 'Sunday', nId: 7 },
];

export const CurrentHeightFt: any = [
  { value: '0', label: '0 ft' },
  { value: '1', label: '1 ft' },
  { value: '2', label: '2 ft' },
  { value: '3', label: '3 ft' },
  { value: '4', label: '4 ft' },
  { value: '5', label: '5 ft' },
  { value: '6', label: '6 ft' },
  { value: '7', label: '7 ft' },
  { value: '8', label: '8 ft' },
];
export const CurrentHeightIn: any = [
  { value: '0.15', label: '0.15 in' },
  { value: '0.25', label: '0.25 in' },
  { value: '0.50', label: '0.50 in' },
  { value: '0.75', label: '0.75 in' },
  { value: '1.00', label: '1.00 in' },
  { value: '1.25', label: '1.25 in' },
  { value: '1.50', label: '1.50 in' },
  { value: '1.75', label: '1.75 in' },
  { value: '2.00', label: '2.00 in' },
  { value: '2.25', label: '2.25 in' },
  { value: '2.50', label: '2.50 in' },
  { value: '2.75', label: '2.75 in' },
  { value: '3.00', label: '3.00 in' },
  { value: '3.25', label: '3.25 in' },
  { value: '3.50', label: '3.50 in' },
  { value: '3.75', label: '3.75 in' },
  { value: '4.00', label: '4.00 in' },
  { value: '4.25', label: '4.25 in' },
  { value: '4.50', label: '4.50 in' },
  { value: '4.75', label: '4.75 in' },
  { value: '5.00', label: '5.00 in' },
  { value: '5.25', label: '5.25 in' },
  { value: '5.50', label: '5.50 in' },
  { value: '5.75', label: '5.75 in' },
  { value: '6.00', label: '6.00 in' },
  { value: '6.25', label: '6.25 in' },
  { value: '6.50', label: '6.50 in' },
  { value: '6.75', label: '6.75 in' },
  { value: '7.00', label: '7.00 in' },
  { value: '7.25', label: '7.25 in' },
  { value: '7.50', label: '7.50 in' },
  { value: '7.75', label: '7.75 in' },
  { value: '8.00', label: '8.00 in' },
  { value: '8.25', label: '8.25 in' },
  { value: '8.50', label: '8.50 in' },
  { value: '8.75', label: '8.75 in' },
  { value: '9.00', label: '9.00 in' },
  { value: '9.25', label: '9.25 in' },
  { value: '9.50', label: '9.50 in' },
  { value: '9.75', label: '9.75 in' },
  { value: '10.00', label: '10.00 in' },
  { value: '10.25', label: '10.25 in' },
  { value: '10.50', label: '10.50 in' },
  { value: '10.75', label: '10.75 in' },
  { value: '11.00', label: '11.00 in' },
  { value: '11.25', label: '11.25 in' },
  { value: '11.50', label: '11.50 in' },
  { value: '11.75', label: '11.75 in' },
];

export const USER_ROLES = {
  ADMIN: 1,
  USER: 2,
  TURF_USER: 3,
};

export const THEME_SETTINGS_TABS = [
  {
    label: 'Theme Setting',
    icon: undefined,
  },
  {
    label: 'Advance Theme Setting',
    icon: undefined,
  },
  {
    label: 'HRA & Biometric Theme Setting',
    icon: undefined,
  },
];

export const FOUR_SMALL_RECTANGLES_TABS = [
  {
    label: 'Image 1',
  },
  {
    label: 'Image 2',
  },
  {
    label: 'Image 3',
  },
  {
    label: 'Image 4',
  },
];

export const ADD_USER_TABS = [
  {
    label: 'Add New User',
    icon: undefined,
  },
  {
    label: 'Import Users',
    icon: undefined,
  },
  {
    label: 'Import Users History',
    icon: undefined,
  },
];

export const CH_TYPE = {
  A: 'A',
  B: 'B',
  H: 'H',
  R: 'R',
  E: 'E',
};

export const CH_BIO_TYPE = {
  OLYMPICS: 'Olympics',
  HYDRATE: 'Hydrate',
  SLEEP_TRACKING: 'Sleep_Tracking',
  FITNESS: 'Fitness',
  STEP: '',
  FOOTBALL_STEP: 'Football_step',
  TREK_STEP: 'Trek_step',
  MOVE_MORE: 'Move_more',
  RELAY_RACE: 'Relay_race',
  MILE_LAYOUT: 'Mile_layout',
  RANDOM_ACTS: 'Random_Acts_of_Kindness',
  FOOTBALL: 'Football',
  WEIGHT_PROGRESS: 'Weight_progress',
  WEIGHT_PROGRESS_WITHOUT_TEAM: 'Weight_progress_withoutTeam',
  BINGO_LAYOUT: 'Bingo_layout',
  HEALTHY_HABIT_WEEK_LAYOUT: '',
  HEALTHY_HABIT_ACTIVITY_LAYOUT: 'Healthy_habit_activity_layout',
  EXTERNAL_LINK: '',
  RECIPE: '',
};

export const DOCUMENT_EXTENSIONS = [
  '.jpg',
  '.jpeg',
  '.png',
  '.pdf',
  '.heic',
  '.docx',
  '.doc',
  '.xls',
  '.xlsx',
  '.csv',
  '.svg',
  '.gif',
  '.mp4',
  '.webm',
  '.jfif',
  '.zip',
  '.txt',
  '.html',
  '.xml',
  '.mov',
  '.avi',
];

export const MAINHEADERLIST = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Turfs',
    link: '/turfs',
  },
  {
    label: 'Programs',
    link: '/programs',
  },
  {
    label: 'Blogs',
    link: '/blogs',
  },
  {
    label: 'Turf Moments',
    link: '/turf-moments',
  },
];
