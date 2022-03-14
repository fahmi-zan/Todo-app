import React from 'react';

export default function Footer() {
    return <>
        <div className="container position-fixed-bottom">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    {/* <li className="nav-item"><p className="nav-link px-2 text-muted">Home</p></li>
                    <li className="nav-item"><p className="nav-link px-2 text-muted">Features</p></li>
                    <li className="nav-item"><p className="nav-link px-2 text-muted">Pricing</p></li>
                    <li className="nav-item"><p className="nav-link px-2 text-muted">FAQs</p></li>
                    <li className="nav-item"><p className="nav-link px-2 text-muted">About</p></li> */}
                </ul>
                <p className="text-center text-muted">&copy; 2022 Desain by Mee</p>
            </footer>
        </div>
    </>;
}
