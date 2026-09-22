// ============================================================
//  CHÍNH SÁCH THƯỞNG THÁNG 9 (SEP 26)
//  Nguồn: file "SEP 26 - KPI and motivation program.xlsx"
//  - Thưởng theo model: theo hình thức thanh toán (Trả 1 lần / 12 / 24 / 36)
//  - Thưởng doanh số: 5.000.000 x hệ số theo % hoàn thành Target
//  - Thưởng Best PC / PC #2 theo điều kiện doanh số
// ============================================================

export type ModelIncentive = {
  code: string;
  group: string;
  type: string;
  /** Kiosk PC - Trả 1 lần */
  oneTime: number | null;
  /** Kiosk PC - Trả góp 12 tháng */
  m12: number | null;
  m24: number | null;
  m36: number | null;
  /** E-PC (bán online) */
  epc: number | null;
};

export type PayTerm = "oneTime" | "m12" | "m24" | "m36" | "epc";

export const payTerms: { id: PayTerm; label: string }[] = [
  { id: "oneTime", label: "Trả 1 lần" },
  { id: "m12", label: "Trả góp 12 tháng" },
  { id: "m24", label: "Trả góp 24 tháng" },
  { id: "m36", label: "Trả góp 36 tháng" },
  { id: "epc", label: "E-PC (online)" },
];

