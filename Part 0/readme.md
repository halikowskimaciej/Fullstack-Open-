<!-- Excercise 0.4 -->

%% 0.4

```mermaid

sequenceDiagram

    participant Browser
    participant Server

    %% Getting HTML structure from the server. 
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server ->> Browser: code 200 - OK

    %% Getting CSS. 
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server ->> Browser: code 200 - OK

    %% Getting main.js. 

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server ->> Browser: code 200 - OK

    %% Getting data.json. 

    Browser->> Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server ->> Browser: code 200 - OK

    %% User enters new note, clicks "Save". 

    Browser->> Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Server ->> Browser: code 302 - Found. 

<!-- Excercise 0.5 -->

%% 0.5

```mermaid

sequenceDiagram

    participant Browser
    participant Server

    %% Getting HTML structure from the server. 
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server ->> Browser: code 200 - OK

    %% Getting CSS styling for HTML file. 
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server ->> Browser: code 200 - OK

    %% Getting JS SPA file from the server. 

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server ->> Browser: code 200 - OK

    %% Getting JSON data from the server. 

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server ->> Browser: code 200 - OK


<!-- Excercise 0.6 -->

%% 0.6

```mermaid

sequenceDiagram

    participant Browser
    participant Server

    %% Getting HTML structure from the server. 
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server ->> Browser: code 200 - OK

    %% Getting CSS styling for HTML file. 
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server ->> Browser: code 200 - OK

    %% Getting JS SPA file from the server. 

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server ->> Browser: code 200 - OK

    %% Getting JSON data from the server. 

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server ->> Browser: code 200 - OK

    %% User enters new note, clicks "Save". 

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Server ->> Browser: code 201 - Created





