<?php
require_once __DIR__ . '/vendor/autoload.php'; // Path to your vendor autoload

// Initialize the Google Sheets client
$client = new Google_Client();
$client->setApplicationName('Newsletter');
$client->setScopes([Google_Service_Sheets::SPREADSHEETS]);
$client->setAccessType('offline'); // Change to 'online' if your server can make HTTP requests

// Replace 'path/to/your/credentials.json' with the path to your credentials file
$client->setAuthConfig('extras/credentials.json');

$service = new Google_Service_Sheets($client);

// Spreadsheet ID and range
$spreadsheetId = '1EV6XbVEbPA-SjTPfV4ATZ9gWjHNVH-t5b8HBrTvmRks';
$range = 'Sheet1'; // The name of your sheet

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Prepare the data for insertion
    $values = [
        [$name, $email]
    ];

    // Insert the data into the spreadsheet
    $body = new Google_Service_Sheets_ValueRange([
        'values' => $values
    ]);

    $params = [
        'valueInputOption' => 'RAW'
    ];

    // Append the data to the spreadsheet
    $result = $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);

    // Check if the data was successfully inserted
    if ($result->getUpdates()->getUpdatedCells() > 0) {
        echo 'Thank you for subscribing!';
    } else {
        echo 'An error occurred. Please try again later.';
    }
}
?>
