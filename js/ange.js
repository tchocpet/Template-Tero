// demo dataset
function getCurrentDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

const jobs = [
  {
    title: "Büroreinigung",
    location: "Düsseldorf",
    date: getCurrentDate(),
    type: "Mini-Job",
    url: "job1.html",
  },
  {
    title: "Fensterreinigung",
    location: "Düsseldorf",
    date: getCurrentDate(),
    type: "Mini-Job",
    url: "job2f.html",
  },
  {
    title: "Gartenhelfer",
    location: "Düsseldorf",
    date: getCurrentDate(),
    type: "Mini-Job",
    url: "job3g.html",
  },
  {
    title: "Object_Manager",
    location: "Düsseldorf",
    date: getCurrentDate(),
    type: "Mini-Job",
    url: "job4o.html",
  },
  {
    title: "Treppenhausreinigung",
    location: "Düsseldorf",
    date: getCurrentDate(),
    type: "Mini-job",
    url: "job5t.html",
  },
];

function filterJobs() {
  const titleInput = document.getElementById("jobTitle").value.toLowerCase();
  const locationInput = document.getElementById("location").value.toLowerCase();

  let filteredJobs;

  // Check if both fields are empty
  if (titleInput === "" && locationInput === "") {
    filteredJobs = jobs; // Display all jobs
  } else {
    filteredJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(titleInput) &&
        job.location.toLowerCase().includes(locationInput)
    );
  }
  displayJobs(filteredJobs);
}

function displayJobs(jobs) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = ""; // Vorherige Ergebnisse löschen

  if (jobs.length === 0) {
    resultsContainer.innerHTML = '<p class="no-jobs">No jobs found</p>';
  } else {
    jobs.forEach((job) => {
      // Hauptcontainer für das Job-Element
      const jobElement = document.createElement("div");
      jobElement.className = "col-md-4"; // Setze eine Bootstrap-Klasse für die Spalte

      jobElement.innerHTML = `
        <div class="job-card">
          <h3 class="job-title">${job.title}</h3>
          <p><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
          <p><i class="fa-solid fa-calendar-days"></i> ${job.date}</p>
          <p><i class="fa-solid fa-suitcase"></i> ${job.type}</p>
          <a href="${job.url}" class="btn btn-apply">Job ansehen</a>
        </div>
      `;

      resultsContainer.appendChild(jobElement); // Job-Element zum Container hinzufügen
    });
  }
}
// loading full list initially
window.onload = () => displayJobs(jobs);

document.getElementById("applyButton").addEventListener("click", function () {
  // Weiterleitung zur Bewerbungsseite
  window.location.href = "bewerbung.html";
});
