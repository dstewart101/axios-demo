function performGetRequest() {
    var resultElement = document.getElementById('getResult');
    resultElement.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(function(response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function(error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

function performGetRequestWithParameter() {
    var resultElement = document.getElementById('getResultWithParameter');
    var todoId = document.getElementById('toDoId').value;
    resultElement.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {
                id: todoId
            }
        })
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}


document.getElementById('toDoInputForm').addEventListener('submit', performPostRequest);
function performPostRequest(e) {
    var resultElement = document.getElementById('postResult');
    var todoTitle = document.getElementById('toDoTitle').value;
    resultElement.innerHTML = '';

    axios.post('https://jsonplaceholder.typicode.com/todos', {
            params: {
                userId: '1', 
                title: todoTitle,
                completed: false
            }
        })
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        })
        e.preventDefault();
}

function clearOutput() {
    var resultElement = document.getElementById('getResult');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('getResultWithParameter');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = '';
    document.getElementById('toDoTitle').value = '';
}

function generateSuccessHTMLOutput(response) {
    return  '<h4>Result:</h4>' +
            '<h5>Status:</h5>' +
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
}

function generateErrorHTMLOutput(error) {
    return '<h4>Result:</h4>' +
            '<h5>Message:</h5>' +
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5>' +
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}