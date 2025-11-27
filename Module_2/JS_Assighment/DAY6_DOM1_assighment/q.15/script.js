function addTask() {
            const input = document.getElementById("task");
            const taskText = input.value

            if (taskText === "") {
                alert("Please enter a task!");
                return;
            }

            
            const li = document.createElement("li");

        
            const span = document.createElement("span");
            span.textContent = taskText;

            
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "Complete";
            completeBtn.onclick = function () {
                span.classList.toggle("completed");
            };

    
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = function () {
                li.remove();
            };

        
            li.appendChild(span);
            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);

            document.getElementById("taskList").appendChild(li)

            input.value = "";
        }