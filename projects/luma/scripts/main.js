const CSharpChangelogContainer = document.querySelector('.csharp-changelog');

//Changelog
fetch('./changelog.json').then(response => response.json())
.then(data => fillChangelog(data));

function fillChangelog(data) {
    csChglog = data.CSharp;
    
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
        else { versionDiv.classList.add("release"); }
    
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
    
        CSharpChangelogContainer.insertBefore(versionDiv, CSharpChangelogContainer.firstChild);  
    });
}