export const modelIncentives: ModelIncentive[] = [
  {
    "code": "LBB33BLGA",
    "group": "REF",
    "type": "B/F",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 240000,
    "epc": 200000
  },
  {
    "code": "LBB33BLM",
    "group": "REF",
    "type": "B/F",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 170000,
    "m36": 180000,
    "epc": 150000
  },
  {
    "code": "LBB33BGMAI",
    "group": "REF",
    "type": "B/F",
    "oneTime": 300000,
    "m12": 310000,
    "m24": 330000,
    "m36": 350000,
    "epc": 300000
  },
  {
    "code": "LDT14BGA3",
    "group": "REF",
    "type": "DW",
    "oneTime": 600000,
    "m12": 620000,
    "m24": 660000,
    "m36": 750000,
    "epc": 600000
  },
  {
    "code": "LDT14BLA4",
    "group": "REF",
    "type": "DW",
    "oneTime": 400000,
    "m12": 420000,
    "m24": 440000,
    "m36": 510000,
    "epc": 400000
  },
  {
    "code": "LDT14SVA4",
    "group": "REF",
    "type": "DW",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 640000,
    "epc": 500000
  },
  {
    "code": "LDN14BLA5",
    "group": "REF",
    "type": "DW",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 260000,
    "epc": 200000
  },
  {
    "code": "LFD61BLGAI",
    "group": "REF",
    "type": "F/D",
    "oneTime": 700000,
    "m12": 730000,
    "m24": 760000,
    "m36": 820000,
    "epc": 350000
  },
  {
    "code": "LFD58BLMAI",
    "group": "REF",
    "type": "F/D",
    "oneTime": 600000,
    "m12": 620000,
    "m24": 660000,
    "m36": 700000,
    "epc": 300000
  },
  {
    "code": "F61BMD",
    "group": "REF",
    "type": "F/D",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 590000,
    "epc": 300000
  },
  {
    "code": "F58BGD",
    "group": "REF",
    "type": "F/D",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 590000,
    "epc": 300000
  },
  {
    "code": "LFB58BLMA",
    "group": "REF",
    "type": "F/D",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 600000,
    "epc": 300000
  },
  {
    "code": "F51EG",
    "group": "REF",
    "type": "F/D",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 600000,
    "epc": 300000
  },
  {
    "code": "F50BG",
    "group": "REF",
    "type": "F/D",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 590000,
    "epc": 300000
  },
  {
    "code": "GR-X257BG",
    "group": "REF",
    "type": "SXS",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 540000,
    "m36": 590000,
    "epc": 300000
  },
  {
    "code": "LSI63BLMA",
    "group": "REF",
    "type": "SXS",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 590000,
    "epc": 300000
  },
  {
    "code": "T33SV",
    "group": "REF",
    "type": "T/F",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 170000,
    "m36": 190000,
    "epc": 150000
  },
  {
    "code": "T30SV",
    "group": "REF",
    "type": "T/F",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 170000,
    "m36": 190000,
    "epc": 150000
  },
  {
    "code": "T26BG",
    "group": "REF",
    "type": "T/F",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 170000,
    "m36": 190000,
    "epc": 150000
  },
  {
    "code": "T21BG",
    "group": "REF",
    "type": "T/F",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 170000,
    "m36": 190000,
    "epc": 150000
  },
  {
    "code": "86MRGB86BSA",
    "group": "LTV",
    "type": "MRGB",
    "oneTime": 2500000,
    "m12": 2590000,
    "m24": 2700000,
    "m36": 2910000,
    "epc": 2500000
  },
  {
    "code": "75MRGB86BSA",
    "group": "LTV",
    "type": "MRGB",
    "oneTime": 1700000,
    "m12": 1760000,
    "m24": 1840000,
    "m36": 2020000,
    "epc": 1700000
  },
  {
    "code": "65MRGB86BSA",
    "group": "LTV",
    "type": "MRGB",
    "oneTime": 1300000,
    "m12": 1350000,
    "m24": 1410000,
    "m36": 1520000,
    "epc": 1300000
  },
  {
    "code": "OLED83W6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 3000000,
    "m12": 3110000,
    "m24": 3220000,
    "m36": 3370000,
    "epc": 3000000
  },
  {
    "code": "OLED77G6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 2000000,
    "m12": 2070000,
    "m24": 2150000,
    "m36": 2300000,
    "epc": 2000000
  },
  {
    "code": "OLED65G6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 1500000,
    "m12": 1560000,
    "m24": 1620000,
    "m36": 1790000,
    "epc": 1500000
  },
  {
    "code": "OLED55G6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 1100000,
    "m12": 1140000,
    "m24": 1200000,
    "m36": 1280000,
    "epc": 1100000
  },
  {
    "code": "OLED83C6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 2000000,
    "m12": 2070000,
    "m24": 2160000,
    "m36": 2330000,
    "epc": 2000000
  },
  {
    "code": "OLED77C6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 1500000,
    "m12": 1550000,
    "m24": 1620000,
    "m36": 1760000,
    "epc": 1500000
  },
  {
    "code": "OLED65C6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 1000000,
    "m12": 1040000,
    "m24": 1090000,
    "m36": 1170000,
    "epc": 1000000
  },
  {
    "code": "OLED55C6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 1000000,
    "m12": 1040000,
    "m24": 1090000,
    "m36": 1190000,
    "epc": 1000000
  },
  {
    "code": "OLED77B6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 1500000,
    "m12": 1550000,
    "m24": 1620000,
    "m36": 1780000,
    "epc": 1500000
  },
  {
    "code": "OLED65B6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 650000,
    "m12": 680000,
    "m24": 710000,
    "m36": 770000,
    "epc": 650000
  },
  {
    "code": "OLED55B6PSA",
    "group": "LTV",
    "type": "OLED",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 590000,
    "epc": 500000
  },
  {
    "code": "100QNED86BS",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 2500000,
    "m12": 2590000,
    "m24": 2710000,
    "m36": 2920000,
    "epc": 2500000
  },
  {
    "code": "86QNED86BSA",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 1400000,
    "m12": 1450000,
    "m24": 1520000,
    "m36": 1640000,
    "epc": 1400000
  },
  {
    "code": "75QNED86BSA",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 900000,
    "m12": 930000,
    "m24": 980000,
    "m36": 1060000,
    "epc": 900000
  },
  {
    "code": "65QNED86BSA",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 600000,
    "epc": 500000
  },
  {
    "code": "55QNED86BSA",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 300000,
    "m12": 310000,
    "m24": 330000,
    "m36": 360000,
    "epc": 300000
  },
  {
    "code": "85QNED80BSA",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 900000,
    "m12": 930000,
    "m24": 980000,
    "m36": 1070000,
    "epc": 900000
  },
  {
    "code": "75QNED80BSA",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 700000,
    "m12": 720000,
    "m24": 760000,
    "m36": 840000,
    "epc": 700000
  },
  {
    "code": "65QNED80BSA",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 450000,
    "m12": 470000,
    "m24": 500000,
    "m36": 560000,
    "epc": 450000
  },
  {
    "code": "55QNED80BSA",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 240000,
    "epc": 200000
  },
  {
    "code": "50QNED80BSA",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 240000,
    "epc": 150000
  },
  {
    "code": "43QNED80BSA",
    "group": "LTV",
    "type": "QNED",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 240000,
    "epc": 150000
  },
  {
    "code": "98NU855BPSB",
    "group": "LTV",
    "type": "UHD",
    "oneTime": 1000000,
    "m12": 1040000,
    "m24": 1090000,
    "m36": 1180000,
    "epc": 1000000
  },
  {
    "code": "85NU855BPSA",
    "group": "LTV",
    "type": "UHD",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 540000,
    "m36": 590000,
    "epc": 500000
  },
  {
    "code": "75NU855BPSA",
    "group": "LTV",
    "type": "UHD",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 610000,
    "epc": 500000
  },
  {
    "code": "65NU855BPSA",
    "group": "LTV",
    "type": "UHD",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 250000,
    "epc": 150000
  },
  {
    "code": "55NU855BPSA",
    "group": "LTV",
    "type": "UHD",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 240000,
    "epc": 150000
  },
  {
    "code": "50NU855BPSA",
    "group": "LTV",
    "type": "UHD",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 250000,
    "epc": 150000
  },
  {
    "code": "43NU855BPSA",
    "group": "LTV",
    "type": "UHD",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 170000,
    "m36": 190000,
    "epc": 150000
  },
  {
    "code": "AS10GDWH0",
    "group": "Air Care",
    "type": "Air purifier",
    "oneTime": 400000,
    "m12": 420000,
    "m24": 470000,
    "m36": 540000,
    "epc": 250000
  },
  {
    "code": "AS65GDWH0",
    "group": "Air Care",
    "type": "Air purifier",
    "oneTime": 400000,
    "m12": 410000,
    "m24": 460000,
    "m36": 540000,
    "epc": 250000
  },
  {
    "code": "AS20GPBK0",
    "group": "Air Care",
    "type": "Air purifier",
    "oneTime": 300000,
    "m12": 310000,
    "m24": 360000,
    "m36": 430000,
    "epc": 250000
  },
  {
    "code": "AS20GPWU0",
    "group": "Air Care",
    "type": "Air purifier",
    "oneTime": 400000,
    "m12": 420000,
    "m24": 480000,
    "m36": 570000,
    "epc": 250000
  },
  {
    "code": "AS20GSHU0",
    "group": "Air Care",
    "type": "Air purifier",
    "oneTime": 400000,
    "m12": 420000,
    "m24": 470000,
    "m36": 560000,
    "epc": 250000
  },
  {
    "code": "FS15GPBK0",
    "group": "Air Care",
    "type": "Air purifier",
    "oneTime": 400000,
    "m12": 420000,
    "m24": 480000,
    "m36": 560000,
    "epc": 250000
  },
  {
    "code": "AS30GGW1A",
    "group": "Air Care",
    "type": "Air purifier",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 200000,
    "m36": 250000,
    "epc": 150000
  },
  {
    "code": "AS30GGG1A",
    "group": "Air Care",
    "type": "Air purifier",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 200000,
    "m36": 250000,
    "epc": 150000
  },
  {
    "code": "IDC09M2",
    "group": "ES",
    "type": "RAC BD",
    "oneTime": 169000,
    "m12": 180000,
    "m24": 190000,
    "m36": 210000,
    "epc": 150000
  },
  {
    "code": "IDC12M2",
    "group": "ES",
    "type": "RAC BD",
    "oneTime": 208000,
    "m12": 220000,
    "m24": 230000,
    "m36": 250000,
    "epc": 150000
  },
  {
    "code": "IDC18M2",
    "group": "ES",
    "type": "RAC BD",
    "oneTime": 286000,
    "m12": 300000,
    "m24": 310000,
    "m36": 340000,
    "epc": 150000
  },
  {
    "code": "IDH09M1",
    "group": "ES",
    "type": "RAC BD",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 170000,
    "m36": 180000,
    "epc": 150000
  },
  {
    "code": "IDH12M1",
    "group": "ES",
    "type": "RAC BD",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 240000,
    "epc": 150000
  },
  {
    "code": "IDH18M1",
    "group": "ES",
    "type": "RAC BD",
    "oneTime": 300000,
    "m12": 310000,
    "m24": 330000,
    "m36": 350000,
    "epc": 150000
  },
  {
    "code": "IDH24M1",
    "group": "ES",
    "type": "RAC BD",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 540000,
    "m36": 580000,
    "epc": 150000
  },
  {
    "code": "AS10GDBY0",
    "group": "ES",
    "type": "Air Care",
    "oneTime": 400000,
    "m12": 410000,
    "m24": 470000,
    "m36": 540000,
    "epc": 300000
  },
  {
    "code": "AS65GDBY0",
    "group": "ES",
    "type": "Air Care",
    "oneTime": 400000,
    "m12": 420000,
    "m24": 470000,
    "m36": 540000,
    "epc": 300000
  },
  {
    "code": "AS55GGSY0",
    "group": "ES",
    "type": "Air Care",
    "oneTime": 400000,
    "m12": 420000,
    "m24": 480000,
    "m36": 560000,
    "epc": 300000
  },
  {
    "code": "AS60GHWG0",
    "group": "ES",
    "type": "Air Care",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 210000,
    "m36": 280000,
    "epc": 150000
  },
  {
    "code": "MD16GQSE0",
    "group": "ES",
    "type": "Air Care",
    "oneTime": 400000,
    "m12": 420000,
    "m24": 440000,
    "m36": 480000,
    "epc": 300000
  },
  {
    "code": "MD19GQGE0",
    "group": "ES",
    "type": "Air Care",
    "oneTime": 400000,
    "m12": 420000,
    "m24": 440000,
    "m36": 480000,
    "epc": 300000
  },
  {
    "code": "SC5MBR80H",
    "group": "W/M",
    "type": "Styler",
    "oneTime": 750000,
    "m12": 780000,
    "m24": 820000,
    "m36": 980000,
    "epc": 750000
  },
  {
    "code": "DVHP50M",
    "group": "W/M",
    "type": "Dryer",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 270000,
    "epc": 200000
  },
  {
    "code": "FX1412S3KAV",
    "group": "W/M",
    "type": "F/L",
    "oneTime": 210000,
    "m12": 220000,
    "m24": 230000,
    "m36": 260000,
    "epc": 210000
  },
  {
    "code": "TX2725AT9G",
    "group": "W/M",
    "type": "T/L",
    "oneTime": 270000,
    "m12": 280000,
    "m24": 300000,
    "m36": 330000,
    "epc": 270000
  },
  {
    "code": "WT2517NHEG",
    "group": "W/M",
    "type": "WashTower",
    "oneTime": 1050000,
    "m12": 1090000,
    "m24": 1150000,
    "m36": 1300000,
    "epc": 1050000
  },
  {
    "code": "MS2535GIK",
    "group": "Cooking",
    "type": "MWO",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 170000,
    "m36": 200000,
    "epc": 150000
  },
  {
    "code": "MS3032JAS",
    "group": "Cooking",
    "type": "MWO",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 180000,
    "m36": 210000,
    "epc": 150000
  },
  {
    "code": "MS2032GIK",
    "group": "Cooking",
    "type": "MWO",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 180000,
    "m36": 220000,
    "epc": 150000
  },
  {
    "code": "MS2032GAS",
    "group": "Cooking",
    "type": "MWO",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 180000,
    "m36": 220000,
    "epc": 150000
  },
  {
    "code": "S95AR",
    "group": "Audio",
    "type": "Soundbar",
    "oneTime": 400000,
    "m12": 420000,
    "m24": 430000,
    "m36": 480000,
    "epc": 400000
  },
  {
    "code": "SG10TY",
    "group": "Audio",
    "type": "Soundbar",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 250000,
    "epc": 200000
  },
  {
    "code": "STAGE301",
    "group": "Audio",
    "type": "xboom",
    "oneTime": 150000,
    "m12": 160000,
    "m24": 170000,
    "m36": 190000,
    "epc": 150000
  },
  {
    "code": "STAGE501",
    "group": "Audio",
    "type": "xboom",
    "oneTime": 200000,
    "m12": 210000,
    "m24": 220000,
    "m36": 250000,
    "epc": 200000
  },
  {
    "code": "27LX6TDGA",
    "group": "LTV",
    "type": "FHD",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 550000,
    "m36": 610000,
    "epc": 500000
  },
  {
    "code": "32LX6BDGA",
    "group": "LTV",
    "type": "UHD",
    "oneTime": 500000,
    "m12": 520000,
    "m24": 540000,
    "m36": 590000,
    "epc": 500000
  }
];

