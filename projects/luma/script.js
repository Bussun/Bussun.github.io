const cppChangelogBtn = document.querySelector('#cpp-changelogBtn');
const cppChangelogTab = document.querySelector('#cpp-changelog');
const csharpChangelogBtn = document.querySelector('#csharp-changelogBtn');
const csharpChangelogTab = document.querySelector('#csharp-changelog');

csharpChangelogBtn.addEventListener('click', () => {
    cppChangelogTab.style.display = "none";
    csharpChangelogTab.style.display = "initial";
});

cppChangelogBtn.addEventListener('click', () => {
    csharpChangelogTab.style.display = "none";
    cppChangelogTab.style.display = "initial";
});