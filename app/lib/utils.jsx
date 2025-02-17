import { PT_Sans } from 'next/font/google';

//Icons
export function HomeIcon() {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-home">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
    </svg>
  )
}

export function TransactionsIcon() {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-sort">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 9l4 -4l4 4m-4 -4v14" />
      <path d="M21 15l-4 4l-4 -4m4 4v-14" />
    </svg>
  )
}

export function BudgetsIcon() {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-chart-donut">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M11.292 2.61c.396 .318 .65 .78 .703 1.286l.005 .104v4a1 1 0 0 1 -.748 .968a3.1 3.1 0 1 0 3.78 3.78a1 1 0 0 1 .968 -.748h3.8a2 2 0 0 1 2 2a1 1 0 0 1 -.026 .226a10 10 0 1 1 -12 -12l.057 -.01l.052 -.01a1.9 1.9 0 0 1 1.409 .404m3.703 -.11l.045 .002l.067 .004l.081 .014l.032 .004l.072 .022l.04 .01a10 10 0 0 1 6.003 5.818l.108 .294a1 1 0 0 1 -.943 1.332h-4.5a1 1 0 0 1 -.76 -.35a8 8 0 0 0 -.89 -.89a1 1 0 0 1 -.35 -.76v-4.5q .001 -.119 .026 -.23l.03 -.102a1 1 0 0 1 .168 -.299l.03 -.033l.039 -.043a1 1 0 0 1 .089 -.08l.051 -.034l.03 -.023l.045 -.025l.052 -.03a1 1 0 0 1 .435 -.101" />
    </svg>
  )
}

export function PotsIcon({ width = '20', height = '20' }) {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width={width}  height={height}  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-coin">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -1 1a3 3 0 1 0 0 6v2a1.024 1.024 0 0 1 -.866 -.398l-.068 -.101a1 1 0 0 0 -1.732 .998a3 3 0 0 0 2.505 1.5h.161a1 1 0 0 0 .883 .994l.117 .007a1 1 0 0 0 1 -1l.176 -.005a3 3 0 0 0 -.176 -5.995v-2c.358 -.012 .671 .14 .866 .398l.068 .101a1 1 0 0 0 1.732 -.998a3 3 0 0 0 -2.505 -1.501h-.161a1 1 0 0 0 -1 -1zm1 7a1 1 0 0 1 0 2v-2zm-2 -4v2a1 1 0 0 1 0 -2z" />
    </svg>
  )
}

export function RecurringBillsIcon() {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-clipboard-text">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M17.997 4.17a3 3 0 0 1 2.003 2.83v12a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 2.003 -2.83a4 4 0 0 0 3.997 3.83h4a4 4 0 0 0 3.98 -3.597zm-2.997 10.83h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m0 -4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m-1 -9a2 2 0 1 1 0 4h-4a2 2 0 1 1 0 -4z" />
    </svg>
  )
}

export function ArrowIcon({ isMinimize }) {
  return(
    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  className={`icon icon-tabler icons-tabler-filled icon-tabler-arrow-big-right-lines ${isMinimize ? '-rotate-180' : 'rotate-0'} transition-all ease-in-out duration-300`}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" />
      <path d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" />
      <path d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" />
    </svg>
  )
}

export function ArrowDetails() {
  return(
    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-right group-hover:fill-slate-600">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
    </svg>
  )
}

