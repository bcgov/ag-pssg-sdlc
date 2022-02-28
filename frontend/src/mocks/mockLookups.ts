import { ILookupCode } from './../store/slices/lookupCodes/interfaces/ILookupCode';
export const mockLookups: Partial<ILookupCode>[] = [
  {
    id: 2,
    key: '0a0dba97-3979-426b-b2b2-c762dff0bb27',
    name: 'Organization Administrator',
    description: 'Administrator of the user\u0027s organization.',
    isDisabled: false,
    isPublic: false,
    displayOrder: 0,
    type: 'PimsRole',
    rowVersion: 1,
  },
  {
    id: 5,
    key: '525fea44-a340-4618-bb87-47e80724d19b',
    name: 'Real Estate Analyst',
    description: 'Real Estate Analyst can manage properties within their organization.',
    isDisabled: false,
    isPublic: true,
    displayOrder: 0,
    type: 'PimsRole',
    rowVersion: 1,
  },
  {
    id: 4,
    key: 'ef62083e-8fb5-458c-b29d-0e2d3e208e1d',
    name: 'Real Estate Manager',
    description: 'Real Estate Manager can manage properties within their agency.',
    isDisabled: false,
    isPublic: true,
    displayOrder: 0,
    type: 'PimsRole',
    rowVersion: 1,
  },
  {
    id: 1,
    key: 'bc9ea3fe-96c1-43aa-a97b-ea34221e4a3b',
    name: 'System Administrator',
    description: 'System Administrator of the PIMS solution.',
    isDisabled: false,
    isPublic: false,
    displayOrder: 0,
    type: 'PimsRole',
    rowVersion: 1,
  },
  {
    id: 3,
    key: 'cdb9816d-b200-434d-a77a-c77196c6bd90',
    name: 'Undetermined',
    description: 'The user has an undetermined role with their organization.',
    isDisabled: false,
    isPublic: false,
    displayOrder: 0,
    type: 'PimsRole',
    rowVersion: 1,
  },
  {
    id: 5,
    code: 'BOB123',
    name: 'Bob\u0027s Property Management',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganization',
    appCreateTimestamp: '2022-01-19T22:41:45.54',
    updatedOn: '2022-01-19T22:41:45.54',
    updatedByName: 'Leasse Seed Data',
    rowVersion: 1,
  },
  {
    id: 3,
    code: 'DQ4EVA',
    name: 'Dairy Queen Forever! Property Management',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganization',
    appCreateTimestamp: '2022-01-19T22:41:45.54',
    updatedOn: '2022-01-19T22:41:45.54',
    updatedByName: 'Leasse Seed Data',
    rowVersion: 1,
  },
  {
    id: 2,
    code: 'LILMOUSE',
    name: 'French Mouse Property Management',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganization',
    appCreateTimestamp: '2022-01-19T22:41:45.54',
    updatedOn: '2022-01-19T22:41:45.54',
    updatedByName: 'Leasse Seed Data',
    rowVersion: 1,
  },
  {
    id: 1,
    code: 'MOTI2',
    name: 'Ministry of Transportation and Infrastructure',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganization',
    appCreateTimestamp: '2022-01-19T22:41:45.403',
    updatedOn: '2022-01-19T22:41:45.403',
    updatedByName: 'Seed Data',
    rowVersion: 1,
  },
  {
    id: 4,
    code: 'DAKATZ',
    name: 'Pussycat Property Management',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganization',
    appCreateTimestamp: '2022-01-19T22:41:45.54',
    updatedOn: '2022-01-19T22:41:45.54',
    updatedByName: 'Leasse Seed Data',
    rowVersion: 1,
  },
  {
    id: 'BCDIST',
    name: 'BC District Office',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganizationType',
    rowVersion: 0,
  },
  {
    id: 'BCMIN',
    name: 'BC Ministry',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganizationType',
    rowVersion: 0,
  },
  {
    id: 'BCREG',
    name: 'BC Regional Office',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganizationType',
    rowVersion: 0,
  },
  {
    id: 'FIRSTNAT',
    name: 'First Nations',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganizationType',
    rowVersion: 0,
  },
  {
    id: 'OTHER',
    name: 'Other',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganizationType',
    rowVersion: 0,
  },
  {
    id: 'PARTNER',
    name: 'Partnership',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganizationType',
    rowVersion: 0,
  },
  {
    id: 'PRIVATE',
    name: 'Private owner',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganizationType',
    rowVersion: 0,
  },
  {
    id: 'RAILWAY',
    name: 'Railway corporation',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganizationType',
    rowVersion: 0,
  },
  {
    id: 'REALTOR',
    name: 'Real estate corporation',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsOrganizationType',
    rowVersion: 0,
  },
  {
    id: '1',
    code: 'CA',
    name: 'Canada',
    isDisabled: false,
    displayOrder: 1,
    type: 'PimsCountry',
    rowVersion: 1,
  },
  {
    id: '2',
    code: 'US',
    name: 'United States of America',
    isDisabled: false,
    displayOrder: 2,
    type: 'PimsCountry',
    rowVersion: 1,
  },
  {
    id: '3',
    code: 'MX',
    name: 'Mexico',
    isDisabled: false,
    displayOrder: 3,
    type: 'PimsCountry',
    rowVersion: 1,
  },
  {
    id: '4',
    code: 'OTHER',
    name: 'Other',
    isDisabled: false,
    displayOrder: 99,
    type: 'PimsCountry',
    rowVersion: 1,
  },
  {
    id: '1',
    parentId: '1',
    code: 'BC',
    name: 'British Columbia',
    isDisabled: false,
    displayOrder: 10,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '2',
    parentId: '1',
    code: 'AB',
    name: 'Alberta',
    isDisabled: false,
    displayOrder: 20,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '3',
    parentId: '1',
    code: 'MB',
    name: 'Manitoba',
    isDisabled: false,
    displayOrder: 30,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '4',
    parentId: '1',
    code: 'NL',
    name: 'Newfoundland',
    isDisabled: false,
    displayOrder: 40,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '5',
    parentId: '1',
    code: 'NB',
    name: 'New Brunswick',
    isDisabled: false,
    displayOrder: 50,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '6',
    parentId: '1',
    code: 'NS',
    name: 'Nova Scotia',
    isDisabled: false,
    displayOrder: 60,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '7',
    parentId: '1',
    code: 'NT',
    name: 'North West Territories',
    isDisabled: false,
    displayOrder: 70,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '8',
    parentId: '1',
    code: 'NU',
    name: 'Nunavut',
    isDisabled: false,
    displayOrder: 80,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '9',
    parentId: '1',
    code: 'ON',
    name: 'Ontario',
    isDisabled: false,
    displayOrder: 90,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '10',
    parentId: '1',
    code: 'PE',
    name: 'Prince Edward Island',
    isDisabled: false,
    displayOrder: 100,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '11',
    parentId: '1',
    code: 'QC',
    name: 'Quebec',
    isDisabled: false,
    displayOrder: 110,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '12',
    parentId: '1',
    code: 'SK',
    name: 'Saskatchewan',
    isDisabled: false,
    displayOrder: 120,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '13',
    parentId: '1',
    code: 'YT',
    name: 'Yukon Territory',
    isDisabled: false,
    displayOrder: 130,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '14',
    parentId: '2',
    code: 'AK',
    name: 'Alaska',
    isDisabled: false,
    displayOrder: 140,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '15',
    parentId: '2',
    code: 'AL',
    name: 'Alabama',
    isDisabled: false,
    displayOrder: 150,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '16',
    parentId: '2',
    code: 'AR',
    name: 'Arkansas',
    isDisabled: false,
    displayOrder: 160,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '17',
    parentId: '2',
    code: 'AZ',
    name: 'Arizona',
    isDisabled: false,
    displayOrder: 170,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '18',
    parentId: '2',
    code: 'CA',
    name: 'California',
    isDisabled: false,
    displayOrder: 180,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '19',
    parentId: '2',
    code: 'CO',
    name: 'Colorado',
    isDisabled: false,
    displayOrder: 190,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '20',
    parentId: '2',
    code: 'CT',
    name: 'Connecticut',
    isDisabled: false,
    displayOrder: 200,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '21',
    parentId: '2',
    code: 'DC',
    name: 'District Of Columbia',
    isDisabled: false,
    displayOrder: 210,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '22',
    parentId: '2',
    code: 'DE',
    name: 'Delaware',
    isDisabled: false,
    displayOrder: 220,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '23',
    parentId: '2',
    code: 'FL',
    name: 'Florida',
    isDisabled: false,
    displayOrder: 230,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '24',
    parentId: '2',
    code: 'GA',
    name: 'Georgia',
    isDisabled: false,
    displayOrder: 240,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '25',
    parentId: '2',
    code: 'HI',
    name: 'Hawaii',
    isDisabled: false,
    displayOrder: 250,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '26',
    parentId: '2',
    code: 'IA',
    name: 'Iowa',
    isDisabled: false,
    displayOrder: 260,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '27',
    parentId: '2',
    code: 'ID',
    name: 'Idaho',
    isDisabled: false,
    displayOrder: 270,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '28',
    parentId: '2',
    code: 'IL',
    name: 'Illinois',
    isDisabled: false,
    displayOrder: 280,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '29',
    parentId: '2',
    code: 'IN',
    name: 'Indiana',
    isDisabled: false,
    displayOrder: 290,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '30',
    parentId: '2',
    code: 'KS',
    name: 'Kansas',
    isDisabled: false,
    displayOrder: 300,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '31',
    parentId: '2',
    code: 'KY',
    name: 'Kentucky',
    isDisabled: false,
    displayOrder: 310,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '32',
    parentId: '2',
    code: 'LA',
    name: 'Louisiana',
    isDisabled: false,
    displayOrder: 320,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '33',
    parentId: '2',
    code: 'MA',
    name: 'Massachusetts',
    isDisabled: false,
    displayOrder: 330,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '34',
    parentId: '2',
    code: 'MD',
    name: 'Maryland',
    isDisabled: false,
    displayOrder: 340,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '35',
    parentId: '2',
    code: 'ME',
    name: 'Maine',
    isDisabled: false,
    displayOrder: 350,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '36',
    parentId: '2',
    code: 'MI',
    name: 'Michigan',
    isDisabled: false,
    displayOrder: 360,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '37',
    parentId: '2',
    code: 'MN',
    name: 'Minnesota',
    isDisabled: false,
    displayOrder: 370,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '38',
    parentId: '2',
    code: 'MO',
    name: 'Missouri',
    isDisabled: false,
    displayOrder: 380,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '39',
    parentId: '2',
    code: 'MS',
    name: 'Mississippi',
    isDisabled: false,
    displayOrder: 390,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '40',
    parentId: '2',
    code: 'MT',
    name: 'Montana',
    isDisabled: false,
    displayOrder: 400,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '41',
    parentId: '2',
    code: 'NC',
    name: 'North Carolina',
    isDisabled: false,
    displayOrder: 410,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '42',
    parentId: '2',
    code: 'ND',
    name: 'North Dakota',
    isDisabled: false,
    displayOrder: 420,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '43',
    parentId: '2',
    code: 'NE',
    name: 'Nebraska',
    isDisabled: false,
    displayOrder: 430,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '44',
    parentId: '2',
    code: 'NH',
    name: 'New Hampshire',
    isDisabled: false,
    displayOrder: 440,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '45',
    parentId: '2',
    code: 'NJ',
    name: 'New Jersey',
    isDisabled: false,
    displayOrder: 450,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '46',
    parentId: '2',
    code: 'NM',
    name: 'New Mexico',
    isDisabled: false,
    displayOrder: 460,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '47',
    parentId: '2',
    code: 'NV',
    name: 'Nevada',
    isDisabled: false,
    displayOrder: 470,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '48',
    parentId: '2',
    code: 'NY',
    name: 'New York',
    isDisabled: false,
    displayOrder: 480,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '49',
    parentId: '2',
    code: 'OH',
    name: 'Ohio',
    isDisabled: false,
    displayOrder: 490,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '50',
    parentId: '2',
    code: 'OK',
    name: 'Oklahoma',
    isDisabled: false,
    displayOrder: 500,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '51',
    parentId: '2',
    code: 'OR',
    name: 'Oregon',
    isDisabled: false,
    displayOrder: 510,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '52',
    parentId: '2',
    code: 'PA',
    name: 'Pennsylvania',
    isDisabled: false,
    displayOrder: 520,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '53',
    parentId: '2',
    code: 'RI',
    name: 'Rhode Island',
    isDisabled: false,
    displayOrder: 530,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '54',
    parentId: '2',
    code: 'SC',
    name: 'South Carolina',
    isDisabled: false,
    displayOrder: 540,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '55',
    parentId: '2',
    code: 'SD',
    name: 'South Dakota',
    isDisabled: false,
    displayOrder: 550,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '56',
    parentId: '2',
    code: 'TN',
    name: 'Tennessee',
    isDisabled: false,
    displayOrder: 560,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '57',
    parentId: '2',
    code: 'TX',
    name: 'Texas',
    isDisabled: false,
    displayOrder: 570,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '58',
    parentId: '2',
    code: 'UT',
    name: 'Utah',
    isDisabled: false,
    displayOrder: 580,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '59',
    parentId: '2',
    code: 'VA',
    name: 'Virginia',
    isDisabled: false,
    displayOrder: 590,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '60',
    parentId: '2',
    code: 'VT',
    name: 'Vermont',
    isDisabled: false,
    displayOrder: 600,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '61',
    parentId: '2',
    code: 'WA',
    name: 'Washington',
    isDisabled: false,
    displayOrder: 610,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '62',
    parentId: '2',
    code: 'WI',
    name: 'Wisconsin',
    isDisabled: false,
    displayOrder: 620,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '63',
    parentId: '2',
    code: 'WV',
    name: 'West Virginia',
    isDisabled: false,
    displayOrder: 630,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '64',
    parentId: '2',
    code: 'WY',
    name: 'Wyoming',
    isDisabled: false,
    displayOrder: 640,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '65',
    parentId: '3',
    code: 'MX',
    name: 'Mexico',
    isDisabled: false,
    displayOrder: 900,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '78',
    parentId: '4',
    code: 'OTHER',
    name: 'Other',
    isDisabled: false,
    displayOrder: 99995,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '79',
    parentId: '4',
    code: 'XX',
    name: 'Unknown',
    isDisabled: false,
    displayOrder: 99999,
    type: 'PimsProvinceState',
    rowVersion: 0,
  },
  {
    id: '1',
    code: '1',
    name: 'South Coast Region',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsRegion',
    rowVersion: 0,
  },
  {
    id: '2',
    code: '2',
    name: 'Southern Interior Region',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsRegion',
    rowVersion: 0,
  },
  {
    id: '3',
    code: '3',
    name: 'Northern Region',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsRegion',
    rowVersion: 0,
  },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  { isDisabled: false, displayOrder: 0, rowVersion: 0 },
  {
    id: 'COREOPER',
    name: 'Core Operational',
    isDisabled: false,
    displayOrder: 1,
    type: 'PimsPropertyClassificationType',
    rowVersion: 0,
  },
  {
    id: 'CORESTRAT',
    name: 'Core Strategic',
    isDisabled: false,
    displayOrder: 2,
    type: 'PimsPropertyClassificationType',
    rowVersion: 0,
  },
  {
    id: 'SURPACTIVE',
    name: 'Surplus Active',
    isDisabled: false,
    displayOrder: 3,
    type: 'PimsPropertyClassificationType',
    rowVersion: 0,
  },
  {
    id: 'SURPENCUM',
    name: 'Surplus Encumbered',
    isDisabled: false,
    displayOrder: 4,
    type: 'PimsPropertyClassificationType',
    rowVersion: 0,
  },
  {
    id: 'DISPOSED',
    name: 'Disposed',
    isDisabled: false,
    displayOrder: 5,
    type: 'PimsPropertyClassificationType',
    rowVersion: 0,
  },
  {
    id: 'DEMOLISHED',
    name: 'Demolished',
    isDisabled: false,
    displayOrder: 6,
    type: 'PimsPropertyClassificationType',
    rowVersion: 0,
  },
  {
    id: 'SUBDIVIDED',
    name: 'Subdivided',
    isDisabled: false,
    displayOrder: 7,
    type: 'PimsPropertyClassificationType',
    rowVersion: 0,
  },
  {
    id: 'HA',
    name: 'Hectare',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsAreaUnitType',
    rowVersion: 0,
  },
  {
    id: 'M2',
    name: 'Meters sq',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsAreaUnitType',
    rowVersion: 0,
  },
  {
    id: 'CL',
    name: 'Crown Land Reserve',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsPropertyTenureType',
    rowVersion: 0,
  },
  {
    id: 'CR',
    name: 'Closed Road',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsPropertyTenureType',
    rowVersion: 0,
  },
  {
    id: 'PL',
    name: 'Payable Contract',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsPropertyTenureType',
    rowVersion: 0,
  },
  {
    id: 'RW',
    name: 'Right of Way',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsPropertyTenureType',
    rowVersion: 0,
  },
  {
    id: 'TM',
    name: 'Titled Land - MoTI',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsPropertyTenureType',
    rowVersion: 0,
  },
  {
    id: 'TT',
    name: 'Titled Land - TFA',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsPropertyTenureType',
    rowVersion: 0,
  },
  {
    id: 'BUILD',
    name: 'Buiding',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsPropertyType',
    rowVersion: 0,
  },
  {
    id: 'LAND',
    name: 'Land',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsPropertyType',
    rowVersion: 0,
  },
  {
    id: 'SUBDIV',
    name: 'Subdivison',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsPropertyType',
    rowVersion: 0,
  },
  {
    id: 'PYBLBCTFA',
    name: 'Payable (BCTFA as tenant)',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePayRvblType',
    rowVersion: 0,
  },
  {
    id: 'PYBLMOTI',
    name: 'Payable (MOTI as tenant)',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePayRvblType',
    rowVersion: 0,
  },
  {
    id: 'RCVBL',
    name: 'Receivable',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePayRvblType',
    rowVersion: 0,
  },
  {
    id: 'BCFERRIES',
    name: 'BC Ferries',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'BCTRANSIT',
    name: 'BC Transit',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'BELLETERM',
    name: 'Belleville Terminal',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'COMMBLDG',
    name: 'Commercial Buildings',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'LCLGOVT',
    name: 'Local Government/RCMP',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'OTHER',
    name: 'Other Licencing',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'RAILTRAIL',
    name: 'Rail Trails',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'RESRENTAL',
    name: 'Residential Rentals',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'TMEP',
    name: 'TMEP',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'TRANSLINK',
    name: 'TransLink',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'UTILITY',
    name: 'Utilities',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseProgramType',
    rowVersion: 0,
  },
  {
    id: 'ACTIVE',
    name: 'Active',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseStatusType',
    rowVersion: 0,
  },
  {
    id: 'DISCARD',
    name: 'Discarded',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseStatusType',
    rowVersion: 0,
  },
  {
    id: 'DRAFT',
    name: 'Draft',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseStatusType',
    rowVersion: 0,
  },
  {
    id: 'EXPIRED',
    name: 'Expired',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseStatusType',
    rowVersion: 0,
  },
  {
    id: 'TERMINATED',
    name: 'Terminated',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseStatusType',
    rowVersion: 0,
  },
  {
    id: 'LICONSTRC',
    name: 'License to Construct',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'LIMOTIPRJ',
    name: 'MOTI Project Use License',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'LIOCCACCS',
    name: 'License of Occupation (access)',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'LIOCCTTLD',
    name: 'License of Occupation (titled)',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'LIOCCUSE',
    name: 'License of Occupation (use)',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'LIOCCUTIL',
    name: 'License of Occupation (utilities)',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'LIPPUBHWY',
    name: 'License of Prov Public Highway',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'LSGRND',
    name: 'Ground Lease',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'LSREG',
    name: 'Lease - Registered',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'LSUNREG',
    name: 'Lease - Unregistered',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'MANUFHOME',
    name: 'Manufactured Home Act',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'OTHER',
    name: 'Other',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'RESLNDTEN',
    name: 'Residential Tenancy Act',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'ROADXING',
    name: 'Road Crossing',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseLicenseType',
    rowVersion: 0,
  },
  {
    id: 'AGRIC',
    name: 'Agricultural',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseCategoryType',
    rowVersion: 0,
  },
  {
    id: 'COMM',
    name: 'Commercial',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseCategoryType',
    rowVersion: 0,
  },
  {
    id: 'GOVGOV',
    name: 'Gov\u0027t to Gov\u0027t',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseCategoryType',
    rowVersion: 0,
  },
  {
    id: 'INDUS',
    name: 'Industrial',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseCategoryType',
    rowVersion: 0,
  },
  {
    id: 'OTHER',
    name: 'Other',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseCategoryType',
    rowVersion: 0,
  },
  {
    id: 'RESID',
    name: 'Residential',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseCategoryType',
    rowVersion: 0,
  },
  {
    id: 'ACCCCOM',
    name: 'Access (Industrial/Commercial)',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'ACCRES',
    name: 'Access (Residential)',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'AGRIC',
    name: 'Agricultural',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'BCFERRIES',
    name: 'BC Ferries',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'CAMPING',
    name: 'Camping',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'COMMBLDG',
    name: 'Commercial Building',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'EMERGSVCS',
    name: 'Emergency Services',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'ENCROACH',
    name: 'Encroachment',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'FENCEGATE',
    name: 'Fencing/Gate',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'GARDENING',
    name: 'Gardening',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'GRAVEL',
    name: 'Gravel',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'GRAZING',
    name: 'Grazing',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'LOGGING',
    name: 'Logging/Timber Harvest',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'MARINEFAC',
    name: 'Marine Facility',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'MOBILEHM',
    name: 'Mobile Home Pad',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'MTCYARD',
    name: 'Maintenance Yard',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'OTHER',
    name: 'Other*',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'PARK',
    name: 'Park',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'PARKING',
    name: 'Parking',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'PARKNRID',
    name: 'Park and Ride',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'PIPELINE',
    name: 'Pipeline',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'PRELOAD',
    name: 'Preload',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'PRVTRANS',
    name: 'Private transportation',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'RAILWAY',
    name: 'Railway',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'RESTAREA',
    name: 'Rest Area/Pullout',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'SIDEWALK',
    name: 'Sidewalks/Landscaping',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'SIGNAGE',
    name: 'Signage',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'SPCLEVNT',
    name: 'Special Event',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'STGNGAREA',
    name: 'Staging Area',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'STKPILING',
    name: 'Stockpiling',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'STORAGE',
    name: 'Storage',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'TOURINFO',
    name: 'Tourist Info',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'TRAIL',
    name: 'Trail',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'UTILINFRA',
    name: 'Utilities-infrastructure',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'UTILOHDXG',
    name: 'Utilities-overhead xing',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'UTILUGDXG',
    name: 'Utilities-underground xing',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'WATERRES',
    name: 'Water Reservoir',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'WEIGHSCL',
    name: 'Weigh Scale',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'XING',
    name: 'Crossing',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePurposeType',
    rowVersion: 0,
  },
  {
    id: 'HQ',
    name: 'Headquarters',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseResponsibilityType',
    rowVersion: 0,
  },
  {
    id: 'PROJECT',
    name: 'Project',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseResponsibilityType',
    rowVersion: 0,
  },
  {
    id: 'REGION',
    name: 'Region',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseResponsibilityType',
    rowVersion: 0,
  },
  {
    id: 'HQ',
    name: 'Headquarters',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseInitiatorType',
    rowVersion: 0,
  },
  {
    id: 'PROJECT',
    name: 'Project',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseInitiatorType',
    rowVersion: 0,
  },
  {
    id: 'REGION',
    name: 'Region',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseInitiatorType',
    rowVersion: 0,
  },
  {
    id: 'EXER',
    name: 'Exercised',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseTermStatusType',
    rowVersion: 0,
  },
  {
    id: 'NEXER',
    name: 'Not Exercised',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeaseTermStatusType',
    rowVersion: 0,
  },
  {
    id: 'ANNUAL',
    name: 'Annually',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePmtFreqType',
    rowVersion: 0,
  },
  {
    id: 'BIMONTH',
    name: 'Bi-Monthly',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePmtFreqType',
    rowVersion: 0,
  },
  {
    id: 'BIWEEK',
    name: 'Bi-Weekly',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePmtFreqType',
    rowVersion: 0,
  },
  {
    id: 'DAILY',
    name: 'Daily',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePmtFreqType',
    rowVersion: 0,
  },
  {
    id: 'MONTHLY',
    name: 'Monthly',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePmtFreqType',
    rowVersion: 0,
  },
  {
    id: 'NOMINAL',
    name: 'Nominal ($1)',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePmtFreqType',
    rowVersion: 0,
  },
  {
    id: 'PREPAID',
    name: 'Prepaid / One Time',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePmtFreqType',
    rowVersion: 0,
  },
  {
    id: 'QUARTER',
    name: 'Quarterly',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePmtFreqType',
    rowVersion: 0,
  },
  {
    id: 'SEMIANN',
    name: 'Semi Annually',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePmtFreqType',
    rowVersion: 0,
  },
  {
    id: 'WEEKLY',
    name: 'Weekly',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePmtFreqType',
    rowVersion: 0,
  },
  {
    id: 'AIRCRAFT',
    name: 'Aircraft Liability Coverage',
    isDisabled: false,
    displayOrder: 1,
    type: 'PimsInsuranceType',
    rowVersion: 0,
  },
  {
    id: 'GENERAL',
    name: 'Commercial General Liability (CGL)',
    isDisabled: false,
    displayOrder: 2,
    type: 'PimsInsuranceType',
    rowVersion: 0,
  },
  {
    id: 'MARINE',
    name: 'Marine Liability Coverage',
    isDisabled: false,
    displayOrder: 3,
    type: 'PimsInsuranceType',
    rowVersion: 0,
  },
  {
    id: 'VEHICLE',
    name: 'Vehicle Liability Coverage',
    isDisabled: false,
    displayOrder: 4,
    type: 'PimsInsuranceType',
    rowVersion: 0,
  },
  {
    id: 'OTHER',
    name: 'Other Insurance Coverage',
    isDisabled: false,
    displayOrder: 99,
    type: 'PimsInsuranceType',
    rowVersion: 0,
  },
  {
    id: 'FAX',
    name: 'Facsimile machine',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsContactMethodType',
    rowVersion: 0,
  },
  {
    id: 'PERSEMAIL',
    name: 'Personal email',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsContactMethodType',
    rowVersion: 0,
  },
  {
    id: 'PERSMOBIL',
    name: 'Personal mobile phone',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsContactMethodType',
    rowVersion: 0,
  },
  {
    id: 'PERSPHONE',
    name: 'Personal phone',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsContactMethodType',
    rowVersion: 0,
  },
  {
    id: 'WORKEMAIL',
    name: 'Work email',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsContactMethodType',
    rowVersion: 0,
  },
  {
    id: 'WORKMOBIL',
    name: 'Work mobile phone',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsContactMethodType',
    rowVersion: 0,
  },
  {
    id: 'WORKPHONE',
    name: 'Work phone',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsContactMethodType',
    rowVersion: 0,
  },
  {
    id: 'COMMBLDG',
    name: 'Commercial Building',
    isDisabled: false,
    displayOrder: 1,
    type: 'PimsPropertyImprovementType',
    rowVersion: 0,
  },
  {
    id: 'RTA',
    name: 'Residential Tenancy Act',
    isDisabled: false,
    displayOrder: 2,
    type: 'PimsPropertyImprovementType',
    rowVersion: 0,
  },
  {
    id: 'OTHER',
    name: 'Other',
    isDisabled: false,
    displayOrder: 99,
    type: 'PimsPropertyImprovementType',
    rowVersion: 0,
  },
  {
    id: 'PAID',
    name: 'Paid',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePaymentStatusType',
    rowVersion: 0,
  },
  {
    id: 'UNPAID',
    name: 'Unpaid',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePaymentStatusType',
    rowVersion: 0,
  },
  {
    id: 'CASH',
    name: 'Cash',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePaymentMethodType',
    rowVersion: 0,
  },
  {
    id: 'CHEQ',
    name: 'Cheque',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePaymentMethodType',
    rowVersion: 0,
  },
  {
    id: 'CRDR',
    name: 'Credit / Debit',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePaymentMethodType',
    rowVersion: 0,
  },
  {
    id: 'EFT',
    name: 'EFT',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePaymentMethodType',
    rowVersion: 0,
  },
  {
    id: 'H120',
    name: 'H120',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePaymentMethodType',
    rowVersion: 0,
  },
  {
    id: 'OTHR',
    name: 'Other',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePaymentMethodType',
    rowVersion: 0,
  },
  {
    id: 'POST',
    name: 'Post-dated cheque',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsLeasePaymentMethodType',
    rowVersion: 0,
  },
  {
    id: 'OTHER',
    name: 'Other deposit',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsSecurityDepositType',
    rowVersion: 0,
  },
  {
    id: 'PET',
    name: 'Pet deposit',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsSecurityDepositType',
    rowVersion: 0,
  },
  {
    id: 'SECURITY',
    name: 'Security deposit',
    isDisabled: false,
    displayOrder: 0,
    type: 'PimsSecurityDepositType',
    rowVersion: 0,
  },
];