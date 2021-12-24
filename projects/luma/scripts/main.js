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

/* Changelog data */ 
//JSON file loading is a freaking nightmare or I didn't look at the right place so I'm putting it here
const changelog = `{
    "CSharp" : [
        {
            "version": "0.4",
            "comment": "Initial beta release",
            "beta": true,
            "added": {
                "1": "Opening messages from ARC",
                "2": "Escape sequences support",
                "3": "Message properties editing"
            },
            "deleted": "Nothing",
            "changed": "Nothing"
        },
        {
            "version": "0.4.5",
            "comment": "",
            "beta": true,
            "added": {
                "1": "Update checker"
            },
            "deleted": "Nothing",
            "changed": {
                "1": "[TEMPORARY] Improved FLW1 and FLI1 section parsing",
                "2": "Refactored some code to reduce program size and improve stability"
            }
        },
        {
            "version": "0.6",
            "comment": "",
            "beta": true,
            "added": {
                "1": "New message entries supported"
            },
            "deleted": "Nothing",
            "changed": {
                "1": "Code refactoring"
            }
        },
        {
            "version": "0.7",
            "comment": "",
            "beta": true,
            "added": "Nothing",
            "deleted": "Nothing",
            "changed": {
                "1": "UI updates"
            }
        },
        {
            "version": "0.7.1",
            "comment": "",
            "beta": true,
            "added": {
                "1": "ARC file backup in case of corruption"
            },
            "deleted": "Nothing",
            "changed": "Nothing"
        },
        {
            "version": "1.0",
            "comment": "First release",
            "beta": false,
            "added": {
                "1": "Started working on flows"
            },
            "deleted": "Nothing",
            "changed": {
                "1": "Code refactor",
                "2": "New updater"
            }
        }
        
    ],
    "CPP" : {
        "verNo": "0.0.0",
        "comment": "C++ rewrite started, more news coming later.",
        "added": "Nothing",
        "deleted": "Nothing",
        "changed": "Nothing"
    }
}`

let parsedThing = JSON.parse(changelog);
csChglog = parsedThing.CSharp;

csChglog.forEach(obj => {
    const versionDiv = document.createElement('div');
    versionDiv.classList.add("version");
    const versionTag = document.createElement('p');
    versionTag.innerText = obj.version;
    versionDiv.appendChild(versionTag);
    csharpChangelogTab.appendChild(versionDiv);  
});
