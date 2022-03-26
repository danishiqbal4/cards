import React from "react";

function App() {
    const [data, setData] = React.useState(null);
    const logo = 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png';
    //const api = 'https://hacker-news.firebaseio.com/v0/item/8863.json';
    //const api = 'http://localhost:3001/api';

    React.useEffect(() => {
        fetch('/api')
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setData(data.message);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{!data ? "Loading..." : data}</p>
            </header>
        </div>
    );
}

export default App;