import React from "react";


const Resume = () => {
    const onButtonClick = () => {
        fetch('resume.pdf').then(response =>{
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }
}

export default Resume;