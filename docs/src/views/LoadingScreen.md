# Description

The view that handles requesting a scan and showing its results if the backend found any issues.

# Behaviour

The view renders a loading icon, sending a request to API to scan the URL passed through a GET parameter.
If backend responds with "safe" - it redirects to the URL.
If backend responds with "unsafe" - it shows found issues.

# Usage

Make sure that the HTML page that has this component mounted gets requested with a `data` GET parameter (as in `(...)/loading.html?url=example.com`); that's how you pass the URL of the resource to be scanned.