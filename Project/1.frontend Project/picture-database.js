// Picture database array for the front-end gallery
const pictureDatabase = window.pictureDatabase = [
  {
    id: 1,
    category: 'Refrigerator',
    name: 'Smart Refrigerator 001',
    price: '$284.00',
    image: 'https://loremflickr.com/500/300/refrigerator?lock=1',
    alt: 'Smart Refrigerator 001 image'
  },
  {
    id: 2,
    category: 'Freezer',
    name: 'Chest Freezer 002',
    price: '$319.00',
    image: 'https://loremflickr.com/500/300/freezer?lock=2',
    alt: 'Chest Freezer 002 image'
  },
  {
    id: 3,
    category: 'Microwave Oven',
    name: 'Convection Microwave Oven 003',
    price: '$354.00',
    image: 'https://loremflickr.com/500/300/microwave?lock=3',
    alt: 'Convection Microwave Oven 003 image'
  },
  {
    id: 4,
    category: 'Gas Oven',
    name: 'Gas Oven Range 004',
    price: '$389.00',
    image: 'https://loremflickr.com/500/300/oven?lock=4',
    alt: 'Gas Oven Range 004 image'
  },
  {
    id: 5,
    category: 'Television',
    name: 'LED Smart TV 005',
    price: '$424.00',
    image: 'https://loremflickr.com/500/300/television?lock=5',
    alt: 'LED Smart TV 005 image'
  },
  {
    id: 6,
    category: 'Television',
    name: '4K OLED Television 006',
    price: '$459.00',
    image: 'https://loremflickr.com/500/300/television?lock=6',
    alt: '4K OLED Television 006 image'
  },
  {
    id: 7,
    category: 'Air Conditioner',
    name: 'Inverter AC 007',
    price: '$494.00',
    image: 'https://loremflickr.com/500/300/air-conditioner?lock=7',
    alt: 'Inverter AC 007 image'
  },
  {
    id: 8,
    category: 'Washing Machine',
    name: 'Front Load Washing Machine 008',
    price: '$529.00',
    image: 'https://loremflickr.com/500/300/washing-machine?lock=8',
    alt: 'Front Load Washing Machine 008 image'
  },
  {
    id: 9,
    category: 'Washing Machine',
    name: 'Top Load Washer 009',
    price: '$564.00',
    image: 'https://loremflickr.com/500/300/washing-machine?lock=9',
    alt: 'Top Load Washer 009 image'
  },
  {
    id: 10,
    category: 'Dishwasher',
    name: 'Automatic Dishwasher 010',
    price: '$599.00',
    image: 'https://loremflickr.com/500/300/dishwasher?lock=10',
    alt: 'Automatic Dishwasher 010 image'
  },
  {
    id: 11,
    category: 'Electric Kettle',
    name: 'Electric Water Kettle 011',
    price: '$634.00',
    image: 'https://loremflickr.com/500/300/electric-kettle?lock=11',
    alt: 'Electric Water Kettle 011 image'
  },
  {
    id: 12,
    category: 'Blender',
    name: 'High-Speed Blender 012',
    price: '$669.00',
    image: 'https://loremflickr.com/500/300/blender?lock=12',
    alt: 'High-Speed Blender 012 image'
  },
  {
    id: 13,
    category: 'Mixer Grinder',
    name: 'Kitchen Mixer Grinder 013',
    price: '$704.00',
    image: 'https://loremflickr.com/500/300/mixer-grinder?lock=13',
    alt: 'Kitchen Mixer Grinder 013 image'
  },
  {
    id: 14,
    category: 'Coffee Maker',
    name: 'Automatic Coffee Machine 014',
    price: '$739.00',
    image: 'https://loremflickr.com/500/300/coffee-maker?lock=14',
    alt: 'Automatic Coffee Machine 014 image'
  },
  {
    id: 15,
    category: 'Vacuum Cleaner',
    name: 'Cordless Vacuum Cleaner 015',
    price: '$774.00',
    image: 'https://loremflickr.com/500/300/vacuum-cleaner?lock=15',
    alt: 'Cordless Vacuum Cleaner 015 image'
  },
  {
    id: 16,
    category: 'Electric Fan',
    name: 'Tower Fan 016',
    price: '$249.00',
    image: 'https://loremflickr.com/500/300/electric-fan?lock=16',
    alt: 'Tower Fan 016 image'
  },
  {
    id: 17,
    category: 'Heater',
    name: 'Ceramic Space Heater 017',
    price: '$284.00',
    image: 'https://loremflickr.com/500/300/heater?lock=17',
    alt: 'Ceramic Space Heater 017 image'
  },
  {
    id: 18,
    category: 'Rice Cooker',
    name: 'Smart Rice Cooker 018',
    price: '$319.00',
    image: 'https://loremflickr.com/500/300/rice-cooker?lock=18',
    alt: 'Smart Rice Cooker 018 image'
  },
  {
    id: 19,
    category: 'Air Fryer',
    name: 'Air Fryer Oven 019',
    price: '$354.00',
    image: 'https://loremflickr.com/500/300/air-fryer?lock=19',
    alt: 'Air Fryer Oven 019 image'
  },
  {
    id: 20,
    category: 'Iron',
    name: 'Steam Iron 020',
    price: '$389.00',
    image: 'https://loremflickr.com/500/300/iron?lock=20',
    alt: 'Steam Iron 020 image'
  },
  {
    id: 21,
    category: 'Sound System',
    name: 'Home Theater Soundbar 021',
    price: '$424.00',
    image: 'https://loremflickr.com/500/300/sound-system?lock=21',
    alt: 'Home Theater Soundbar 021 image'
  },
  {
    id: 22,
    category: 'Projector',
    name: 'LED Projector 022',
    price: '$459.00',
    image: 'https://loremflickr.com/500/300/projector?lock=22',
    alt: 'LED Projector 022 image'
  },
  {
    id: 23,
    category: 'Water Heater',
    name: 'Instant Water Heater 023',
    price: '$494.00',
    image: 'https://loremflickr.com/500/300/water-heater?lock=23',
    alt: 'Instant Water Heater 023 image'
  },
  {
    id: 24,
    category: 'Induction Cooktop',
    name: 'Induction Cooker 024',
    price: '$529.00',
    image: 'https://loremflickr.com/500/300/induction-cooktop?lock=24',
    alt: 'Induction Cooker 024 image'
  },
  {
    id: 25,
    category: 'Ceiling Fan',
    name: 'Remote Ceiling Fan 025',
    price: '$564.00',
    image: 'https://loremflickr.com/500/300/ceiling-fan?lock=25',
    alt: 'Remote Ceiling Fan 025 image'
  },
  {
    id: 26,
    category: 'Smart Speaker',
    name: 'Voice-Controlled Speaker 026',
    price: '$599.00',
    image: 'https://loremflickr.com/500/300/smart-speaker?lock=26',
    alt: 'Voice-Controlled Speaker 026 image'
  },
  {
    id: 27,
    category: 'Humidifier',
    name: 'Ultrasonic Humidifier 027',
    price: '$634.00',
    image: 'https://loremflickr.com/500/300/humidifier?lock=27',
    alt: 'Ultrasonic Humidifier 027 image'
  },
  {
    id: 28,
    category: 'Dehumidifier',
    name: 'Room Dehumidifier 028',
    price: '$669.00',
    image: 'https://loremflickr.com/500/300/dehumidifier?lock=28',
    alt: 'Room Dehumidifier 028 image'
  },
  {
    id: 29,
    category: 'Water Dispenser',
    name: 'Hot & Cold Dispenser 029',
    price: '$704.00',
    image: 'https://loremflickr.com/500/300/water-dispenser?lock=29',
    alt: 'Hot & Cold Dispenser 029 image'
  },
  {
    id: 30,
    category: 'Electric Grill',
    name: 'Indoor Electric Grill 030',
    price: '$739.00',
    image: 'https://loremflickr.com/500/300/electric-grill?lock=30',
    alt: 'Indoor Electric Grill 030 image'
  },
  {
    id: 31,
    category: 'Food Processor',
    name: 'Multi-Function Processor 031',
    price: '$774.00',
    image: 'https://loremflickr.com/500/300/food-processor?lock=31',
    alt: 'Multi-Function Processor 031 image'
  },
  {
    id: 32,
    category: 'Electric Stove',
    name: 'Ceramic Electric Stove 032',
    price: '$249.00',
    image: 'https://loremflickr.com/500/300/electric-stove?lock=32',
    alt: 'Ceramic Electric Stove 032 image'
  },
  {
    id: 33,
    category: 'Portable Cooler',
    name: 'Portable Air Cooler 033',
    price: '$284.00',
    image: 'https://loremflickr.com/500/300/portable-cooler?lock=33',
    alt: 'Portable Air Cooler 033 image'
  },
  {
    id: 34,
    category: 'Smart Oven',
    name: 'Smart Wi-Fi Oven 034',
    price: '$319.00',
    image: 'https://loremflickr.com/500/300/smart-oven?lock=34',
    alt: 'Smart Wi-Fi Oven 034 image'
  },
  {
    id: 35,
    category: 'Dishwasher',
    name: 'Compact Dishwasher 035',
    price: '$354.00',
    image: 'https://loremflickr.com/500/300/dishwasher?lock=35',
    alt: 'Compact Dishwasher 035 image'
  },
  {
    id: 36,
    category: 'Electric Radiator',
    name: 'Oil-Filled Radiator 036',
    price: '$389.00',
    image: 'https://loremflickr.com/500/300/electric-radiator?lock=36',
    alt: 'Oil-Filled Radiator 036 image'
  },
  {
    id: 37,
    category: 'Blender',
    name: 'Personal Smoothie Blender 037',
    price: '$424.00',
    image: 'https://loremflickr.com/500/300/blender?lock=37',
    alt: 'Personal Smoothie Blender 037 image'
  },
  {
    id: 38,
    category: 'Portable Heater',
    name: 'Infrared Heater 038',
    price: '$459.00',
    image: 'https://loremflickr.com/500/300/portable-heater?lock=38',
    alt: 'Infrared Heater 038 image'
  },
  {
    id: 39,
    category: 'Ceiling Light',
    name: 'LED Ceiling Light 039',
    price: '$494.00',
    image: 'https://loremflickr.com/500/300/ceiling-light?lock=39',
    alt: 'LED Ceiling Light 039 image'
  },
  {
    id: 40,
    category: 'Chimney',
    name: 'Kitchen Chimney Hood 040',
    price: '$529.00',
    image: 'https://loremflickr.com/500/300/chimney?lock=40',
    alt: 'Kitchen Chimney Hood 040 image'
  },
  {
    id: 41,
    category: 'Food Steamer',
    name: 'Electric Food Steamer 041',
    price: '$564.00',
    image: 'https://loremflickr.com/500/300/food-steamer?lock=41',
    alt: 'Electric Food Steamer 041 image'
  },
  {
    id: 42,
    category: 'Toaster',
    name: 'Bread Toaster 042',
    price: '$599.00',
    image: 'https://loremflickr.com/500/300/toaster?lock=42',
    alt: 'Bread Toaster 042 image'
  },
  {
    id: 43,
    category: 'Grinder',
    name: 'Coffee Grinder 043',
    price: '$634.00',
    image: 'https://loremflickr.com/500/300/grinder?lock=43',
    alt: 'Coffee Grinder 043 image'
  },
  {
    id: 44,
    category: 'Electric Shaver',
    name: 'Wet & Dry Shaver 044',
    price: '$669.00',
    image: 'https://loremflickr.com/500/300/electric-shaver?lock=44',
    alt: 'Wet & Dry Shaver 044 image'
  },
  {
    id: 45,
    category: 'Electric Toothbrush',
    name: 'Rechargeable Toothbrush 045',
    price: '$704.00',
    image: 'https://loremflickr.com/500/300/electric-toothbrush?lock=45',
    alt: 'Rechargeable Toothbrush 045 image'
  },
  {
    id: 46,
    category: 'Smart Lock',
    name: 'Digital Door Lock 046',
    price: '$739.00',
    image: 'https://loremflickr.com/500/300/smart-lock?lock=46',
    alt: 'Digital Door Lock 046 image'
  },
  {
    id: 47,
    category: 'Home Security',
    name: 'Security Camera Kit 047',
    price: '$774.00',
    image: 'https://loremflickr.com/500/300/home-security?lock=47',
    alt: 'Security Camera Kit 047 image'
  },
  {
    id: 48,
    category: 'Water Purifier',
    name: 'RO Water Purifier 048',
    price: '$249.00',
    image: 'https://loremflickr.com/500/300/water-purifier?lock=48',
    alt: 'RO Water Purifier 048 image'
  },
  {
    id: 49,
    category: 'Portable Speaker',
    name: 'Bluetooth Speaker 049',
    price: '$284.00',
    image: 'https://loremflickr.com/500/300/portable-speaker?lock=49',
    alt: 'Bluetooth Speaker 049 image'
  },
  {
    id: 50,
    category: 'Smart Lamp',
    name: 'Color Changing Lamp 050',
    price: '$319.00',
    image: 'https://loremflickr.com/500/300/smart-lamp?lock=50',
    alt: 'Color Changing Lamp 050 image'
  },
  {
    id: 51,
    category: 'Smart Plug',
    name: 'Wi-Fi Smart Plug 051',
    price: '$354.00',
    image: 'https://loremflickr.com/500/300/smart-plug?lock=51',
    alt: 'Wi-Fi Smart Plug 051 image'
  },
  {
    id: 52,
    category: 'Refrigerator',
    name: 'Smart Refrigerator 052',
    price: '$389.00',
    image: 'https://loremflickr.com/500/300/refrigerator?lock=52',
    alt: 'Smart Refrigerator 052 image'
  },
  {
    id: 53,
    category: 'Freezer',
    name: 'Chest Freezer 053',
    price: '$424.00',
    image: 'https://loremflickr.com/500/300/freezer?lock=53',
    alt: 'Chest Freezer 053 image'
  },
  {
    id: 54,
    category: 'Microwave Oven',
    name: 'Convection Microwave Oven 054',
    price: '$459.00',
    image: 'https://loremflickr.com/500/300/microwave?lock=54',
    alt: 'Convection Microwave Oven 054 image'
  },
  {
    id: 55,
    category: 'Gas Oven',
    name: 'Gas Oven Range 055',
    price: '$494.00',
    image: 'https://loremflickr.com/500/300/oven?lock=55',
    alt: 'Gas Oven Range 055 image'
  },
  {
    id: 56,
    category: 'Television',
    name: 'LED Smart TV 056',
    price: '$529.00',
    image: 'https://loremflickr.com/500/300/television?lock=56',
    alt: 'LED Smart TV 056 image'
  },
  {
    id: 57,
    category: 'Television',
    name: '4K OLED Television 057',
    price: '$564.00',
    image: 'https://loremflickr.com/500/300/television?lock=57',
    alt: '4K OLED Television 057 image'
  },
  {
    id: 58,
    category: 'Air Conditioner',
    name: 'Inverter AC 058',
    price: '$599.00',
    image: 'https://loremflickr.com/500/300/air-conditioner?lock=58',
    alt: 'Inverter AC 058 image'
  },
  {
    id: 59,
    category: 'Washing Machine',
    name: 'Front Load Washing Machine 059',
    price: '$634.00',
    image: 'https://loremflickr.com/500/300/washing-machine?lock=59',
    alt: 'Front Load Washing Machine 059 image'
  },
  {
    id: 60,
    category: 'Washing Machine',
    name: 'Top Load Washer 060',
    price: '$669.00',
    image: 'https://loremflickr.com/500/300/washing-machine?lock=60',
    alt: 'Top Load Washer 060 image'
  },
  {
    id: 61,
    category: 'Dishwasher',
    name: 'Automatic Dishwasher 061',
    price: '$704.00',
    image: 'https://loremflickr.com/500/300/dishwasher?lock=61',
    alt: 'Automatic Dishwasher 061 image'
  },
  {
    id: 62,
    category: 'Electric Kettle',
    name: 'Electric Water Kettle 062',
    price: '$739.00',
    image: 'https://loremflickr.com/500/300/electric-kettle?lock=62',
    alt: 'Electric Water Kettle 062 image'
  },
  {
    id: 63,
    category: 'Blender',
    name: 'High-Speed Blender 063',
    price: '$774.00',
    image: 'https://loremflickr.com/500/300/blender?lock=63',
    alt: 'High-Speed Blender 063 image'
  },
  {
    id: 64,
    category: 'Mixer Grinder',
    name: 'Kitchen Mixer Grinder 064',
    price: '$249.00',
    image: 'https://loremflickr.com/500/300/mixer-grinder?lock=64',
    alt: 'Kitchen Mixer Grinder 064 image'
  },
  {
    id: 65,
    category: 'Coffee Maker',
    name: 'Automatic Coffee Machine 065',
    price: '$284.00',
    image: 'https://loremflickr.com/500/300/coffee-maker?lock=65',
    alt: 'Automatic Coffee Machine 065 image'
  },
  {
    id: 66,
    category: 'Vacuum Cleaner',
    name: 'Cordless Vacuum Cleaner 066',
    price: '$319.00',
    image: 'https://loremflickr.com/500/300/vacuum-cleaner?lock=66',
    alt: 'Cordless Vacuum Cleaner 066 image'
  },
  {
    id: 67,
    category: 'Electric Fan',
    name: 'Tower Fan 067',
    price: '$354.00',
    image: 'https://loremflickr.com/500/300/electric-fan?lock=67',
    alt: 'Tower Fan 067 image'
  },
  {
    id: 68,
    category: 'Heater',
    name: 'Ceramic Space Heater 068',
    price: '$389.00',
    image: 'https://loremflickr.com/500/300/heater?lock=68',
    alt: 'Ceramic Space Heater 068 image'
  },
  {
    id: 69,
    category: 'Rice Cooker',
    name: 'Smart Rice Cooker 069',
    price: '$424.00',
    image: 'https://loremflickr.com/500/300/rice-cooker?lock=69',
    alt: 'Smart Rice Cooker 069 image'
  },
  {
    id: 70,
    category: 'Air Fryer',
    name: 'Air Fryer Oven 070',
    price: '$459.00',
    image: 'https://loremflickr.com/500/300/air-fryer?lock=70',
    alt: 'Air Fryer Oven 070 image'
  },
  {
    id: 71,
    category: 'Iron',
    name: 'Steam Iron 071',
    price: '$494.00',
    image: 'https://loremflickr.com/500/300/iron?lock=71',
    alt: 'Steam Iron 071 image'
  },
  {
    id: 72,
    category: 'Sound System',
    name: 'Home Theater Soundbar 072',
    price: '$529.00',
    image: 'https://loremflickr.com/500/300/sound-system?lock=72',
    alt: 'Home Theater Soundbar 072 image'
  },
  {
    id: 73,
    category: 'Projector',
    name: 'LED Projector 073',
    price: '$564.00',
    image: 'https://loremflickr.com/500/300/projector?lock=73',
    alt: 'LED Projector 073 image'
  },
  {
    id: 74,
    category: 'Water Heater',
    name: 'Instant Water Heater 074',
    price: '$599.00',
    image: 'https://loremflickr.com/500/300/water-heater?lock=74',
    alt: 'Instant Water Heater 074 image'
  },
  {
    id: 75,
    category: 'Induction Cooktop',
    name: 'Induction Cooker 075',
    price: '$634.00',
    image: 'https://loremflickr.com/500/300/induction-cooktop?lock=75',
    alt: 'Induction Cooker 075 image'
  },
  {
    id: 76,
    category: 'Ceiling Fan',
    name: 'Remote Ceiling Fan 076',
    price: '$669.00',
    image: 'https://loremflickr.com/500/300/ceiling-fan?lock=76',
    alt: 'Remote Ceiling Fan 076 image'
  },
  {
    id: 77,
    category: 'Smart Speaker',
    name: 'Voice-Controlled Speaker 077',
    price: '$704.00',
    image: 'https://loremflickr.com/500/300/smart-speaker?lock=77',
    alt: 'Voice-Controlled Speaker 077 image'
  },
  {
    id: 78,
    category: 'Humidifier',
    name: 'Ultrasonic Humidifier 078',
    price: '$739.00',
    image: 'https://loremflickr.com/500/300/humidifier?lock=78',
    alt: 'Ultrasonic Humidifier 078 image'
  },
  {
    id: 79,
    category: 'Dehumidifier',
    name: 'Room Dehumidifier 079',
    price: '$774.00',
    image: 'https://loremflickr.com/500/300/dehumidifier?lock=79',
    alt: 'Room Dehumidifier 079 image'
  },
  {
    id: 80,
    category: 'Water Dispenser',
    name: 'Hot & Cold Dispenser 080',
    price: '$249.00',
    image: 'https://loremflickr.com/500/300/water-dispenser?lock=80',
    alt: 'Hot & Cold Dispenser 080 image'
  },
  {
    id: 81,
    category: 'Electric Grill',
    name: 'Indoor Electric Grill 081',
    price: '$284.00',
    image: 'https://loremflickr.com/500/300/electric-grill?lock=81',
    alt: 'Indoor Electric Grill 081 image'
  },
  {
    id: 82,
    category: 'Food Processor',
    name: 'Multi-Function Processor 082',
    price: '$319.00',
    image: 'https://loremflickr.com/500/300/food-processor?lock=82',
    alt: 'Multi-Function Processor 082 image'
  },
  {
    id: 83,
    category: 'Electric Stove',
    name: 'Ceramic Electric Stove 083',
    price: '$354.00',
    image: 'https://loremflickr.com/500/300/electric-stove?lock=83',
    alt: 'Ceramic Electric Stove 083 image'
  },
  {
    id: 84,
    category: 'Portable Cooler',
    name: 'Portable Air Cooler 084',
    price: '$389.00',
    image: 'https://loremflickr.com/500/300/portable-cooler?lock=84',
    alt: 'Portable Air Cooler 084 image'
  },
  {
    id: 85,
    category: 'Smart Oven',
    name: 'Smart Wi-Fi Oven 085',
    price: '$424.00',
    image: 'https://loremflickr.com/500/300/smart-oven?lock=85',
    alt: 'Smart Wi-Fi Oven 085 image'
  },
  {
    id: 86,
    category: 'Dishwasher',
    name: 'Compact Dishwasher 086',
    price: '$459.00',
    image: 'https://loremflickr.com/500/300/dishwasher?lock=86',
    alt: 'Compact Dishwasher 086 image'
  },
  {
    id: 87,
    category: 'Electric Radiator',
    name: 'Oil-Filled Radiator 087',
    price: '$494.00',
    image: 'https://loremflickr.com/500/300/electric-radiator?lock=87',
    alt: 'Oil-Filled Radiator 087 image'
  },
  {
    id: 88,
    category: 'Blender',
    name: 'Personal Smoothie Blender 088',
    price: '$529.00',
    image: 'https://loremflickr.com/500/300/blender?lock=88',
    alt: 'Personal Smoothie Blender 088 image'
  },
  {
    id: 89,
    category: 'Portable Heater',
    name: 'Infrared Heater 089',
    price: '$564.00',
    image: 'https://loremflickr.com/500/300/portable-heater?lock=89',
    alt: 'Infrared Heater 089 image'
  },
  {
    id: 90,
    category: 'Ceiling Light',
    name: 'LED Ceiling Light 090',
    price: '$599.00',
    image: 'https://loremflickr.com/500/300/ceiling-light?lock=90',
    alt: 'LED Ceiling Light 090 image'
  },
  {
    id: 91,
    category: 'Chimney',
    name: 'Kitchen Chimney Hood 091',
    price: '$634.00',
    image: 'https://loremflickr.com/500/300/chimney?lock=91',
    alt: 'Kitchen Chimney Hood 091 image'
  },
  {
    id: 92,
    category: 'Food Steamer',
    name: 'Electric Food Steamer 092',
    price: '$669.00',
    image: 'https://loremflickr.com/500/300/food-steamer?lock=92',
    alt: 'Electric Food Steamer 092 image'
  },
  {
    id: 93,
    category: 'Toaster',
    name: 'Bread Toaster 093',
    price: '$704.00',
    image: 'https://loremflickr.com/500/300/toaster?lock=93',
    alt: 'Bread Toaster 093 image'
  },
  {
    id: 94,
    category: 'Grinder',
    name: 'Coffee Grinder 094',
    price: '$739.00',
    image: 'https://loremflickr.com/500/300/grinder?lock=94',
    alt: 'Coffee Grinder 094 image'
  },
  {
    id: 95,
    category: 'Electric Shaver',
    name: 'Wet & Dry Shaver 095',
    price: '$774.00',
    image: 'https://loremflickr.com/500/300/electric-shaver?lock=95',
    alt: 'Wet & Dry Shaver 095 image'
  },
  {
    id: 96,
    category: 'Electric Toothbrush',
    name: 'Rechargeable Toothbrush 096',
    price: '$249.00',
    image: 'https://loremflickr.com/500/300/electric-toothbrush?lock=96',
    alt: 'Rechargeable Toothbrush 096 image'
  },
  {
    id: 97,
    category: 'Smart Lock',
    name: 'Digital Door Lock 097',
    price: '$284.00',
    image: 'https://loremflickr.com/500/300/smart-lock?lock=97',
    alt: 'Digital Door Lock 097 image'
  },
  {
    id: 98,
    category: 'Home Security',
    name: 'Security Camera Kit 098',
    price: '$319.00',
    image: 'https://loremflickr.com/500/300/home-security?lock=98',
    alt: 'Security Camera Kit 098 image'
  },
  {
    id: 99,
    category: 'Water Purifier',
    name: 'RO Water Purifier 099',
    price: '$354.00',
    image: 'https://loremflickr.com/500/300/water-purifier?lock=99',
    alt: 'RO Water Purifier 099 image'
  },
  {
    id: 100,
    category: 'Portable Speaker',
    name: 'Bluetooth Speaker 100',
    price: '$389.00',
    image: 'https://loremflickr.com/500/300/portable-speaker?lock=100',
    alt: 'Bluetooth Speaker 100 image'
  },
];
