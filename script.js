const form = document.querySelector(".get-location");
const cityH = document.getElementById("city");
const countryH = document.getElementById("country");
const tempH = document.getElementById("temp");
const conH = document.getElementById("condition");

async function getData(location) {
  try {
    const url = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=2a3a98306e054d7191d173642231505&q=${location}`,
      { mode: "cors" }
    );
    const data = await url.json();
    return {
      location: data.location.name,
      country: data.location.country,
      tempC: data.current.temp_c,
      tempF: data.current.temp_f,
      condition: data.current.condition.text,
      isDay: data.current.is_day,
    };
  } catch (error) {
    console.log(error);
  }
}
form.addEventListener("submit", (e) => {
  const locationInput = document.getElementById("location");
  e.preventDefault();
  console.log(locationInput.value);
  getData(locationInput.value).then((d) => {
    console.log(d);
    cityH.textContent = d.location;
    countryH.textContent = d.country;
    tempH.textContent = `${d.tempC}C ${d.tempF}F`;
    conH.textContent = d.condition;
  });
});
