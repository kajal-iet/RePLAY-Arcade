export const calendarDocs = [
  {
    title: "Problem Overview",
    content: `
The Calendar module generates a formatted monthly calendar based on a given year and month. It computes correct day alignment, accounts for leap years, and structures output into a readable grid.

Let:
Y = Year
M = Month (1–12)
D = Number of days in month
W = Weekday index of the first day (0–6)

The goal is to determine:
1. How many days exist in the given month.
2. On which weekday the month begins.
3. How to arrange days in a 7-column weekly grid.

This module demonstrates date arithmetic, modular logic, leap year handling, and structured grid rendering.
`
  },

  {
    title: "Leap Year Determination",
    content: `
Leap year rules:

A year is a leap year if:
- It is divisible by 4 AND
- Not divisible by 100 UNLESS also divisible by 400.

Mathematically:

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    leap_year = True

Examples:
2000 → Leap Year
1900 → Not Leap Year
2024 → Leap Year

Leap years affect February:
- Normal year → 28 days
- Leap year → 29 days
`
  },

  {
    title: "Days in Month Calculation",
    content: `
Number of days per month:

January → 31
February → 28 or 29 (leap dependent)
March → 31
April → 30
May → 31
June → 30
July → 31
August → 31
September → 30
October → 31
November → 30
December → 31

Implementation:

def get_days_in_month(year, month):
    if month == 2:
        if is_leap_year(year):
            return 29
        return 28
    elif month in [4, 6, 9, 11]:
        return 30
    else:
        return 31

Time Complexity:
O(1)
`
  },

  {
    title: "First Weekday Calculation",
    content: `
To properly align the calendar, we must determine which weekday the month starts on.

Possible approaches:
1. Python datetime library
2. Zeller’s Congruence formula
3. Day-offset accumulation method

Example using datetime:

import datetime
first_day = datetime.date(year, month, 1)
weekday_index = first_day.weekday()

weekday_index:
0 → Monday
6 → Sunday

This value determines how many empty cells precede day 1 in the grid.
`
  },

  {
    title: "Calendar Grid Construction Algorithm",
    content: `
The calendar is structured as a 7-column grid (one column per weekday).

Algorithm:
1. Determine first weekday index.
2. Insert empty placeholders for days before the 1st.
3. Fill in day numbers sequentially.
4. Wrap to next row every 7 columns.

Example:

weeks = []
week = []

# Add initial padding
for _ in range(first_weekday):
    week.append(" ")

for day in range(1, total_days + 1):
    week.append(day)

    if len(week) == 7:
        weeks.append(week)
        week = []

if week:
    while len(week) < 7:
        week.append(" ")
    weeks.append(week)

Time Complexity:
O(D) where D = number of days in month
`
  },

  {
    title: "API Design & Data Flow",
    content: `
Endpoint:
POST /calendar/generate

Input:
{
  "year": 2026,
  "month": 2
}

Output:
{
  "year": 2026,
  "month": 2,
  "weeks": [
    [" ", " ", 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    ...
  ]
}

Backend Pipeline:

Input (Year, Month)
     ↓
Leap Year Check
     ↓
Days in Month Calculation
     ↓
First Weekday Detection
     ↓
Grid Construction
     ↓
JSON Response

Frontend renders returned grid visually.
`
  },

  {
    title: "Algorithm Complexity & Educational Insights",
    content: `
Complexity:
Leap year check → O(1)
Days calculation → O(1)
Grid build → O(D)

Overall: O(D), where D ≤ 31

Educational Concepts Demonstrated:
- Conditional logic
- Modular arithmetic
- Grid-based layout modeling
- Date system reasoning
- Leap year edge case handling

This module shows how real-world systems (calendars) can be modeled using simple arithmetic and structured iteration.
`
  }
];
