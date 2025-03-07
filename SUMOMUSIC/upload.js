document.addEventListener("DOMContentLoaded", () => {
    const uploadButton = document.getElementById("uploadButton");
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");

    
    uploadButton.addEventListener("click", () => {
        fileInput.click();
    });

    
    fileInput.addEventListener("change", () => {
        fileList.innerHTML = ""; 
        const files = fileInput.files;
        
        
        for (let file of files) {
            const fileItem = document.createElement("p");
            fileItem.textContent =  `${file.name}`;
            fileList.appendChild(fileItem);
        }
    });
});