export const getModelIncentive = (code: string) =>
  modelIncentives.find((m) => m.code.toLowerCase() === code.toLowerCase());

export const incentiveOf = (code: string, term: PayTerm) =>
  getModelIncentive(code)?.[term] ?? null;

/** KPI & chính sách thưởng tháng 9 */
export const kpiSep = {
  month: "Tháng 9/2026",
  /** Target doanh số tháng (VNĐ, đã gồm VAT) */
  target: 200000000,
  /** Thưởng doanh số khi đạt 100% Target */
  baseIncentive: 5000000,
  /** Trần thưởng theo model / tháng */
  modelCeiling: 8500000,
  /** Trần tổng thưởng (doanh số + model) */
  totalIncentiveCeiling: 13500000,
  /** Thưởng đánh giá xếp loại */
  gradeEvaluation: 1500000,
  /** Trần tổng lương biến đổi */
  variableSalaryCeiling: 15000000,
  /** Hệ số theo % hoàn thành Target */
  levels: [
    { min: 0, max: 70, factor: 0, label: "Dưới 70%" },
    { min: 70, max: 90, factor: 0.5, label: "70% – dưới 90%" },
    { min: 90, max: 100, factor: 0.8, label: "90% – dưới 100%" },
    { min: 100, max: 120, factor: 1, label: "100% – dưới 120%" },
    { min: 120, max: 150, factor: 1.2, label: "120% – dưới 150%" },
    { min: 150, max: 170, factor: 1.4, label: "150% – dưới 170%" },
    { min: 170, max: 200, factor: 1.6, label: "170% – dưới 200%" },
    { min: 200, max: null as number | null, factor: 1.8, label: "Từ 200% trở lên" },
  ],
  /** Thưởng xếp hạng */
  rankBonus: [
    { rank: "Best PC (#1)", amount: 2500000 },
    { rank: "PC #2", amount: 1500000 },
  ],
  /** Điều kiện nhận thưởng xếp hạng */
  rankCondition: 300000000,
  rankConditionText: "Doanh số tháng 9 đạt tối thiểu 300.000.000 VNĐ",
};

/** Hệ số hoàn thành theo % đạt Target */
export const levelForAchievement = (pct: number) =>
  kpiSep.levels.slice().reverse().find((l) => pct >= l.min) ?? kpiSep.levels[0];

/** Thưởng doanh số = 5.000.000 x hệ số */
export const salesIncentive = (revenue: number) => {
  const pct = kpiSep.target ? (revenue / kpiSep.target) * 100 : 0;
  const level = levelForAchievement(pct);
  return { pct, level, amount: Math.round(kpiSep.baseIncentive * level.factor) };
};
