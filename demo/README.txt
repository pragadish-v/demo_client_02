SmartBill Pro — DEMO (frontend only)
====================================

This folder is a standalone preview of the SmartBill Pro interface.
It has NO backend, NO database and NO installation step.

HOW TO OPEN
-----------
Double-click  START-DEMO.bat
Then view the demo at  http://localhost:5050

Why not just open index.html?
Browsers block the app's JavaScript when a page is opened directly from disk,
so the demo has to be served over http. START-DEMO.bat does that for you.
(Requires Node.js 18+ installed. Nothing else.)

LOGIN
-----
Username: admin
Password: admin123

ABOUT THE DATA
--------------
Everything in this demo is sample data that lives in your browser
(localStorage). You can create bills, job cards, products and customers
freely — they persist on this computer only and never leave your browser.

Clearing browser data for this site resets the demo to its sample state.

WHAT IS REAL
------------
The screens, forms, print/PDF receipts, reports and charts are the real
application interface. Only the storage layer is replaced by the browser,
so the demo cannot be used as an actual shop's live billing system.

For the real installation (with the server and the permanent database),
contact the developer.
