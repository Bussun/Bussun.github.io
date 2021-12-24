//c++ tab
const CppChangelogBtn = document.querySelector('#cpp-changelogBtn');
const CppChangelogTab = document.querySelector('#cpp-changelog-tab');
const CppChangelogContainer = document.querySelector('.cpp-changelog');

//C# tab
const CSharpChangelogBtn = document.querySelector('#csharp-changelogBtn');
const CSharpChangelogTab = document.querySelector('#csharp-changelog-tab');
const CSharpChangelogContainer = document.querySelector('.csharp-changelog');

CSharpChangelogBtn.addEventListener('click', () => {
    CppChangelogTab.style.display = "none";
    CSharpChangelogBtn.classList.add("selected");
    CppChangelogBtn.classList.remove("selected");
    CSharpChangelogTab.style.display = "flex";
});

CppChangelogBtn.addEventListener('click', () => {
    CSharpChangelogTab.style.display = "none";
    CSharpChangelogBtn.classList.remove("selected");
    CppChangelogBtn.classList.add("selected");
    CppChangelogTab.style.display = "flex";
});

/* Changelog data */ 
//JSON file loading is a freaking nightmare or I didn't look at the right place so I'm putting it here
const changelog = `{
    "CSharp" : [
        {
            "version": "0.4",
            "comment": "Initial beta release",
            "beta": true,
            "added": [
                "Opening messages from ARC",
                "Escape sequences support",
                "Message properties editing"
            ],
            "deleted": ["Nothing"],
            "changed": ["Nothing"]
        },
        {
            "version": "0.4.5",
            "comment": "",
            "beta": true,
            "added": [
                "Update checker"
            ],
            "deleted": ["Nothing"],
            "changed": [
                "[TEMPORARY] Improved FLW1 and FLI1 section parsing",
                "Refactored some code to reduce program size and improve stability"
            ]
        },
        {
            "version": "0.6",
            "comment": "",
            "beta": true,
            "added": [
                "New message entries supported"
            ],
            "deleted": ["Nothing"],
            "changed": [
                "Code refactoring"
            ]
        },
        {
            "version": "0.7",
            "comment": "",
            "beta": true,
            "added": ["Nothing"],
            "deleted": ["Nothing"],
            "changed": [
                "UI updates"
            ]
        },
        {
            "version": "0.7.1",
            "comment": "",
            "beta": true,
            "added": [
                "ARC file backup in case of corruption"
            ],
            "deleted": ["Nothing"],
            "changed": ["Nothing"]
        },
        {
            "version": "1.0",
            "comment": "First release",
            "beta": false,
            "added": [
                "Started working on flows"
            ],
            "deleted": ["Nothing"],
            "changed": [
                "Code refactor",
                "New updater"
            ]
        },
        {
            "version": "1.1",
            "comment": "Unreleased beta",
            "beta": true,
            "added": [
                "[WIP] Little endian support"
            ],
            "deleted": ["Nothing"],
            "changed": ["To be updated soon"]
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
    //Version
    const versionTag = document.createElement('p');
    versionTag.innerText = obj.version;
    versionDiv.appendChild(versionTag);

    //Comment
    const commentTag = document.createElement('p');
    commentTag.innerText = obj.comment;
    versionDiv.appendChild(commentTag);

    //Code executed depending on beta status
    if (obj.beta) { versionDiv.classList.add("beta"); }

    //Added
    obj.added.forEach(addedStuff => {
        const addedStuffP = document.createElement('p');
        addedStuffP.innerText = addedStuff;
        versionDiv.appendChild(addedStuffP);
    });

    //Deleted
    obj.deleted.forEach(deletedStuff => {
        const deletedStuffP = document.createElement('p');
        deletedStuffP.innerText = deletedStuff;
        versionDiv.appendChild(deletedStuffP);
    });

    //Changed
    obj.changed.forEach(changedStuff => {
        const changedStuffP = document.createElement('p');
        changedStuffP.innerText = changedStuff;
        versionDiv.appendChild(changedStuffP);
    });

    CSharpChangelogContainer.appendChild(versionDiv);  
});
