import { useState } from 'react';

function CheckTicket({username, password}) {
    const [barcode, setBarcode] = useState('');
    const [ticketInfo, setTicketInfo] = useState(null);

    const getTicketInfo = () => {
        fetch(`/tickets/barcode/${barcode}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                throw new Error("Error in fetch:" + response.status);
            }
        })
        .then(data => setTicketInfo(data))
        .catch(err => console.log(err))
    };

    // 
    const checkTicket = () => {
        fetch(`/tickets/barcode/${barcode}/checked`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            },
            body: JSON.stringify({ isChecked: true }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error when checking ticket:" + response.statusText);
            }
            else {
                return response.json();
            }
        })
        .then(data => setTicketInfo(data))
        .catch(err => console.log(err))
    };

    return (
        <>
            <input value={barcode} onChange={e => setBarcode(e.target.value)} />
            <button onClick={getTicketInfo}>Get Ticket Info</button>
            <button onClick={checkTicket}>Check Ticket</button>
            {ticketInfo && <div>{JSON.stringify(ticketInfo)}</div>}
        </>
    );
}

export default CheckTicket;