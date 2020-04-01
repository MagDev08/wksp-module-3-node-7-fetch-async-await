
const handleSubmit = (event) => {
    event.preventDefault();
    const type = document.getElementById('type').value;
    const data = { type: JSON.stringify(type) };
    console.log(type);
    
    fetch('/jokes', {
        method: 'POST',
        body: type, 
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(data => {
                let joke = document.createElement("div");
                joke.innerText = data.data;
                document.getElementById('main').appendChild(joke);
            })
    }
