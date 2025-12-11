function open_github_prof(profile_name){
    window.open(`https://www.github.com/${profile_name}/`, "_blank");
}

function downloadResume(reference_site) {
    if (reference_site !== "NONE") {
        const url = `${reference_site}`;
        const a = document.createElement('a');
        a.href = url;
        a.download = "resume.docx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        alert("No definitive Resume uploaded yet.");
    }
}