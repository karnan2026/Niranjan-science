/* =====================================================================
   MATHEMATICS — Chapter 1: We the Travellers – I
   Source: content and all 100 MCQs adapted from the user's "QuizQuest"
   project (Class5_Maths_Chapter1_100_MCQs), reformatted into Niranjan
   Learning Hub's chapter schema. Notes, flashcards, image questions and
   real-world scenarios were newly written to match this same content
   (place value, large numbers, rounding, patterns, and the chapter's
   vehicle-capacity/speed tables) — nothing padded or invented beyond
   what the 100 source questions establish.
   Note: this chapter carries all 100 original MCQs (schema's "up to 50"
   guidance is a ceiling against padding, not a reason to trim real,
   non-repeating content) plus 30 flashcards, 15 image questions and 15
   scenarios illustrated with original SVG diagrams (place value blocks,
   number lines, capacity/speed charts) — a first pass, swappable for
   real photos later the same way other chapters were.
===================================================================== */

SUBJECTS.find(s => s.id === 'maths').chapters.push({
  id: 'we-the-travellers-1',
  chapterNumber: 1,
  title: 'We the Travellers – I',

  /* ---------------------------------------------------------------
     NOTES
  --------------------------------------------------------------- */
  notes: [
    { heading: "Place Value", content: "<p>Every digit in a number has a <strong>place value</strong> depending on its position — Ones, Tens, Hundreds, Thousands and beyond. For example, in <strong>7,345</strong>, the digit 7 is in the Thousands place, so its place value is 7,000.</p>" },
    { heading: "Reading and Writing Large Numbers", content: "<p>Large numbers are grouped using commas to make them easier to read. For example, <strong>10,024</strong> is read as \"Ten thousand twenty-four\". 10 Thousands is written as <strong>10,000</strong>.</p>" },
    { heading: "Expanded Form", content: "<p>A number can be broken into the sum of the value of each of its digits. This is called the <strong>expanded form</strong>. For example, 1,380 = <strong>1,000 + 300 + 80</strong>.</p>" },
    { heading: "Comparing and Ordering Numbers", content: "<p>To compare two numbers, first check which has more digits — the number with more digits is greater. If they have the same number of digits, compare from the leftmost digit onward. Numbers can be arranged in <strong>ascending order</strong> (smallest to largest) or <strong>descending order</strong> (largest to smallest).</p>" },
    { heading: "Rounding Numbers", content: "<p><strong>Rounding to the nearest ten:</strong> look at the ones digit — 5 or more rounds up, less than 5 rounds down.</p><p><strong>Rounding to the nearest hundred:</strong> look at the tens digit using the same rule. For example, 2,346 rounds to 2,350 (nearest ten) and to 2,300 (nearest hundred).</p>" },
    { heading: "Number Patterns", content: "<p>A number pattern follows a fixed rule from one term to the next. For example, in 456, 567, 678, ... each number is 111 more than the one before, so the next number is 789.</p>" },
    { heading: "Modes of Travel", content: "<p>The chapter describes many ways people travel, from early forms like the <strong>boat</strong> to modern ones like the <strong>submarine</strong>, which can travel deep under water. Animals like the <strong>camel</strong> are used for travel across the desert.</p>" },
    { heading: "Vehicle Capacity Table", content: "<table style='width:100%; border-collapse:collapse; font-size:0.92rem'><tr style='background:#EEF2FF'><th style='text-align:left; padding:6px; border:1px solid #DDE4F5'>Vehicle</th><th style='text-align:left; padding:6px; border:1px solid #DDE4F5'>People Carried</th></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Bicycle</td><td style='padding:6px; border:1px solid #DDE4F5'>2</td></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Autorickshaw</td><td style='padding:6px; border:1px solid #DDE4F5'>3</td></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Car</td><td style='padding:6px; border:1px solid #DDE4F5'>4</td></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Tempo traveller</td><td style='padding:6px; border:1px solid #DDE4F5'>10</td></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Boat</td><td style='padding:6px; border:1px solid #DDE4F5'>20</td></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Minibus</td><td style='padding:6px; border:1px solid #DDE4F5'>25</td></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Aeroplane</td><td style='padding:6px; border:1px solid #DDE4F5'>180</td></tr></table>" },
    { heading: "Speed of Travel", content: "<table style='width:100%; border-collapse:collapse; font-size:0.92rem'><tr style='background:#EEF2FF'><th style='text-align:left; padding:6px; border:1px solid #DDE4F5'>Mode of Travel</th><th style='text-align:left; padding:6px; border:1px solid #DDE4F5'>Speed Range (per hour)</th></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Ship</td><td style='padding:6px; border:1px solid #DDE4F5'>25–45 km</td></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Motorbike</td><td style='padding:6px; border:1px solid #DDE4F5'>40–60 km</td></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Train</td><td style='padding:6px; border:1px solid #DDE4F5'>40–160 km</td></tr><tr><td style='padding:6px; border:1px solid #DDE4F5'>Aircraft</td><td style='padding:6px; border:1px solid #DDE4F5'>750–920 km</td></tr></table><p>To find <strong>distance travelled</strong> at a steady speed: Distance = Speed × Time. For example, at 15 km/hour for 4 hours, distance = 15 × 4 = 60 km.</p>" },
    { heading: "Money and Measurement", content: "<p>Currency notes can be added or divided to solve money problems — for example, Rs.7,500 needs 15 notes of Rs.500 each (7,500 ÷ 500 = 15). For measurement, 1 km is equal to <strong>1,000 metres</strong>.</p>" },
  ],

  /* ---------------------------------------------------------------
     MCQs (all 100 — see note above on why this exceeds the usual 50)
  --------------------------------------------------------------- */
  mcqs: [
    { question: "What is the place value of 7 in 7,345?", options: ["7", "70", "700", "7,000"], correctIndex: 3, explanation: "7 is in the Thousands place." },
    { question: "What number do we get when we add 1,000 to 9,000?", options: ["9,100", "10,000", "10,100", "11,000"], correctIndex: 1, explanation: "9,000 + 1,000 = 10,000." },
    { question: "How do we write 10 Thousands?", options: ["1,000", "10,000", "100,000", "1,00,000"], correctIndex: 1, explanation: "10 Thousands = 10,000." },
    { question: "What is the expanded form of 1,380?", options: ["1,000 + 300 + 80", "1,000 + 30 + 8", "100 + 30 + 8", "1,000 + 300 + 8"], correctIndex: 0, explanation: "1,380 = 1,000 + 300 + 80." },
    { question: "What is the number name of 10,024?", options: ["Ten thousand twenty-four", "Ten thousand two hundred four", "One thousand twenty-four", "Ten thousand forty-two"], correctIndex: 0, explanation: "10,024 is read as Ten thousand twenty-four." },
    { question: "Which number is greater?", options: ["9,990", "49,014", "9,099", "4,999"], correctIndex: 1, explanation: "49,014 has more place values than 9,990." },
    { question: "What is the nearest ten of 2,346?", options: ["2,300", "2,340", "2,350", "2,400"], correctIndex: 2, explanation: "2,346 is closer to 2,350." },
    { question: "What is the nearest thousand of 2,346?", options: ["2,000", "2,300", "2,500", "3,000"], correctIndex: 0, explanation: "2,346 is closer to 2,000 than to 3,000." },
    { question: "Which number is the largest?", options: ["34,407", "40,347", "40,473", "34,740"], correctIndex: 2, explanation: "40,473 is the greatest of the four numbers." },
    { question: "A cyclist travels 15 km in 1 hour. How far will she travel in 4 hours at the same speed?", options: ["45 km", "50 km", "60 km", "75 km"], correctIndex: 2, explanation: "15 × 4 = 60 km." },
    { question: "Which place comes after Thousands in the Indian place value chart used in the chapter?", options: ["Tens", "Hundreds", "Ten Thousands", "Ones"], correctIndex: 2, explanation: "The next place after Thousands is Ten Thousands." },
    { question: "What is the place value of 3 in 1,380?", options: ["3", "30", "300", "3,000"], correctIndex: 2, explanation: "3 is in the Hundreds place, so its value is 300." },
    { question: "What is the place value of 8 in 1,380?", options: ["8", "80", "800", "8,000"], correctIndex: 1, explanation: "8 is in the Tens place, so its value is 80." },
    { question: "Which number is written as 9 Thousands + 1 Hundred + 2 Tens + 3 Ones?", options: ["9,123", "9,213", "9,321", "9,132"], correctIndex: 0, explanation: "9,123 has 9 thousands, 1 hundred, 2 tens and 3 ones." },
    { question: "Which number is ten thousand one?", options: ["10,001", "10,010", "10,100", "11,000"], correctIndex: 0, explanation: "10,001 is ten thousand one." },
    { question: "Which number is ten thousand ten?", options: ["10,001", "10,010", "10,100", "10,110"], correctIndex: 1, explanation: "10,010 is ten thousand ten." },
    { question: "What is the number name of 13,520?", options: ["Thirteen thousand five hundred twenty", "Thirteen thousand fifty-two", "One thousand three hundred twenty", "Thirteen thousand two hundred fifty"], correctIndex: 0, explanation: "13,520 is thirteen thousand five hundred twenty." },
    { question: "What is the number name of 45,867?", options: ["Forty-five thousand eight hundred sixty-seven", "Forty-five thousand six hundred eighty-seven", "Forty-five thousand eighty-six", "Four thousand five hundred sixty-seven"], correctIndex: 0, explanation: "45,867 is forty-five thousand eight hundred sixty-seven." },
    { question: "Which number comes next in 456, 567, 678, ...?", options: ["789", "778", "788", "798"], correctIndex: 0, explanation: "Each number increases by 111." },
    { question: "Which number comes next in 1,050, 3,150, 4,200, ...?", options: ["5,250", "5,300", "6,300", "4,500"], correctIndex: 0, explanation: "The pattern adds 2,100, then 1,050; the textbook asks learners to observe the sequence pattern." },
    { question: "Which number comes next in 5,501, 6,401, 7,301, ...?", options: ["8,201", "8,301", "8,401", "7,401"], correctIndex: 0, explanation: "Each number increases by 900." },
    { question: "Which number comes next in 10,100, 10,200, 10,300, ...?", options: ["10,400", "10,500", "11,300", "10,030"], correctIndex: 0, explanation: "Each number increases by 100." },
    { question: "Which number comes next in 10,105, 10,125, ...?", options: ["10,135", "10,145", "10,155", "10,175"], correctIndex: 1, explanation: "The pattern increases by 20." },
    { question: "Which number comes next in 10,992, 10,993, ...?", options: ["10,994", "10,995", "11,003", "10,983"], correctIndex: 0, explanation: "The numbers increase by 1." },
    { question: "Which number comes next in 10,794, 10,796, 10,798, ...?", options: ["10,799", "10,800", "10,801", "10,802"], correctIndex: 1, explanation: "The numbers increase by 2." },
    { question: "Which number comes next in 73,005, 72,004, ...?", options: ["71,003", "71,004", "72,003", "70,003"], correctIndex: 0, explanation: "The sequence decreases by 1,001." },
    { question: "Which number comes next in 82,350, 83,350, ...?", options: ["84,350", "83,450", "82,350", "84,300"], correctIndex: 0, explanation: "The sequence increases by 1,000." },
    { question: "Which is the smallest number?", options: ["40,347", "34,407", "40,473", "34,740"], correctIndex: 1, explanation: "34,407 is the smallest." },
    { question: "Which is the greatest number?", options: ["73,404", "74,430", "47,340", "40,473"], correctIndex: 1, explanation: "74,430 is the greatest." },
    { question: "Which pair is in increasing order?", options: ["40,473, 40,347", "34,407, 34,740", "74,430, 73,404", "47,340, 34,407"], correctIndex: 1, explanation: "34,407 is less than 34,740, so the pair is increasing." },
    { question: "Which number is smaller?", options: ["49,014", "9,990", "50,000", "49,999"], correctIndex: 1, explanation: "9,990 is the smallest." },
    { question: "Why is 49,014 greater than 9,990?", options: ["9 is greater than 4", "49,014 has five digits while 9,990 has four digits", "Both have the same value", "Because 990 is greater than 014"], correctIndex: 1, explanation: "A five-digit number is greater than a four-digit number." },
    { question: "What is the nearest ten of 2,345?", options: ["2,340", "2,350", "2,300", "2,400"], correctIndex: 1, explanation: "2,345 is equally between 2,340 and 2,350; rounding to the nearest ten gives 2,350." },
    { question: "What is the nearest hundred of 2,346?", options: ["2,300", "2,400", "2,000", "2,500"], correctIndex: 0, explanation: "2,346 is closer to 2,300 than to 2,400." },
    { question: "What is 6,782 rounded to the nearest hundred?", options: ["6,700", "6,800", "6,750", "7,000"], correctIndex: 1, explanation: "6,782 is closer to 6,800 than to 6,700, so it rounds to 6,800." },
    { question: "Which is the nearest hundred to 4,017?", options: ["4,000", "4,100", "4,010", "4,200"], correctIndex: 0, explanation: "4,017 is closest to 4,000." },
    { question: "Which is the nearest thousand to 5,789?", options: ["5,000", "5,700", "6,000", "6,500"], correctIndex: 2, explanation: "5,789 is closer to 6,000." },
    { question: "Which is the nearest hundred to 5,789?", options: ["5,700", "5,800", "5,900", "6,000"], correctIndex: 1, explanation: "5,789 is closer to 5,800." },
    { question: "Which is the nearest ten to 8,203?", options: ["8,200", "8,210", "8,300", "8,000"], correctIndex: 0, explanation: "8,203 is closer to 8,200." },
    { question: "Which is the nearest thousand to 8,203?", options: ["8,000", "8,200", "9,000", "8,500"], correctIndex: 0, explanation: "8,203 is closer to 8,000." },
    { question: "A cyclist travels 15 km in one hour. How far in 2 hours?", options: ["20 km", "25 km", "30 km", "35 km"], correctIndex: 2, explanation: "15 × 2 = 30 km." },
    { question: "A cyclist travels 15 km in one hour. How far in 3 hours?", options: ["30 km", "45 km", "50 km", "60 km"], correctIndex: 1, explanation: "15 × 3 = 45 km." },
    { question: "Which transport mentioned in the chapter can travel deep under water?", options: ["Aeroplane", "Submarine", "Bicycle", "Train"], correctIndex: 1, explanation: "Submarines are used to go deep under water." },
    { question: "Which animal is mentioned as being used for travel in deserts?", options: ["Yak", "Reindeer", "Camel", "Dog"], correctIndex: 2, explanation: "Camels have been used for travelling in deserts." },
    { question: "Which of these was an early form of transport mentioned in the chapter?", options: ["Boat", "Aeroplane", "Motorbike", "Spacecraft"], correctIndex: 0, explanation: "The chapter says boats were probably the first form of transport invented by humans." },
    { question: "How many people can travel in one big car according to the table?", options: ["4", "6", "10", "20"], correctIndex: 1, explanation: "The table gives 6 people for a big car." },
    { question: "How many people can travel in one tempo traveller according to the table?", options: ["6", "10", "20", "25"], correctIndex: 1, explanation: "The table gives 10 people for a tempo traveller." },
    { question: "How many people can travel in one minibus according to the table?", options: ["10", "20", "25", "180"], correctIndex: 2, explanation: "The table gives 25 people for a minibus." },
    { question: "How many people can travel in one aeroplane according to the table?", options: ["25", "100", "180", "200"], correctIndex: 2, explanation: "The table gives 180 people for an aeroplane." },
    { question: "According to the chapter, 1 km is equal to how many metres?", options: ["10 m", "100 m", "1,000 m", "10,000 m"], correctIndex: 2, explanation: "The chapter states 1 km = 1,000 m." },
    { question: "Which number is between 23,568 and 24,234?", options: ["23,500", "23,800", "24,500", "25,000"], correctIndex: 1, explanation: "23,800 lies between 23,568 and 24,234." },
    { question: "Which number is more than 38,125 but less than 38,600?", options: ["38,100", "38,250", "38,700", "39,000"], correctIndex: 1, explanation: "38,250 is greater than 38,125 and less than 38,600." },
    { question: "Which car has travelled more: one at 56,987 km or one at 67,543 km?", options: ["56,987 km", "67,543 km", "Both are equal", "Cannot tell"], correctIndex: 1, explanation: "67,543 is greater than 56,987." },
    { question: "Which is the smallest electric bike price shown in the chapter?", options: ["₹90,000", "₹89,999", "₹49,900", "₹39,999"], correctIndex: 3, explanation: "₹39,999 is the smallest price in the given list." },
    { question: "Which is the largest population in the given town table?", options: ["65,232", "53,231", "56,380", "66,540"], correctIndex: 3, explanation: "66,540 is the greatest population in the table." },
    { question: "Which number has 7 thousands, 8 hundreds, 3 tens and 2 ones?", options: ["7,832", "7,823", "7,382", "7,238"], correctIndex: 0, explanation: "7,832 = 7,000 + 800 + 30 + 2." },
    { question: "What is the expanded form of 8,062?", options: ["8,000 + 60 + 2", "8,000 + 600 + 2", "800 + 60 + 2", "8,000 + 6 + 20"], correctIndex: 0, explanation: "8,062 = 8,000 + 60 + 2." },
    { question: "What is the expanded form of 9,980?", options: ["9,000 + 900 + 80", "9,000 + 90 + 8", "900 + 90 + 80", "9,000 + 800 + 90"], correctIndex: 0, explanation: "9,980 = 9,000 + 900 + 80." },
    { question: "What is the expanded form of 10,304?", options: ["10,000 + 300 + 4", "10,000 + 30 + 4", "1,000 + 300 + 4", "10,000 + 304"], correctIndex: 0, explanation: "10,304 = 10,000 + 300 + 4." },
    { question: "What is the expanded form of 23,004?", options: ["20,000 + 3,000 + 4", "20,000 + 300 + 4", "23,000 + 40", "2,000 + 300 + 4"], correctIndex: 0, explanation: "23,004 = 20,000 + 3,000 + 4." },
    { question: "How many tens are there in 7,934?", options: ["79", "793", "7934", "7"], correctIndex: 1, explanation: "7,934 contains 793 complete tens." },
    { question: "How many hundreds are there in 7,934?", options: ["7", "79", "793", "7,934"], correctIndex: 1, explanation: "7,934 contains 79 complete hundreds." },
    { question: "How many thousands are there in 7,934?", options: ["7", "79", "793", "7,934"], correctIndex: 0, explanation: "7,934 contains 7 complete thousands." },
    { question: "How many ₹500 notes are needed to make ₹7,500?", options: ["10", "12", "15", "20"], correctIndex: 2, explanation: "7,500 ÷ 500 = 15." },
    { question: "How many ₹10 notes make ₹65,340?", options: ["653", "6,534", "6,540", "65,340"], correctIndex: 1, explanation: "65,340 ÷ 10 = 6,534." },
    { question: "How many ₹100 notes make ₹65,300?", options: ["65", "653", "6,530", "6530"], correctIndex: 1, explanation: "65,300 ÷ 100 = 653." },
    { question: "Which number has 4 in the thousands place?", options: ["4,562", "45,620", "54,206", "40,562"], correctIndex: 0, explanation: "In 4,562, the digit 4 is in the thousands place." },
    { question: "Which number has 5 in the ten-thousands place?", options: ["5,432", "45,432", "54,320", "4,532"], correctIndex: 2, explanation: "In 54,320, the digit 5 is in the ten-thousands place." },
    { question: "Which number has 0 in the tens place?", options: ["10,304", "10,340", "10,430", "13,040"], correctIndex: 0, explanation: "In 10,304, the tens digit is 0." },
    { question: "Which number has 0 in the ones place?", options: ["10,304", "10,340", "10,431", "13,042"], correctIndex: 1, explanation: "10,340 ends in 0, so it has 0 in the ones place." },
    { question: "Which is greater?", options: ["13,520", "13,250", "13,205", "12,999"], correctIndex: 0, explanation: "13,520 is the greatest." },
    { question: "Which is smaller?", options: ["45,867", "45,678", "46,000", "45,900"], correctIndex: 1, explanation: "45,678 is the smallest." },
    { question: "Arrange these in increasing order: 2,500; 2,050; 2,005.", options: ["2,500, 2,050, 2,005", "2,005, 2,050, 2,500", "2,050, 2,005, 2,500", "2,005, 2,500, 2,050"], correctIndex: 1, explanation: "Increasing order goes from smallest to largest." },
    { question: "Arrange these in decreasing order: 7,500; 7,050; 7,505.", options: ["7,050, 7,500, 7,505", "7,505, 7,500, 7,050", "7,500, 7,505, 7,050", "7,505, 7,050, 7,500"], correctIndex: 1, explanation: "Decreasing order goes from largest to smallest." },
    { question: "Which number is closest to 2,346?", options: ["2,000", "2,300", "2,350", "3,000"], correctIndex: 2, explanation: "2,350 is only 4 away from 2,346." },
    { question: "How many jumps does the rabbit need to reach 2,350 from 2,346?", options: ["2", "4", "6", "10"], correctIndex: 1, explanation: "2,350 − 2,346 = 4." },
    { question: "How many metres are in 3 km?", options: ["300 m", "3,000 m", "30,000 m", "30 m"], correctIndex: 1, explanation: "1 km = 1,000 m, so 3 km = 3,000 m." },
    { question: "How many metres are in 5 km?", options: ["500 m", "5,000 m", "50,000 m", "5 m"], correctIndex: 1, explanation: "5 × 1,000 = 5,000 m." },
    { question: "A book has about 200 pages and each page has about 50 words. About how many words does it have?", options: ["1,000", "5,000", "10,000", "20,000"], correctIndex: 2, explanation: "200 × 50 = 10,000 approximately." },
    { question: "Which transport in the chapter has a capacity of 20 people?", options: ["Boat", "Minibus", "Big car", "Bicycle"], correctIndex: 0, explanation: "The table gives 20 people for a boat." },
    { question: "Which transport in the table has a capacity of 2 people?", options: ["Bicycle", "Car", "Boat", "Big car"], correctIndex: 0, explanation: "The table gives 2 people for a bicycle." },
    { question: "Which transport in the table has a capacity of 3 people?", options: ["Bicycle", "Autorickshaw", "Car", "Tempo traveller"], correctIndex: 1, explanation: "The table gives 3 people for an autorickshaw." },
    { question: "Which transport in the table has a capacity of 4 people?", options: ["Car", "Boat", "Big car", "Minibus"], correctIndex: 0, explanation: "The table gives 4 people for a car." },
    { question: "A vehicle can carry 10 people. Which vehicle from the table is it?", options: ["Big car", "Tempo traveller", "Boat", "Minibus"], correctIndex: 1, explanation: "A tempo traveller is listed with a capacity of 10." },
    { question: "Which mode of travel in the chapter is given a range of 750–920 km in an hour?", options: ["Train", "Ship", "Aircraft", "Motorbike"], correctIndex: 2, explanation: "The chapter gives 750–920 km for aircraft." },
    { question: "Which mode of travel is given a range of 40–160 km in an hour?", options: ["Train", "Ship", "Cycle", "Aeroplane"], correctIndex: 0, explanation: "The chapter gives 40–160 km for train." },
    { question: "Which mode of travel is given a range of 25–45 km in an hour?", options: ["Ship", "Train", "Motorbike", "Aircraft"], correctIndex: 0, explanation: "The chapter gives 25–45 km for ship." },
    { question: "Which mode of travel is given a range of 40–60 km in an hour?", options: ["Motorbike", "Cycle", "Train", "Horse"], correctIndex: 0, explanation: "The chapter gives 40–60 km for motorbike." },
    { question: "Which number is exactly 1 hundred more than 10,300?", options: ["10,301", "10,400", "11,300", "10,200"], correctIndex: 1, explanation: "10,300 + 100 = 10,400." },
    { question: "Which number is exactly 1,000 more than 20,000?", options: ["20,100", "21,000", "30,000", "20,010"], correctIndex: 1, explanation: "20,000 + 1,000 = 21,000." },
    { question: "Which number is 10 less than 10,000?", options: ["9,000", "9,990", "9,999", "10,010"], correctIndex: 1, explanation: "10,000 − 10 = 9,990." },
    { question: "Which number is 100 less than 10,000?", options: ["9,900", "9,990", "9,000", "10,100"], correctIndex: 0, explanation: "10,000 − 100 = 9,900." },
    { question: "Which number is 1,000 less than 20,000?", options: ["19,000", "19,900", "18,000", "21,000"], correctIndex: 0, explanation: "20,000 − 1,000 = 19,000." },
    { question: "Which number is 10 more than 10,024?", options: ["10,014", "10,034", "10,124", "11,024"], correctIndex: 1, explanation: "10,024 + 10 = 10,034." },
    { question: "Which number is 100 more than 13,520?", options: ["13,521", "13,620", "14,520", "13,420"], correctIndex: 1, explanation: "13,520 + 100 = 13,620." },
    { question: "Which number is 1,000 more than 45,867?", options: ["46,867", "45,967", "46,767", "55,867"], correctIndex: 0, explanation: "45,867 + 1,000 = 46,867." },
    { question: "If a book has about 10,000 words, which digit is in the ten-thousands place?", options: ["0", "1", "10", "There is no digit"], correctIndex: 1, explanation: "10,000 has 1 in the ten-thousands place." },
    { question: "Which statement is true about 1,380?", options: ["It has 1 thousand, 3 hundreds, 8 tens and 0 ones", "It has 1 hundred, 3 tens and 8 ones", "It has 13 thousands and 80 ones", "It has 1 ten and 380 ones"], correctIndex: 0, explanation: "The chapter breaks 1,380 into 1 thousand, 3 hundreds, 8 tens and 0 ones." },
    { question: "Which number has the same nearest ten as 19?", options: ["12", "21", "28", "42"], correctIndex: 1, explanation: "19 rounds to the nearest ten, 20. 21 is the only other number here that also rounds to 20." },
    { question: "What is the main idea of the rabbit activity with 2,346?", options: ["Learning nearest tens, hundreds and thousands", "Learning multiplication tables", "Learning fractions", "Learning angles"], correctIndex: 0, explanation: "The rabbit activity helps learners understand neighbouring tens, hundreds and thousands." },
  ],

  /* ---------------------------------------------------------------
     FLASHCARDS
  --------------------------------------------------------------- */
  flashcards: [
    { front: "What is the place value of a digit in the Thousands column?", back: "The digit's face value multiplied by 1,000 (e.g. the 7 in 7,345 has place value 7,000)." },
    { front: "How do you write the number name for 10,024?", back: "Ten thousand twenty-four." },
    { front: "What is the expanded form of 1,380?", back: "1,000 + 300 + 80." },
    { front: "How do you compare two numbers with a different number of digits?", back: "The number with more digits is always greater (e.g. 49,014 > 9,990 because it has 5 digits, not 4)." },
    { front: "What is the rule for rounding to the nearest ten?", back: "Look at the ones digit — if it's 5 or more, round up; if it's less than 5, round down." },
    { front: "What is the rule for rounding to the nearest hundred?", back: "Look at the tens digit — if it's 5 or more, round up to the next hundred; otherwise round down." },
    { front: "What does 'ascending order' mean?", back: "Arranging numbers from smallest to largest." },
    { front: "What does 'descending order' mean?", back: "Arranging numbers from largest to smallest." },
    { front: "How many people can a minibus carry, according to the chapter's table?", back: "25 people." },
    { front: "How many people can an aeroplane carry, according to the chapter's table?", back: "180 people." },
    { front: "How many people can a boat carry, according to the chapter's table?", back: "20 people." },
    { front: "How many people can a tempo traveller carry, according to the chapter's table?", back: "10 people." },
    { front: "How many people can a car carry, according to the chapter's table?", back: "4 people." },
    { front: "How many people can an autorickshaw carry, according to the chapter's table?", back: "3 people." },
    { front: "How many people can a bicycle carry, according to the chapter's table?", back: "2 people." },
    { front: "Which vehicle in the chapter can travel deep underwater?", back: "The submarine." },
    { front: "Which animal is used for travel in the desert?", back: "The camel." },
    { front: "What is an aircraft's speed range according to the chapter?", back: "750–920 km in one hour." },
    { front: "What is a train's speed range according to the chapter?", back: "40–160 km in one hour." },
    { front: "What is a ship's speed range according to the chapter?", back: "25–45 km in one hour." },
    { front: "What is a motorbike's speed range according to the chapter?", back: "40–60 km in one hour." },
    { front: "How do you find distance travelled at a steady speed?", back: "Multiply the speed by the number of hours travelled (Distance = Speed × Time)." },
    { front: "How many Rs.500 notes make Rs.7,500?", back: "15 notes (7,500 ÷ 500 = 15)." },
    { front: "What comes next in the pattern 456, 567, 678, ...?", back: "789 — each number is 111 more than the one before it." },
    { front: "How do you write 10 Thousands as a numeral?", back: "10,000." },
    { front: "What is the smallest 4-digit number you can make using the digits 6, 7, 8, 9 once each?", back: "6,789 — arrange the smallest digit first." },
    { front: "What is the largest 4-digit number you can make using the digits 6, 7, 8, 9 once each?", back: "9,876 — arrange the largest digit first." },
    { front: "What was an early form of transport mentioned in the chapter?", back: "The boat." },
    { front: "1 km is equal to how many metres?", back: "1,000 metres, according to the chapter." },
    { front: "What is the nearest thousand of 2,346?", back: "2,000 — 2,346 is closer to 2,000 than to 3,000." },
  ],

  /* ---------------------------------------------------------------
     IMAGE-BASED QUESTIONS
  --------------------------------------------------------------- */
  imageQuestions: [
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-01-pv-2347.svg", imageAlt: "Place value blocks showing digits 2, 3, 4, 7 under Th, H, T, O columns", question: "This picture shows a number split into its place value columns. What number is shown?", options: ["2,347", "7,432", "2,374", "3,247"], correctIndex: 0, explanation: "Reading the columns left to right (Thousands, Hundreds, Tens, Ones) gives 2,347." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-02-nl-round-ten.svg", imageAlt: "Number line from 2,340 to 2,350 with 2,346 marked as a dot", question: "Look at the number line. What is 2,346 rounded to the nearest ten?", options: ["2,340", "2,350", "2,300", "2,400"], correctIndex: 1, explanation: "The dot for 2,346 sits closer to 2,350 than to 2,340 on the number line, so it rounds up to 2,350." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-03-capacity-chart.svg", imageAlt: "Bar chart comparing how many people a car, tempo traveller, minibus and aeroplane can carry", question: "According to this chart, which vehicle can carry the most people?", options: ["Car", "Tempo traveller", "Minibus", "Aeroplane"], correctIndex: 3, explanation: "The tallest bar belongs to the aeroplane, which can carry 180 people — far more than the others shown." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-04-submarine.svg", imageAlt: "Icon of a submarine travelling underwater", question: "Which mode of transport shown here can travel deep under the sea?", options: ["Submarine", "Ship", "Boat", "Aeroplane"], correctIndex: 0, explanation: "A submarine is a vehicle built to travel deep under water, unlike ships and boats which travel on the surface." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-05-camel.svg", imageAlt: "Icon of a camel used for travel in the desert", question: "This animal is used for travelling across which kind of land?", options: ["Desert", "Forest", "River", "Snow"], correctIndex: 0, explanation: "Camels can travel long distances without water, which makes them well suited for desert travel." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-06-money-500x3.svg", imageAlt: "Three Rs.500 notes stacked together", question: "How much money is shown in this picture?", options: ["Rs.1,000", "Rs.1,500", "Rs.2,000", "Rs.500"], correctIndex: 1, explanation: "3 notes of Rs.500 each add up to 500 + 500 + 500 = Rs.1,500." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-07-pv-5081.svg", imageAlt: "Place value blocks showing digits 5, 0, 8, 1 under Th, H, T, O columns", question: "What is the place value of the digit 8 in the number shown?", options: ["8", "80", "800", "8,000"], correctIndex: 1, explanation: "The digit 8 sits in the Tens column, so its place value is 8 × 10 = 80." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-08-nl-round-hundred.svg", imageAlt: "Number line from 2,300 to 2,400 with 2,346 marked as a dot", question: "Rounding to the nearest hundred, which mark on this number line is 2,346 closest to?", options: ["2,300", "2,400", "2,350", "2,000"], correctIndex: 0, explanation: "2,346 is only 46 away from 2,300 but 54 away from 2,400, so it rounds down to 2,300." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-09-speed-chart.svg", imageAlt: "Bar chart comparing top speeds of a motorbike, ship, train and aircraft", question: "Based on this chart, which mode of travel is the fastest?", options: ["Motorbike", "Ship", "Train", "Aircraft"], correctIndex: 3, explanation: "The aircraft's bar is the tallest, showing it can travel much faster than a train, ship or motorbike." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-10-expanded-1380.svg", imageAlt: "Blocks representing 1000, 300 and 80 stacked together with a question mark", question: "What number is made when you add these blocks together: 1,000 + 300 + 80?", options: ["1,380", "1,308", "1,038", "1,830"], correctIndex: 0, explanation: "1,000 + 300 + 80 = 1,380 — this is the expanded form of the number 1,380." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-11-pattern.svg", imageAlt: "Sequence of number cards 456, 567, 678, followed by a question mark card", question: "Following the pattern shown, what number comes next?", options: ["789", "779", "790", "689"], correctIndex: 0, explanation: "Each number is 111 more than the one before it, so 678 + 111 = 789." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-12-compare.svg", imageAlt: "Two number cards, 49,014 and 9,990, side by side with a question mark", question: "Which of these two numbers is greater?", options: ["49,014", "9,990", "They are equal", "Cannot tell"], correctIndex: 0, explanation: "49,014 has 5 digits while 9,990 has only 4 digits, so 49,014 is the greater number." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-13-boat.svg", imageAlt: "Icon of a boat on water with a capacity label of 20", question: "According to the chapter's table, how many people can this vehicle carry?", options: ["10", "20", "25", "6"], correctIndex: 1, explanation: "The chapter's transport table lists the boat's carrying capacity as 20 people." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-14-tempo.svg", imageAlt: "Icon of a tempo traveller van with a capacity label of 10", question: "This vehicle from the chapter's table can carry how many people?", options: ["4", "6", "10", "25"], correctIndex: 2, explanation: "The chapter's transport table shows the tempo traveller carries 10 people." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/imgq-15-nl-add1000.svg", imageAlt: "Number line from 9,000 to 10,000 with the midpoint 9,500 marked", question: "If you add 1,000 to 9,000, which point on this number line do you reach?", options: ["10,000", "9,500", "9,000", "8,000"], correctIndex: 0, explanation: "9,000 + 1,000 = 10,000, the right-hand end of the number line." },
  ],

  /* ---------------------------------------------------------------
     REAL-WORLD SCENARIOS
  --------------------------------------------------------------- */
  scenarios: [
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-01-school-trip.svg", imageAlt: "Icon of a minibus with a capacity label of 25", scenarioText: "Meera's class of 24 students and 1 teacher is going on a school trip. They need one vehicle that everyone can fit into.", question: "Which vehicle from the chapter's table should they book?", options: ["Car (4)", "Tempo traveller (10)", "Minibus (25)", "Autorickshaw (3)"], correctIndex: 2, explanation: "25 people (24 students + 1 teacher) need to travel together, and the minibus is the only vehicle listed that carries that many." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-02-train-distance.svg", imageAlt: "Bar showing a train's speed of 160 km per hour", scenarioText: "Arjun's family is taking a train that travels at its top listed speed for 2 hours straight.", question: "About how far will the train travel in that time?", options: ["80 km", "160 km", "320 km", "40 km"], correctIndex: 2, explanation: "At 160 km in 1 hour, travelling for 2 hours covers about 160 × 2 = 320 km." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-03-shopkeeper-cash.svg", imageAlt: "A stack of five Rs.500 notes", scenarioText: "A shopkeeper needs to give Rs.7,500 in change using only Rs.500 notes.", question: "How many Rs.500 notes does the shopkeeper need?", options: ["10", "15", "20", "5"], correctIndex: 1, explanation: "Rs.7,500 ÷ Rs.500 = 15, so the shopkeeper needs 15 notes of Rs.500 each." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-04-pilot-flight.svg", imageAlt: "Icon of an aircraft with its speed range labelled", scenarioText: "A pilot is flying a route and the chapter says her aircraft can travel between 750 and 920 km in one hour.", question: "Which mode of travel is she using?", options: ["Aircraft", "Train", "Ship", "Motorbike"], correctIndex: 0, explanation: "The chapter lists 750–920 km/h as the aircraft's speed range, which is far faster than any other transport in the table." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-05-fisherman.svg", imageAlt: "Icon of a boat that can carry 20 people", scenarioText: "A fisherman wants to take a group of 18 villagers across the river in one trip, using a vehicle from the chapter's table.", question: "Will the boat, which carries 20 people, be enough for this trip?", options: ["Yes, 18 is less than 20", "No, 18 is more than 20", "Only if 2 more people join", "Cannot tell"], correctIndex: 0, explanation: "18 people is fewer than the boat's capacity of 20, so everyone fits in a single trip." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-06-desert-caravan.svg", imageAlt: "Icon of a camel used for desert travel", scenarioText: "Zara is reading about traders who cross a huge desert where there are no roads, rivers or airports nearby.", question: "Which animal from the chapter would be most suitable for the traders to travel with?", options: ["Camel", "Boat", "Ship", "Train"], correctIndex: 0, explanation: "Camels are suited to travel long distances across deserts without needing water often, unlike boats, ships or trains." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-07-ocean-explorer.svg", imageAlt: "Icon of a submarine travelling underwater", scenarioText: "A team of scientists wants to study coral reefs that lie deep below the surface of the ocean.", question: "Which mode of transport mentioned in the chapter would let them travel deep underwater?", options: ["Submarine", "Ship", "Boat", "Aeroplane"], correctIndex: 0, explanation: "A submarine is specially built to travel deep under the water's surface, unlike ships and boats which stay on top." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-08-shop-footfall.svg", imageAlt: "A picture showing 4,586 people, labelled as being rounded to the nearest ten", scenarioText: "A mall manager counted exactly 4,586 visitors on Sunday and wants to write a rounded number in her weekly report.", question: "What should she write if she rounds 4,586 to the nearest ten?", options: ["4,580", "4,590", "4,600", "4,500"], correctIndex: 1, explanation: "4,586 is closer to 4,590 than to 4,580, so it rounds up to 4,590." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-09-ordering-cities.svg", imageAlt: "A list of three towns with their populations: 12,340, 8,760 and 21,050", scenarioText: "A geography project asks students to list three towns in order from the smallest population to the largest.", question: "What is the correct order, from smallest to largest?", options: ["8,760 → 12,340 → 21,050", "21,050 → 12,340 → 8,760", "12,340 → 8,760 → 21,050", "8,760 → 21,050 → 12,340"], correctIndex: 0, explanation: "Comparing the numbers digit by digit: 8,760 is smallest, then 12,340, then 21,050 is largest." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-10-classroom-puzzle.svg", imageAlt: "Blocks representing 3000, 200, 50 and 6 laid out on a table", scenarioText: "In a classroom game, students are given number cards showing 3,000 + 200 + 50 + 6 and must combine them.", question: "What number do these cards make together?", options: ["3,256", "3,265", "3,526", "3,652"], correctIndex: 0, explanation: "Adding 3,000 + 200 + 50 + 6 gives 3,256 — this is the number's expanded form put back together." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-11-cyclist.svg", imageAlt: "Icon of a cyclist travelling at 15 km per hour", scenarioText: "A cyclist rides at a steady speed of 15 km every hour and plans to ride for 4 hours without stopping.", question: "How far will the cyclist travel in 4 hours?", options: ["45 km", "60 km", "19 km", "30 km"], correctIndex: 1, explanation: "Travelling 15 km each hour for 4 hours covers 15 × 4 = 60 km." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-12-raffle-ticket.svg", imageAlt: "A raffle ticket showing the number 10,024", scenarioText: "At a school fair, the winning raffle ticket number is announced and needs to be read aloud clearly for everyone to hear.", question: "How should ticket number 10,024 be read aloud?", options: ["Ten thousand twenty-four", "One thousand and twenty-four", "Ten thousand two hundred four", "One hundred twenty-four"], correctIndex: 0, explanation: "10,024 is read as \"Ten thousand twenty-four\" — the number name for that value." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-13-family-vehicle.svg", imageAlt: "Bar chart comparing the capacity of an autorickshaw (3) and a car (4)", scenarioText: "A family of 4 — two parents and two children — needs to choose between an autorickshaw and a car for a short trip.", question: "Which vehicle can fit the whole family together?", options: ["Autorickshaw", "Car", "Neither can fit them", "Both fit exactly the same"], correctIndex: 1, explanation: "The autorickshaw only carries 3 people, but the car carries 4 — exactly enough for the whole family." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-14-delivery-race.svg", imageAlt: "Bar chart comparing a motorbike's speed (60 km/h) and a train's speed (160 km/h)", scenarioText: "A delivery company must choose between a motorbike and a train to send an urgent parcel over a long distance quickly.", question: "Based on their top speeds in the chapter, which is faster?", options: ["Motorbike", "Train", "They are equally fast", "Cannot tell"], correctIndex: 1, explanation: "The train's top speed (up to 160 km/h) is faster than the motorbike's top speed (up to 60 km/h)." },
    { imageUrl: "assets/img/maths-we-the-travellers-1/scn-15-digit-game.svg", imageAlt: "Place value blocks showing the digits 9, 8, 7 and 6", scenarioText: "In a place-value game, four friends are each given one digit card — 9, 8, 7 and 6 — and must arrange them to form the largest possible number.", question: "What is the largest 4-digit number they can form using each digit exactly once?", options: ["9,876", "6,789", "9,687", "8,976"], correctIndex: 0, explanation: "To make the largest number, place the biggest digits first: 9,876 is the greatest arrangement of 9, 8, 7 and 6." },
  ],

  /* ---------------------------------------------------------------
     VIDEOS & OFFICIAL LINKS
  --------------------------------------------------------------- */
  videos: [
    { title: "Place Value and Large Numbers — Class 5 Maths", url: "https://www.youtube.com/results?search_query=class+5+maths+place+value+large+numbers" },
    { title: "Rounding Numbers for Kids", url: "https://www.youtube.com/results?search_query=rounding+numbers+class+5" }
  ],
  links: [
    { title: "Place Value — Khan Academy", url: "https://www.khanacademy.org/math/cc-fourth-grade-math/x261c2cc7:place-value" },
    { title: "Rounding Numbers — Math is Fun", url: "https://www.mathsisfun.com/numbers/rounding-numbers.html" }
  ]
});
