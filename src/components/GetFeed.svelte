<script>
    let response;
    
    const apiURL = "https://localhost:5001/api/feeds" + {id};
    
    const onSubmit = () => {
    const options = {
      method: 'GET',
      headers: {
        },
    }
        response = fetch(apiURL, options);
    }
    
    </script>
    
   <h1>{response}</h1>
    