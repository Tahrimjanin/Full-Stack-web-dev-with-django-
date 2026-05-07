-- SQL picture database for Kingdom Mega Store - electrical materials
CREATE TABLE IF NOT EXISTS pictures (
  id INTEGER PRIMARY KEY,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  1, 'Refrigerator', 'Smart Refrigerator 001', '$284.00', 'https://loremflickr.com/500/300/refrigerator?lock=1', 'Smart Refrigerator 001 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  2, 'Freezer', 'Chest Freezer 002', '$319.00', 'https://loremflickr.com/500/300/freezer?lock=2', 'Chest Freezer 002 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  3, 'Microwave Oven', 'Convection Microwave Oven 003', '$354.00', 'https://loremflickr.com/500/300/microwave?lock=3', 'Convection Microwave Oven 003 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  4, 'Gas Oven', 'Gas Oven Range 004', '$389.00', 'https://loremflickr.com/500/300/oven?lock=4', 'Gas Oven Range 004 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  5, 'Television', 'LED Smart TV 005', '$424.00', 'https://loremflickr.com/500/300/television?lock=5', 'LED Smart TV 005 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  6, 'Television', '4K OLED Television 006', '$459.00', 'https://loremflickr.com/500/300/television?lock=6', '4K OLED Television 006 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  7, 'Air Conditioner', 'Inverter AC 007', '$494.00', 'https://loremflickr.com/500/300/air-conditioner?lock=7', 'Inverter AC 007 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  8, 'Washing Machine', 'Front Load Washing Machine 008', '$529.00', 'https://loremflickr.com/500/300/washing-machine?lock=8', 'Front Load Washing Machine 008 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  9, 'Washing Machine', 'Top Load Washer 009', '$564.00', 'https://loremflickr.com/500/300/washing-machine?lock=9', 'Top Load Washer 009 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  10, 'Dishwasher', 'Automatic Dishwasher 010', '$599.00', 'https://loremflickr.com/500/300/dishwasher?lock=10', 'Automatic Dishwasher 010 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  11, 'Electric Kettle', 'Electric Water Kettle 011', '$634.00', 'https://loremflickr.com/500/300/electric-kettle?lock=11', 'Electric Water Kettle 011 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  12, 'Blender', 'High-Speed Blender 012', '$669.00', 'https://loremflickr.com/500/300/blender?lock=12', 'High-Speed Blender 012 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  13, 'Mixer Grinder', 'Kitchen Mixer Grinder 013', '$704.00', 'https://loremflickr.com/500/300/mixer-grinder?lock=13', 'Kitchen Mixer Grinder 013 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  14, 'Coffee Maker', 'Automatic Coffee Machine 014', '$739.00', 'https://loremflickr.com/500/300/coffee-maker?lock=14', 'Automatic Coffee Machine 014 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  15, 'Vacuum Cleaner', 'Cordless Vacuum Cleaner 015', '$774.00', 'https://loremflickr.com/500/300/vacuum-cleaner?lock=15', 'Cordless Vacuum Cleaner 015 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  16, 'Electric Fan', 'Tower Fan 016', '$249.00', 'https://loremflickr.com/500/300/electric-fan?lock=16', 'Tower Fan 016 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  17, 'Heater', 'Ceramic Space Heater 017', '$284.00', 'https://loremflickr.com/500/300/heater?lock=17', 'Ceramic Space Heater 017 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  18, 'Rice Cooker', 'Smart Rice Cooker 018', '$319.00', 'https://loremflickr.com/500/300/rice-cooker?lock=18', 'Smart Rice Cooker 018 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  19, 'Air Fryer', 'Air Fryer Oven 019', '$354.00', 'https://loremflickr.com/500/300/air-fryer?lock=19', 'Air Fryer Oven 019 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  20, 'Iron', 'Steam Iron 020', '$389.00', 'https://loremflickr.com/500/300/iron?lock=20', 'Steam Iron 020 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  21, 'Sound System', 'Home Theater Soundbar 021', '$424.00', 'https://loremflickr.com/500/300/sound-system?lock=21', 'Home Theater Soundbar 021 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  22, 'Projector', 'LED Projector 022', '$459.00', 'https://loremflickr.com/500/300/projector?lock=22', 'LED Projector 022 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  23, 'Water Heater', 'Instant Water Heater 023', '$494.00', 'https://loremflickr.com/500/300/water-heater?lock=23', 'Instant Water Heater 023 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  24, 'Induction Cooktop', 'Induction Cooker 024', '$529.00', 'https://loremflickr.com/500/300/induction-cooktop?lock=24', 'Induction Cooker 024 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  25, 'Ceiling Fan', 'Remote Ceiling Fan 025', '$564.00', 'https://loremflickr.com/500/300/ceiling-fan?lock=25', 'Remote Ceiling Fan 025 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  26, 'Smart Speaker', 'Voice-Controlled Speaker 026', '$599.00', 'https://loremflickr.com/500/300/smart-speaker?lock=26', 'Voice-Controlled Speaker 026 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  27, 'Humidifier', 'Ultrasonic Humidifier 027', '$634.00', 'https://loremflickr.com/500/300/humidifier?lock=27', 'Ultrasonic Humidifier 027 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  28, 'Dehumidifier', 'Room Dehumidifier 028', '$669.00', 'https://loremflickr.com/500/300/dehumidifier?lock=28', 'Room Dehumidifier 028 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  29, 'Water Dispenser', 'Hot & Cold Dispenser 029', '$704.00', 'https://loremflickr.com/500/300/water-dispenser?lock=29', 'Hot & Cold Dispenser 029 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  30, 'Electric Grill', 'Indoor Electric Grill 030', '$739.00', 'https://loremflickr.com/500/300/electric-grill?lock=30', 'Indoor Electric Grill 030 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  31, 'Food Processor', 'Multi-Function Processor 031', '$774.00', 'https://loremflickr.com/500/300/food-processor?lock=31', 'Multi-Function Processor 031 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  32, 'Electric Stove', 'Ceramic Electric Stove 032', '$249.00', 'https://loremflickr.com/500/300/electric-stove?lock=32', 'Ceramic Electric Stove 032 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  33, 'Portable Cooler', 'Portable Air Cooler 033', '$284.00', 'https://loremflickr.com/500/300/portable-cooler?lock=33', 'Portable Air Cooler 033 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  34, 'Smart Oven', 'Smart Wi-Fi Oven 034', '$319.00', 'https://loremflickr.com/500/300/smart-oven?lock=34', 'Smart Wi-Fi Oven 034 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  35, 'Dishwasher', 'Compact Dishwasher 035', '$354.00', 'https://loremflickr.com/500/300/dishwasher?lock=35', 'Compact Dishwasher 035 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  36, 'Electric Radiator', 'Oil-Filled Radiator 036', '$389.00', 'https://loremflickr.com/500/300/electric-radiator?lock=36', 'Oil-Filled Radiator 036 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  37, 'Blender', 'Personal Smoothie Blender 037', '$424.00', 'https://loremflickr.com/500/300/blender?lock=37', 'Personal Smoothie Blender 037 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  38, 'Portable Heater', 'Infrared Heater 038', '$459.00', 'https://loremflickr.com/500/300/portable-heater?lock=38', 'Infrared Heater 038 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  39, 'Ceiling Light', 'LED Ceiling Light 039', '$494.00', 'https://loremflickr.com/500/300/ceiling-light?lock=39', 'LED Ceiling Light 039 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  40, 'Chimney', 'Kitchen Chimney Hood 040', '$529.00', 'https://loremflickr.com/500/300/chimney?lock=40', 'Kitchen Chimney Hood 040 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  41, 'Food Steamer', 'Electric Food Steamer 041', '$564.00', 'https://loremflickr.com/500/300/food-steamer?lock=41', 'Electric Food Steamer 041 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  42, 'Toaster', 'Bread Toaster 042', '$599.00', 'https://loremflickr.com/500/300/toaster?lock=42', 'Bread Toaster 042 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  43, 'Grinder', 'Coffee Grinder 043', '$634.00', 'https://loremflickr.com/500/300/grinder?lock=43', 'Coffee Grinder 043 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  44, 'Electric Shaver', 'Wet & Dry Shaver 044', '$669.00', 'https://loremflickr.com/500/300/electric-shaver?lock=44', 'Wet & Dry Shaver 044 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  45, 'Electric Toothbrush', 'Rechargeable Toothbrush 045', '$704.00', 'https://loremflickr.com/500/300/electric-toothbrush?lock=45', 'Rechargeable Toothbrush 045 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  46, 'Smart Lock', 'Digital Door Lock 046', '$739.00', 'https://loremflickr.com/500/300/smart-lock?lock=46', 'Digital Door Lock 046 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  47, 'Home Security', 'Security Camera Kit 047', '$774.00', 'https://loremflickr.com/500/300/home-security?lock=47', 'Security Camera Kit 047 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  48, 'Water Purifier', 'RO Water Purifier 048', '$249.00', 'https://loremflickr.com/500/300/water-purifier?lock=48', 'RO Water Purifier 048 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  49, 'Portable Speaker', 'Bluetooth Speaker 049', '$284.00', 'https://loremflickr.com/500/300/portable-speaker?lock=49', 'Bluetooth Speaker 049 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  50, 'Smart Lamp', 'Color Changing Lamp 050', '$319.00', 'https://loremflickr.com/500/300/smart-lamp?lock=50', 'Color Changing Lamp 050 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  51, 'Smart Plug', 'Wi-Fi Smart Plug 051', '$354.00', 'https://loremflickr.com/500/300/smart-plug?lock=51', 'Wi-Fi Smart Plug 051 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  52, 'Refrigerator', 'Smart Refrigerator 052', '$389.00', 'https://loremflickr.com/500/300/refrigerator?lock=52', 'Smart Refrigerator 052 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  53, 'Freezer', 'Chest Freezer 053', '$424.00', 'https://loremflickr.com/500/300/freezer?lock=53', 'Chest Freezer 053 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  54, 'Microwave Oven', 'Convection Microwave Oven 054', '$459.00', 'https://loremflickr.com/500/300/microwave?lock=54', 'Convection Microwave Oven 054 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  55, 'Gas Oven', 'Gas Oven Range 055', '$494.00', 'https://loremflickr.com/500/300/oven?lock=55', 'Gas Oven Range 055 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  56, 'Television', 'LED Smart TV 056', '$529.00', 'https://loremflickr.com/500/300/television?lock=56', 'LED Smart TV 056 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  57, 'Television', '4K OLED Television 057', '$564.00', 'https://loremflickr.com/500/300/television?lock=57', '4K OLED Television 057 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  58, 'Air Conditioner', 'Inverter AC 058', '$599.00', 'https://loremflickr.com/500/300/air-conditioner?lock=58', 'Inverter AC 058 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  59, 'Washing Machine', 'Front Load Washing Machine 059', '$634.00', 'https://loremflickr.com/500/300/washing-machine?lock=59', 'Front Load Washing Machine 059 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  60, 'Washing Machine', 'Top Load Washer 060', '$669.00', 'https://loremflickr.com/500/300/washing-machine?lock=60', 'Top Load Washer 060 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  61, 'Dishwasher', 'Automatic Dishwasher 061', '$704.00', 'https://loremflickr.com/500/300/dishwasher?lock=61', 'Automatic Dishwasher 061 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  62, 'Electric Kettle', 'Electric Water Kettle 062', '$739.00', 'https://loremflickr.com/500/300/electric-kettle?lock=62', 'Electric Water Kettle 062 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  63, 'Blender', 'High-Speed Blender 063', '$774.00', 'https://loremflickr.com/500/300/blender?lock=63', 'High-Speed Blender 063 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  64, 'Mixer Grinder', 'Kitchen Mixer Grinder 064', '$249.00', 'https://loremflickr.com/500/300/mixer-grinder?lock=64', 'Kitchen Mixer Grinder 064 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  65, 'Coffee Maker', 'Automatic Coffee Machine 065', '$284.00', 'https://loremflickr.com/500/300/coffee-maker?lock=65', 'Automatic Coffee Machine 065 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  66, 'Vacuum Cleaner', 'Cordless Vacuum Cleaner 066', '$319.00', 'https://loremflickr.com/500/300/vacuum-cleaner?lock=66', 'Cordless Vacuum Cleaner 066 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  67, 'Electric Fan', 'Tower Fan 067', '$354.00', 'https://loremflickr.com/500/300/electric-fan?lock=67', 'Tower Fan 067 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  68, 'Heater', 'Ceramic Space Heater 068', '$389.00', 'https://loremflickr.com/500/300/heater?lock=68', 'Ceramic Space Heater 068 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  69, 'Rice Cooker', 'Smart Rice Cooker 069', '$424.00', 'https://loremflickr.com/500/300/rice-cooker?lock=69', 'Smart Rice Cooker 069 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  70, 'Air Fryer', 'Air Fryer Oven 070', '$459.00', 'https://loremflickr.com/500/300/air-fryer?lock=70', 'Air Fryer Oven 070 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  71, 'Iron', 'Steam Iron 071', '$494.00', 'https://loremflickr.com/500/300/iron?lock=71', 'Steam Iron 071 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  72, 'Sound System', 'Home Theater Soundbar 072', '$529.00', 'https://loremflickr.com/500/300/sound-system?lock=72', 'Home Theater Soundbar 072 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  73, 'Projector', 'LED Projector 073', '$564.00', 'https://loremflickr.com/500/300/projector?lock=73', 'LED Projector 073 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  74, 'Water Heater', 'Instant Water Heater 074', '$599.00', 'https://loremflickr.com/500/300/water-heater?lock=74', 'Instant Water Heater 074 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  75, 'Induction Cooktop', 'Induction Cooker 075', '$634.00', 'https://loremflickr.com/500/300/induction-cooktop?lock=75', 'Induction Cooker 075 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  76, 'Ceiling Fan', 'Remote Ceiling Fan 076', '$669.00', 'https://loremflickr.com/500/300/ceiling-fan?lock=76', 'Remote Ceiling Fan 076 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  77, 'Smart Speaker', 'Voice-Controlled Speaker 077', '$704.00', 'https://loremflickr.com/500/300/smart-speaker?lock=77', 'Voice-Controlled Speaker 077 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  78, 'Humidifier', 'Ultrasonic Humidifier 078', '$739.00', 'https://loremflickr.com/500/300/humidifier?lock=78', 'Ultrasonic Humidifier 078 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  79, 'Dehumidifier', 'Room Dehumidifier 079', '$774.00', 'https://loremflickr.com/500/300/dehumidifier?lock=79', 'Room Dehumidifier 079 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  80, 'Water Dispenser', 'Hot & Cold Dispenser 080', '$249.00', 'https://loremflickr.com/500/300/water-dispenser?lock=80', 'Hot & Cold Dispenser 080 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  81, 'Electric Grill', 'Indoor Electric Grill 081', '$284.00', 'https://loremflickr.com/500/300/electric-grill?lock=81', 'Indoor Electric Grill 081 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  82, 'Food Processor', 'Multi-Function Processor 082', '$319.00', 'https://loremflickr.com/500/300/food-processor?lock=82', 'Multi-Function Processor 082 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  83, 'Electric Stove', 'Ceramic Electric Stove 083', '$354.00', 'https://loremflickr.com/500/300/electric-stove?lock=83', 'Ceramic Electric Stove 083 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  84, 'Portable Cooler', 'Portable Air Cooler 084', '$389.00', 'https://loremflickr.com/500/300/portable-cooler?lock=84', 'Portable Air Cooler 084 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  85, 'Smart Oven', 'Smart Wi-Fi Oven 085', '$424.00', 'https://loremflickr.com/500/300/smart-oven?lock=85', 'Smart Wi-Fi Oven 085 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  86, 'Dishwasher', 'Compact Dishwasher 086', '$459.00', 'https://loremflickr.com/500/300/dishwasher?lock=86', 'Compact Dishwasher 086 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  87, 'Electric Radiator', 'Oil-Filled Radiator 087', '$494.00', 'https://loremflickr.com/500/300/electric-radiator?lock=87', 'Oil-Filled Radiator 087 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  88, 'Blender', 'Personal Smoothie Blender 088', '$529.00', 'https://loremflickr.com/500/300/blender?lock=88', 'Personal Smoothie Blender 088 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  89, 'Portable Heater', 'Infrared Heater 089', '$564.00', 'https://loremflickr.com/500/300/portable-heater?lock=89', 'Infrared Heater 089 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  90, 'Ceiling Light', 'LED Ceiling Light 090', '$599.00', 'https://loremflickr.com/500/300/ceiling-light?lock=90', 'LED Ceiling Light 090 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  91, 'Chimney', 'Kitchen Chimney Hood 091', '$634.00', 'https://loremflickr.com/500/300/chimney?lock=91', 'Kitchen Chimney Hood 091 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  92, 'Food Steamer', 'Electric Food Steamer 092', '$669.00', 'https://loremflickr.com/500/300/food-steamer?lock=92', 'Electric Food Steamer 092 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  93, 'Toaster', 'Bread Toaster 093', '$704.00', 'https://loremflickr.com/500/300/toaster?lock=93', 'Bread Toaster 093 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  94, 'Grinder', 'Coffee Grinder 094', '$739.00', 'https://loremflickr.com/500/300/grinder?lock=94', 'Coffee Grinder 094 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  95, 'Electric Shaver', 'Wet & Dry Shaver 095', '$774.00', 'https://loremflickr.com/500/300/electric-shaver?lock=95', 'Wet & Dry Shaver 095 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  96, 'Electric Toothbrush', 'Rechargeable Toothbrush 096', '$249.00', 'https://loremflickr.com/500/300/electric-toothbrush?lock=96', 'Rechargeable Toothbrush 096 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  97, 'Smart Lock', 'Digital Door Lock 097', '$284.00', 'https://loremflickr.com/500/300/smart-lock?lock=97', 'Digital Door Lock 097 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  98, 'Home Security', 'Security Camera Kit 098', '$319.00', 'https://loremflickr.com/500/300/home-security?lock=98', 'Security Camera Kit 098 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  99, 'Water Purifier', 'RO Water Purifier 099', '$354.00', 'https://loremflickr.com/500/300/water-purifier?lock=99', 'RO Water Purifier 099 image'
);
INSERT INTO pictures (id, category, name, price, image_url, alt_text) VALUES (
  100, 'Portable Speaker', 'Bluetooth Speaker 100', '$389.00', 'https://loremflickr.com/500/300/portable-speaker?lock=100', 'Bluetooth Speaker 100 image'
);
