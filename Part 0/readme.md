<!-- Excercise 0.4 -->

```mermaid

sequenceDiagram

    participant Browser
    participant Server

    %% Getting HTML structure from the server. 
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server ->> Browser: code 200 - OK

    %% Getting CSS styling for HTML file. 
    Server-->>Browser: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server ->> Browser: code 200 - OK

    %% Getting JS file from the server. 

    Server-->>Browser: GET GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server ->> Browser: code 200 - OK

    
