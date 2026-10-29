(() => {
  const now = new Date();
  let year = now.getFullYear();
  while ((year - 2025) % 4 !== 0 || now >= new Date(year, 0, 22)) year += 1;

  const event = new Date(year, 0, 21);
  const msPerDay = 86_400_000;
  const totalDays = Math.max(0, Math.ceil((event - now) / msPerDay));
  const years = Math.floor(totalDays / 365.2425);
  const days = Math.max(0, Math.round(totalDays - years * 365.2425));
  document.querySelector('#next-date').dateTime = `${year}-01-21`;
  document.querySelector('#next-date .year').textContent = year;
  document.querySelector('#cycle-year').textContent = year;
  document.querySelector('#count-years').textContent = String(years).padStart(2, '0');
  document.querySelector('#count-days').textContent = String(days).padStart(3, '0');
  document.querySelector('.closing p').textContent = `January 21, ${year}`;
})();