export function LogoFull() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="22" viewBox="0 0 122 22" fill="none">
      <path d="M8.46495 21.44H2.44895V10.24H0.272949V5.312H2.57695C3.21695 2.272 6.19295 0 11.4729 0H12.7529V4.288H10.5129C8.84895 4.288 8.04895 4.448 8.08095 5.312H12.7529V10.24H8.46495V21.44Z" fill="white"></path>
      <path d="M20.3777 3.84H14.3617V0H20.3777V3.84ZM20.3777 21.44H14.3617V5.312H20.3777V21.44Z" fill="white"></path>
      <path d="M28.6352 21.44H22.6192V5.312H28.2512V10.208H28.5712C28.9232 7.52 30.6832 4.992 35.0032 4.992C39.3552 4.992 41.4032 7.616 41.4032 11.104V21.44H35.3872V13.312C35.3872 11.072 34.5552 10.368 31.9312 10.368C29.2752 10.368 28.6352 11.04 28.6352 13.12V21.44Z" fill="white"></path>
      <path d="M48.7177 21.76C45.0697 21.76 43.0217 20.096 43.0217 17.344C43.0217 15.072 44.5897 13.44 48.2377 13.088L54.7977 12.448V12.128C54.7977 10.496 54.0937 10.24 51.9497 10.24C49.9657 10.24 49.3577 10.624 49.3577 11.968V12.096H43.3417V12.032C43.3417 7.744 46.9257 4.992 52.3977 4.992C58.0297 4.992 60.7497 7.744 60.7497 12.256V21.44H55.1177V18.048H54.7977C54.1897 20.32 52.2057 21.76 48.7177 21.76ZM49.0697 16.96C49.0697 17.472 49.5817 17.568 50.5097 17.568C53.4217 17.568 54.6057 17.216 54.7657 15.776L49.8377 16.352C49.2937 16.416 49.0697 16.608 49.0697 16.96Z" fill="white"></path>
      <path d="M68.8689 21.44H62.8529V5.312H68.4849V10.208H68.8049C69.1569 7.52 70.9169 4.992 75.2369 4.992C79.5889 4.992 81.6369 7.616 81.6369 11.104V21.44H75.6209V13.312C75.6209 11.072 74.7889 10.368 72.1649 10.368C69.5089 10.368 68.8689 11.04 68.8689 13.12V21.44Z" fill="white"></path>
      <path d="M92.7915 21.76C87.0634 21.76 83.4155 18.592 83.4155 13.376C83.4155 8.128 87.0634 4.992 92.7915 4.992C98.2954 4.992 101.815 7.808 101.815 12.128V12.64H95.8315V12.384C95.8315 10.72 94.6154 10.368 92.6634 10.368C90.4554 10.368 89.3994 10.848 89.3994 13.376C89.3994 15.872 90.4554 16.352 92.6634 16.352C94.6154 16.352 95.8315 16.032 95.8315 14.368V14.08H101.815V14.624C101.815 18.912 98.2954 21.76 92.7915 21.76Z" fill="white"></path>
      <path d="M112.735 21.76C107.263 21.76 103.423 19.424 103.423 13.376C103.423 8.128 107.231 4.992 112.607 4.992C118.175 4.992 121.727 7.776 121.727 12.96C121.727 13.504 121.695 13.92 121.631 14.496H108.991C109.087 16.448 109.951 16.992 112.511 16.992C114.943 16.992 115.583 16.576 115.583 15.616V15.264H121.599V15.648C121.599 19.232 118.175 21.76 112.735 21.76ZM112.479 9.6C110.271 9.6 109.343 10.08 109.087 11.456H115.903C115.679 10.08 114.719 9.6 112.479 9.6Z" fill="white"></path>
    </svg>
  )
}

export function LogoMinimize() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" className='ml-1'>
      <path d="M8.46495 21.44H2.44895V10.24H0.272949V5.312H2.57695C3.21695 2.272 6.19295 0 11.4729 0H12.7529V4.288H10.5129C8.84895 4.288 8.04895 4.448 8.08095 5.312H12.7529V10.24H8.46495V21.44Z" fill="white"></path>
    </svg>
  )
}

export function LogoutIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-logout-2">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
      <path d="M15 12h-12l3 -3" />
      <path d="M6 15l-3 -3" />
    </svg>
  );
}

export function AddIcon() {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-plus group-hover:rotate-180">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 5l0 14" />
      <path d="M5 12l14 0" />
    </svg>
  );
}

export function ArrowDownIcon() {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
    </svg>
  )
}

export function PotMenuIcon() {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  );
}

export function FilterIcon() {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending stroke-neutral-900">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 6l9 0" />
      <path d="M4 12l7 0" />
      <path d="M4 18l7 0" />
      <path d="M15 15l3 3l3 -3" />
      <path d="M18 6l0 12" />
    </svg>
  )
}

//Themes for CustomSelect
export const themes = [
  { label: 'Green', value: '#1bf526' },
  { label: 'Purple', value: '#a909b8' },
  { label: 'Blue', value: '#0b16bd' },
  { label: 'Yellow', value: '#fce300' },
  { label: 'Cyan', value: '#00ffbf' },
  { label: 'Red', value: '#ff0000' },
  { label: 'Brown', value: '#81492d' },
  { label: 'Pink', value: '#f50589' },
  { label: 'Orange', value: '#ff5e00' },
  { label: 'Gray', value: '#7a716b' },
];

//Fonts
export const ptSans = PT_Sans({ weight: ['400', '700'], subsets: ['latin'] });

//NavLinks
export const getNavLinks = () => {
  return [
    { name: "Overview", href: "/", icon: <HomeIcon/> },
    { name: "Transactions", href: "/transactions", icon: <TransactionsIcon/> },
    { name: "Budgets", href: "/budgets", icon: <BudgetsIcon/> },
    { name: "Pots", href: "/pots", icon: <PotsIcon/> },
    { name: "Recurring Bills", href: "/recurring-bills", icon: <RecurringBillsIcon/> },
  ];
};

//Calculate Percentage
export const calculatePercentage = ({ total, target }) => {
  return ((total / target) * 100).toFixed(2);
};

//Sort Data
export const sortBy = [
    { label: "Latest", value: "latest" },
    { label: "Oldest", value: "oldest" },
    { label: "A to Z", value: "az" },
    { label: "Z to A", value: "za" },
    { label: "Highest Amount", value: "highest" },
    { label: "Lowest Amount", value: "lowest" },
];

//Categories
export const categories = [
  { label: "All transactions", value: "all" },
  { label: "General", value: "general" },
  { label: "Shopping", value: "shopping" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Education", value: "education" },
  { label: "Personal Care", value: "personal_care" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Bill", value: "bill" },
  { label: "Groceries", value: "groceries" },
  { label: "Dining Out", value: "dining-out" },
  { label: "Transportation", value: "transportation" },
];