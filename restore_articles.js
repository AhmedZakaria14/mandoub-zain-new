const fs = require('fs');

const OPERATOR = "زين";
const PHONE = "0537394981"; // Wait, user wants 0537394981 now! In search_results.txt it was 0537394981.
const BRAND = "زين";
const SITE_NAME = "الدليل السعودي";
const DOMAIN = "zain5grouter.com";
const PRICE_500 = "299 ريال";
const PRICE_200 = "239 ريال";
const DATE_IN_ARABIC = "28 أبريل 2026";

const articles = [
  { id: 8, title: "موظف ألياف زين الملقا", template: "A", city: "الرياض", hood: "الملقا" },
  { id: 9, title: "موظف ألياف زين السعادة", template: "A", city: "الرياض", hood: "السعادة" },
  { id: 10, title: "موظف ألياف زين القيروان", template: "A", city: "الرياض", hood: "القيروان" },
  { id: 11, title: "موظف ألياف زين الحزم", template: "A", city: "الرياض", hood: "الحزم" },
  { id: 12, title: "موظف ألياف زين النهضة", template: "A", city: "الرياض", hood: "النهضة" },
  { id: 13, title: "عروض ألياف بصرية فى النسيم الغربي", template: "B", hood: "النسيم الغربي" },
  { id: 14, title: "عروض ألياف بصرية فى ظهرات لبن", template: "B", hood: "ظهرات لبن" },
  { id: 15, title: "عروض ألياف بصرية فى طويق", template: "B", hood: "طويق" },
  { id: 16, title: "عروض ألياف بصرية فى العريجاء", template: "B", hood: "العريجاء" },
  { id: 17, title: "عروض ألياف بصرية فى ظهرات نمار", template: "B", hood: "ظهرات نمار" },
  { id: 18, title: "عروض ألياف بصرية فى البديعة", template: "B", hood: "البديعة" },
  { id: 21, title: "عروض ألياف بصرية فى عنيزة", template: "B", hood: "عنيزة" },
  { id: 23, title: "عروض ألياف بصرية فى الزلفي", template: "B", hood: "الزلفي" },
  { id: 26, title: "عروض ألياف بصرية فى النسيم الشرقي", template: "B", hood: "النسيم الشرقي" }
]; // Total 14 articles. Wait, user said 13 articles. Maybe they skipped one? 

// Let me just add all 14, or wait, I will look at the previous backup if I can.
